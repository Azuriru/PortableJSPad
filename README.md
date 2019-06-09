# PortableJSPad
JS wherever you go.

## Installation
* Download [Tampermonkey](https://tampermonkey.net/)
* Click "Create a new script..." on the Extension
* Paste this in
```init
// ==UserScript==
// @name         PortableJSPad
// @include      http://*
// @include      https://*
// @version
// @description
// @author       k_OS
// @icon         https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png
// @require      https://code.jquery.com/jquery-latest.min.js
// ==/UserScript==
$.getScript('https://raw.githack.com/GameModerator/PortableJSPad/master/main.js');
console.log('PortableJSPad loaded!');
```
* Click File > Save when you are done
* Reload the site if the script doesn't show

### JS
#### Vanilla
```JS
var pjsp = document.createElement('script');
pjsp.src = 'https://raw.githack.com/GameModerator/PortableJSPad/master/main.js';
document.body.appendChild(pjsp);
```

#### jQuery
```JS
$.getScript('https://raw.githack.com/GameModerator/PortableJSPad/master/main.js');
```
