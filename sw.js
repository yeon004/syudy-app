const CACHE_NAME = "looply-v1";

self.addEventListener('install', (event) => {
    console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
    // 그냥 통과 (기본 네트워크 요청)
});