(function() {
  var __slice = [].slice;

  window.namespace = function(target, name, block) {
    var item, top, _i, _len, _ref, _ref1;
    if (arguments.length < 3) {
      _ref = [(typeof exports !== 'undefined' ? exports : window)].concat(__slice.call(arguments)), target = _ref[0], name = _ref[1], block = _ref[2];
    }
    top = target;
    _ref1 = name.split('.');
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      item = _ref1[_i];
      target = target[item] || (target[item] = {});
    }
    return block(target, top);
  };

  namespace('TinyMceDeluxe', function(exports) {
    return exports.Orchard = (function() {

      _Class.prototype.ThemePath = '';

      _Class.prototype.PluginBaseUrl = '';

      function _Class() {}

      _Class.prototype.init = function(plugins, options) {
        var baseUrl;
        if (!(options.content_css != null) && TinyMceDeluxe.Orchard.ThemePath > '') {
          options.content_css = TinyMceDeluxe.Orchard.ThemePath;
        }
        baseUrl = '';
        if ((TinyMceDeluxe.Orchard.PluginBaseUrl != null) && TinyMceDeluxe.Orchard.PluginBaseUrl > '') {
          baseUrl = TinyMceDeluxe.Orchard.PluginBaseUrl;
        } else {
          baseUrl = this.detectBasePath();
        }
        tinyMCE.baseURL = baseUrl;
        this.loadPlugins(baseUrl, plugins);
        return tinyMCE.init(options);
      };

      _Class.prototype.loadPlugins = function(baseUrl, plugins) {
        var plugin, _i, _len;
        for (_i = 0, _len = plugins.length; _i < _len; _i++) {
          plugin = plugins[_i];
          tinymce.PluginManager.load(plugin, baseUrl.concat('/plugins/').concat(plugin).concat('/editor_plugin.js'));
        }
      };

      _Class.prototype.detectBasePath = function() {
        var mceDeluxe, path;
        mceDeluxe = $('script[src*="tinymcedeluxe.orchard.js"], script[src*="tinymcedeluxe.orchard.min.js"]');
        if (mceDeluxe != null) {
          path = mceDeluxe.first().attr('src');
          path = path.replace('/tinymcedeluxe.orchard.js', '');
          path = path.replace('/tinymcedeluxe.orchard.min.js', '');
          return path;
        }
      };

      return _Class;

    })();
  });

}).call(this);
