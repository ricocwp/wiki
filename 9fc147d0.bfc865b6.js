(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1022:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=p(t),s=a,d=c["".concat(b,".").concat(s)]||c[s]||m[s]||i;return t?r.a.createElement(d,u(u({ref:n},o),{},{components:t})):r.a.createElement(d,u({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,b=new Array(i);b[0]=s;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,b[1]=u;for(var o=2;o<i;o++)b[o]=t[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},653:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(1022)),b={},u={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/OmbilinKePattimura",id:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/OmbilinKePattimura",isDocsHomePage:!1,title:"OmbilinKePattimura",description:"Panduan Menaikkan Versi BlankOn Ombilin ke Pattimura",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/OmbilinKePattimura.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/OmbilinKePattimura",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/OmbilinKePattimura",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/OmbilinKePattimura.md",version:"current"},l=[{value:"Ombilin",id:"ombilin",children:[]},{value:"Pattimura",id:"pattimura",children:[]}],o={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-menaikkan-versi-blankon-ombilin-ke-pattimura"},"Panduan Menaikkan Versi BlankOn Ombilin ke Pattimura"),Object(i.b)("h3",{id:"ombilin"},"Ombilin"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Perbaharui lumbung paket BlankOn di /etc/apt/sources.list. Isi berkas\ntersebut dengan baris-baris berikut :\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," ombilin main restricted\nextras extras-restricted\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," ombilin-updates main\nrestricted extras extras-restricted\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," ombilin-security main\nrestricted"),Object(i.b)("li",{parentName:"ul"},"Perbarui basis data lumbung aplikasi\n",Object(i.b)("inlineCode",{parentName:"li"},"$ sudo apt-get update")),Object(i.b)("li",{parentName:"ul"},"Naikan versi\n",Object(i.b)("inlineCode",{parentName:"li"},"$ sudo apt-get upgrade"))),Object(i.b)("h3",{id:"pattimura"},"Pattimura"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Perbarui sources.list, ganti ombilin menjadi pattimura, Isi berkas\ntersebut dengan baris-baris berikut :\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," pattimura main restricted\nextras extras-restricted\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," pattimura-updates main\nrestricted extras extras-restricted\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://arsip.blankonlinux.or.id/blankon"}),"http://arsip.blankonlinux.or.id/blankon")," pattimura-security main\nrestricted extras extras-restricted")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Perbarui basis data lumbung aplikasi\n",Object(i.b)("inlineCode",{parentName:"p"},"$ sudo apt-get update"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Pasang blankon-desktop Pattimura\n",Object(i.b)("inlineCode",{parentName:"p"},"$ sudo apt-get install blankon-desktop"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Naikan Ombilin menjadi Pattimura\n",Object(i.b)("inlineCode",{parentName:"p"},"$ sudo apt-get dist-upgrade"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Selesai"))),Object(i.b)("p",null,"Last modified on 08/17/2011 01:21:39 AM"),Object(i.b)("hr",null))}p.isMDXComponent=!0}}]);