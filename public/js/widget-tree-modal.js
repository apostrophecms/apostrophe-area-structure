apos.define('widget-tree-modal', {
  extend: 'apostrophe-modal',
  source: 'widget-tree-modal',

  construct: function(self, options) {
    self.beforeShow = function(callback) {
      self.$el.find('[data-apos-widget-tree-delete]').on('click', function() {
        if (!confirm("Are you sure you want to delete this widget? You can undo with Versions")) {
          return;
        }
        var $this = $(this);
        self.api('widget-tree-delete', {
          widgetId: $this.attr('data-apos-widget-id'),
          docId: $this.attr('data-apos-doc-id'),
          dotPath: $this.attr('data-apos-widget-dot-path')
        }, function(response) {
          if (response.status === 'okay') {
            apos.notify('Widget deleted');
            if ($this.parent().siblings().length === 0) {
              $this.parent().parent().fadeOut();
            } else {
              $this.parent().fadeOut();
            }
          } else {
            apos.notify('Something went wrong', { type: 'error' });
            console.log(response.error);
          }
        })
      })
      return setImmediate(callback);
    }
  }
});

