(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1022:function(e,a,n){"use strict";n.d(a,"a",(function(){return c})),n.d(a,"b",(function(){return s}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),m=function(e){var a=r.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=m(e.components);return r.a.createElement(b.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},k=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),c=m(n),k=t,s=c["".concat(o,".").concat(k)]||c[k]||d[k]||i;return n?r.a.createElement(s,l(l({ref:a},b),{},{components:n})):r.a.createElement(s,l({ref:a},b))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var u in a)hasOwnProperty.call(a,u)&&(l[u]=a[u]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return u})),n.d(a,"default",(function(){return m}));var t=n(2),r=n(6),i=(n(0),n(1022)),o={},l={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasTebuFlatIconTheme",id:"TimPengembang/Pemaket/PanduanPaketKhasTebuFlatIconTheme",isDocsHomePage:!1,title:"PanduanPaketKhasTebuFlatIconTheme",description:"PANDUAN PEMAKETAN TEBU FLAT ICON THEME MENGGUNAKAN KOMPUTER LOKAL",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPaketKhasTebuFlatIconTheme.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhasTebuFlatIconTheme",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasTebuFlatIconTheme",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPaketKhasTebuFlatIconTheme.md",version:"current"},u=[],b={rightToc:u};function m(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-pemaketan-tebu-flat-icon-theme-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN TEBU FLAT ICON THEME MENGGUNAKAN KOMPUTER LOKAL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Sebelum melakukan pemaketan Tebu Flat Icon Theme silahkan persiapkan\nalatnya. Bisa dibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses\npersiapan alat, baca panduan sampai pada pembuatan kunci."),Object(i.b)("li",{parentName:"ol"},"Unduh source code upstream tebu flat icon di github yang sudah dirilis\noleh team kesenian. Masuk ke \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/BlankOn/Tebu-flat"}),"https://github.com/BlankOn/Tebu-flat")," =>\nKlik Release\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"image01.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]',"\nPada halaman release, pilih versi yang ingin dipaketkan dan unduh berkas\nsourcenya dengan ektensi .tar.gz"),Object(i.b)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/tebu-flat-icon-theme"}),"http://dev.blankonlinux.or.id/browser/tambora/tebu-flat-icon-theme"),"\nuntuk mengunduh folder debian dari tebu-flat-icon-theme dari bzr BlankOn.\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"image00.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]'),Object(i.b)("li",{parentName:"ol"},"Ektraks berkas .tar.gz dari Tebu flat dan masukkan ke folder tebu-flat-\nicon-theme"),Object(i.b)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder tebu-flat-icon-theme, ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda."),Object(i.b)("li",{parentName:"ol"},"Untuk versi\no 1.33 adalah versi upstream (akan berubah versi setiap upstream\nmerilis versi terbaru)\no -0 adalah versi dari debian\no blankon1 adalah versi yang digunakan blankon, apabila ada\npenambahan patch maka versi akan naik."),Object(i.b)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (native)"),Object(i.b)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.b)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.b)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/tebu-flat-icon-"}),"http://dev.blankonlinux.or.id/browser/tambora/tebu-flat-icon-"),"\ntheme\nuntuk mengunduh kode sumber dari tebu-flat-icon-theme dari bzr BlankOn."),Object(i.b)("li",{parentName:"ol"},"Unduh source code upstream tebu icon di github yang sudah dirilis oleh\nteam kesenian. Masuk ke \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://github.com/BlankOn/Tebu-flat"}),"https://github.com/BlankOn/Tebu-flat")," => Klik\nRelease dan unduh di halaman release. Lakukan ektraksi dan masukkan\ndirektori tebu-icon-theme"),Object(i.b)("li",{parentName:"ol"},"Masuk ke folder tebu-flat-icon-theme dan lakukan pemversian. Ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda. Untuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Kirim berkas tebu-flat-icon-theme ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]'),Object(i.b)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]',"\nKlik Login"),Object(i.b)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]'),Object(i.b)("li",{parentName:"ol"},"Isikan\no Distribution = Tambora (sesuai dengan nama kode rilis).\no Source URL = Alamat source yang ada di bzr blankon.\no Source Type = Bazar repository\no Source Option = Last version\no Original Source = Alamat source code upstream bisa dari github\nataupun akun pendekar (file berbentuk .tar.gz)\no Additional Original Source = menambahkan source code upstream jika\ndiperlukan.\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]',"\n8.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 02:17:25 PM")),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);