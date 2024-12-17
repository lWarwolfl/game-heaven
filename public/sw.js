if (!self.define) {
  let e,
    s = {}
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
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
  self.define = (a, c) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[i]) return
    let t = {}
    const o = (e) => n(e, i),
      r = { module: { uri: i }, exports: t, require: o }
    s[i] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (c(...e), t))
  }
}
define(['./workbox-3c9d0171'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/BKo6cH9LUMChT-GmBNnF4/_buildManifest.js',
          revision: '679d0444f589e62e280b6ff63186ed9f',
        },
        {
          url: '/_next/static/BKo6cH9LUMChT-GmBNnF4/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/122.047004866ef9c593.js', revision: '047004866ef9c593' },
        { url: '/_next/static/chunks/316-91768a08c5a1d2ba.js', revision: 'BKo6cH9LUMChT-GmBNnF4' },
        { url: '/_next/static/chunks/648-acd555b584947412.js', revision: 'BKo6cH9LUMChT-GmBNnF4' },
        { url: '/_next/static/chunks/819.7a9698c187d5d3e7.js', revision: '7a9698c187d5d3e7' },
        {
          url: '/_next/static/chunks/a1bcb8a1-a7980be882a1eace.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/app/%5Blocale%5D/page-e6407e1c2c28f387.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-7f0c67aa2f94a275.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/app/layout-34e227630f50e967.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/app/not-found-b689c542542d6c98.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/framework-5f0b285c13032f48.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        { url: '/_next/static/chunks/main-a5bc3d0d3266f762.js', revision: 'BKo6cH9LUMChT-GmBNnF4' },
        {
          url: '/_next/static/chunks/main-app-21b07119f272f5c5.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/pages/_app-cebe678ae6477234.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/pages/_error-d927aa95de205b04.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-0f153529278edd02.js',
          revision: 'BKo6cH9LUMChT-GmBNnF4',
        },
        { url: '/_next/static/css/c5b469a0f5c9c175.css', revision: 'c5b469a0f5c9c175' },
        { url: '/_next/static/css/fe161bf4b132037a.css', revision: 'fe161bf4b132037a' },
        {
          url: '/_next/static/media/01ec6b068e70259e-s.woff2',
          revision: '423ee562ce24c1528e0e01e274a6c909',
        },
        {
          url: '/_next/static/media/04a7bf91ce447e64-s.p.woff2',
          revision: 'f958f203635d30b79b2e53797eeba596',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/649270211a519700-s.woff2',
          revision: '9b0526f1d207e754e06968a1421e1fa2',
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        { url: '/file.svg', revision: 'd09f95206c3fa0bb9bd9fefabfd0ea71' },
        { url: '/globe.svg', revision: '2aaafa6a49b6563925fe440891e32717' },
        { url: '/icon-192x192.png', revision: '476953447aba1e1fb0d96c5434cfa94a' },
        { url: '/icon-256x256.png', revision: '476953447aba1e1fb0d96c5434cfa94a' },
        { url: '/icon-384x384.png', revision: '476953447aba1e1fb0d96c5434cfa94a' },
        { url: '/icon-512x512.png', revision: '476953447aba1e1fb0d96c5434cfa94a' },
        { url: '/icon.png', revision: '476953447aba1e1fb0d96c5434cfa94a' },
        { url: '/manifest.json', revision: '9b19de8c64ebde1dbb996a26ef6ead51' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/swe-worker-5c72df51bb1f6ee0.js', revision: '5a47d90db13bb1309b25bdf7b363570e' },
        { url: '/vercel.svg', revision: 'c0af2f507b369b085b35ef4bbe3bcf1e' },
        { url: '/window.svg', revision: 'a2760511c65806022ad20adf74370ff3' },
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
          a = e.sameOrigin
        return (
          '1' === s.headers.get('RSC') &&
          '1' === s.headers.get('Next-Router-Prefetch') &&
          a &&
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
          a = e.sameOrigin
        return '1' === s.headers.get('RSC') && a && !n.startsWith('/api/')
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
