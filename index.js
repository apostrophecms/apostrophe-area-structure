module.exports = {
  
  extend: 'apostrophe-module',
  name: 'apostrophe-widget-tree',
  alias: 'widgetTree',

  moogBundle: {
    directory: 'lib/modules',
    modules: [
      'apostrophe-widget-tree-pages',
      'apostrophe-widget-tree-pieces-pages',
      'apostrophe-widget-tree-areas'
    ]
  },

  afterConstruct: function(self) {
    self.pushAssets();
    self.addRoutes();
    self.addHelpers();
    self.pushCreateSingleton();
  },
  beforeConstruct: function(self, options) {},
  construct: function(self, options) {
    require('./lib/routes.js')(self, options);
    require('./lib/api.js')(self, options);
    require('./lib/helpers.js')(self, options);
    require('./lib/assets.js')(self, options);
  }
}