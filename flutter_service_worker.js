'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "047ce2d803195b561777704fa827c971",
".git/config": "31e7206ac5d32060d5ae07de2f7d2608",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e82ca1bb567ed53bf960a5b17ffdffa3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1fa0ba7267444a72e8efb640cbd1ec73",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c7a16372489ea5e312631b9839271382",
".git/logs/refs/heads/main": "eb349a720a11e9a3b5a49ed048cb2ce8",
".git/logs/refs/remotes/origin/main": "6ce9771ebb9d001f4e7df86281f86aad",
".git/logs/refs/remotes/origin/master": "8cd4b6799e45c1c836e3bd7930d277e8",
".git/logs/refs/remotes/sendpesaa/main": "19aaaef90c92d311e6f9a00c74d92ce0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/9cb0cf545b45d9d0a9b051746378c813676276": "8f6160a5fcd14132601637b4ead0eff0",
".git/objects/05/de77baab81b0445ac35916d05cea6ce68912db": "010894493dbeaee265ea34c879810c2b",
".git/objects/0a/1cfa58121f7b03a01a5173ad262b660cbae71e": "f6c962dadb305524ccb631c8e5f1ad48",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/18/13646cc33bae00bdcf64bf8fbb87c6a21980c1": "3e340457769782bf4d94568f17e363c5",
".git/objects/1c/8854e51b8d87f18fdc30554eeb4f96838eb45e": "8fafb52f58dd354b21e90abfe6fa20f4",
".git/objects/23/48ab8d151a05e04cd078b5a1d01ad20b9746b4": "5ca71b44d5ebb7615c406526bb7c11c5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/4b37dbef6ee336963317d7ad2d2f558bb028fc": "fb861f94efa5bbb1735aa687a9d6e25c",
".git/objects/34/4d4cab7df1c9a3e3c7295412994a743be3b694": "49f09c5b3914d1eb2a6658002c93333d",
".git/objects/34/a57152c3da62a2d96a762fb99a887180924fd1": "b55212518ec87ee07e597cbe461e1a98",
".git/objects/35/6e96432d8b653a744b5e3e5443fe0104152ac1": "123e76f999b62027b28334da3c5a8c63",
".git/objects/3e/0f4ea002f6cd64a064f01cbed826c2a63046ab": "4dd42bd16f0e43e8bd16417dfe37d98b",
".git/objects/46/22261609290a8efab992c89d2a87c22819ac11": "bbbc940c2216584655f27db424c5c50b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/49/83d8d522f856ea3463ade089a915fb50d1da0a": "bd6d6b8873cc520c0e4ae437378654cb",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/46aa8274d43c37dc137b7f1a860d4c1fe29e91": "c5e5beae6f3a1f92640616faec2aaf6b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/55/c73023d79bc2bf8f92f4833aec08623e572e6e": "0f9b8143f38b92eb4201e30494a8c076",
".git/objects/5d/e17a11100d4164f2c1a07fbcba9020a44b4009": "91da744e531d42d887276a0e8d945572",
".git/objects/60/d27b45d5124edeae24f17c7716315c84e3c8f0": "a55eb1c0768a13d12bbefde411f21cf0",
".git/objects/66/0a3ebaf06e07b9fd73155ca3ee065f77da4195": "d6b3622f1d4f720862f8225329c7f2ff",
".git/objects/6b/9f45171662ba9c49520c2e9025bbb150639da5": "12bc9ae3055b7fe69c5c3cd54fecdc27",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/1cfce9b0a622bb43593bd5b998093da9de4d90": "a9ed0173be587a47e04ff8590d1a1049",
".git/objects/79/256645b3414766a44e0fccd40559c7508c99cd": "6233660597b62a07b8c1e5e6e9bb2b55",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/df033f9604bfc54554d5845bfecf46c6667224": "a2bed0889c85a9673f1c6ebd2016b3a3",
".git/objects/7c/086d1ba1d5be10b38a96c39aa7da27e9dfe725": "2d7ca2170aa5fdbdef8d643d74f0884b",
".git/objects/7d/ac7c2368968987d5a9d3f0a85061e440d8db80": "756ccc29e309104d99af9ff235fee111",
".git/objects/87/462b7e550e538ea2a1d53b7eb33675da663b3a": "0a172554dc1a5e6356b558d9c6a57508",
".git/objects/88/6b8d9a22acee8931542fdc14817ba9b3186cb6": "649891e1ca12f36bb67afbf4e088a766",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/4232e10683c91314d2917a16ebea9420e2796f": "d4a6a6bdd588ba6dd57eb55cd172244c",
".git/objects/90/465f08b94a62853770cba6d9734d0d361bf5f8": "114befc6a3e5a40beabaaedf40b4bab9",
".git/objects/a0/70041f3dbd4c7e254e41047921c83448c50eab": "a730f62f7d049067577a0709aeba4810",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/e406d66bf05f0bb6e928fbaff5b512446265b1": "d8b715ed653247123f1da8aefb219c0d",
".git/objects/a4/9974de577fb254311665aedfa8b706c9ec853f": "e251ae79d0fe235f8e41a3c0911de4b1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/948d56fe7f6526ce57be5a6cd135754edaf1da": "e1fe48babd20b74a9c3df7107b915f51",
".git/objects/af/8ec7de6779f9bdb866b54ab3ef3434e54949aa": "00c9227e6e2393345acfd25006599796",
".git/objects/b0/e935c0831e41a10e4b45af7892cda35add255a": "62da4aff80cd3d5bd7ffa3ce87f47c14",
".git/objects/b1/09ddf8a2e61dd5ee15ec30af2a4fe70cd4245c": "7e92c8bbe65191fa963c55c570955a47",
".git/objects/b5/5f65cac65cc37e7829fcc1687800de024c2d7a": "be70721115feb5565c1dc74f31d656fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/a9a4141adaa306b1da587354ee90f63f112961": "25bed85207bd69101c5e11f68a42a652",
".git/objects/c2/069aeeaeebe3032108452b0fd5f7e8cdee8d42": "c16c46ebc0abdb498a6e3e1d1ad1d4e9",
".git/objects/c7/f97aa97aa38b494fdab9dcfebf2fe7144da143": "d183142505a514eb408cf7aaa71021b4",
".git/objects/c8/e052089aff263f39f83e5cdbcb0bffeaa63b9e": "2072a0a0f74f1b39c56cc6783cab23a3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/d4ed178ccb17037fe9d12a7a0695abe5dbb2b7": "a0cb58fae8546bb874526793f3c2ee13",
".git/objects/d3/e3563fe1766633c9b56b7cb7b9143d8f7091d4": "6d610b9473d6a269618d177429ad0826",
".git/objects/d5/6c23fc5bb85ef6888704c13bf9e67f71a22d35": "8a4642bb61eab069ca3899d631bea5d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/020e8d49bb2ec5190dc07a1ee7cfd91c4103da": "ce253d61f7bc615579ef62ed96763116",
".git/objects/dd/c5f6b7acd916924d03d8595780ac8f186ec1e8": "3f08217ae715a23dc985ab3cd67da4e4",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e2/88ce722c7298cb38b24d4395d1b3ad2f02104f": "243d30153871566c5749f34dbd0adf3d",
".git/objects/e4/a5d27f59bf6aa75feb987fc40e3b5d78cd19b9": "415ff96cbb0ae57a85e504e2691c9032",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/4510ed5a63e6098761102357f7b6d2dc0cf3cb": "24027d0373abc1fedb6a2509faa9ad06",
".git/objects/fa/c716f99d2b09c90e0a013e36473dae764b4a85": "1bb6576b9f146b4a78b75754fe2fbc91",
".git/ORIG_HEAD": "a767705992798e513f7882d98e973b9e",
".git/refs/heads/main": "a767705992798e513f7882d98e973b9e",
".git/refs/remotes/origin/main": "36841b2c5ba25e5f5b98695684c51796",
".git/refs/remotes/origin/master": "a767705992798e513f7882d98e973b9e",
".git/refs/remotes/sendpesaa/main": "07b98d4cf2d38e586a177af66b9b289b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/banner.svg": "62dceabaccfb704a294665048b36f8a0",
"assets/images/creditcardperson.svg": "f35e3eff3e304b7ba47dde4e574a8503",
"assets/images/logo.svg": "a54800c8fdf1ef6a1bc0bda2744aca2e",
"assets/images/magnetpeople.svg": "434761dc00b46148c336cddf8f342077",
"assets/NOTICES": "d4baa64e6a1f0b822f2fed90a2f85d38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ceeb32455d0dfe61504add429b120d50",
"/": "ceeb32455d0dfe61504add429b120d50",
"main.dart.js": "b81430919bde19c8a49980936f8541b8",
"manifest.json": "c62424769738118d6d59cdfa87cf379b",
"version.json": "c7f1f72a0a7a550cb1681fe5a70145e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
