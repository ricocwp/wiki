(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{1022:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},709:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),i=(t(0),t(1022)),o={},l={unversionedId:"TimPengembang/Dokumentasi/Draf/WifiAtheros",id:"TimPengembang/Dokumentasi/Draf/WifiAtheros",isDocsHomePage:!1,title:"WifiAtheros",description:"Atheros AR5007 EG",source:"@site/Wiki/TimPengembang/Dokumentasi/Draf/WifiAtheros.md",slug:"/TimPengembang/Dokumentasi/Draf/WifiAtheros",permalink:"/TimPengembang/Dokumentasi/Draf/WifiAtheros",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Draf/WifiAtheros.md",version:"current"},c=[],s={rightToc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"atheros-ar5007-eg"},"Atheros AR5007 EG"),Object(i.b)("p",null,"Device Atheros AR5007 oleh Blankon/Ubuntu terjadi kekeliruan dalam mengenali hardware dan terdeteksi sebagai : AR242x 802.11abg Wireless PCI Express\nAdapter. Langkah-langkahnya sebagai berikut :"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Klik menu System \u2013 Administrasi \u2013 Hardware Drivers, hilangkan tanda\ncentang pada \u201cAtheros Hardware Access Layer (HAL)\u201d, lalu reboot."),Object(i.b)("li",{parentName:"ol"},"Buka terminal melalui Aplikasi \u2013 Aksesoris \u2013 Terminal. Ketik :",Object(i.b)("inlineCode",{parentName:"li"},"wget \u200bhttp://snapshots.madwifi.org/madwifi-hal-0.10.5.6/madwifi-hal-0.10.5.6- r3861-20080903.tar.gz")),Object(i.b)("li",{parentName:"ol"},"Install paket berikut dengan perintah :\n",Object(i.b)("inlineCode",{parentName:"li"},"$ sudo apt-get install build-essential")),Object(i.b)("li",{parentName:"ol"},"Jalankan langkah-langkah dibawah ini :")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"```\n  $ tar -zxvf madwifi-hal-0.10.5.6-r3861-20080903.tar.gz\n  $ cd madwifi-hal-0.10.5.6-r3861-20080903/\n  $ make\n  $ sudo make install\n  $ sudo modprobe ath_pci\n```\n")),Object(i.b)("p",null,"Setelah itu, edit file /etc/rc.local :\n",Object(i.b)("inlineCode",{parentName:"p"},"$ sudo gedit /etc/rc.local"),'\nTambahkan di baris terakhir (sebelum baris "exit 0"), biar modul atheros bisa\ndijalankan tiap system dimulai : modprobe ath_pci\n',Object(i.b)("inlineCode",{parentName:"p"},"$ sudo reboot")),Object(i.b)("p",null,"Silahkan mencobanya ....\nKalau lednya belum bisa nyala (seperti di Aspire 4520 dan saudaranya) bisa\nmelakukan langkah seperti ini :\n",Object(i.b)("inlineCode",{parentName:"p"},"$ sudo gedit /etc/sysctl.conf")),Object(i.b)("p",null,"Tambahkan baris di bawah ini :"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"dev.wifi0.ledpin=3\ndev.wifi0.softled=1\nRestart dan lihat lednya")),Object(i.b)("p",null,"Dokumen aseli ada di \u200b",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/wiki/Instalasi/WifiAtheros"}),"http://dev.blankonlinux.or.id/wiki/Instalasi/WifiAtheros"),"\nLast modified on 09/25/2008 06:55:02 AM"),Object(i.b)("hr",null))}b.isMDXComponent=!0}}]);