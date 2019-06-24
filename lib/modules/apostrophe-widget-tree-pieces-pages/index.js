module.exports = {
  improve: 'apostrophe-pieces-pages',
  beforeConstruct: function(self, options) {
  },
  construct: function(self, options) {
    self.contextMenu.push({
      action: 'widget-tree',
      label: 'See Widget Tree'
    })
  }
};