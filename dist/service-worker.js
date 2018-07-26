/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "74696dc0e955037c084582dd46f26bd6"
  },
  {
    "url": "amap.png",
    "revision": "0138ec0722d3fe515ce4b736c2eb1eb0"
  },
  {
    "url": "assets/css/5.styles.c94134ff.css",
    "revision": "9bd12a06441fd11a8091d963a303ae9b"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/hero.8beeac48.jpeg",
    "revision": "8beeac48e487fbe53757199a9965da42"
  },
  {
    "url": "assets/js/0.e48be0d2.js",
    "revision": "fa30bc2483b251fc1bf467bafc045488"
  },
  {
    "url": "assets/js/1.9a449133.js",
    "revision": "7d6893df4635f1bd90a9e6fe477b92e6"
  },
  {
    "url": "assets/js/2.9f32d3f4.js",
    "revision": "43a15ba2379f3bb5adfb6927a2b039cb"
  },
  {
    "url": "assets/js/3.5f954006.js",
    "revision": "99f8bd8dff5ccceae7712927c1369741"
  },
  {
    "url": "assets/js/4.631b1f33.js",
    "revision": "07182ce963bfbec824eac70e9d462554"
  },
  {
    "url": "assets/js/app.fab7ff67.js",
    "revision": "74d9a0926e5c49b01f50d95d4fe4ffc2"
  },
  {
    "url": "blog/git.html",
    "revision": "a1c587603fef8aa437f364d4bbc880b8"
  },
  {
    "url": "blog/index.html",
    "revision": "91e2bf6c58ed57e495a56f4b24a79832"
  },
  {
    "url": "function.jpeg",
    "revision": "20a51795cac3e431a1d7a5b7553a7d66"
  },
  {
    "url": "git.jpeg",
    "revision": "16288837b33d76e846b97e0ed168bf6c"
  },
  {
    "url": "index.html",
    "revision": "befb98ef01cf4348067fb26fb609c567"
  },
  {
    "url": "json-server.jpeg",
    "revision": "294383bd4a870f656064c9510bd599e7"
  },
  {
    "url": "stylus-converter.jpeg",
    "revision": "0f5d28c724fbd82d2a75638613cc78fd"
  },
  {
    "url": "vue-business.png",
    "revision": "40883abc48d9993e58315294e51c6bd8"
  },
  {
    "url": "vuepress-theme.jpeg",
    "revision": "f454d95baba8ca99bba9326eb18b3932"
  },
  {
    "url": "vuepress.jpeg",
    "revision": "62c105128f1207f08256cb41e6300df9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
