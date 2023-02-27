Package.describe({
    name: 'ratiugtun:tinymce',
    version: '4.9.11',
    summary: 'TinyMCE editor',
    git: 'https://github.com/ratiugtun/tinymce',
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');

    // client files
    api.addFiles([
        // core files
        'tinymce.min.js',

        // plugins
        'plugins/advlist/plugin.min.js',
        'plugins/autoresize/plugin.min.js',
        'plugins/charmap/plugin.min.js',
        'plugins/colorpicker/plugin.min.js',
        'plugins/emoticons/plugin.min.js',
        'plugins/fullpage/plugin.min.js',
        'plugins/image/plugin.min.js',
        'plugins/insertdatetime/plugin.min.js',
        'plugins/lists/plugin.min.js',
        'plugins/noneditable/plugin.min.js',
        'plugins/preview/plugin.min.js',
        'plugins/searchreplace/plugin.min.js',
        'plugins/table/plugin.min.js',
        'plugins/textpattern/plugin.min.js',
        'plugins/visualchars/plugin.min.js',
        'plugins/anchor/plugin.min.js',
        'plugins/autosave/plugin.min.js',
        'plugins/code/plugin.min.js',
        'plugins/contextmenu/plugin.min.js',
        // 'plugins/example/plugin.min.js',
        'plugins/fullscreen/plugin.min.js',
        'plugins/imagetools/plugin.min.js',
        'plugins/legacyoutput/plugin.min.js',
        'plugins/media/plugin.min.js',
        'plugins/pagebreak/plugin.min.js',
        'plugins/print/plugin.min.js',
        'plugins/spellchecker/plugin.min.js',
        'plugins/template/plugin.min.js',
        'plugins/toc/plugin.min.js',
        'plugins/wordcount/plugin.min.js',
        'plugins/autolink/plugin.min.js',
        'plugins/bbcode/plugin.min.js',
        'plugins/codesample/plugin.min.js',
        'plugins/directionality/plugin.min.js',
        // 'plugins/example_dependency/plugin.min.js',
        'plugins/hr/plugin.min.js',
        'plugins/importcss/plugin.min.js',
        'plugins/link/plugin.min.js',
        'plugins/nonbreaking/plugin.min.js',
        'plugins/paste/plugin.min.js',
        'plugins/save/plugin.min.js',
        'plugins/tabfocus/plugin.min.js',
        'plugins/textcolor/plugin.min.js',
        'plugins/visualblocks/plugin.min.js',
        'plugins/help/plugin.min.js',

        // themes
        'themes/modern/theme.min.js',
        'themes/inlite/theme.min.js',
    ], 'client');

    api.addAssets([
        // skins
        'skins/lightgray/content.inline.min.css',
        'skins/lightgray/content.min.css', // modified
        'skins/lightgray/skin.ie7.min.css',
        'skins/lightgray/skin.min.css',

        'skins/lightgray/fonts/tinymce-small.eot',
        'skins/lightgray/fonts/tinymce-small.svg',
        'skins/lightgray/fonts/tinymce-small.ttf',
        'skins/lightgray/fonts/tinymce-small.woff',
        'skins/lightgray/fonts/tinymce.eot',
        'skins/lightgray/fonts/tinymce.svg',
        'skins/lightgray/fonts/tinymce.ttf',
        'skins/lightgray/fonts/tinymce.woff',

        'skins/lightgray/img/anchor.gif',
        'skins/lightgray/img/loader.gif',
        'skins/lightgray/img/object.gif',
        'skins/lightgray/img/trans.gif',
    ], 'client');
});