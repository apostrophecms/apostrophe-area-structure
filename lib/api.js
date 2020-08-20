var axios = require('axios');
var cheerio = require('cheerio');
var _ = require('lodash');

module.exports = function (self, options) {
  self.delete = async function(widget) {
    try {
      var tempPath = widget.dotPath.split('.');
      tempPath.pop();
      tempPath = tempPath.join('.');
      var criteria = { _id: widget.docId };
      await self.apos.docs.db.update(criteria, {
        $pull: {
          [tempPath]: {
            _id: widget.widgetId
          }
        },
        $set: {
          workflowModified: true
        }
      });
      return { status: 'okay' }

    } catch (error) {
      console.log(error);
      return { status: 'error', error: error }
    }
  }

  self.getTree = async function(options) {
    try {
      var tree = [];
      if (options.type === 'document') {
        var body = options.document
      } else {
        var page = await axios.get(options.url);
        var body = page.data;
      }
      
      var $ = cheerio.load(body);
      var $body = $('body');
      var $areas = findSafe($body, '[data-apos-area]', '[data-apos-area]');
      var docIds = [];
      var req = self.apos.tasks.getReq();

      $areas.each(function() {
        tree.push(walkArea($(this)));
      });

      docIds = _.union(docIds);

      var docs = await self.apos.docs.db.findWithProjection({ _id : { $in : docIds } }, { title: 1, slug: 1 }).toArray();

      docs = _.reduce(docs, function(result, value, key) {
        result[value._id] = value
        return result;
      }, {});

      function findSafe($, selector, ignore) {
        return $.find(selector).not($.find(ignore).find(selector));
      }

      function walkArea($area) {
        // watch out for broken area markup
        if ($area.attr('data-doc-id') && $area.attr('data-dot-path')) {
          var area = {};
          area.name = $area.attr('data-doc-id');
          area.areaName = getAreaName($area.attr('data-dot-path'));
          docIds.push(area.name);
          if (findSafe($area, '[data-apos-widget-wrapper]', '[data-apos-widget-wrapper]').length > 0) {
            area.children = [];
            findSafe($area, '[data-apos-widget-wrapper]', '[data-apos-widget-wrapper]').each(function() {
              area.children.push(walkWidget($(this)))
            }) 
          }
          return area;
        } else {
          // Area is missing some attributes, this can happen
          // when edit: false is passed, in which case it is not
          // interesting for us anyway
        }
      }

      function getAreaName(dotPath) {
        var segments = dotPath.split('.');
        return segments[segments.length - 1];
      }

      function walkWidget($widget) {
        var widget = {};
        widget.name = $widget.attr('data-apos-widget-wrapper');
        widget.id = $widget.find('[data-apos-widget-id]').attr('data-apos-widget-id');
        widget.data = JSON.parse($widget.find('[data-apos-widget-id]').attr('data'));
        if (findSafe($widget, '[data-apos-area][data-apos-area-edit]', '[data-apos-area]').length > 0) {
          widget.children = [];
          findSafe($widget, '[data-apos-area][data-apos-area-edit]', '[data-apos-area]').each(function() {
            widget.children.push(walkArea($(this)));
          });
        }
        return widget;
      }

      return { 
        tree: tree,
        docs: docs
      };

    } catch (error) {
      console.log(error)
    }
  }
}