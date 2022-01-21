
<<<<<<< HEAD
const staticCacheName = 'version-40';
// const assets = ["../src/pages/evaluator/forms.js", "../src/pages/evaluator/form.js", "../src/pages/evaluator/create.js"];    

var assets = ["aa.html", "bb.html"]
=======
// const staticCacheName = 'version-25';
// const assets = [ '../src/pages/evaluator/create.js', '../src/pages/evaluator/form.js', '../src/pages/evaluator/forms.js',]


const staticCacheName = 'site-static-v2'
const dynamicCacheName = 'site-dynamic-v1'
const assets = []

>>>>>>> 6fe6ed248a9413e93de88178a112814257098d2c

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
<<<<<<< HEAD
        .filter(key => key !== staticCacheName)
=======
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
>>>>>>> 6fe6ed248a9413e93de88178a112814257098d2c
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
<<<<<<< HEAD
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
=======
	
  if (!(evt.request.url.indexOf('http') === 0)) return;
	
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
>>>>>>> 6fe6ed248a9413e93de88178a112814257098d2c
    })
  );
});


<<<<<<< HEAD
=======



>>>>>>> 6fe6ed248a9413e93de88178a112814257098d2c
