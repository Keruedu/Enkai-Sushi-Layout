// Simple service worker for caching static assets
const CACHE_NAME = 'sushi-demo-v1';
const STATIC_ASSETS = [
  '/',
  '/src/assets/images/logo.png',
  '/src/assets/images/footer-logo.png',
  '/src/assets/images/group.png',
  '/src/assets/images/banner1.png',
  '/src/assets/images/banner2.png',
  '/src/assets/images/footer-pattern.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.warn('Service Worker: Failed to cache assets', error);
      })
  );
});

// Fetch event - serve cached assets when offline
self.addEventListener('fetch', (event) => {
  // Only handle GET requests for images
  if (event.request.method === 'GET' && 
      (event.request.url.includes('/assets/images/') || 
       event.request.url.includes('.png') || 
       event.request.url.includes('.jpg') || 
       event.request.url.includes('.jpeg'))) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Return cached version or fetch from network
          return response || fetch(event.request);
        })
        .catch(() => {
          // Fallback for offline images
          return new Response('Image not available offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
