(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1022:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(t),b=a,g=m["".concat(i,".").concat(b)]||m[b]||d[b]||o;return t?r.a.createElement(g,p(p({ref:n},c),{},{components:t})):r.a.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},450:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),o=(t(0),t(1022)),i={},p={unversionedId:"TimPengembang/Pemaket/PanduanPaketImpor/python-django",id:"TimPengembang/Pemaket/PanduanPaketImpor/python-django",isDocsHomePage:!1,title:"python-django",description:"Panduan Paket Impor  python-django",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPaketImpor/python-django.md",slug:"/TimPengembang/Pemaket/PanduanPaketImpor/python-django",permalink:"/TimPengembang/Pemaket/PanduanPaketImpor/python-django",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPaketImpor/python-django.md",version:"current"},u=[{value:"Panduan Paket Impor # python-django",id:"panduan-paket-impor--python-django",children:[]}],c={rightToc:u};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"panduan-paket-impor--python-django"},"Panduan Paket Impor # python-django"),Object(o.b)("p",null,"Pada repositori ubuntu, paket python-django berada di dalam kategori universe.\nKarena paket ini akan digunakan oleh BlankOn, maka perlu diturunkan agar masuk\nke dalam repositori BlankOn sehingga pengguna BlankOn tidak perlu menggunakan\nrepository universe maupun multiverse milik Ubuntu.\nProses BlankOnisasi:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Tambahkan versi -0blankon1 pada debian/changelog"),Object(o.b)("li",{parentName:"ol"},"Tambahkan maintainer BlankOn pada debian/control")),Object(o.b)("p",null,"Last modified on 06/28/2008 12:47:14 AM"),Object(o.b)("hr",null))}l.isMDXComponent=!0}}]);