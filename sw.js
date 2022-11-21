if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log("Service Worker registration successful: ", registration)
        }, (err) => {
            console.log("Registration failed", err)
        })
    })
}

let cache_name = 'mysite-v1'

let urls_to_cache = [
 '/',
 '/js/script.js',
 "http://127.0.0.1:5500/?"
]

self.addEventListener('install', (e) => {
 e.waitUntil(caches.open(cache_name).then((cache) => {
  return cache.addAll(urls_to_cache)
 }) )
})
/*
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => {
     if(response)
      return response
     else
      return fetch(e.request)
    }) )
})

*/
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.open(cache_name).then((cache) => {
      // Respond with the image from the cache or from the network
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request).then((fetchedResponse) => {
            if(fetchedResponse){
                cache.put(event.request, fetchedResponse.clone());
                return fetchedResponse;
            }else{
                return fetch(event.request)

            }
        });
      });
    }));
   });