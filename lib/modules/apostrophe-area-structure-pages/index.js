module.exports = {
  improve: 'apostrophe-pages',
  afterConstruct: function(self) {
    self.pushNewAssets();
  },

  construct: function(self, options) {
    self.pushNewAssets = function() {
      self.pushAsset('script', 'user', { when: 'user' });
    }

    options.contextMenu.push({
      action: 'area-structure',
      label: 'Page Area Structure'
    })
  }
};