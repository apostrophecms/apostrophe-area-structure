module.exports = function (self, options) {
  self.addRoutes = function() {
    self.route('post', 'widget-tree-modal', async function (req, res) {
      if (!self.apos.permissions.can(req, 'admin')) {
        return res.status(403).send('forbidden');
      }

      if (!req.body) {
        return res.status(400).send('bad request');
      }
      
      var pageOptions = req.body
      var baseUrl = req.baseUrlWithPrefix;
      var data = await self.getTree(pageOptions.href);
      return res.send(self.render(req, 'widgetTreeModal', data));
    });

    self.route('post', 'widget-tree-get', async function(req, res) {
      return res.json( await self.getTree(req.body.url) );
    })

    self.route('post', 'widget-tree-delete', async function(req, res) {
      if (!self.apos.permissions.can(req, 'admin')) {
        return res.status(403).send('forbidden');
      }
      return res.json( await self.delete(req.body) );
    })
  }
};