if(!self.define){let a,e={};const s=(s,d)=>(s=new URL(s+".js",d).href,e[s]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=s,a.onload=e,document.head.appendChild(a)}else a=s,importScripts(s),e()})).then((()=>{let a=e[s];if(!a)throw new Error(`Module ${s} didn’t register its module`);return a})));self.define=(d,n)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let t={};const c=a=>s(a,i),r={module:{uri:i},exports:t,require:c};e[i]=Promise.all(d.map((a=>r[a]||c(a)))).then((a=>(n(...a),t)))}}define(["./workbox-f1770938"],(function(a){"use strict";importScripts(),self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"/_next/static/chunks/1181-540f403fe246ea63.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/2231-3aaba749d0b5c0a5.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/2594-5bb090ce92299263.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/2945-b5ada3dc72d46e2b.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/32-dc3c09b47f57cd64.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/3391-96a91faed71c3aa3.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/3641-7faf92ef3c858a7a.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/39-a9ceed4795353075.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/4411-4d78824f17d9c025.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/4579-8327a68a23a6c4a3.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/4bd1b696-381d37a9a88f30d4.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/5203.7c54c202406d4620.js",revision:"7c54c202406d4620"},{url:"/_next/static/chunks/5974-c48730e42240b4b5.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/6051-c278d7e83f6f10dc.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/6203-9b0fd05b0677c43e.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/6218.ec4f3176909768d6.js",revision:"ec4f3176909768d6"},{url:"/_next/static/chunks/6521-70dc7ee2ac388055.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/6670-304088705d28d504.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/6735.dce668de27a428b7.js",revision:"dce668de27a428b7"},{url:"/_next/static/chunks/7455-8da023aaaf476f08.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/792-609131187adc99a5.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/7970-8ab117502332478c.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/814-502877e37c62af4f.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/8173-f7ede9ff4eaec29c.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/8686-e3bd8ad87f7618fd.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/8874-ee00c5d552bd5a6b.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/8943-5e89ae98c553a14b.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/9952-1bfc7a63959474ed.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(auth)/layout-1e080e7ab089d4d2.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(auth)/login/page-5f8dd6ec975b0fd3.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(auth)/register/page-d33e4c48c29ba06e.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(landing)/about/page-dd883e75ef3f65f7.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(landing)/contact/page-22fa89db059eb0c0.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(landing)/hospitals/page-f3c672568ef65d0c.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(landing)/layout-1266235e43f1df65.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/(landing)/track-token/page-f55a824ff96c6d15.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/_not-found/page-e25351c33fd4dd34.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/admin/account/page-1178f8013f666335.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/admin/analytics/page-41157aebd347115a.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/admin/dashboard/page-31fe7d19ce6bebc3.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/admin/layout-7bc33350cda2ca6a.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/admin/manage-tokens/page-a559c8e3ca4a0915.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/admin/queue-status/page-9d3cb5c7e65a2665.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/account/page-db897d705667c9eb.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/appointments/page-9c02e2bed57c6e6c.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/book-opd/page-437e924eed7a94e7.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/layout-de5015c7f1a25b64.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/page-906d53cde132fa32.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/token/%5Bid%5D/page-981d977ca653030b.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/dashboard/track-opd/page-b4efd2d75605c3c4.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/error/page-ac5ce034515dbfc4.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/hospital-admin/account/page-742c2226c43e8e53.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/hospital-admin/analytics/page-6628ceb242af97b1.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/hospital-admin/dashboard/page-e89e5beb86b98c0c.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/hospital-admin/departments/page-4a63fcdda4877c0e.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/hospital-admin/layout-55cf6acf1adcc47a.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/hospital-admin/staffs/page-be69cf59c703a400.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/layout-bdcf0f475d3e95c7.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/page-02660e7cbdbcda29.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/account/page-eda554521bd2adeb.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/analytics/page-2edd5f34746b9b56.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/dashboard/page-e9c8883a893f3d44.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/department-types/page-4a98db2a4f89a4b4.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/layout-01f8549e98a0e650.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/manage-admins/page-fd5c822d60193f38.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/app/super-admin/manage-hospitals/page-61ab243eeb999aa9.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/framework-1ec85e83ffeb8a74.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/main-7a0fcd0794a8c7ab.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/main-app-f735315fce231194.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/pages/_app-c9ef09d97714d9a0.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/pages/_error-34df4b788d70a0b4.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-9d976621b90d02bc.js",revision:"d4G9CzG210TmhaQddd5aJ"},{url:"/_next/static/css/8871c6beecddfdaa.css",revision:"8871c6beecddfdaa"},{url:"/_next/static/d4G9CzG210TmhaQddd5aJ/_buildManifest.js",revision:"edee5ac96af47a3308527752906fe183"},{url:"/_next/static/d4G9CzG210TmhaQddd5aJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/media/logo.0295000d.png",revision:"34c0c2383994c627b6c3a7e8604063b8"},{url:"/favicon.ico",revision:"08302f8bdb0b93ab8d3b1961bc538b54"},{url:"/favicon.png",revision:"93804953fb1d33721deef7f0bb5943f2"},{url:"/icons/icon-192x192.png",revision:"98dcb2bfe2626d4fe7cebac2bcf1cf90"},{url:"/icons/icon-512x512.png",revision:"eeb54a90ffd3a84ab49a6e6fd7320317"},{url:"/logo-dark.png",revision:"c695d3c7232d504d057167688587acd2"},{url:"/logo-icon.png",revision:"93804953fb1d33721deef7f0bb5943f2"},{url:"/logo.png",revision:"34c0c2383994c627b6c3a7e8604063b8"},{url:"/manifest.json",revision:"b993fcdcf4eb454807fc8d773b271124"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),a.cleanupOutdatedCaches(),a.registerRoute("/",new a.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(a){return _ref.apply(this,arguments)}}]}),"GET"),a.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new a.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new a.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),a.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new a.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new a.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),a.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new a.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new a.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),a.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new a.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new a.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),a.registerRoute(/\/_next\/static.+\.js$/i,new a.CacheFirst({cacheName:"next-static-js-assets",plugins:[new a.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\/_next\/image\?url=.+$/i,new a.StaleWhileRevalidate({cacheName:"next-image",plugins:[new a.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:mp3|wav|ogg)$/i,new a.CacheFirst({cacheName:"static-audio-assets",plugins:[new a.RangeRequestsPlugin,new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:mp4|webm)$/i,new a.CacheFirst({cacheName:"static-video-assets",plugins:[new a.RangeRequestsPlugin,new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:js)$/i,new a.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new a.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:css|less)$/i,new a.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new a.StaleWhileRevalidate({cacheName:"next-data",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute(/\.(?:json|xml|csv)$/i,new a.NetworkFirst({cacheName:"static-data-assets",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((function(a){var e=a.sameOrigin,s=a.url.pathname;return!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))}),new a.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new a.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((function(a){var e=a.request,s=a.url.pathname,d=a.sameOrigin;return"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&d&&!s.startsWith("/api/")}),new a.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((function(a){var e=a.request,s=a.url.pathname,d=a.sameOrigin;return"1"===e.headers.get("RSC")&&d&&!s.startsWith("/api/")}),new a.NetworkFirst({cacheName:"pages-rsc",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((function(a){var e=a.url.pathname;return a.sameOrigin&&!e.startsWith("/api/")}),new a.NetworkFirst({cacheName:"pages",plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),a.registerRoute((function(a){return!a.sameOrigin}),new a.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new a.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
