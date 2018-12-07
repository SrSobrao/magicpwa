/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
    name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
    [
        './build/main.js',
        './build/vendor.js',
        './build/main.css',
        './build/polyfills.js',
        './assets/css/mana.mmin.css',
        './assets/imgs/Back.jpg',
        './assets/imgs/bgloading.jpg',
        './assets/imgs/Loading_icon.gif',
        './assets/fonts/mana.eot',
        './assets/fonts/mana.svg',
        './assets/fonts/mana.ttf',
        './assets/fonts/mana.woff',
        './assets/fonts/mana.woff2',
        './assets/fonts/mplatin.eot',
        './assets/fonts/mplatin.svg',
        './assets/fonts/mplatin.ttf',
        './assets/fonts/mplatin.woff',
        'index.html',
        'manifest.json'
    ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;