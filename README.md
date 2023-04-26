# TinyMCE editor

Use TinyMCE editor for your meteor app. 
**Noted!:** This package will use unminify as default, because older version of Meteor(especially version that I'm currently working on is 1.2.1 :( ) cannot resolve some ecmscript use in the minified version. If you are in recent version of Meteor, you can try change `package.js` to use minified version instead.

To add to your project, first clone this repo and then add its to your meteor package.
```
$ cd your/repo
$ git submodule add -f https://github.com/ratiugtun/tinymce.git <root of your app>/packages/tinymce
$ cd <root of your app>
$ meteor add ratiugtun:tinymce
```

### Initialization
#### Minify version
This package used the minify version as default. You should only add `<script type="text/javascript" src="/packages/ratiugtun_tinymce/tinymce.min.js"></script>` in `<head>` and set TinyMCE options as below.
```javascript
tinymce.init({
  selector: 'textarea',
  base_url: '/packages/ratiugtun_tinymce/',
  suffix: '.min',
  icons_url: '/packages/ratiugtun_tinymce/icons/default/icons.min.js',
  icons: 'default',
});
```

#### Unminify version
**Caution: This version may be buggy because the bundler may not fully compatible to some new ECMA features used in TinyMCE.** 
If you prefer to use unminify version, you have to modify the `packages.js` to bundle the unminify version. The file is located in the meteor packages directory.

Since, the bundler will bundle the script and add it automatically. So, you have not need to add `<script>` to `<head>`. But if you would like to access it, you can access it in `yourdomain.com/packages`.

Filnally, you may have to set the options as the below example.
```javascript
tinymce.init({
  selector: 'textarea',
  base_url: '/packages/ratiugtun_tinymce/',
  icons: 'default',
});
```

### Using inline theme
```
tinymce.init({
  selector: 'div.tinymce',
  base_url: '/packages/ratiugtun_tinymce/',
  icons: 'default',
  //skin_url: '/packages/ratiugtun_tinymce/skins/ui/oxide',
  //icons_url: '/packages/ratiugtun_tinymce/icons/default/icons.js',
  theme: 'inlite',
  inline: true
});
```
