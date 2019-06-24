apos.define('apostrophe-pages', {
  
  afterConstruct: function(self) {
    self.addWidgetTreeLink();
  },

  construct: function(self, options) {
    self.addWidgetTreeLink = function() {
      $('body').on('click', '[data-apos-area-structure]', function() {
        return apos.modules['apostrophe-area-structure'].open(options);
      });
    };
  }
});
