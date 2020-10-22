(window.webpackJsonp=window.webpackJsonp||[]).push([[738],{1022:function(a,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return c}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function b(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=r.a.createContext({}),d=function(a){var e=r.a.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},m=function(a){var e=d(a.components);return r.a.createElement(u.Provider,{value:e},a.children)},s={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},k=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,l=a.parentName,u=b(a,["components","mdxType","originalType","parentName"]),m=d(n),k=t,c=m["".concat(l,".").concat(k)]||m[k]||s[k]||i;return n?r.a.createElement(c,o(o({ref:e},u),{},{components:n})):r.a.createElement(c,o({ref:e},u))}));function c(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var b in e)hasOwnProperty.call(e,b)&&(o[b]=e[b]);o.originalType=a,o.mdxType="string"==typeof a?a:t,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},794:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return o})),n.d(e,"rightToc",(function(){return b})),n.d(e,"default",(function(){return d}));var t=n(2),r=n(6),i=(n(0),n(1022)),l={},o={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhas",id:"TimPengembang/Pemaket/PanduanPaketKhas",isDocsHomePage:!1,title:"PanduanPaketKhas",description:"PANDUAN PEMAKETAN BLANKON INSTALLER MENGGUNAKAN KOMPUTER LOKAL",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPaketKhas.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhas",permalink:"/TimPengembang/Pemaket/PanduanPaketKhas",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPaketKhas.md",version:"current"},b=[],u={rightToc:b};function d(a){var e=a.components,n=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-pemaketan-blankon-installer-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN BLANKON INSTALLER MENGGUNAKAN KOMPUTER LOKAL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Sebelum melakukan pemaketan BlankOn-Installer silahkan persiapkan\nalatnya. Bisa dibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses\npersiapan alat, baca panduan sampai pada pembuatan kunci."),Object(i.b)("li",{parentName:"ol"},"Unduh source code upstream blankon-installer di github yang sudah dirilis\noleh team riset. Masuk ke \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/BlankOn/blankon-installer"}),"https://github.com/BlankOn/blankon-installer"),"\n=> Klik Release\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/image01.png]","\nPada halaman release, pilih versi yang ingin dipaketkan dan unduh berkas\nsourcenya dengan ektensi .tar.gz\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/image02.png]"),Object(i.b)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/blankon-installer"}),"http://dev.blankonlinux.or.id/browser/tambora/blankon-installer"),"\nuntuk mengunduh folder debian dari BlankOn-installer dari bzr BlankOn.\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/image00.png]"),Object(i.b)("li",{parentName:"ol"},"Taruh berkas .tar.gz di folder /Paket dan ektraks berkas .tar.gz dari\nblankon-installer."),Object(i.b)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder blankon-installer, ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda.\nUntuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (quilt)"),Object(i.b)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.b)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.b)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/blankon-"}),"http://dev.blankonlinux.or.id/browser/tambora/blankon-"),"\ninstaller\nuntuk mengunduh folder debian dari BlankOn-installer dari bzr BlankOn."),Object(i.b)("li",{parentName:"ol"},"Masuk ke folder blankon-installer dan lakukan pemversian. Ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda."),Object(i.b)("li",{parentName:"ol"},"Untuk versi\no 1.33 adalah versi upstream (akan berubah versi setiap upstream\nmerilis versi terbaru)\no -0 adalah versi dari debian\no blankon1 adalah versi yang digunakan blankon, apabila ada\npenambahan patch maka versi akan naik."),Object(i.b)("li",{parentName:"ol"},"Kirim berkas blankon-installer ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/irgsh.png]"),Object(i.b)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/login.png]","\nKlik Login"),Object(i.b)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/build.png]"),Object(i.b)("li",{parentName:"ol"},"Isikan\no Distribution = Tambora (sesuai dengan nama kode rilis).\no Source URL = Alamat source yang ada di bzr blankon.\no Source Type = Bazar repository\no Source Option = Last version\no Original Source = Alamat source code upstream bisa dari github\nataupun akun pendekar (file berbentuk .tar.gz)\no Additional Original Source = menambahkan source code upstream jika\ndiperlukan.\n","[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/submit.png]","\n8.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 02:09:11 PM")),Object(i.b)("h4",{id:"attachments-7"},"Attachments (7)"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* image00.png\u200b (25.4 KB) - added by syaimif 7 months ago.\n* image01.png\u200b (112.3 KB) - added by syaimif 7 months ago.\n* image02.png\u200b (81.4 KB) - added by syaimif 7 months ago.\n* irgsh.png\u200b (90.8 KB) - added by syaimif 7 months ago.\n* login.png\u200b (31.1 KB) - added by syaimif 7 months ago.\n* build.png\u200b (60.6 KB) - added by syaimif 7 months ago.\n* submit.png\u200b (31.6 KB) - added by syaimif 7 months ago.\n")),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);