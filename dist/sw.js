if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const r=e=>a(e,d),s={module:{uri:d},exports:f,require:r};i[d]=Promise.all(n.map((e=>s[e]||r(e)))).then((e=>(c(...e),f)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"db33bb721f49f0b29bd26e76e0874eb1"},{url:"946.bundle.js",revision:"cbc435a155cc44d631a17ce6c4bafa19"},{url:"app.webmanifest",revision:"455461f32f690889fe75443607f3a75e"},{url:"app~04e4ec69.bundle.js",revision:"720df3654c7587c59a918c8d5c44bc8c"},{url:"app~309f7e27.bundle.js",revision:"763a8c3b0a5bd5bc1ea08510abcbb412"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a51fa3f5.bundle.js",revision:"3762289c2ae32ba0c35afa6598a2b606"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"a41a8f0f82cb0c7c3fbbf7038c1adb66"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"bb0db3b371ad6958d0771fb2493fa655"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"4c402ddc67cbdf4d451d888611ac489d"},{url:"icons/favicon-128x128.png",revision:"79a229c7065e25cd69577832f3c8f1c3"},{url:"icons/favicon-144x144.png",revision:"4e6f08f1129b99019a814de60f0d1dd8"},{url:"icons/favicon-152x152.png",revision:"ff7463c9e12ae26e84a99d6210facb8d"},{url:"icons/favicon-192x192.png",revision:"a2deb81aaa506cbb99385b3d1974a4bd"},{url:"icons/favicon-384x384.png",revision:"3430fc5d662b0afd8ff90b25600e5420"},{url:"icons/favicon-512x512.png",revision:"41dd9ac6ca5781e884e216bf301088da"},{url:"icons/favicon-72x72.png",revision:"65b211c9b7864345551b2a9313b24290"},{url:"icons/favicon-96x96.png",revision:"8fbd7d5e83e4a4aa1a99910f6383bf93"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"c9dd910a489e00cc8cecea46c6d722ae"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"dicodingRestaurant-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"dicodingRestaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.js.map
