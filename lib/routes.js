module.exports = function (self, options) {
  self.addRoutes = function() {
    self.route('post', 'area-structure-modal', async function (req, res) {
      if (!self.apos.permissions.can(req, 'admin')) {
        return res.status(403).send('forbidden');
      }

      if (!req.body) {
        return res.status(400).send('bad request');
      }
      
      var pageOptions = req.body
      var baseUrl = req.baseUrlWithPrefix;
      if (pageOptions.document) {
        var data = await self.getTree({ type: 'document', document: pageOptions.document });
      } else {
        var data = await self.getTree({ type: 'url', url: pageOptions.href } );
      }
      
      return res.send(self.render(req, 'areaStructureModal', data));
    });

    self.route('post', 'area-structure-get', async function(req, res) {
      if (!self.apos.permissions.can(req, 'admin')) {
        return res.status(403).send('forbidden');
      }
      return res.json( await self.getTree(req.body.url) );
    })

    self.route('post', 'area-structure-delete', async function(req, res) {
      if (!self.apos.permissions.can(req, 'admin')) {
        return res.status(403).send('forbidden');
      }
      return res.json( await self.delete(req.body) );
    })
  }
};