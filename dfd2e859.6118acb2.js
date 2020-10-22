(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1022:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return O}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function b(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?b(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),l=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=l(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=l(r),s=t,O=p["".concat(b,".").concat(s)]||p[s]||m[s]||i;return r?a.a.createElement(O,u(u({ref:n},o),{},{components:r})):a.a.createElement(O,u({ref:n},o))}));function O(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,b=new Array(i);b[0]=s;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,b[1]=u;for(var o=2;o<i;o++)b[o]=r[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},914:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return b})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var t=r(2),a=r(6),i=(r(0),r(1022)),b={},u={unversionedId:"TimPengembang/Infrastruktur/MembuatCerminBlankOn",id:"TimPengembang/Infrastruktur/MembuatCerminBlankOn",isDocsHomePage:!1,title:"MembuatCerminBlankOn",description:"Membuat Cermin BlankOn",source:"@site/Wiki/TimPengembang/Infrastruktur/MembuatCerminBlankOn.md",slug:"/TimPengembang/Infrastruktur/MembuatCerminBlankOn",permalink:"/TimPengembang/Infrastruktur/MembuatCerminBlankOn",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/MembuatCerminBlankOn.md",version:"current"},c=[],o={rightToc:c};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},o,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"membuat-cermin-blankon"},"Membuat Cermin BlankOn"),Object(i.b)("p",null,"berikut ini adalah langkah untuk membuat cermin BlankOn,"),Object(i.b)("p",null,"pertama siapkan reprepro"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ sudo apt-get install reprepro\n")),Object(i.b)("p",null,"kemudian buat distribusi BlankOn, pasang konfigurasi untuk melakukan pembaruan dari arsip.boi"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ mkdir ~/repo/bulangkon\n$ cd ~/repo/bulangkon\n")),Object(i.b)("p",null,"trus bikin berkas2 berikut:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ vim conf/updates\n")),Object(i.b)("p",null,"isinya"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"-----------------awal----------\nName: mergeblankon\nSuite: ombilin\nMethod: http://arsip.blankonlinux.or.id/blankon\nArchitectures: i386 amd64 source\nComponents: main restricted\n-----------------akhir----------\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ vim conf/distributions\n")),Object(i.b)("p",null,"isinya"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"-----------------awal----------\nOrigin: BlankOn\nLabel: BlankOn\nVersion: 6.0\nSuite: ombilin\nCodename: ombilin\nArchitectures: i386 amd64 source\nComponents: main restricted\nDescription: Ombilin\nUpdate: - mergeblankon\n-----------------akhir----------\n")),Object(i.b)("p",null,"kemudian jalankan reprepro"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ reprepro -v -v -v update\n")),Object(i.b)("p",null,"lakukan setiap hari/atau jika ingin ada perubahan, kemudian pasang skrip pabrik-cd rujukan ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/browser/infrastruktur/pabrik-cd"}),"http://dev.blankonlinux.or.id/browser/infrastruktur/pabrik-cd")),Object(i.b)("p",null,"Untuk membuat cabang:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ bzr branch http://dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/\n")),Object(i.b)("p",null,"Untuk memperbaharui:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/\n")),Object(i.b)("p",null,"kemudian di profil pasang repo lokal"),Object(i.b)("p",null,"kemudian Jahit"),Object(i.b)("hr",null))}l.isMDXComponent=!0}}]);