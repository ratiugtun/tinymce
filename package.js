Package.describe({
    name: 'ratiugtun:tinymce',
    version: '6.3.2',
    summary: 'TinyMCE editor',
    git: 'https://github.com/ratiugtun/tinymce',
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');

    /**
     * For mifify version
     * Used it with suffix: '.min' option */
    api.addAssets([
        // core files
        'tinymce.min.js',
        'models/dom/model.min.js',

        // plugins
        'plugins/advlist/plugin.min.js',
        'plugins/autoresize/plugin.min.js',
        'plugins/charmap/plugin.min.js',
        'plugins/emoticons/plugin.min.js',
        'plugins/emoticons/js/emojiimages.min.js',
        'plugins/emoticons/js/emojis.min.js',
        'plugins/image/plugin.min.js',
        'plugins/insertdatetime/plugin.min.js',
        'plugins/lists/plugin.min.js',
        'plugins/preview/plugin.min.js',
        'plugins/searchreplace/plugin.min.js',
        'plugins/table/plugin.min.js',
        'plugins/visualchars/plugin.min.js',
        'plugins/anchor/plugin.min.js',
        'plugins/autosave/plugin.min.js',
        'plugins/code/plugin.min.js',
        'plugins/fullscreen/plugin.min.js',
        'plugins/media/plugin.min.js',
        'plugins/pagebreak/plugin.min.js',
        'plugins/template/plugin.min.js',
        'plugins/wordcount/plugin.min.js',
        'plugins/autolink/plugin.min.js',
        'plugins/codesample/plugin.min.js',
        'plugins/directionality/plugin.min.js',
        'plugins/importcss/plugin.min.js',
        'plugins/link/plugin.min.js',
        'plugins/nonbreaking/plugin.min.js',
        'plugins/save/plugin.min.js',
        'plugins/visualblocks/plugin.min.js',
        'plugins/quickbars/plugin.min.js',
        'plugins/help/plugin.min.js',

        // themes
        'themes/silver/theme.min.js',
    ], 'client');

    /**
     * For unminify version
     */
    // api.addFiles([
    //     // core files
    //     'tinymce.js',
    //     'models/dom/model.js',

    //     // plugins
    //     'plugins/advlist/plugin.js',
    //     'plugins/autoresize/plugin.js',
    //     'plugins/charmap/plugin.js',
    //     'plugins/emoticons/plugin.js',
    //     'plugins/emoticons/js/emojiimages.js',
    //     'plugins/emoticons/js/emojis.js',
    //     'plugins/image/plugin.js',
    //     'plugins/insertdatetime/plugin.js',
    //     'plugins/lists/plugin.js',
    //     'plugins/preview/plugin.js',
    //     'plugins/searchreplace/plugin.js',
    //     'plugins/table/plugin.js',
    //     'plugins/visualchars/plugin.js',
    //     'plugins/anchor/plugin.js',
    //     'plugins/autosave/plugin.js',
    //     'plugins/code/plugin.js',
    //     'plugins/fullscreen/plugin.js',
    //     'plugins/media/plugin.js',
    //     'plugins/pagebreak/plugin.js',
    //     'plugins/template/plugin.js',
    //     'plugins/wordcount/plugin.js',
    //     'plugins/autolink/plugin.js',
    //     'plugins/codesample/plugin.js',
    //     'plugins/directionality/plugin.js',
    //     'plugins/importcss/plugin.js',
    //     'plugins/link/plugin.js',
    //     'plugins/nonbreaking/plugin.js',
    //     'plugins/save/plugin.js',
    //     'plugins/visualblocks/plugin.js',
    //     'plugins/quickbars/plugin.js',
    //     'plugins/help/plugin.js',

    //     // themes
    //     'themes/silver/theme.js',
    // ], 'client');

    api.addAssets([
        // skins
        'skins/content/dark/content.min.css',
        'skins/content/default/content.min.css',
        'skins/content/document/content.min.css',
        'skins/content/tinymce-5/content.min.css',
        'skins/content/tinymce-5-dark/content.min.css',
        'skins/content/writer/content.min.css',
        'skins/ui/oxide/content.min.css',
        'skins/ui/oxide/content.inline.min.css',
        'skins/ui/oxide/skin.min.css',
        'skins/ui/oxide/skin.shadowdom.min.css',

        'skins/ui/oxide-dark/content.min.css',
        'skins/ui/oxide-dark/content.inline.min.css',
        'skins/ui/oxide-dark/skin.min.css',
        'skins/ui/oxide-dark/skin.shadowdom.min.css',

        'skins/ui/tinymce-5/content.min.css',
        'skins/ui/tinymce-5/content.inline.min.css',
        'skins/ui/tinymce-5/skin.min.css',
        'skins/ui/tinymce-5/skin.shadowdom.min.css',

        'skins/ui/tinymce-5-dark/content.min.css',
        'skins/ui/tinymce-5-dark/content.inline.min.css',
        'skins/ui/tinymce-5-dark/skin.min.css',
        'skins/ui/tinymce-5-dark/skin.shadowdom.min.css',

        'icons/default/icons.min.js',

        //languages
        'langs/th_TH.js',
        
    ], 'client');
});