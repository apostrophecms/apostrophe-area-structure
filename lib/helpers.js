module.exports = function (self, options) {
  self.addHelpers({
    getAreaName: function(dotPath) {
      var segments = dotPath.split('.');
      return segments[segments.length - 1];
    }
  })
};