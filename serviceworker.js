(()=>{"use strict";var n,t,e,a,i,c,r,s,o,l,f,g,u,p,m,h,d,v,w,y,A,x;v=function(n){return console.log(`[serviceworker] ${n}`)},t="ARZT-PWA_app",a=["ARZT-PWAmain","ARZT-PWAimages","ARZT-PWAfonts"],s=["/","/argon2worker.js","/manifest.json","/img/icon.png","/img/sustsol_logo.png","/img/document_certificate.png","/img/icon_bild.gif"],A=["/android-chrome-96x96.png","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon.ico","/favicon-16x16.png","/favicon-32x32.png","/mstile-70x70.png","/mstile-144x144.png","/mstile-150x150.png","/mstile-310x150.png","/mstile-310x310.png","/safari-pinned-tab.svg"],o=/.(o|t)tf$|.woff2?$/,p=/.png$|.jpg$|.jpeg$|.webp$|.gif$/,x={ignoreSearch:!0},y=function(){self.addEventListener("activate",n),self.addEventListener("fetch",r),self.addEventListener("install",h),self.addEventListener("message",w)},n=function(n){n.waitUntil(self.clients.claim())},r=function(n){n.respondWith(e(n.request))},h=function(n){self.skipWaiting(),n.waitUntil(m())},w=async function(n){var t,e,a,i;if("tellMeVersion"===n.data)for(i={version:"v0.0.2"},e=0,a=(t=await self.clients.matchAll({includeUncontrolled:!0})).length;e<a;e++)t[e].postMessage(i)},m=async function(){try{return await i(a),(await caches.open(t)).addAll(s)}catch(n){}},e=async function(n){var t;try{t=await caches.match(n,x)}catch(n){v(n)}return null!=t?t:f(n)},i=async function(n){var t,e,a;for(t=0,e=n.length;t<e;t++)a=n[t],caches.delete(a);try{return await Promise.all(promises)}catch(n){}},f=function(n){var t;return t=new URL(n.url),d(t.pathname)?l(n):o.test(t.pathname)?g(n):p.test(t.pathname)?u(n):fetch(n)},l=async function(n){try{return await c(n,t)}catch(n){}},u=async function(n){try{return await c(n,imageCacheName)}catch(n){}},g=async function(n){try{return await c(n,"ARZT-PWA_fonts")}catch(n){}},c=async function(n,t){var e,a;return e=await caches.open(t),a=await fetch(n),e.put(n,a.clone()),a},d=function(n){return!!A.includes(n)},y()})();