Bowser
------

This is a fork of [https://github.com/ded/bowser](https://github.com/ded/bowser).

A Browser detector. Because sometimes, there is no other way, and not even good modern browsers always provide good feature detection mechanisms.

So... it works like this:

``` js
if (bowser.msie && bowser.version <= 6) {
  alert('Hello China');
}
```

Detected Browsers
-----

  * msie
  * safari[webkit]
  * chrome[webkit]
  * firefox[gecko]
  * opera

Notes
----
Safari, Chrome, and Firefox will report that they have webkit|gecko engines

``` js
if (bowser.webkit) {
  // do stuff with safari & chrome
}
```

Ender installation
-----
If you don't already have [Ender](http://ender.no.de) (an npm package) install it now (and don't look back)

    $ npm install ender

then add bowser to your module collection

    $ ender add bowser-papandreou

use it like this:

``` js
if ($.browser.chrome) {
  alert('Hello Silicon Valley');
}
```
