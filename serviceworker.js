(()=>{"use strict";var n,t,e,a,i,c,s,r,o,f,l,u,p,g,h,d,v,m,w,y;d=function(n){return console.log(`[serviceworker] ${n}`)},a=[t="ARZT-PWA_app","ARZT-PWA_fonts"],r=["/","/argon2worker.js","/manifest.json","/img/icon.png","/img/sustsol_logo.png","/img/document_certificate.png","/img/icon_bild.gif"],w=["/apple-touch-icon.png","/favicon.svg","/favicon.ico","/favicon-96x96.png","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png"],o=/.(o|t)tf$|.woff2?$/,y={ignoreSearch:!0},m=function(){self.addEventListener("activate",n),self.addEventListener("fetch",s),self.addEventListener("install",g),self.addEventListener("message",v)},n=function(n){n.waitUntil(self.clients.claim())},s=function(n){"GET"===n.request.method&&n.respondWith(e(n.request))},g=function(n){self.skipWaiting(),n.waitUntil(p())},v=async function(n){var t,e,a,i;if("tellMeVersion"===n.data)for(i={version:"v0.0.27"},e=0,a=(t=await self.clients.matchAll({includeUncontrolled:!0})).length;e<a;e++)t[e].postMessage(i)},p=async function(){try{return await i(a),(await caches.open(t)).addAll(r)}catch(n){}},e=async function(n){var t;try{t=await caches.match(n,y)}catch(n){d(n)}return null!=t?t:l(n)},i=async function(n){var t,e,a;for(t=0,e=n.length;t<e;t++)a=n[t],caches.delete(a);try{return await Promise.all(promises)}catch(n){}},l=function(n){var t;return t=new URL(n.url),h(t.pathname)?f(n):o.test(t.pathname)?u(n):fetch(n)},f=async function(n){try{return await c(n,t)}catch(n){}},u=async function(n){try{return await c(n,"ARZT-PWA_fonts")}catch(n){}},c=async function(n,t){var e,a;return e=await caches.open(t),a=await fetch(n),e.put(n,a.clone()),a},h=function(n){return!!w.includes(n)},m()})();