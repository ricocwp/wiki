(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1022:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return k}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},s=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=m(a),p=n,k=s["".concat(o,".").concat(p)]||s[p]||c[p]||r;return a?i.a.createElement(k,u(u({ref:t},l),{},{components:a})):i.a.createElement(k,u({ref:t},l))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var u={};for(var b in t)hasOwnProperty.call(t,b)&&(u[b]=t[b]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},359:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(2),i=a(6),r=(a(0),a(1022)),o={},u={unversionedId:"TimPengembang/Dokumentasi/MembuatLiveCD",id:"TimPengembang/Dokumentasi/MembuatLiveCD",isDocsHomePage:!1,title:"MembuatLiveCD",description:"Membuat Live Cd",source:"@site/Wiki/TimPengembang/Dokumentasi/MembuatLiveCD.md",slug:"/TimPengembang/Dokumentasi/MembuatLiveCD",permalink:"/TimPengembang/Dokumentasi/MembuatLiveCD",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/MembuatLiveCD.md",version:"current"},b=[],l={rightToc:b};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"membuat-live-cd"},"Membuat Live Cd"),Object(r.b)("p",null,"1.Penyiapan sistem dasar (bootstrap)\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PenyiapanSistemDasar"}),"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PenyiapanSistemDasar")," "),Object(r.b)("p",null,"2.Instalasi paket blankon-desktop (atau blankon-desktop-minimalis)\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiPaketMeta"}),"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiPaketMeta")),Object(r.b)("p",null,"3.Instalasi kernel\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiKernel"}),"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiKernel")," "),Object(r.b)("p",null,"4.Instalasi paket tambahan (ubiquity dkk) yang ada di kategori live di bibit paket"),Object(r.b)("p",null,"5.Pembuatan sistem berkas bertipe squashfs\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/MembuatSquashfs"}),"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/MembuatSquashfs")," "),Object(r.b)("p",null," 6.Instalasi bootloader (syslinux atau grub)\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiBootloader"}),"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiBootloader")," "),Object(r.b)("p",null," 7.Pembuatan ISO\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PembuatanISO"}),"http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PembuatanISO")," "),Object(r.b)("p",null,"8.Tertib "),Object(r.b)("p",null,"PS: spesial thanks to mdamt. he is the one. :D"),Object(r.b)("p",null,"Penulis:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Nur Kholis Majid"),Object(r.b)("li",{parentName:"ul"},"Mahyuddin Susanto (revisi) ")),Object(r.b)("hr",null))}m.isMDXComponent=!0}}]);