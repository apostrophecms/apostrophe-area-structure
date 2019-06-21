module.exports = {
  improve: 'apostrophe-pages',
  afterConstruct: function(self) {
    self.pushNewAssets();
  },
  beforeConstruct: function(self, options) {
  },
  construct: function(self, options) {
    self.pushNewAssets = function() {
      self.pushAsset('script', 'user', { when: 'user' });
    }

    options.contextMenu.push({
      action: 'widget-tree',
      label: 'See Widget Tree'
    })
  }
};