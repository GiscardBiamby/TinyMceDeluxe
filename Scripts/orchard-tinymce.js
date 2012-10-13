////
////
//// Copy this file to your module's Scripts folder, and declare it in your ResourceManifest.cs. This will override the copy in Orchard's default TinyMce module.

////
////
//// Un-comment-out the tinymce.PluginManager.load commands for the plugins you want to use: 
////tinymce.PluginManager.load('advhr', '/modules/tinymcedeluxe/scripts/plugins/advhr/editor_plugin.js');
////tinymce.PluginManager.load('advimage', '/modules/tinymcedeluxe/scripts/plugins/advimage/editor_plugin.js');
////tinymce.PluginManager.load('advlink', '/modules/tinymcedeluxe/scripts/plugins/advlink/editor_plugin.js');
////tinymce.PluginManager.load('advlist', '/modules/tinymcedeluxe/scripts/plugins/advlist/editor_plugin.js');
////tinymce.PluginManager.load('autolink', '/modules/tinymcedeluxe/scripts/plugins/autolink/editor_plugin.js');
////tinymce.PluginManager.load('autosave', '/modules/tinymcedeluxe/scripts/plugins/autosave/editor_plugin.js');
////tinymce.PluginManager.load('bbcode', '/modules/tinymcedeluxe/scripts/plugins/bbcode/editor_plugin.js');
////tinymce.PluginManager.load('contextmenu', '/modules/tinymcedeluxe/scripts/plugins/contextmenu/editor_plugin.js');
////tinymce.PluginManager.load('directionality', '/modules/tinymcedeluxe/scripts/plugins/directionality/editor_plugin.js');
////tinymce.PluginManager.load('emotions', '/modules/tinymcedeluxe/scripts/plugins/emotions/editor_plugin.js');
////tinymce.PluginManager.load('example', '/modules/tinymcedeluxe/scripts/plugins/example/editor_plugin.js');
////tinymce.PluginManager.load('fullpage', '/modules/tinymcedeluxe/scripts/plugins/fullpage/editor_plugin.js');
////tinymce.PluginManager.load('iespell', '/modules/tinymcedeluxe/scripts/plugins/iespell/editor_plugin.js');
////tinymce.PluginManager.load('inlinepopups', '/modules/tinymcedeluxe/scripts/plugins/inlinepopups/editor_plugin.js');
////tinymce.PluginManager.load('insertdatetime', '/modules/tinymcedeluxe/scripts/plugins/insertdatetime/editor_plugin.js');
////tinymce.PluginManager.load('layer', '/modules/tinymcedeluxe/scripts/plugins/layer/editor_plugin.js');
////tinymce.PluginManager.load('legacyoutput', '/modules/tinymcedeluxe/scripts/plugins/legacyoutput/editor_plugin.js');
////tinymce.PluginManager.load('lists', '/modules/tinymcedeluxe/scripts/plugins/lists/editor_plugin.js');
////tinymce.PluginManager.load('media', '/modules/tinymcedeluxe/scripts/plugins/media/editor_plugin.js');
////tinymce.PluginManager.load('nonbreaking', '/modules/tinymcedeluxe/scripts/plugins/nonbreaking/editor_plugin.js');
////tinymce.PluginManager.load('noneditable', '/modules/tinymcedeluxe/scripts/plugins/noneditable/editor_plugin.js');
tinymce.PluginManager.load('pagebreak', '/modules/tinymcedeluxe/scripts/plugins/pagebreak/editor_plugin.js');
tinymce.PluginManager.load('paste', '/modules/tinymcedeluxe/scripts/plugins/paste/editor_plugin.js');
////tinymce.PluginManager.load('preview', '/modules/tinymcedeluxe/scripts/plugins/preview/editor_plugin.js');
////tinymce.PluginManager.load('print', '/modules/tinymcedeluxe/scripts/plugins/print/editor_plugin.js');
////tinymce.PluginManager.load('save', '/modules/tinymcedeluxe/scripts/plugins/save/editor_plugin.js');
////tinymce.PluginManager.load('spellchecker', '/modules/tinymcedeluxe/scripts/plugins/spellchecker/editor_plugin.js');
////tinymce.PluginManager.load('style', '/modules/tinymcedeluxe/scripts/plugins/style/editor_plugin.js');
////tinymce.PluginManager.load('tabfocus', '/modules/tinymcedeluxe/scripts/plugins/tabfocus/editor_plugin.js');
tinymce.PluginManager.load('table', '/modules/tinymcedeluxe/scripts/plugins/table/editor_plugin.js');
tinymce.PluginManager.load('template', '/modules/tinymcedeluxe/scripts/plugins/template/editor_plugin.js');
////tinymce.PluginManager.load('visualchars', '/modules/tinymcedeluxe/scripts/plugins/visualchars/editor_plugin.js');
////tinymce.PluginManager.load('wordcount', '/modules/tinymcedeluxe/scripts/plugins/wordcount/editor_plugin.js');
////tinymce.PluginManager.load('xhtmlxtras', '/modules/tinymcedeluxe/scripts/plugins/xhtmlxtras/editor_plugin.js');
tinymce.PluginManager.load('syntaxhl', '/modules/tinymcedeluxe/scripts/plugins/syntaxhl/editor_plugin.js');


////
////
//// list the plug-ins you want to use in the plugins: property (and make sure to prefix them with a dash; e.g. to load template plugin you would do: plugins: "-template",
//// update the value of the content_css: property to point to your site's .css file. TinyMce will load the styles from that file into a droplist in the TinyMce editor, so your content editors can apply them.

//// Check the tinymce core plugins documentation to find out which toolbar controls are available for each plugin: http://www.tinymce.com/wiki.php/Plugins

tinyMCE.init({
    theme: "advanced",
    mode: "specific_textareas",
    editor_selector: "tinymce",
    plugins: "fullscreen,autoresize,searchreplace,mediapicker,inlinepopups,-table,-pagebreak,-template,-paste,-syntaxhl",
    theme_advanced_toolbar_location: "top",
    theme_advanced_toolbar_align: "left",
    theme_advanced_statusbar_location: "bottom",
    theme_advanced_resizing: "true",
    theme_advanced_buttons1: "search,replace,|,cut,copy,paste,|,undo,redo,|,link,unlink,charmap,emoticon,codeblock,|,bold,italic,|,numlist,bullist,formatselect,|,styleselect,|,syntaxhl,code,fullscreen",
    theme_advanced_buttons2: "mediapicker,|,tablecontrols,|,hr,removeformat,visualaid,|,visualchars,template,blockquote,pagebreak",
    theme_advanced_buttons3: "",
    convert_urls: false,
    template_external_list_url : "/modules/tinymcedeluxe/scripts/samples/tinymce_template_list.js",
    content_css: "/themes/gbiamby/styles/custom.css",
    valid_elements: "*[*]",
    // shouldn't be needed due to the valid_elements setting, but TinyMCE would strip script.src without it.
    extended_valid_elements: "script[type|defer|src|language]"
});
