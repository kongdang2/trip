/* 출장 관리 오프라인 캐시 (2026-10-18). 화면 파일만 보관하고 데이터는 cloud.js가 localStorage에 둔다.
   인터넷이 느리거나 끊기면 5초 뒤 저장해 둔 화면을 쓰고, 연결되면 뒤에서 새 버전으로 바꿔 둔다. */
const C='trip-shell-v1';
const CORE=['./','./index.html','./trip.config.js','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png'];
const IDX=new URL('index.html',self.registration.scope).href;
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('trip-shell-')&&k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request,u=new URL(req.url);
  if(req.method!=='GET'||u.origin!==location.origin||!u.href.startsWith(self.registration.scope)||u.pathname.includes('/__files/'))return;
  const key=req.mode==='navigate'||u.pathname.endsWith('/index.html')?IDX:u.origin+u.pathname;
  const net=fetch(req).then(r=>{if(r&&r.ok&&r.type==='basic'){const cp=r.clone();caches.open(C).then(c=>c.put(key,cp))}return r});
  e.waitUntil(net.then(()=>{},()=>{}));
  e.respondWith(caches.open(C).then(c=>c.match(key)).then(hit=>{
    if(!hit)return net;
    return Promise.race([net.then(r=>r.ok?r:hit,()=>hit),new Promise(res=>setTimeout(()=>res(hit),5000))]);
  }));
});
