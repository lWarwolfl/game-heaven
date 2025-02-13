if (!self.define) {
  let e,
    s = {}
  const n = (n, i) => (
    (n = new URL(n + '.js', i).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (i, a) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[t]) return
    let c = {}
    const o = (e) => n(e, t),
      r = { module: { uri: t }, exports: c, require: o }
    s[t] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (a(...e), c))
  }
}
define(['./workbox-3c9d0171'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/122.047004866ef9c593.js', revision: '047004866ef9c593' },
        { url: '/_next/static/chunks/620-0258fb908974fe2e.js', revision: 'wuHAoMzMRY85x3oidM1LS' },
        { url: '/_next/static/chunks/648-1553e213eceeec44.js', revision: 'wuHAoMzMRY85x3oidM1LS' },
        { url: '/_next/static/chunks/819.7a9698c187d5d3e7.js', revision: '7a9698c187d5d3e7' },
        { url: '/_next/static/chunks/882-7c3f1d18a36eb639.js', revision: 'wuHAoMzMRY85x3oidM1LS' },
        {
          url: '/_next/static/chunks/a1bcb8a1-56a54ec73531650d.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/page-fadc17b22314bd7e.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-3fc29833efdc93ea.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/app/layout-014658e359ba78a7.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/app/not-found-7b1eff9436443cef.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/framework-5f0b285c13032f48.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        { url: '/_next/static/chunks/main-a5bc3d0d3266f762.js', revision: 'wuHAoMzMRY85x3oidM1LS' },
        {
          url: '/_next/static/chunks/main-app-21b07119f272f5c5.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/pages/_app-cebe678ae6477234.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/pages/_error-d927aa95de205b04.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-e5b573424d773306.js',
          revision: 'wuHAoMzMRY85x3oidM1LS',
        },
        { url: '/_next/static/css/335af38397b64155.css', revision: '335af38397b64155' },
        { url: '/_next/static/css/b57312964dfad504.css', revision: 'b57312964dfad504' },
        {
          url: '/_next/static/media/630e0b819503bca7-s.woff2',
          revision: 'e3c313092df5d8ea3306d6b29bd44c00',
        },
        {
          url: '/_next/static/media/6a1a9d784472a388-s.woff2',
          revision: 'ec5e94153bed00b214f65e28149f2eb7',
        },
        {
          url: '/_next/static/media/84455f2b5a591033-s.p.woff2',
          revision: '24ff96539e961dce7d11a66196530764',
        },
        {
          url: '/_next/static/wuHAoMzMRY85x3oidM1LS/_buildManifest.js',
          revision: '679d0444f589e62e280b6ff63186ed9f',
        },
        {
          url: '/_next/static/wuHAoMzMRY85x3oidM1LS/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/icon-192x192.png', revision: '43862f9e896230a1ea648a683b5ad872' },
        { url: '/icon-256x256.png', revision: 'bdfbe2ebb002bad42035aaa164f5448d' },
        { url: '/icon-384x384.png', revision: 'dd17684d21c66dc447487f092d065430' },
        { url: '/icon-512x512.png', revision: 'ce2ba0a63ace5550b5d3caaeb7027442' },
        { url: '/logo-dark.svg', revision: '3aa0e7952a1f41ebb0556283697f0fd3' },
        { url: '/logo-light.svg', revision: 'b68a570d3cd1b98b33d42ddb3d2e9b92' },
        { url: '/manifest.json', revision: '3ad3c62ccae8581fbbfe7646f42f4a61' },
        { url: '/swe-worker-5c72df51bb1f6ee0.js', revision: '5a47d90db13bb1309b25bdf7b363570e' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: function (e) {
              return _ref.apply(this, arguments)
            },
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      function (e) {
        var s = e.sameOrigin,
          n = e.url.pathname
        return !(!s || n.startsWith('/api/auth/callback') || !n.startsWith('/api/'))
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          n = e.url.pathname,
          i = e.sameOrigin
        return (
          '1' === s.headers.get('RSC') &&
          '1' === s.headers.get('Next-Router-Prefetch') &&
          i &&
          !n.startsWith('/api/')
        )
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      function (e) {
        var s = e.request,
          n = e.url.pathname,
          i = e.sameOrigin
        return '1' === s.headers.get('RSC') && i && !n.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      function (e) {
        var s = e.url.pathname
        return e.sameOrigin && !s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      function (e) {
        return !e.sameOrigin
      },
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0)
})
