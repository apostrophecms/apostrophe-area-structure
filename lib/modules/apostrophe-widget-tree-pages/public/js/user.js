apos.define('apostrophe-pages', {
  
  afterConstruct: function(self) {
    self.addWidgetTreeLink();
  },

  construct: function(self, options) {
    self.addWidgetTreeLink = function() {
      $('body').on('click', '[data-apos-widget-tree]', function() {
        return apos.modules['apostrophe-widget-tree'].open(options);
      });
    };
  }
});
