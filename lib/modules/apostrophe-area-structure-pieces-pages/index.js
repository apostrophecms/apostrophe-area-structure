module.exports = {
  improve: 'apostrophe-pieces-pages',

  construct: function(self, options) {
    self.contextMenu.push({
      action: 'area-structure',
      label: 'Page Area Structure'
    })
  }
};