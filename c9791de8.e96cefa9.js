(window.webpackJsonp=window.webpackJsonp||[]).push([[762],{1022:function(a,n,e){"use strict";e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return o}));var t=e(0),i=e.n(t);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function d(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function k(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var p=i.a.createContext({}),b=function(a){var n=i.a.useContext(p),e=n;return a&&(e="function"==typeof a?a(n):d(d({},n),a)),e},m=function(a){var n=b(a.components);return i.a.createElement(p.Provider,{value:n},a.children)},l={inlineCode:"code",wrapper:function(a){var n=a.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,r=a.originalType,u=a.parentName,p=k(a,["components","mdxType","originalType","parentName"]),m=b(e),s=t,o=m["".concat(u,".").concat(s)]||m[s]||l[s]||r;return e?i.a.createElement(o,d(d({ref:n},p),{},{components:e})):i.a.createElement(o,d({ref:n},p))}));function o(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var r=e.length,u=new Array(r);u[0]=s;var d={};for(var k in n)hasOwnProperty.call(n,k)&&(d[k]=n[k]);d.originalType=a,d.mdxType="string"==typeof a?a:t,u[1]=d;for(var p=2;p<r;p++)u[p]=e[p];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,e)}s.displayName="MDXCreateElement"},818:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return u})),e.d(n,"metadata",(function(){return d})),e.d(n,"rightToc",(function(){return k})),e.d(n,"default",(function(){return b}));var t=e(2),i=e(6),r=(e(0),e(1022)),u={},d={unversionedId:"TimPengembang/Infrastruktur/PabrikPaket",id:"TimPengembang/Infrastruktur/PabrikPaket",isDocsHomePage:!1,title:"PabrikPaket",description:"Pabrik Paket",source:"@site/Wiki/TimPengembang/Infrastruktur/PabrikPaket.md",slug:"/TimPengembang/Infrastruktur/PabrikPaket",permalink:"/TimPengembang/Infrastruktur/PabrikPaket",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PabrikPaket.md",version:"current"},k=[{value:"Ringkasan",id:"ringkasan",children:[]},{value:"Latar Belakang",id:"latar-belakang",children:[]},{value:"Studi Kasus",id:"studi-kasus",children:[]},{value:"Cakupan",id:"cakupan",children:[]},{value:"Rancangan",id:"rancangan",children:[]},{value:"Implementasi",id:"implementasi",children:[]},{value:"Masalah",id:"masalah",children:[]},{value:"Agenda Wacana dan Diskusi",id:"agenda-wacana-dan-diskusi",children:[]}],p={rightToc:k};function b(a){var n=a.components,e=Object(i.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"pabrik-paket"},"Pabrik Paket"),Object(r.b)("p",null,"Silakan kunjungi halaman Launchpad di bawah ini untuk melihat status dokumen\nini. Silakan bergabung dalam tim \u200bblankon-infrastruktur bila ingin menyunting\nhalaman ini."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* Papan Informasi di Launchpad: \u200bPabrik_Paket_BlankOn\n")),Object(r.b)("h2",{id:"ringkasan"},"Ringkasan"),Object(r.b)("p",null,"Mesin pabrik paket (dahulu disebut mesin kompilasi otomatis) adalah mesin yang\nmembuat paket-paket buatan Pemaket BlankOn dan memasangnya dalam repositori\nBlankOn. Mesin ini seyogyanya dapat terhubung ke Internet 24 jam agar dapat\nsegera membuatkan paket tanpa membuat pemaket menunggu lama."),Object(r.b)("h2",{id:"latar-belakang"},"Latar Belakang"),Object(r.b)("p",null,"Tidak semua pemaket memiliki komputer yang dapat digunakan sebagai pembuat\npaket. Lingkungan pembangunan yang seragam dibutuhkan untuk membuat paket-paket\nyang dapat diinstal tanpa ada masalah ketergantungan paket, toolchain yang\ntidak dipasang dengan benar, dan masalah-masalah lain."),Object(r.b)("h2",{id:"studi-kasus"},"Studi Kasus"),Object(r.b)("p",null,"Rudi adalah pemaket Konde. Beliau bertanggung jawab pada paket-paket tema\nKonde. Setelah membuat dan mencoba paket buatannya pada komputer pribadinya,\nRudi menerbitkan paket buatannya itu ke dalam gudang kode BlankOn di launchpad\nmenggunakan bazaar. Sesaat kemudian, mesin kompilasi mengendus adanya paket\nbaru buatan Rudi. Mesin kompilasi langsung mengunduh paket tersebut, mencoba\nmembuat paketnya, dan bila berhasil paket tersebut akan segera tersedia di\nMesin repositori paket BlankOn?."),Object(r.b)("h2",{id:"cakupan"},"Cakupan"),Object(r.b)("p",null,"Dokumen ini membahas tentang pabrik paket BlankOn, cara kerja dan kebutuhan\nminimalnya."),Object(r.b)("h2",{id:"rancangan"},"Rancangan"),Object(r.b)("p",null,"Pabrik paket dapat terdiri dari satu hingga n mesin. (n > 0).\nPabrik paket perlu terhubung ke Internet agar dapat segera bekerja bila ada\npaket baru yang perlu dibuat.\nPerlu ada situs khusus yang menampilkan daftar antrian paket yang belum dibuat,\ndaftar pabrik paket yang sedang bekerja, dan status masing-masing proses\npembuatan paket (bila ada kegagalan juga dicantumkan di situs ini). Situs ini\ndapat dibuat dengan skrip sederhana.\nPabrik paket merupakan program sederhana yang dijalankan secara periodik (5\nmenit sekali?). Saat dijalankan, ia akan mengunduh berkas teks yang ada di\nInternet. Isinya adalah daftar paket yang hendak dibuat. Daftar ini\ndimodifikasi oleh pembuat paket. Bila ada paket baru yang didaftarkan oleh\npembuat paket, ia akan melakukan hal-hal berikut secara berurutan:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* pengunduhan paket\n* pemeriksaan ketergantungan paket dan mengunduh semua paket yang\n  dibutuhkan paket ini untuk dikompilasi (build-dependencies)\n* melakukan kompilasi\n* mengunggah hasil paket ke mesin repositori\n")),Object(r.b)("p",null,"skema menyusul"),Object(r.b)("h2",{id:"implementasi"},"Implementasi"),Object(r.b)("p",null,"Sebagian masih dalam proses penulisan di halaman Implementasi_Pabrik_Paket"),Object(r.b)("h2",{id:"masalah"},"Masalah"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* Pabrik paket menggunakan mesin sementara.\n* Pembuat skrip pembangun otomatis belum ada.\n")),Object(r.b)("h2",{id:"agenda-wacana-dan-diskusi"},"Agenda Wacana dan Diskusi"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* Bila pabrik tidak tersedia, proyk masih dapat dilanjutkan dengan resiko\n  paket yang tidak konsisten, gagal instal di komputer lain, dsb.\n* Saya mungkin dapat menggunakan komputer di rumah sebagai mesin kompilasi\n  untuk i386 dan amd64 tapi tidak reliabel (reboot, beban tinggi, dsb). -\n  - mdamt\n* Saya juga mungkin dapat membuatkan skrip pembangun otomatis namun belum\n  dapat menjamin karena keterbatasan waktu. Ada yang dapat meluangkan\n  waktu? Paling tidak mencari proyek serupa di launchpad? -- mdamt\n* bagaimana dengan mesin sumbangan dari DepKomInfo????? -- [:udienz:\n  UdienzMahyuddin]\n")),Object(r.b)("p",null,"KategoriBlankOn KategoriInfra\nLast modified on 06/17/2008 12:28:03 AM"),Object(r.b)("h4",{id:""}),Object(r.b)("hr",null))}b.isMDXComponent=!0}}]);