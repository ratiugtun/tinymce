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
**Caution:** Default `base_url` must be defined on init. As the Meteor will put each Atmosphere packages in the `/packages`. Therefore, the TinyMCE will link to its components base on its path which should be in `/packages/ratiugtun_tinymce` but instead only `/packages`(as it the path that Meteor put the Atmosphere package in and cause the TinyMCE to not find other components like skin.js or icon.js). If you want to use a custom skin, you can simply modify it.
```
tinymce.init({
  selector: 'textarea',
  base_url: '/packages/ratiugtun_tinymce',
  // skin_url: '/packages/ratiugtun_tinymce/skins/ui/oxide',
  // icons_url: '/packages/ratiugtun_tinymce/icons/default/icons.js',
});
```

### Using inline theme
```
tinymce.init({
  selector: 'div.tinymce',
  base_url: '/packages/ratiugtun_tinymce',
  icons: 'default',
  //skin_url: '/packages/ratiugtun_tinymce/skins/ui/oxide',
  //icons_url: '/packages/ratiugtun_tinymce/icons/default/icons.js',
  theme: 'inlite',
  inline: true
});
```
