/* eslint-disable no-console */
// sw.js

// install event
window.addEventListener('install', () => {
  console.log('[Service Worker] installed')
})

// activate event
window.addEventListener('activate', e => {
  console.log('[Service Worker] actived', e)
})

// fetch event
window.addEventListener('fetch', e => {
  console.log(`[Service Worker] fetched resource ${e.request.url}`)
})
