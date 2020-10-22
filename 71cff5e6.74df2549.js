(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1022:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var a=r.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},b=function(e){var a=c(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(n),m=t,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,l(l({ref:a},u),{},{components:n})):r.a.createElement(d,l({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},485:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return c}));var t=n(2),r=n(6),i=(n(0),n(1022)),o={},l={unversionedId:"TimPengembang/Dokumentasi/Draf/InstallProgramTarBz2",id:"TimPengembang/Dokumentasi/Draf/InstallProgramTarBz2",isDocsHomePage:!1,title:"InstallProgramTarBz2",description:"Memasang paket dari berkas Tar.bz2",source:"@site/Wiki/TimPengembang/Dokumentasi/Draf/InstallProgramTarBz2.md",slug:"/TimPengembang/Dokumentasi/Draf/InstallProgramTarBz2",permalink:"/TimPengembang/Dokumentasi/Draf/InstallProgramTarBz2",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Draf/InstallProgramTarBz2.md",version:"current"},s=[],u={rightToc:s};function c(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"memasang-paket-dari-berkas-tarbz2"},"Memasang paket dari berkas Tar.bz2"),Object(i.b)("p",null,"Di BlankOn anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai format tar.bz2 (Tarball)."),Object(i.b)("h5",{id:"studi-kasus"},"Studi Kasus"),Object(i.b)("p",null,"Apabila kita ingin mengingankan memasang paket \u200bwine maka caranya adalah:"),Object(i.b)("h5",{id:"unduh-paket"},"Unduh paket"),Object(i.b)("p",null,"Unduh paket dari server\n",Object(i.b)("inlineCode",{parentName:"p"},"$ wget -c http://easynews.dl.sourceforge.net/sourceforge/wine/wine-0.9.54.tar.bz2")),Object(i.b)("h5",{id:"ekstrak-berkas"},"Ekstrak berkas"),Object(i.b)("p",null,"Ekstrak berkas instalasi supaya dapat di kompile\n",Object(i.b)("inlineCode",{parentName:"p"},"$ tar -xjvf wine-0.9.54.tar.bz2")),Object(i.b)("h5",{id:"pasang-berkas"},"Pasang Berkas"),Object(i.b)("p",null,"Pasang berkas wine dalam sistem anda, di anjurkan untuk memasang paket build-essential terlebih dahulu\n$ cd wine\n$ sudo apt-get install build-essential\n$ sudo ./configure\n$ sudo make\n$ sudo make install"),Object(i.b)("p",null,"dalam beberapa kasus, berkas installer tarball telah dikompile dan tidak memerlukan proses ./configure. untuk itu silakan lihat Panduan Installlasi\nnya yang biasanya bernama README atau INSTALL."),Object(i.b)("p",null,"Last modified on 09/23/2008 08:17:29 PM"),Object(i.b)("hr",null))}c.isMDXComponent=!0}}]);