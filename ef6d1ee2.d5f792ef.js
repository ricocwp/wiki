(window.webpackJsonp=window.webpackJsonp||[]).push([[922],{1030:function(a,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return b}));var t=e(0),u=e.n(t);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function i(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function g(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function p(a,n){if(null==a)return{};var e,t,u=function(a,n){if(null==a)return{};var e,t,u={},r=Object.keys(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||(u[e]=a[e]);return u}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)e=r[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(u[e]=a[e])}return u}var d=u.a.createContext({}),m=function(a){var n=u.a.useContext(d),e=n;return a&&(e="function"==typeof a?a(n):g(g({},n),a)),e},o=function(a){var n=m(a.components);return u.a.createElement(d.Provider,{value:n},a.children)},s={inlineCode:"code",wrapper:function(a){var n=a.children;return u.a.createElement(u.a.Fragment,{},n)}},l=u.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,r=a.originalType,i=a.parentName,d=p(a,["components","mdxType","originalType","parentName"]),o=m(e),l=t,b=o["".concat(i,".").concat(l)]||o[l]||s[l]||r;return e?u.a.createElement(b,g(g({ref:n},d),{},{components:e})):u.a.createElement(b,g({ref:n},d))}));function b(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var r=e.length,i=new Array(r);i[0]=l;var g={};for(var p in n)hasOwnProperty.call(n,p)&&(g[p]=n[p]);g.originalType=a,g.mdxType="string"==typeof a?a:t,i[1]=g;for(var d=2;d<r;d++)i[d]=e[d];return u.a.createElement.apply(null,i)}return u.a.createElement.apply(null,e)}l.displayName="MDXCreateElement"},980:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return i})),e.d(n,"metadata",(function(){return g})),e.d(n,"rightToc",(function(){return p})),e.d(n,"default",(function(){return m}));var t=e(2),u=e(6),r=(e(0),e(1030)),i={},g={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab14",id:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab14",isDocsHomePage:!1,title:"Panduan5Bab14",description:"BAB XIV Pengaturan pengguna dan kelompok",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab14.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab14",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab14",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab14.md",version:"current"},p=[{value:"Pengaturan pengguna",id:"pengaturan-pengguna",children:[]},{value:"Pengaturan Grup",id:"pengaturan-grup",children:[]}],d={rightToc:p};function m(a){var n=a.components,e=Object(u.a)(a,["components"]);return Object(r.b)("wrapper",Object(t.a)({},d,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bab-xiv-pengaturan-pengguna-dan-kelompok"},"BAB XIV Pengaturan pengguna dan kelompok"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Panduan BlankOn 5")),Object(r.b)("p",null,"Sistem operasi Linux merupakan sistem operasi multiuser atau banyak pengguna.\nLinux bisa digunakan oleh banyak pengguna yang memiliki ruang dan lingkungan\nmasing-masing. Setiap pengguna juga memiliki nama akun pengguna (userid) dan\npassword. Nama pengguna dan sandi ini akan diminta pada saat pertama kali\nmenjalankan Linux.\nSelain itu, di Linux juga dikenal istilah grup yaitu sekumpulan dari pengguna\nyang memiliki hak dan wewenang tertentu. Oleh karena itu, pengetahuan tentang\nmanajemen pengguna dan grup sangat dibutuhkan dalam mempelajari linux,\nkhususnya BlankOn Linux. Baik bagi mereka yang sekadar pengguna rumahan yang\nhanya memilik satu jenis pengguna di sistem mereka, ataupun mereka yang\nbertindak sebagai sistem administrator. Pada bab ini, dibahas mengenai cara\nuntuk memanajemen pengguna dan grup yang ada di BlankOn melalui fitur Pemakai\ndan Kelompoknya."),Object(r.b)("h3",{id:"pengaturan-pengguna"},"Pengaturan pengguna"),Object(r.b)("p",null,"Untuk melakukan pengaturan pengguna melalui antarmuka grafis, Anda bisa klik\nmenu System > Pemakai dan Kelompoknya. Sebelum melakukan pengaturan pengguna,\nklik pada tombol \u201cBuka Kunci\u201d dan masukkan sandi Anda karena pengaturan\npengguna bersifat administratif.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab14/user-manager.png]"),Object(r.b)("h4",{id:"menambah-pengguna"},"Menambah Pengguna"),Object(r.b)("p",null,"Untuk menambah pengguna baru, klik pada tombol \u201cTambah Pemakai\u201d.\nPada jendela yang baru muncul, ketik nama akun (tanpa spasi) dari pengguna baru\nyang Anda buat pada bagian \u201cNama User\u201d. Nama ini akan digunakan pada saat\nmelakukan login dengan akun tersebut. Kemudian, isi password, nama lengkap dan\ndata pribadi pengguna (opsional).\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab14/add-user.png]","\nUntuk mengatur kewenangan pada pengguna baru yang Anda buat, klik pada tab \u201cHak\nAkses Pemakai\u201d. Kemudian, beri tanda centang pada wewenang yang diberikan\nkepada pengguna baru tersebut. Setelah semua pengaturan selesai, Anda bisa klik\npada tombol \u201cOK\u201d.\nSekarang, Anda bisa melihat pengguna baru pada daftar pengguna. Untuk masuk ke\nsistem menggunakan pengguna tersebut, lakukan Log Out pada desktop melalui menu\nSystem > Keluar."),Object(r.b)("h4",{id:"mengatur-pengguna-yang-sudah-ada"},"Mengatur pengguna yang sudah ada"),Object(r.b)("p",null,"Untuk mengatur pengguna yang sudah ada, Anda bisa klik pengguna yang ingin Anda\natur pada jendela \u201cPengaturan Pengguna\u201d, lalu klik pada tombol \u201cProperti\u201d.\nKemudian, Anda bisa melakukan pengaturan terhadap pengguna tersebut."),Object(r.b)("h4",{id:"menghapus-pengguna"},"Menghapus pengguna"),Object(r.b)("p",null,"Untuk menghapus pengguna, cukup klik pengguna yang ingin dihapus pada daftar\nyang terdapat di jendela \u201cPengaturan Pengguna\u201d, kemudian klik tombol \u201cHapus\u201d.\nPada jendela konfirmasi yang muncul, klik pada tombol \u201cHapus\u201d. Data pengguna\nyang tersimpan pada folder /home tidak akan ikut dihapus."),Object(r.b)("h3",{id:"pengaturan-grup"},"Pengaturan Grup"),Object(r.b)("p",null,"Grup merupakan sekumpulan dari pengguna yang sama-sama memiliki suatu wewenang,\nseperti wewenang pada sistem dan wewenang pada berkas sistem.\nUntuk melakukan pengaturan grup, klik tombol \u201cKelola Kelompok\u201d pada jendela\n\u201cPengaturan Pengguna\u201d. Maka akan muncul daftar grup yang ada di sistem.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab14/group-edit.png]"),Object(r.b)("h4",{id:"membuat-grup-baru"},"Membuat grup Baru"),Object(r.b)("p",null,"Untuk membuat grup baru, klik pada tombol \u201cTambah Kelompok\u201d.\nKemudian, tentukan nama kelompok (tanpa spasi) dan beri centang pada pengguna\nyang menjadi anggota dari grup tersebut, kemudian klik tombol \u201cOK\u201d untuk\nmembuat grup baru."),Object(r.b)("h4",{id:"mengatur-grup-yang-sudah-ada"},"Mengatur grup yang sudah ada"),Object(r.b)("p",null,"Untuk mengatur grup yang sudah ada, cukup klik pada grup yang ingin diatur,\nlalu klik tombol \u201cProperti\u201d. Kemudian, Anda bisa mengatur siapa saja yang\nmenjadi anggota dari grup yang Anda atur.\nLast modified on 07/23/2009 03:02:40 PM"),Object(r.b)("h4",{id:"attachments-3"},"Attachments (3)"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"* add-user.png\u200b (35.9 KB) - added by wirama 8 years ago.\n* group-edit.png\u200b (22.8 KB) - added by wirama 8 years ago.\n* user-manager.png\u200b (23.6 KB) - added by wirama 8 years ago.\n")),Object(r.b)("h4",{id:""}))}m.isMDXComponent=!0}}]);