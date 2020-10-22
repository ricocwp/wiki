(window.webpackJsonp=window.webpackJsonp||[]).push([[682],{1022:function(a,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return l}));var r=e(0),i=e.n(r);function t(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,r)}return e}function b(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){t(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function d(a,n){if(null==a)return{};var e,r,i=function(a,n){if(null==a)return{};var e,r,i={},t=Object.keys(a);for(r=0;r<t.length;r++)e=t[r],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(r=0;r<t.length;r++)e=t[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var o=i.a.createContext({}),k=function(a){var n=i.a.useContext(o),e=n;return a&&(e="function"==typeof a?a(n):b(b({},n),a)),e},s=function(a){var n=k(a.components);return i.a.createElement(o.Provider,{value:n},a.children)},m={inlineCode:"code",wrapper:function(a){var n=a.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(a,n){var e=a.components,r=a.mdxType,t=a.originalType,u=a.parentName,o=d(a,["components","mdxType","originalType","parentName"]),s=k(e),p=r,l=s["".concat(u,".").concat(p)]||s[p]||m[p]||t;return e?i.a.createElement(l,b(b({ref:n},o),{},{components:e})):i.a.createElement(l,b({ref:n},o))}));function l(a,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof a||r){var t=e.length,u=new Array(t);u[0]=p;var b={};for(var d in n)hasOwnProperty.call(n,d)&&(b[d]=n[d]);b.originalType=a,b.mdxType="string"==typeof a?a:r,u[1]=b;for(var o=2;o<t;o++)u[o]=e[o];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},738:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return u})),e.d(n,"metadata",(function(){return b})),e.d(n,"rightToc",(function(){return d})),e.d(n,"default",(function(){return k}));var r=e(2),i=e(6),t=(e(0),e(1022)),u={},b={unversionedId:"TimPengembang/Pemaket/Tutorial/PengenalanBazaar",id:"TimPengembang/Pemaket/Tutorial/PengenalanBazaar",isDocsHomePage:!1,title:"PengenalanBazaar",description:"Tutorial PengenalanBazaar",source:"@site/Wiki/TimPengembang/Pemaket/Tutorial/PengenalanBazaar.md",slug:"/TimPengembang/Pemaket/Tutorial/PengenalanBazaar",permalink:"/TimPengembang/Pemaket/Tutorial/PengenalanBazaar",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/Tutorial/PengenalanBazaar.md",version:"current"},d=[{value:"Menggunakan Bazaar",id:"menggunakan-bazaar",children:[]}],o={rightToc:d};function k(a){var n=a.components,e=Object(i.a)(a,["components"]);return Object(t.b)("wrapper",Object(r.a)({},o,e,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"tutorial-pengenalanbazaar"},"Tutorial PengenalanBazaar"),Object(t.b)("p",null,"Bazaar (disingkat menjadi bzr) adalah salah satu aplikasi Version Control\nSystem (VCS) seperti halnya Subversion (svn), CVS, dan git. Berbeda dengan\nSubversion atau CVS yang bersifat terpusat, Bazaar memiliki sifat\nterdisitribusi seperti halnya git. Karena bersifat terdistribusi, maka tidak\ndiperlukan satu buah server utama yang berisi informasi seluruh revisi yang\npernah dilakukan. Seluruh informasi revisi akan selalu ada pada salinan\nrepositori yang dibuat."),Object(t.b)("h3",{id:"menggunakan-bazaar"},"Menggunakan Bazaar"),Object(t.b)("p",null,"Operasi-operasi dasar"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"Membuat repositori (init)"),Object(t.b)("li",{parentName:"ol"},"Menambahkan berkas atau direktori (add)"),Object(t.b)("li",{parentName:"ol"},"Menyimpan perubahan pada repositori (commit)"),Object(t.b)("li",{parentName:"ol"},"Menyalin sebuah repositori ke repositori lokal (branch)"),Object(t.b)("li",{parentName:"ol"},"Mengirim perubahan pada repositori lokal ke repositori lain (push)\nOperasi tambahan"),Object(t.b)("li",{parentName:"ol"},"Membuat tag"),Object(t.b)("li",{parentName:"ol"},"Mengecek status berkas"),Object(t.b)("li",{parentName:"ol"},"Mengatur nama dan email"),Object(t.b)("li",{parentName:"ol"},"Melihat perubahan antar revisi")),Object(t.b)("h4",{id:"membuat-repositori"},"Membuat Repositori"),Object(t.b)("p",null,"Untuk menggunakan Bazaar, diperlukan adanya repositori kode sumber yang akan\nmenampung seluruh perubahan yang dilakukan. Pembuatan repositori ini dilakukan\ndengan cara.\n$ bzr init\nPerintah tersebut akan membuat repositori pada direktori kerja yang aktif.\nRepositori dapat dikenali dengan adanya direktori .bzr. Direktori repositori\nini berisi informasi bagi seluruh berkas pada direktori dan seluruh sub\ndirektori kerja. Seluruh informasi terdapat dalam satu buah direktori ini dan\ntidak tersebar di seluruh direktori yang ada seperti halnya pada Subversion.\nJika ingin menggunakan fasilitas tagging, tambahkan opsi --dirstate-tags pada\nsaat membuat repositori.\n$ bzr init --dirstate-tags\nDengan mengizinkan pembuatan tag, setiap revisi dapat diberi tanda khusus\nberupa nama yang mudah diingat. Sehingga tidak hanya berupa nomor revisi saja.\nRepositori Bazaar yang digunakan untuk menampung berkas-berkas paket untuk\nBlankOn menggunakan jenis repositori dengan fasilitas tagging seperti ini."),Object(t.b)("h4",{id:"menambahkan-berkas"},"Menambahkan Berkas"),Object(t.b)("p",null,"Berkas maupun direktori yang ada di dalam direktori kerja tidak serta-merta\nmenjadi berkas/direktori yang tercatat dan tersimpan di dalam repositori. Agar\nberkas/direktori tersebut dapat tersimpan di dalam repositori, maka berkas/\ndirektori tersebut harus ditandai terlebih dahulu.\nUntuk menandai berkas/direktori agar dapat disimpan di dalam repositori, dapat\ndigunakan perintah berikut.\n$ bzr add berkas1 berkas2 direktori1 direktori2 ...\nPemanggilan perintah di atas hanya bertujuan untuk menandai saja. Tidak\nbertujuan untuk benar-benar menyimpan berkas ke dalam repositori. Untuk\nmenyimpannya, silakan baca bagian berikutnya."),Object(t.b)("h4",{id:"menyimpan-perubahan"},"Menyimpan Perubahan"),Object(t.b)("p",null,'Setiap berkas yang sudah ditandai akan dipantau. Jika berkas tersebut mengalami\nperubahan, maka perubahan akan disimpan ke dalam repositori. Untuk menyimpan\nperubahan, gunakan perintah berikut.\n$ bzr commit\nSebuah editor teks akan terbuka dan Anda diberi kesempatan untuk menuliskan\ncatatan perubahan yang Anda lakukan. Tulis catatan dengan baik dan jelas\nsehingga rekan kerja Anda dapat memahami perubahan yang Anda lakukan.\nJika Anda ingin melakukan penyimpanan dan penulisan catatan dalam satu langkah,\ngunakan perintah berikut.\n$ bzr commit -m "Catatan perubahan yang terjadi"'),Object(t.b)("h4",{id:"menyalin-repositori"},"Menyalin Repositori"),Object(t.b)("p",null,"Karena Bazaar bersifat terdistribusi, maka setiap operasi penyalinan akan\nmenyalin seluruh repositori yang ada. Hal ini berarti Anda juga akan\nmendapatkan seluruh informasi revisi yang pernah dilakukan sebelumnya.\nUntuk menyalin repositori, gunakan perintah berikut.\n$ bzr branch url://menuju/repositori\nContoh:\n$ bzr branch ",Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"http://bazaar.launchpad.net/~blankon-pemaket/blankon/blankon-"}),"http://bazaar.launchpad.net/~blankon-pemaket/blankon/blankon-"),"\nartwork\nDengan melakukan perintah di atas, repositori blankon-artwork di launchpad.net\nakan disalin ke komputer Anda."),Object(t.b)("h4",{id:"mengirim-perubahan"},"Mengirim Perubahan"),Object(t.b)("p",null,"Ada kalanya Anda ingin mengirim perubahan yang telah Anda simpan dalam\nrepositori lokal ke sebuah repositori lain. Sebagai contoh, Anda ingin mengirim\nperubahan yang Anda lakukan ke repositori Bazaar yang ada di launchpad.net.\nUntuk melakukan hal tersebut, perintah berikut dapat digunakan.\n$ bzr push url://menuju/repositori\nContoh:\n$ bzr push bzr+ssh://bazaar.launchpad.net/~blankon-pemaket/blankon/blankon-\nartwork/"),Object(t.b)("h4",{id:"membuat-tag"},"Membuat Tag"),Object(t.b)("p",null,"Jika Anda menggunakan jenis repositori yang mendukung pembuatan tag, maka Anda\ndapat memberi nama pada setiap revisi yang ada. Perintah untuk melakukan hal\ntersebut adalah sebagai berikut.\n$ bzr tag nama-tag\nTag yang dibuat akan diberikan kepada revisi terakhir yang ada. Jadi, jika Anda\ningin memberi tag pada perubahan yang telah Anda lakukan, pastikan Anda\nmelakukan operasi commit terlebih dahulu."),Object(t.b)("h4",{id:"mengecek-status"},"Mengecek Status"),Object(t.b)("p",null,"Untuk melihat status dari setiap berkas atau direktori yang ada pada direktori\nkerja, Anda dapat menggunakan perintah berikut.\n$ bzr status\nJika ada berkas atau direktori yang tidak aktual mengikuti revisi terakhir,\nmaka berkas/direktori tersebut akan diberi keterangan status, seperti removed,\nmodified, added, dan unknown."),Object(t.b)("pre",null,Object(t.b)("code",Object(r.a)({parentName:"pre"},{}),"* removed berarti berkas/direktori tersebut tidak ditemukan dalam direktori\n  kerja. Jika Anda melakukan operasi commit, maka berkas/direktori tersebut\n  juga akan dihapus pada revisi terakhir (namun tetap ada pada revisi-\n  revisi sebelumnya)\n* modified berarti berkas tersebut sudah mengalami perubahan\n* added berarti berkas/direktori tersebut adalah berkas/direktori baru yang\n  belum pernah ada di dalam repositori dan akan dimasukkan ke dalam\n  repositori\n* unknown berarti berkas/direktori tersebut tidak ditemukan di dalam\n  repositori dan tidak akan dimasukkan ke dalam repositori pada saat\n  melakukan operasi commit.\n")),Object(t.b)("h4",{id:"mengatur-nama-dan-email"},"Mengatur Nama dan Email"),Object(t.b)("p",null,'Setiap revisi yang ada akan mengandung informasi pengguna yang membuat revisi\ntersebut. Untuk mengaturnya, gunakan perintah berikut.\n$ bzr whoami "Nama Anda ',Object(t.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:email@anda.id"}),"email@anda.id"),'"\nUntuk mengecek nama yang sedang digunakan, jalankan perintah berikut.\n$ bzr whoami\nUntuk membuka bzr yang sedang terkunci, jalankan perintah berikut.\n$ bzr break-lock  bzr+ssh'),Object(t.b)("h4",{id:"melihat-perubahan"},"Melihat Perubahan"),Object(t.b)("p",null,"Untuk melihat perubahan yang terjadi antara revisi terakhir yang tersimpan dan\nrevisi yang masih ada dalam direktori kerja Anda, perintah berikut dapat\ndigunakan.\n$ bzr diff\nSebuah informasi perubahan dengan format diff akan ditampilkan.\nJika Anda ingin membandingkan dua revisi spesifik, gunakan perintah berikut.\n$ bzr diff -rX..Y\nNilai X dan Y menunjuk ke nomor revisi dari revisi yang ingin Anda bandingkan.\nKategoriPemaket\nLast_modified 7 months ago Last modified on 09/28/2016 01:39:58 PM"),Object(t.b)("h4",{id:""}),Object(t.b)("hr",null))}k.isMDXComponent=!0}}]);