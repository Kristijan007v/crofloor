if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const r=e=>a(e,i),t={module:{uri:i},exports:o,require:r};s[i]=Promise.all(c.map((e=>t[e]||r(e)))).then((e=>(n(...e),o)))}}define(["./workbox-40866503"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Oph9T7OAY_K-PtBBUeXMY/_buildManifest.js",revision:"932ca25a8e2f80a492fbad3db25bba66"},{url:"/_next/static/Oph9T7OAY_K-PtBBUeXMY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1a48c3c1-bde033e1763265b0.js",revision:"bde033e1763265b0"},{url:"/_next/static/chunks/1bfc9850-b391ed454c4c189f.js",revision:"b391ed454c4c189f"},{url:"/_next/static/chunks/22-1adb62a3085e70a9.js",revision:"1adb62a3085e70a9"},{url:"/_next/static/chunks/252f366e-a627312c810f293e.js",revision:"a627312c810f293e"},{url:"/_next/static/chunks/342-bc7e3d6413f3de1e.js",revision:"bc7e3d6413f3de1e"},{url:"/_next/static/chunks/675-b73f41980c39ec6a.js",revision:"b73f41980c39ec6a"},{url:"/_next/static/chunks/75fc9c18-e61c2e0d9c9a0957.js",revision:"e61c2e0d9c9a0957"},{url:"/_next/static/chunks/84-7d33860115c07dd9.js",revision:"7d33860115c07dd9"},{url:"/_next/static/chunks/860-b35ac4055976e3af.js",revision:"b35ac4055976e3af"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-44c2c34ebfe5445a.js",revision:"44c2c34ebfe5445a"},{url:"/_next/static/chunks/pages/404-543ce5651e905578.js",revision:"543ce5651e905578"},{url:"/_next/static/chunks/pages/500-902806c7398f1198.js",revision:"902806c7398f1198"},{url:"/_next/static/chunks/pages/_app-7f61f03978498cb7.js",revision:"7f61f03978498cb7"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/about-5f7dbb258b6435c8.js",revision:"5f7dbb258b6435c8"},{url:"/_next/static/chunks/pages/articles/%5Bslug%5D-04855b04f4d35965.js",revision:"04855b04f4d35965"},{url:"/_next/static/chunks/pages/blog-19ce75b266b2367d.js",revision:"19ce75b266b2367d"},{url:"/_next/static/chunks/pages/contact-us-63cc8322c391bf10.js",revision:"63cc8322c391bf10"},{url:"/_next/static/chunks/pages/index-7b63be20e37531c1.js",revision:"7b63be20e37531c1"},{url:"/_next/static/chunks/pages/legal/privacy-policy-c167b6a4c681e529.js",revision:"c167b6a4c681e529"},{url:"/_next/static/chunks/pages/legal/terms-f95a20634659c18c.js",revision:"f95a20634659c18c"},{url:"/_next/static/chunks/pages/maintenance-fd2845df02f536de.js",revision:"fd2845df02f536de"},{url:"/_next/static/chunks/pages/products-0913f2b4604cbf77.js",revision:"0913f2b4604cbf77"},{url:"/_next/static/chunks/pages/products/%5Bslug%5D-68e1c7ad59e1570a.js",revision:"68e1c7ad59e1570a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-cb7634a8b6194820.js",revision:"cb7634a8b6194820"},{url:"/_next/static/css/59c014ed6fe77073.css",revision:"59c014ed6fe77073"},{url:"/_next/static/css/e6e376b040f7ae96.css",revision:"e6e376b040f7ae96"},{url:"/documents/catalogue.pdf",revision:"ec71d5ba8524c5f1d0d42846f359c068"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"a78d08bd4612add9d57b0d35f3c3323e"},{url:"/icons/android-chrome-512x512.png",revision:"8501813001020f6fe2b51b8494382d84"},{url:"/icons/apple-touch-icon.png",revision:"40d49190834b065aae0bedaec0092364"},{url:"/icons/favicon-16x16.png",revision:"cbc9aaeb1a41b88a01fc1de46c9a4eee"},{url:"/icons/favicon-32x32.png",revision:"2e0f4c1a673f8efb4a200dc2c495265c"},{url:"/icons/favicon.ico",revision:"af9a13e5a00fcdd406e2735f9a61357f"},{url:"/icons/icon-192x192.png",revision:"3878f9ef4532d54d31bbcbc664dbd384"},{url:"/icons/icon-256x256.png",revision:"b3620f85bb21511761b0bcd9702cbc2c"},{url:"/icons/icon-384x384.png",revision:"47266d97fd4a98fe24236c1ca63e6f6a"},{url:"/icons/icon-512x512.png",revision:"b56e467a0ef82f2538591eb1384666ed"},{url:"/images/about-us.jpg",revision:"9c034ebbe40f4f7118092c0a13836011"},{url:"/images/about.jpg",revision:"c0bb0d17e08faca33396eaa67e7c11ce"},{url:"/images/blog.jpg",revision:"d23cc860f073c27be015864bc1e70acd"},{url:"/images/castro-floor.jpg",revision:"1a9600420076f84fb7a6795061f945b3"},{url:"/images/contact-us.jpg",revision:"bd1edfdee0ad843d833b25131a6d7435"},{url:"/images/factory_1.jpg",revision:"636efd28051c5853f84997b5c2c1acb2"},{url:"/images/factory_2.jpg",revision:"fef9fdb9e8634577fa552a2d981c6f82"},{url:"/images/factory_3.jpg",revision:"1055a84429698277d3f5072ac90eb2ab"},{url:"/images/factory_4.jpg",revision:"f2e21a03290dfbfe329051e0577a5f88"},{url:"/images/factory_5.jpg",revision:"61bd01d72d80f8e85da177368dc6ecea"},{url:"/images/hero-image.jpg",revision:"4d23525705012c48e85f954386603136"},{url:"/images/image-error.jpg",revision:"557c94eb388bf776406a2b187cd90b76"},{url:"/images/morello-floor.jpg",revision:"487bf804be650fa3894a4fe52e95d4dc"},{url:"/images/osijek-location.jpg",revision:"41f49647c6e3c383e684005105080b38"},{url:"/images/page-header.jpg",revision:"d55a45f315aa2d802465df1f20feea87"},{url:"/images/products.jpg",revision:"df9abb2f332adcbb1e5b0e1a68532284"},{url:"/images/split-location.jpg",revision:"54a5b9a1b76cca416b2767a579b46b98"},{url:"/images/varazdin-location.jpg",revision:"cd924d62459f4621e24ed913e888b5cd"},{url:"/images/zagreb-location.jpg",revision:"5b43ab96e417d50d21765ad15be902d4"},{url:"/locales/en/Custom404.json",revision:"6a0a2254eaace9de7dbdcc07dbfbac27"},{url:"/locales/en/Custom500.json",revision:"0ca719c44939c82d57e73219e8f5a807"},{url:"/locales/en/PostCard.json",revision:"190eb61937e2dde58b0b7a24d522d674"},{url:"/locales/en/about.json",revision:"8be7947a01ea4bada412d7ab9f61b8e0"},{url:"/locales/en/article.json",revision:"9817526313985ca753d8c3b1f3af57de"},{url:"/locales/en/blog.json",revision:"da5b9d3fa211609828c107dd10a95c3e"},{url:"/locales/en/common.json",revision:"05825b7abdb0de8aadf8be3af16d83cb"},{url:"/locales/en/contactUs.json",revision:"99cec96ae6f81ff79a85a44dd4d265b5"},{url:"/locales/en/cookieBanner.json",revision:"8b9efd75a9ed1780d59ee61fa0ebdc3c"},{url:"/locales/en/footer.json",revision:"272d0a6d48c6606e5f8398802bbb849f"},{url:"/locales/en/heroSection.json",revision:"1e79d1ce7d0b1d4da33587ccf5579164"},{url:"/locales/en/home.json",revision:"78371f9f690294cc7f5724540c22b48c"},{url:"/locales/en/maintenance.json",revision:"4efcafef852d238a2ca638e62642d35d"},{url:"/locales/en/menu.json",revision:"b815eb989f76180a75a48612b521341d"},{url:"/locales/en/navigation.json",revision:"d6e4c93c8c1d2a3d4f24852c223e9c18"},{url:"/locales/en/privacy-policy.json",revision:"b59c9ffb32290fbfaa4f65028ef2f098"},{url:"/locales/en/productPage.json",revision:"f5e6810926ece079cb05d4aeaa2ebf04"},{url:"/locales/en/products.json",revision:"450b834eda698be9ec542e7c3a6a002b"},{url:"/locales/en/terms.json",revision:"5c94abfddd171d377be0eabf52ba062a"},{url:"/locales/hr/Custom404.json",revision:"3a537d19612452c919fef3b9aa8d1c2a"},{url:"/locales/hr/Custom500.json",revision:"adc3cbeb8ea12db3a110a75bd0d99252"},{url:"/locales/hr/PostCard.json",revision:"44aeba3f15ece797a9635b97ba4c9155"},{url:"/locales/hr/about.json",revision:"0242370bfddbf71c3b158fd06e461079"},{url:"/locales/hr/article.json",revision:"13fc5616d37306a7ae2545ae15abd156"},{url:"/locales/hr/blog.json",revision:"8927b99021672bb37bed643398c33e44"},{url:"/locales/hr/common.json",revision:"1c4654de0d19a9752b257b6df9c67d17"},{url:"/locales/hr/contactUs.json",revision:"00f4a0c645d824e35ca430ec468857e9"},{url:"/locales/hr/cookieBanner.json",revision:"9e1cc578ae1dac297f5eea24b57eadf9"},{url:"/locales/hr/footer.json",revision:"eead331039f0a35c22c2d5bd81469ac0"},{url:"/locales/hr/heroSection.json",revision:"032a1cd60114e6b2c5dc05ae7a09415a"},{url:"/locales/hr/home.json",revision:"bff895cae5763f262fdd532eb24ae11a"},{url:"/locales/hr/maintenance.json",revision:"9850f88cc0b13f969584fc0335a2bb2b"},{url:"/locales/hr/menu.json",revision:"772b152ff751a215332aba64a16f2197"},{url:"/locales/hr/navigation.json",revision:"3f6f30c7a153d402abea299daa816423"},{url:"/locales/hr/privacy-policy.json",revision:"5e19f587327331c6858cc5b1797e074b"},{url:"/locales/hr/productPage.json",revision:"0fa9f29443eb98e1e37ccb8bb7b7719d"},{url:"/locales/hr/products.json",revision:"9f25b3add8c2471028e2e28c1d5cb70b"},{url:"/locales/hr/terms.json",revision:"09b165151551d26a36628f69fd63832e"},{url:"/manifest.json",revision:"09a17f5b2d6c8e41931fd2e2b17bbca9"},{url:"/robots.txt",revision:"bbbcde0b15cabd06aace1df82d335978"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
