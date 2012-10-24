window.namespace = (target, name, block) ->
  [target, name, block] = [(if typeof exports isnt 'undefined' then exports else window), arguments...] if arguments.length < 3
  top    = target
  target = target[item] or= {} for item in name.split '.'
  block target, top

namespace 'TinyMceDeluxe', (exports) -> 
    exports.Orchard = class 
        
        ThemePath: ''
        
        PluginBaseUrl: ''

        constructor: () ->

        init: (plugins, options) -> 
            if !options.content_css? && TinyMceDeluxe.Orchard.ThemePath>''
                options.content_css = TinyMceDeluxe.Orchard.ThemePath
            
            baseUrl = ''
            
            if (TinyMceDeluxe.Orchard.PluginBaseUrl? &&  TinyMceDeluxe.Orchard.PluginBaseUrl>'')
                baseUrl = TinyMceDeluxe.Orchard.PluginBaseUrl
            else 
                baseUrl = @detectBasePath() 
            
            tinyMCE.baseURL = baseUrl
            @loadPlugins baseUrl, plugins
            tinyMCE.init options

        loadPlugins: (baseUrl, plugins) ->
            (tinymce.PluginManager.load plugin, baseUrl.concat('/plugins/').concat(plugin).concat('/editor_plugin.js')) for plugin in plugins 
            return
         
        detectBasePath:() ->
            mceDeluxe = $('script[src*="tinymcedeluxe.orchard.js"], script[src*="tinymcedeluxe.orchard.min.js"]')
            if mceDeluxe?
                path = mceDeluxe.first().attr 'src'
                path = path.replace '/tinymcedeluxe.orchard.js', ''
                path = path.replace '/tinymcedeluxe.orchard.min.js', ''
                return path
