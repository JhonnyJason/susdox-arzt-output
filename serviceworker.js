(()=>{"use strict";var n,t,e,a,c,i,r,s,o,f,l,u,p,g,h,m,d,w,v,y,$,A;w=function(n){return console.log(`[serviceworker] ${n}`)},t="ARZT-PWA_app",a=[],s=["/","/argon2worker.js","/manifest.json","/img/icon.png","/img/sustsol_logo.png","/img/document_certificate.png","/img/icon_bild.gif"],$=["/apple-touch-icon.png","/favicon.svg","/favicon.ico","/favicon-96x96.png","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png"],o=/.(o|t)tf$|.woff2?$/,g=/.png$|.jpg$|.jpeg$|.webp$|.gif$/,A={ignoreSearch:!0},y=function(){self.addEventListener("activate",n),self.addEventListener("fetch",r),self.addEventListener("install",m),self.addEventListener("message",v)},n=function(n){n.waitUntil(self.clients.claim())},r=function(n){"GET"===n.request.method&&n.respondWith(e(n.request))},m=function(n){self.skipWaiting(),n.waitUntil(h())},v=async function(n){var t,e,a,c;if("tellMeVersion"===n.data)for(c={version:"v0.0.25"},e=0,a=(t=await self.clients.matchAll({includeUncontrolled:!0})).length;e<a;e++)t[e].postMessage(c)},h=async function(){try{return await c(a),(await caches.open(t)).addAll(s)}catch(n){}},e=async function(n){var t;try{t=await caches.match(n,A)}catch(n){w(n)}return null!=t?t:l(n)},c=async function(n){var t,e,a;for(t=0,e=n.length;t<e;t++)a=n[t],caches.delete(a);try{return await Promise.all(promises)}catch(n){}},l=function(n){var t;return t=new URL(n.url),d(t.pathname)?f(n):o.test(t.pathname)?u(n):g.test(t.pathname)?p(n):fetch(n)},f=async function(n){try{return await i(n,t)}catch(n){}},p=async function(n){try{return await i(n,imageCacheName)}catch(n){}},u=async function(n){try{return await i(n,"ARZT-PWA_fonts")}catch(n){}},i=async function(n,t){var e,a;return e=await caches.open(t),a=await fetch(n),e.put(n,a.clone()),a},d=function(n){return!!$.includes(n)},y()})();