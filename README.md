# TinyMCE editor

Use TinyMCE editor for your meteor app.

```
$ meteor add teamon:tinymce
```

### Initialization
**Caution:** Default `skin_url` must be defined on init. If you want to use a custom skin, you can simply modify it.
```
tinymce.init({
  selector: 'textarea',
  skin_url: '/packages/ratiugtun_tinymce/skins/lightgray',
});
```

### Using inline theme
```
tinymce.init({
  selector: 'div.tinymce',
  skin_url: '/packages/ratiugtun_tinymce/skins/lightgray',
  theme: 'inlite',
  inline: true
});
```
