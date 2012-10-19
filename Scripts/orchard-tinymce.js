// Check the tinymce core plugins documentation to find out which toolbar controls are available for each plugin: http://www.tinymce.com/wiki.php/Plugins
(function ($) {
    $(document).ready(function () {
        var pluginsList = ['pagebreak', 'paste', 'table', 'template', 'syntaxhl'];
        var options = {
            mode: "specific_textareas",
            theme: "advanced",
            editor_selector: "tinymce",
            plugins: "fullscreen,autoresize,searchreplace,mediapicker,inlinepopups,-table,-pagebreak,-template,-paste,-syntaxhl",

            // Theme options: 
            theme_advanced_toolbar_location: "top",
            theme_advanced_toolbar_align: "left",
            theme_advanced_statusbar_location: "bottom",
            theme_advanced_resizing: "true",
            theme_advanced_buttons1: "search,replace,|,cut,copy,paste,|,undo,redo,|,link,unlink,charmap,emoticon,codeblock,|,bold,italic,|,numlist,bullist,formatselect,|,styleselect,|,syntaxhl,code,fullscreen",
            theme_advanced_buttons2: "mediapicker,|,tablecontrols,|,hr,removeformat,visualaid,|,visualchars,template,blockquote,pagebreak",
            theme_advanced_buttons3: ""
            // content_css sets the path to your site's main .css file. The styles from this file are imported into a droplist in the TinyMce editor. 
            // TinyMceDeluxe sets this path automatically to the /Styles/custom.css file in your site's theme, but you can override the path by declaring it here:
            //, content_css: '/path/to/your/stylesheet.css'

            , convert_urls: false

            // Change this to the path you use for your own version of tinymce_template_list.js: 
            , template_external_list_url: "/modules/tinymcedeluxe/scripts/samples/tinymce_template_list.js"
            
            // Formatting: 
            , apply_source_formatting: true
            , convert_fonts_to_spans: true
            , forced_root_block: false
            , preformatted: true

            // Schema and DOM options: 
            , valid_elements: '*[*]'
            // shouldn't be needed due to the valid_elements setting, but TinyMCE would strip script.src without it.
            , extended_valid_elements: "script[type|defer|src|language]"
            , schema: 'html5'
            // TinyMCE seems to not know what are valid parent/child element combos, so you might have to configure valid_children if you are pasting code under HTML mode: 
            , valid_children: '+a[div],+a[span]'
            // End container block element when pressing enter inside an empty block
            , end_container_on_empty_block: true
            // HTML5 formats (http://www.tinymce.com/tryit/html5_formats.php)
            , style_formats : [
                    {title : 'h1', block : 'h1'},
                    {title : 'h2', block : 'h2'},
                    {title : 'h3', block : 'h3'},
                    {title : 'h4', block : 'h4'},
                    {title : 'h5', block : 'h5'},
                    {title : 'h6', block : 'h6'},
                    {title : 'p', block : 'p'},
                    {title : 'div', block : 'div'},
                    {title : 'pre', block : 'pre'},
                    {title : 'section', block : 'section', wrapper: true, merge_siblings: false},
                    {title : 'article', block : 'article', wrapper: true, merge_siblings: false},
                    {title : 'blockquote', block : 'blockquote', wrapper: true},
                    {title : 'hgroup', block : 'hgroup', wrapper: true},
                    {title : 'aside', block : 'aside', wrapper: true},
                    {title : 'figure', block : 'figure', wrapper: true}
            ]
        };
        
        // Set up hook for dependent modules to customize the tinyMce editor options: 
        $(document).triggerHandler({
            type: "setupEditor.TinyMceDeluxe",
            options: options, 
            pluginsList: pluginsList
        });

        tinyMceDeluxe = new TinyMceDeluxe.Orchard();
        // 1st arg is an array of plugin names. See plugin link above for full list of available plugins
        // 2nd arg is an options object; also see TinyMce documentation for details on all available options. 
        tinyMceDeluxe.init(pluginsList, options);
    });
})(jQuery);

