Koopa
------

This is a fork of [https://github.com/ded/bowser](https://github.com/ded/bowser).

A Browser detector. Because sometimes, there is no other way, and not even good modern browsers always provide good feature detection mechanisms.

So... it works like this:

``` js
if (mario.msie && mario.version <= 6) {
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
if (mario.webkit) {
  // do stuff with safari & chrome
}
```
