(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1022:function(e,a,n){"use strict";n.d(a,"a",(function(){return k})),n.d(a,"b",(function(){return c}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),m=function(e){var a=r.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},k=function(e){var a=m(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),k=m(n),p=t,c=k["".concat(o,".").concat(p)]||k[p]||d[p]||i;return n?r.a.createElement(c,l(l({ref:a},u),{},{components:n})):r.a.createElement(c,l({ref:a},u))}));function c(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var b in a)hasOwnProperty.call(a,b)&&(l[b]=a[b]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},318:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return b})),n.d(a,"default",(function(){return m}));var t=n(2),r=n(6),i=(n(0),n(1022)),o={},l={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasBlankOnThemeGreeter",id:"TimPengembang/Pemaket/PanduanPaketKhasBlankOnThemeGreeter",isDocsHomePage:!1,title:"PanduanPaketKhasBlankOnThemeGreeter",description:"PANDUAN PEMAKETAN BLANKON THEME GREETER MENGGUNAKAN KOMPUTER LOKAL",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPaketKhasBlankOnThemeGreeter.md",slug:"/TimPengembang/Pemaket/PanduanPaketKhasBlankOnThemeGreeter",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasBlankOnThemeGreeter",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPaketKhasBlankOnThemeGreeter.md",version:"current"},b=[],u={rightToc:b};function m(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"panduan-pemaketan-blankon-theme-greeter-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN BLANKON THEME GREETER MENGGUNAKAN KOMPUTER LOKAL"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Sebelum melakukan pemaketan Blankon Theme Greeter silahkan persiapkan\nalatnya. Bisa dibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses\npersiapan alat, baca panduan sampai pada pembuatan kunci."),Object(i.b)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/blankon-theme-greeter"}),"http://dev.blankonlinux.or.id/browser/tambora/blankon-theme-greeter"),"\nuntuk mengunduh folder kode sumber dari blankon-theme-greeter dari bzr BlankOn.\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasBlankOnThemeGreeter]'),Object(i.b)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder blankon-theme-greeter, apabila melakukan\nperubahan pada kode sumber silahkan lakukan perubahan sesuai dengan\nkebutuhan. Kemudian ketik\n$dch -i\ndi dalam direktori blankon-theme-greeter. Sesuaikan dengan kebutuhan mulai dari\npemversian, komen, nama dan email anda."),Object(i.b)("li",{parentName:"ol"},"Untuk versi\no 1.33 adalah versi upstream (akan berubah versi setiap upstream\nmerilis versi terbaru)\no -0 adalah versi dari debian\no blankon1 adalah versi yang digunakan blankon, apabila ada\npenambahan patch maka versi akan naik."),Object(i.b)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (native)"),Object(i.b)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),Object(i.b)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),Object(i.b)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),Object(i.b)("li",{parentName:"ol"},"Ketik\n$bzr branch ",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/tambora/blankon-theme-"}),"http://dev.blankonlinux.or.id/browser/tambora/blankon-theme-"),"\ngreeter\nuntuk mengunduh kode sumber dari blankon-theme-greeter dari bzr BlankOn."),Object(i.b)("li",{parentName:"ol"},"Masuk ke folder blankon-theme-greeter dan apabila melakukan perubahan\npada kode sumber silahkan lakukan perubahan sesuai dengan kebutuhan.\nKemudian ketik\n$dch -i\ndi dalam direktori blankon-theme-greeter. Sesuaikan dengan kebutuhan mulai dari\npemversian, komen, nama dan email anda.\nUntuk versi")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Kirim berkas blankon-theme-greeter ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"mailto:bzr@dev.blankonlinux.or.id"}),"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnThemeGreeter]'),Object(i.b)("li",{parentName:"ol"},"Buka IRGSH \u200b",Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"http://irgsh.blankonlinux.or.id"}),"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnThemeGreeter]',"\nKlik Login"),Object(i.b)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",Object(i.b)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnThemeGreeter]',"\n6, Isikan")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* Distribution = Tambora (sesuai dengan nama kode rilis).\n* Source URL = Alamat source yang ada di bzr blankon.\n* Source Type = Bazar repository\n* Source Option = Last version\n* Original Source = Alamat source code upstream bisa dari github ataupun\n  akun pendekar (file berbentuk .tar.gz)\n* Additional Original Source = menambahkan source code upstream jika\n  diperlukan.\n")),Object(i.b)("p",null,"[No",Object(i.b)("em",{parentName:"p"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasBlankOnThemeGreeter]',"\n7.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 01:56:49 PM"),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);