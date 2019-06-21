module.exports = {
  moogBundle: {
    directory: 'lib/modules',
    modules: [
      'apostrophe-widget-tree-pages',
      'apostrophe-widget-tree-pieces-pages'
    ]
  },

  extend: 'apostrophe-module',
  name: 'apostrophe-widget-tree',
  alias: 'widgetTree',

  afterConstruct: function(self) {
    self.pushAssets();
    self.addRoutes();
    self.pushCreateSingleton();
  },
  beforeConstruct: function(self, options) {},
  construct: function(self, options) {
    require('./lib/routes.js')(self, options);
    require('./lib/api.js')(self, options);

    self.pushAssets = function() {
      self.pushAsset('stylesheet', 'module', { when: 'user' });
      self.pushAsset('script', 'widget-tree-modal', { when: 'user' });
      self.pushAsset('script', 'user', { when: 'user' });
    }
  }
}