(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1022:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return b}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),s=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},d=function(e){var a=s(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?n.a.createElement(b,u(u({ref:a},c),{},{components:t})):n.a.createElement(b,u({ref:a},c))}));function b(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var u={};for(var l in a)hasOwnProperty.call(a,l)&&(u[l]=a[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},659:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return u})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return s}));var r=t(2),n=t(6),i=(t(0),t(1022)),o={},u={unversionedId:"TimPengembang/Infrastruktur/PbuilderBaseTgz",id:"TimPengembang/Infrastruktur/PbuilderBaseTgz",isDocsHomePage:!1,title:"PbuilderBaseTgz",description:"Memperbarui daftar paket di dalam chroot",source:"@site/Wiki/TimPengembang/Infrastruktur/PbuilderBaseTgz.md",slug:"/TimPengembang/Infrastruktur/PbuilderBaseTgz",permalink:"/TimPengembang/Infrastruktur/PbuilderBaseTgz",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PbuilderBaseTgz.md",version:"current"},l=[{value:"Memperbarui daftar paket di dalam chroot",id:"memperbarui-daftar-paket-di-dalam-chroot",children:[]},{value:"Login ke dalam base.tgz",id:"login-ke-dalam-basetgz",children:[]},{value:"Login ke dalam base.tgz, kemudian simpan saat logout",id:"login-ke-dalam-basetgz-kemudian-simpan-saat-logout",children:[]},{value:"Login ke dalam base.tgz spesifik, kemudian simpan saat logout",id:"login-ke-dalam-basetgz-spesifik-kemudian-simpan-saat-logout",children:[]}],c={rightToc:l};function s(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"memperbarui-daftar-paket-di-dalam-chroot"},"Memperbarui daftar paket di dalam chroot"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# sudo pbuilder update\n")),Object(i.b)("h3",{id:"login-ke-dalam-basetgz"},"Login ke dalam base.tgz"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# sudo pbuilder login\n")),Object(i.b)("h3",{id:"login-ke-dalam-basetgz-kemudian-simpan-saat-logout"},"Login ke dalam base.tgz, kemudian simpan saat logout"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# sudo pbuilder login --save-after-login\n")),Object(i.b)("h3",{id:"login-ke-dalam-basetgz-spesifik-kemudian-simpan-saat-logout"},"Login ke dalam base.tgz spesifik, kemudian simpan saat logout"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# sudo pbuilder login --save-after-login --basetgz /path/to/base.tgz\n")))}s.isMDXComponent=!0}}]);