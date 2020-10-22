(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1022:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return p}));var r=a(0),t=a.n(r);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function u(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?u(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=t.a.createContext({}),d=function(e){var n=t.a.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},b=function(e){var n=d(e.components);return t.a.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},s=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=d(a),s=r,p=b["".concat(u,".").concat(s)]||b[s]||k[s]||i;return a?t.a.createElement(p,l(l({ref:n},o),{},{components:a})):t.a.createElement(p,l({ref:n},o))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,u=new Array(i);u[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var o=2;o<i;o++)u[o]=a[o];return t.a.createElement.apply(null,u)}return t.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},162:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return u})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return d}));var r=a(2),t=a(6),i=(a(0),a(1022)),u={},l={unversionedId:"TimPengembang/Infrastruktur/MenjalankanPabrikCD",id:"TimPengembang/Infrastruktur/MenjalankanPabrikCD",isDocsHomePage:!1,title:"MenjalankanPabrikCD",description:"Menjalankan pabrik CD di alynne",source:"@site/Wiki/TimPengembang/Infrastruktur/MenjalankanPabrikCD.md",slug:"/TimPengembang/Infrastruktur/MenjalankanPabrikCD",permalink:"/TimPengembang/Infrastruktur/MenjalankanPabrikCD",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/MenjalankanPabrikCD.md",version:"current"},c=[{value:"Pertama, login ke alynne menggunakan SSH",id:"pertama-login-ke-alynne-menggunakan-ssh",children:[]},{value:"Ganti user ke pabric CD :",id:"ganti-user-ke-pabric-cd-",children:[]},{value:"Selanjutnya, Pindah direktori ke pabrik-cc :",id:"selanjutnya-pindah-direktori-ke-pabrik-cc-",children:[]},{value:"Edit File konfigurasi ISO yang akan di buat, berkas file ada di uluwatu.config , di alynne untuk uluwatu sudah dikonfig ketika blankoding di Surabaya.",id:"edit-file-konfigurasi-iso-yang-akan-di-buat-berkas-file-ada-di-uluwatuconfig--di-alynne-untuk-uluwatu-sudah-dikonfig-ketika-blankoding-di-surabaya",children:[]},{value:"Terakhir, Jalankan",id:"terakhir-jalankan",children:[]}],o={rightToc:c};function d(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"menjalankan-pabrik-cd-di-alynne"},"Menjalankan pabrik CD di alynne"),Object(i.b)("p",null,"Berikut adalah tutorial untuk menjalankan Pabrik CD di alynne :"),Object(i.b)("h2",{id:"pertama-login-ke-alynne-menggunakan-ssh"},"Pertama, login ke alynne menggunakan SSH"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ ssh namauser@alynne.blankonlinux.or.id -p2222\n")),Object(i.b)("h2",{id:"ganti-user-ke-pabric-cd-"},"Ganti user ke pabric CD :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ sudo su - cdimage\n")),Object(i.b)("h2",{id:"selanjutnya-pindah-direktori-ke-pabrik-cc-"},"Selanjutnya, Pindah direktori ke pabrik-cc :"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ cd pabric-cc\n")),Object(i.b)("h2",{id:"edit-file-konfigurasi-iso-yang-akan-di-buat-berkas-file-ada-di-uluwatuconfig--di-alynne-untuk-uluwatu-sudah-dikonfig-ketika-blankoding-di-surabaya"},"Edit File konfigurasi ISO yang akan di buat, berkas file ada di uluwatu.config , di alynne untuk uluwatu sudah dikonfig ketika blankoding di Surabaya."),Object(i.b)("h2",{id:"terakhir-jalankan"},"Terakhir, Jalankan"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ ./enter.cd.blankon.sh\n")))}d.isMDXComponent=!0}}]);