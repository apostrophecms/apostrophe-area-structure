module.exports = {
  
  extend: 'apostrophe-module',
  name: 'apostrophe-area-structure',
  alias: 'areaStructure',

  moogBundle: {
    directory: 'lib/modules',
    modules: [
      'apostrophe-area-structure-pages',
      'apostrophe-area-structure-pieces-pages'
    ]
  },

  afterConstruct: function(self) {
    self.pushAssets();
    self.addRoutes();
    self.addHelpers();
    self.pushCreateSingleton();
  },

  construct: function(self, options) {
    require('./lib/routes.js')(self, options);
    require('./lib/api.js')(self, options);
    require('./lib/helpers.js')(self, options);
    require('./lib/assets.js')(self, options);
  }
}