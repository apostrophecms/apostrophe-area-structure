module.exports = {
  improve: 'apostrophe-pieces-pages',
  // afterConstruct: function(self) {
  //   self.pushAsset('script', 'user', { when: 'user' });
  // },
  beforeConstruct: function(self, options) {
  },
  construct: function(self, options) {
    self.contextMenu.push({
      action: 'widget-tree',
      label: 'See Widget Tree'
    })
  }
};