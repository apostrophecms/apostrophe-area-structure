apos.define('apostrophe-area-structure', {
  extend: 'apostrophe-context',
  construct: function(self, options) {
    self.open = function(options) {
      options.action = self.action;
      options.body = _.cloneDeep(options);
      options.body.href = window.location.href;
      options.body.document = new XMLSerializer().serializeToString(document)
      return apos.create('area-structure-modal', options);
    }
  }
});
