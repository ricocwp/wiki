(window.webpackJsonp=window.webpackJsonp||[]).push([[865],{1027:function(n,e,a){"use strict";a.d(e,"a",(function(){return p})),a.d(e,"b",(function(){return b}));var t=a(0),r=a.n(t);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function u(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function d(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)a=i[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var c=r.a.createContext({}),l=function(n){var e=r.a.useContext(c),a=e;return n&&(a="function"==typeof n?n(e):u(u({},e),n)),a},p=function(n){var e=l(n.components);return r.a.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(n,e){var a=n.components,t=n.mdxType,i=n.originalType,o=n.parentName,c=d(n,["components","mdxType","originalType","parentName"]),p=l(a),m=t,b=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return a?r.a.createElement(b,u(u({ref:e},c),{},{components:a})):r.a.createElement(b,u({ref:e},c))}));function b(n,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=a.length,o=new Array(i);o[0]=m;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=n,u.mdxType="string"==typeof n?n:t,o[1]=u;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},924:function(n,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return o})),a.d(e,"metadata",(function(){return u})),a.d(e,"rightToc",(function(){return d})),a.d(e,"default",(function(){return l}));var t=a(2),r=a(6),i=(a(0),a(1027)),o={},u={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/HardyKeLontara",id:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/HardyKeLontara",isDocsHomePage:!1,title:"HardyKeLontara",description:"Panduan Pindah dari Hardy ke Lontara",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/HardyKeLontara.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/HardyKeLontara",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/HardyKeLontara",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/HardyKeLontara.md",version:"current"},d=[],c={rightToc:d};function l(n){var e=n.components,a=Object(r.a)(n,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-pindah-dari-hardy-ke-lontara"},"Panduan Pindah dari Hardy ke Lontara"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* Ambil dan masukkan keyring repositori BlankOn ke dalam apt-key:\n  wget http://cdimage.blankonlinux.or.id/blankon-archive-keyring.gpg -O - |\n  sudo apt-key add -\n      o Aktifkan komponen main restricted universe dan multiverse milik\n        Ubuntu yang ada di /etc/apt/sources.list\n      o Masukkan repositori BlankOn ke /etc/apt/sources.list\n        deb http://arsip.blankonlinux.or.id/blankon lontara main restricted\n        deb http://arsip.blankonlinux.or.id/blankon lontara-updates main\n        restricted\n        deb http://security.blankonlinux.or.id/blankon lontara-security\n        main restricted\n      o Perbarui basis data paket\n        sudo apt-get update\n      o Naikkan versi\n        sudo apt-get upgrade\n      o Install blankon-desktop untuk varian Standar dan jawab Ya untuk\n        semua pertanyaan.\n        sudo apt-get install blankon-desktop\n      o Install blankon-desktop-minimalist untuk varian Minimalis dan jawab\n        Ya untuk semua pertanyaan.\n        sudo apt-get install blankon-desktop-minimalist\n")),Object(i.b)("p",null,"Last modified on 06/09/2008 01:32:26 PM"))}l.isMDXComponent=!0}}]);