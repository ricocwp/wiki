(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1022:function(a,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return d}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function p(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=r.a.createContext({}),s=function(a){var e=r.a.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):p(p({},e),a)),n},b=function(a){var e=s(a.components);return r.a.createElement(u.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},g=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,l=a.parentName,u=o(a,["components","mdxType","originalType","parentName"]),b=s(n),g=t,d=b["".concat(l,".").concat(g)]||b[g]||c[g]||i;return n?r.a.createElement(d,p(p({ref:e},u),{},{components:n})):r.a.createElement(d,p({ref:e},u))}));function d(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:t,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},305:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return p})),n.d(e,"rightToc",(function(){return o})),n.d(e,"default",(function(){return s}));var t=n(2),r=n(6),i=(n(0),n(1022)),l={},p={unversionedId:"TimPengembang/Dokumentasi/Draf/PengaturanDesktopPeralatan",id:"TimPengembang/Dokumentasi/Draf/PengaturanDesktopPeralatan",isDocsHomePage:!1,title:"PengaturanDesktopPeralatan",description:"Pengaturan Desktop Peralatan",source:"@site/Wiki/TimPengembang/Dokumentasi/Draf/PengaturanDesktopPeralatan.md",slug:"/TimPengembang/Dokumentasi/Draf/PengaturanDesktopPeralatan",permalink:"/TimPengembang/Dokumentasi/Draf/PengaturanDesktopPeralatan",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Draf/PengaturanDesktopPeralatan.md",version:"current"},o=[{value:"Aplikasi Peralatan Lain",id:"aplikasi-peralatan-lain",children:[{value:"Aplikasi peralatan pemampatan",id:"aplikasi-peralatan-pemampatan",children:[]},{value:"Clipboard Manager (Glipper)",id:"clipboard-manager-glipper",children:[]},{value:"Password Manager (KeePassX)",id:"password-manager-keepassx",children:[]},{value:"Bagaimana memasang Google Earth",id:"bagaimana-memasang-google-earth",children:[]},{value:"Bagaimana menginstal Picasa image organizer",id:"bagaimana-menginstal-picasa-image-organizer",children:[]},{value:"Bagaimana Memasang Google Desktop",id:"bagaimana-memasang-google-desktop",children:[]},{value:"Bagaimana cara memasang Zekr",id:"bagaimana-cara-memasang-zekr",children:[]}]}],u={rightToc:o};function s(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"pengaturan-desktop-peralatan"},"Pengaturan Desktop Peralatan"),Object(i.b)("h2",{id:"aplikasi-peralatan-lain"},"Aplikasi Peralatan Lain"),Object(i.b)("h3",{id:"aplikasi-peralatan-pemampatan"},"Aplikasi peralatan pemampatan"),Object(i.b)("p",null,"Selain zip, gzip dan bzip2 terdapat peralatan pemampatan yang sering di gunakan yaitu \u200bp7zip dan \u200brar. 7zip adalah aplikasi open source sedangkan rar\ntidak."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"sudo apt-get install rar unrar\nsudo apt-get install p7zip-full\nsudo apt-get install unace\n")),Object(i.b)("p",null,"ada lagi aplikasi yang digunakan oleh desktop kde yang mendukung beberapa\nformat, yaitu ark termasuk rar. Pemasanganya adalah sebagi berikut:\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo apt-get install ark")),Object(i.b)("h3",{id:"clipboard-manager-glipper"},"Clipboard Manager (Glipper)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sudo apt-get install glipper")),Object(i.b)("h3",{id:"password-manager-keepassx"},"Password Manager (KeePassX)"),Object(i.b)("p",null,"Berguna untuk manajemen kata-sandi\n",Object(i.b)("inlineCode",{parentName:"p"},"sudo apt-get install keepassx")),Object(i.b)("h3",{id:"bagaimana-memasang-google-earth"},"Bagaimana memasang Google Earth"),Object(i.b)("p",null,"Google Earth adalah aplikasi yang digunakan untuk mapping dunia. Silakan lihat\n\u200bhalaman_resminya untuk info lebih lanjut."),Object(i.b)("p",null,"Google Earth terdapat dalam arsip paket Medibuntu. Untuk memasang Google Earth\ndari Medibuntu caranya adalah sebagi berikut:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),'echo "deb http://packages.medibuntu.org/ gutsy free non-free" | sudo tee -a /etc/apt/sources.list\nwget -q http://packages.medibuntu.org/medibuntu-key.gpg -O- | sudo apt-key add-\nsudo apt-get update\nsudo aptitude install googleearth\n')),Object(i.b)("p",null,"Cara lainya adalah anda dapat memasang Google Earth dari Google Installer,\ndengan cara mengunduh Google Earth installer dan lakukan perintah berikut:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"chmod +x Desktop/GoogleEarthLinux.bin\nsudo Desktop/GoogleEarthLinux.bin\nUntuk membuang Google Earth caranya adalah sebagai berikut:\nsudo su\n/opt/google-earth/uninstall\n")),Object(i.b)("h3",{id:"bagaimana-menginstal-picasa-image-organizer"},"Bagaimana menginstal Picasa image organizer"),Object(i.b)("p",null,"Picassa adalah aplikasi untuk memudahkan anda mengelola foto, baik itu dicetak, diubah, diposting dalam blog anda atau diupload ke dalam google\nphoto. Cara pemasangan Picasa adalah sebagai berikut: ",Object(i.b)("inlineCode",{parentName:"p"},"gksudo gedit /etc/apt/sources.list"),"\nTambah baris berikut di akhir berkas"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"\\# Repository untuk Google Picasa\n\ndeb http://dl.google.com/linux/deb/ stable non-free\n")),Object(i.b)("p",null,"Simpan berkas yang telah disunting"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"sudo apt-get update\nsudo apt-get install picasa\n")),Object(i.b)("p",null,"Lihat juga \u200bpanduan_pemasangan_picassa_dengan_tangkapan_layar"),Object(i.b)("h3",{id:"bagaimana-memasang-google-desktop"},"Bagaimana Memasang Google Desktop"),Object(i.b)("p",null,"Google Desktop adalah aplikasi pencarian yang memberikan kemudian untuk mengakses informasi dalam komputer anda dan dari internet. Google Desktop\nmembantu anda dalam melakukan pencarian surat elektronik, berkas, musik, foto, dan lainya semudah anda melakukan pencarian dengan Google. Untuk\nPemasanganya adalah sebagai berikut: ",Object(i.b)("inlineCode",{parentName:"p"},"gksudo gedit /etc/apt/sources.list")),Object(i.b)("p",null,"Tambah baris berikut di akhir berkas  Repository untuk Google Picasa\ndeb ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"http://dl.google.com/linux/deb/"}),"http://dl.google.com/linux/deb/")," stable non-free"),Object(i.b)("p",null,"Simpan berkas yang telah disunting"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"sudo apt-get update\nsudo apt-get install google-desktop\n")),Object(i.b)("h3",{id:"bagaimana-cara-memasang-zekr"},"Bagaimana cara memasang Zekr"),Object(i.b)("p",null,"Zekr adalah aplikasi open source yang di gunakan untuk pembelajaran Al-Quran dan Pembacaan Al-Quran. Untuk pemasangan zekr caranya adalah sebagai\nberikut:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"tambahkan repository zekr di /etc/apt/sources.list\ndeb ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://ppa.launchpad.net/zekr/ubuntu"}),"http://ppa.launchpad.net/zekr/ubuntu")," hardy main"),Object(i.b)("li",{parentName:"ul"},"perbaharui database paket\n",Object(i.b)("inlineCode",{parentName:"li"},"sudo apt-get update")),Object(i.b)("li",{parentName:"ul"},"install paket-paket yang dibutuhkan")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"```\n")),Object(i.b)("p",null," \tsudo apt-get install zekr ttf-me-quran ttf-sil-scheherazade\nsudo apt-get install ttf-farsiweb flashplugin-nonfree"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"```\n")),Object(i.b)("p",null,"Zekr juga terdapat terjemahan dalam beberapa bahasa, untuk instalasi dukungan bahasa zekr ketikkan"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"apt-get install zekr-quran-translations\napt-get install zekr-quran-translations-id\n")),Object(i.b)("p",null,"Last modified on 09/13/2008 08:12:01 AM"),Object(i.b)("hr",null))}s.isMDXComponent=!0}}]);