(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{1022:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return b}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function u(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?u(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function k(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=r.a.createContext({}),o=function(e){var a=r.a.useContext(m),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=o(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,m=k(e,["components","mdxType","originalType","parentName"]),p=o(n),s=t,b=p["".concat(u,".").concat(s)]||p[s]||d[s]||i;return n?r.a.createElement(b,l(l({ref:a},m),{},{components:n})):r.a.createElement(b,l({ref:a},m))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,u=new Array(i);u[0]=s;var l={};for(var k in a)hasOwnProperty.call(a,k)&&(l[k]=a[k]);l.originalType=e,l.mdxType="string"==typeof e?e:t,u[1]=l;for(var m=2;m<i;m++)u[m]=n[m];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},621:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return u})),n.d(a,"metadata",(function(){return l})),n.d(a,"rightToc",(function(){return k})),n.d(a,"default",(function(){return o}));var t=n(2),r=n(6),i=(n(0),n(1022)),u={},l={unversionedId:"Proyek/AlurKerjaProyekBlankOn",id:"Proyek/AlurKerjaProyekBlankOn",isDocsHomePage:!1,title:"AlurKerjaProyekBlankOn",description:"Alur Kerja Proyek BlankOn",source:"@site/Wiki/Proyek/AlurKerjaProyekBlankOn.md",slug:"/Proyek/AlurKerjaProyekBlankOn",permalink:"/Proyek/AlurKerjaProyekBlankOn",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/Proyek/AlurKerjaProyekBlankOn.md",version:"current"},k=[{value:"Pengantar",id:"pengantar",children:[]},{value:"Para pemeran",id:"para-pemeran",children:[{value:"Steering",id:"steering",children:[]},{value:"Pengembang",id:"pengembang",children:[]},{value:"Infrastruktur",id:"infrastruktur",children:[]},{value:"Tester",id:"tester",children:[]},{value:"Bugmaster",id:"bugmaster",children:[]}]},{value:"Alur kerja",id:"alur-kerja",children:[]}],m={rightToc:k};function o(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},m,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"alur-kerja-proyek-blankon"},"Alur Kerja Proyek BlankOn"),Object(i.b)("h2",{id:"pengantar"},"Pengantar"),Object(i.b)("p",null,"Halaman ini menjelaskan alur kerja proyek BlankOn 2"),Object(i.b)("h2",{id:"para-pemeran"},"Para pemeran"),Object(i.b)("h3",{id:"steering"},"Steering"),Object(i.b)("p",null,"Dipimpin oleh Panglima, Steering mengendalikan proyek BlankOn 2. Arah dan\ntujuan, arsitektur, dan isi BlankOn ditentukan oleh tim ini."),Object(i.b)("h3",{id:"pengembang"},"Pengembang"),Object(i.b)("p",null,"Skup pengembang di sini dipersempit menjadi tim pemaket dan tim kesenian. Tim\nini menghasilkan produk akhir berupa paket yang siap diinstal.\nLihat juga: Pemaket dan Artwork"),Object(i.b)("h3",{id:"infrastruktur"},"Infrastruktur"),Object(i.b)("p",null,"Tim ini menyediakan infrastruktur proyek. Mulai dari gudang kode, repositori,\npabrik paket, pabrik CD, dan aplikasi pendukung lainnya. Kebanyakan\ninfrastruktur sudah disediakan oleh Canonical dalam bentuk Launchpad.net.\nLihat juga: Infrastruktur"),Object(i.b)("h3",{id:"tester"},"Tester"),Object(i.b)("p",null,"Tim ini mengetes semua komponen BlankOn, mulai dari instalasi paket-paket\nmelalui apt-get maupun instalasi sistem secara penuh dalam berbagai sistem dan\nkonfigurasi komputer.\nLihat juga: ","[link ke tester]"),Object(i.b)("h3",{id:"bugmaster"},"Bugmaster"),Object(i.b)("p",null,"Tim ini mengatur lalulintas bug supaya sampai ke tangan yang seharusnya,\nprinsipnya, bug harus ditangani oleh pihak yang memang seharusnya memperbaiki\nbug tersebut, dan memastikan perbaikannya dilakukan dengan baik dan benar.\nLihat juga: ","[link ke bug]"),Object(i.b)("h2",{id:"alur-kerja"},"Alur kerja"),Object(i.b)("p",null,"[/raw-attachment/wiki/AlurKerja/alur-kerja-blankon-2.0705.jpg]","\nPertama kali, tim infrastruktur menyediakan segala fasilitas yang dibutuhkan.\nDalam saat yang sama tim pemaket menentukan isi paket yang akan tersedia untuk\nBlankOn, dengan arahan dari Steering. Daftar jadi paket dibuat dalam bentuk\npaket meta yang kemudian disimpan dalam gudang kode.\nTim kesenian bertugas membuat dan mengumpulkan materi-materi yang akan menjadi\nciri khas BlankOn. Materi-materi tersebut dikirim ke tim pemaket melalui gudang\nkode untuk kemudian dibuatkan paket-paketnya.\nSetiap ada perubahan paket, tim pemaket memberitahukan pabrik paket tentang\nperubahan itu dengan menyunting halaman wiki tertentu (alamat menyusul).\nPerubahan disimpan dalam gudang kode.\nPabrik paket akan secara otomatis mengambil paket yang ada dalam gudang kode\ndan merubahnya menjadi paket Debian. Paket Debian tersebut dikirim ke\nrepositori setelahnya.\nTester mencoba instalasi paket melalui apt-get.\nPabrik CD akan mengumpulkan semua paket khas BlankOn dan Gutsy dan membuat\ncetakan CD.\nCetakan CD kemudian dites oleh tester.\nCetakan CD dinikmati masyarakat.\nTester dan masyarakat melaporkan adanya bug ke launchpad.\nBugmaster menganalisis laporan tersebut dan menyerahkannya ke yang\nberkepentingan. Pengembang yang bertanggung jawab harus memperbaiki (atau tidak\nmemperbaiki tergantung situasi) dan meletakkan perbaikan di gudang kode dan\nmembuat paket yang baru."),Object(i.b)("p",null,"KategoriBlankOn"),Object(i.b)("p",null,"Last modified on 06/15/2008 02:18:30 PM"),Object(i.b)("h4",{id:"attachments-1"},"Attachments (1)"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"* alur-kerja-blankon-2.0705.jpg\u200b (43.9 KB) - added by anonymous 9 years\n  ago.\n")))}o.isMDXComponent=!0}}]);