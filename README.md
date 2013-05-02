Mario
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

Also detects whether platform is touch-based (such as a mobile phone or tablet), and which operating system is used:

  * linux
  * mac
  * windows (including mobile)
  * android
  * ios

Notes
----
Safari, Chrome, and Firefox will report that they have webkit|gecko engines

``` js
if (mario.webkit) {
  // do stuff with safari & chrome
}
```
