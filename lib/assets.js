module.exports = function (self, options) {
  self.pushAssets = function() {
    self.pushAsset('stylesheet', 'module', { when: 'user' });
    self.pushAsset('script', 'widget-tree-modal', { when: 'user' });
    self.pushAsset('script', 'user', { when: 'user' });
  }
};