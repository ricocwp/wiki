(window.webpackJsonp=window.webpackJsonp||[]).push([[782],{1022:function(a,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return p}));var i=n(0),t=n.n(i);function b(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,i)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){b(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function u(a,e){if(null==a)return{};var n,i,t=function(a,e){if(null==a)return{};var n,i,t={},b=Object.keys(a);for(i=0;i<b.length;i++)n=b[i],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(a);for(i=0;i<b.length;i++)n=b[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var s=t.a.createContext({}),m=function(a){var e=t.a.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},d=function(a){var e=m(a.components);return t.a.createElement(s.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return t.a.createElement(t.a.Fragment,{},e)}},c=t.a.forwardRef((function(a,e){var n=a.components,i=a.mdxType,b=a.originalType,l=a.parentName,s=u(a,["components","mdxType","originalType","parentName"]),d=m(n),c=i,p=d["".concat(l,".").concat(c)]||d[c]||k[c]||b;return n?t.a.createElement(p,r(r({ref:e},s),{},{components:n})):t.a.createElement(p,r({ref:e},s))}));function p(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var b=n.length,l=new Array(b);l[0]=c;var r={};for(var u in e)hasOwnProperty.call(e,u)&&(r[u]=e[u]);r.originalType=a,r.mdxType="string"==typeof a?a:i,l[1]=r;for(var s=2;s<b;s++)l[s]=n[s];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},838:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return r})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return m}));var i=n(2),t=n(6),b=(n(0),n(1022)),l={},r={unversionedId:"TimPengembang/Pemaket/MembuatPaketDebian",id:"TimPengembang/Pemaket/MembuatPaketDebian",isDocsHomePage:!1,title:"MembuatPaketDebian",description:"Membuat Paket Debian",source:"@site/Wiki/TimPengembang/Pemaket/MembuatPaketDebian.md",slug:"/TimPengembang/Pemaket/MembuatPaketDebian",permalink:"/TimPengembang/Pemaket/MembuatPaketDebian",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/MembuatPaketDebian.md",version:"current"},u=[{value:"Tujuan",id:"tujuan",children:[]},{value:"Pengetahuan dasar",id:"pengetahuan-dasar",children:[]},{value:"Peralatan",id:"peralatan",children:[]},{value:"Mulai bekerja",id:"mulai-bekerja",children:[{value:"Pendataan berkas yang diinstal",id:"pendataan-berkas-yang-diinstal",children:[]},{value:"Pengategorian paket",id:"pengategorian-paket",children:[]},{value:"Pendefinisian paket",id:"pendefinisian-paket",children:[]}]},{value:"Pengecekan",id:"pengecekan",children:[{value:"Pengecekan daftar isi",id:"pengecekan-daftar-isi",children:[]},{value:"Pengecekan instalasi",id:"pengecekan-instalasi",children:[]},{value:"Pengecekan kesalahan lain",id:"pengecekan-kesalahan-lain",children:[]}]},{value:"Ada pertanyaan?",id:"ada-pertanyaan",children:[]},{value:"Tautan penting",id:"tautan-penting",children:[]}],s={rightToc:u};function m(a){var e=a.components,n=Object(t.a)(a,["components"]);return Object(b.b)("wrapper",Object(i.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"membuat-paket-debian"},"Membuat Paket Debian"),Object(b.b)("h2",{id:"tujuan"},"Tujuan"),Object(b.b)("p",null,"Dokumen ini menjelaskan langkah-langkah pembuatan paket Debian sederhana."),Object(b.b)("h2",{id:"pengetahuan-dasar"},"Pengetahuan dasar"),Object(b.b)("p",null,"Pengetahuan akan hal-hal berikut akan membantu Anda membuat paket Debian dengan benar:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Mekanisme pembangunan perangkat lunak, misalnya dengan Makefile atau autotools."),Object(b.b)("li",{parentName:"ul"},"Cara kerja instalasi paket Debian (dpkg, apt-get).")),Object(b.b)("p",null,"Dalam dokumen ini diasumsikan paket khayalan yang dibangun menggunakan autotools."),Object(b.b)("h2",{id:"peralatan"},"Peralatan"),Object(b.b)("p",null,"Silakan mulai dengan menginstal peralatan berikut:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"cdbs"),Object(b.b)("li",{parentName:"ul"},"debhelper"),Object(b.b)("li",{parentName:"ul"},"devscripts"),Object(b.b)("li",{parentName:"ul"},"penyunting teks")),Object(b.b)("h2",{id:"mulai-bekerja"},"Mulai bekerja"),Object(b.b)("p",null,"Siapkan paket yang belum ada paket Debiannya. Ciri-cirinya adalah dengan tidak\nada direktori DEBIAN atau debian di dalamnya. Misalnya kita punya perangkat\nlunak bernama labusiyam. Perangkat lunak ini menggunakan autotools (ciri-\ncirinya, dibangun dengan cara ./configure kemudian make dan make install)."),Object(b.b)("h3",{id:"pendataan-berkas-yang-diinstal"},"Pendataan berkas yang diinstal"),Object(b.b)("p",null,"Saat melakukan make install perangkat lunak ini akan menginstal:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"/usr/bin/labusiyam"),Object(b.b)("li",{parentName:"ul"},"/usr/lib/liblabusiyam.so.0.0.1"),Object(b.b)("li",{parentName:"ul"},"/usr/lib/liblabusiyam.so.0 (symlink)"),Object(b.b)("li",{parentName:"ul"},"/usr/lib/liblabusiyam.so (symlink)"),Object(b.b)("li",{parentName:"ul"},"/usr/include/labusiyam.h"),Object(b.b)("li",{parentName:"ul"},"/etc/labusiyam/config.txt"),Object(b.b)("li",{parentName:"ul"},"/usr/share/labusiyam/data.txt\nTahu dari mana bahwa berkas-berkas di atas yang diinstal? Silakan tengok\nMakefile.am di seluruh direktori yang ada di dalam kode sumbernya. Ciri-ciri\nberkas yang diinstal adalah berkas yang ada didefinisikan dalam variabel:"),Object(b.b)("li",{parentName:"ul"},"bin_PROGRAMS"),Object(b.b)("li",{parentName:"ul"},"LTLIBRARIES"),Object(b.b)("li",{parentName:"ul"},"variabel yang mengandung kata 'dir', misalnya:\nconfigdir = $(sysconf)\nconfig_DATA = config.txt\nberarti berkas-berkas yang ada di dalam variabel berikutnya (yang tanpa\nkata dir akan diinstal ke dalam direktori itu).\nSemua berkas yang akan diinstal harus dicatat dengan baik.")),Object(b.b)("h3",{id:"pengategorian-paket"},"Pengategorian paket"),Object(b.b)("p",null,"Dalam daftar berkas ada tiga jenis paket yang akan kita buat:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Paket binari\nPaket ini berisi semua program dalam /usr/bin atau /usr/sbin atau\ndirektori eksekutabel lainnya. Juga berisi berkas-berkas pendukung (data\ndan konfigurasi)"),Object(b.b)("li",{parentName:"ul"},"Paket pustaka program\nPaket ini berisi semua pustaka program yang memiliki pola nama /usr/lib/\nlib*. Nama paket ini harus dimulai dengan kata lib dan diakhiri dengan\nnomor SONAME."),Object(b.b)("li",{parentName:"ul"},"Paket pengembangan\nPaket ini berisi symlink ke pustaka program dan semua berkas yang\ndibutuhkan untuk pengembangan (misalnya berkas-berkas kepala kode sumber\n(header files))."),Object(b.b)("li",{parentName:"ul"},"Paket debug\nPaket ini berisi salinan binari dan pustaka program dengan menyertakan\nsimbol di dalamnya. Gunanya untuk menelusuri kesalahan program dengan\ndebugger.\nJadi dalam kasus kita kita akan buat paket-paket berikut:"),Object(b.b)("li",{parentName:"ul"},"labusiyam"),Object(b.b)("li",{parentName:"ul"},"liblabusiyamX"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam-dev"),Object(b.b)("li",{parentName:"ul"},"liblabusiyamX-dbg"),Object(b.b)("li",{parentName:"ul"},"labusiyam-dbg\nX dalam liblabusiyamX belum kita ketahui. Namun nilainya dapat kita cari dengan\ncara:")),Object(b.b)("pre",null,Object(b.b)("code",Object(i.a)({parentName:"pre"},{}),"$ make                              # asumsi proses berjalan lancar\n$ cd src/.libs                      # asumsi lokasinya ada di src/\n$ objdump -x liblabusiyam.so.0.0.1 | grep SONAME\n")),Object(b.b)("p",null,"Perintah di atas akan menghasilkan sesuatu seperti\nSONAME     liblabusiyam.so.0\nAngka terakhir itulah (0) yang dijadikan X. Jadi daftar final paket kita\nadalah:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"labusiyam"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam0"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam-dev"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam0-dbg"),Object(b.b)("li",{parentName:"ul"},"labusiyam-dbg")),Object(b.b)("h3",{id:"pendefinisian-paket"},"Pendefinisian paket"),Object(b.b)("pre",null,Object(b.b)("code",Object(i.a)({parentName:"pre"},{}),"mkdir debian\ncd debian\ntouch changelog control rules\nchmod +x rules\ntouch labusiyam.install labusiyam0.install labusiyam-dev.install\necho 4 > compat\n")),Object(b.b)("p",null,"Sekarang kalau dilihat kita akan lihat:\n",Object(b.b)("inlineCode",{parentName:"p"},"ls -l"),"\nhasilnya:\ntotal 8"),Object(b.b)("pre",null,Object(b.b)("code",Object(i.a)({parentName:"pre"},{}),"-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 changelog\n-rw-r--r-- 1 mdamt mdamt    2 2007-07-11 16:07 compat\n-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 control\n-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 labusiyam0.install\n-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 labusiyam-dev.install\n-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 labusiyam.install\n-rwxr-xr-x 1 mdamt mdamt    0 2007-07-11 16:07 rules\n")),Object(b.b)("h4",{id:"membuat-program-pembangun-paket"},"Membuat program pembangun paket"),Object(b.b)("p",null,"Sunting berkas rules. Isikan informasi berikut:"),Object(b.b)("pre",null,Object(b.b)("code",Object(i.a)({parentName:"pre"},{}),"#!/usr/bin/make -f\ninclude /usr/share/cdbs/1/rules/debhelper.mk\ninclude /usr/share/cdbs/1/class/autotools.mk\nDEB_DH_STRIP_ARGS := --dbg-package=liblabusiyam0 --dbg-package=labusiyam\n")),Object(b.b)("p",null,"Berkas di atas menandakan bahwa pembangunan paket akan menggunakan skrip cdbs.\nDi situ juga didefinisikan dua paket debug yang kita punya."),Object(b.b)("h4",{id:"membuat-definisi-paket"},"Membuat definisi paket"),Object(b.b)("p",null,"Sunting berkas control. Isikan informasi berikut:\nSource: labusiyam\nSection: base\nPriority: optional\nMaintainer: Prajurit Ryan ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:ryan@private.tentara.mil"}),"ryan@private.tentara.mil"),"\nBuild-Depends: debhelper, cdbs, pkg-config, libgtk2.0-dev\nStandards-Version: 3.6.0\nPackage: labusiyam\nSection: base\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends},\nDescription: Labusiyam\nLabusiyam digunakan untuk membuat sayur.\nPackage: liblabusiyam0\nSection: base\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends},\nDescription: Pustaka Labusiyam\nPustaka Labusiyam digunakan untuk membuat sayur lainnya.\nPackage: labusiyam-dev\nSection: base\nArchitecture: all\nDepends: ${shlibs:Depends}, ${misc:Depends},\nDescription: Pengembangan Labusiyam"),Object(b.b)("p",null,"Paket ini digunakan untuk membantu pembuatan sayur lain.\nPerhatikan untuk mengisi kolom-kolom Section, Architecture, dan Build-Depends\ndengan benar. Mari kita lihat satu-persatu:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Definisi pertama kali dibuka dengan mendefinisikan paket sumber, ditandai\ndengan adanya kolom Source. Isikan dengan nama paketnya. Build-Depends\ndiisi dengan paket-paket yang dibutuhkan selama pembangunan paket ini\n(semua paket yang Anda butuhkan saat melakukan make dan make install).\nSource: labusiyam\nSection: base\nPriority: optional\nMaintainer: Prajurit Ryan ",Object(b.b)("a",Object(i.a)({parentName:"li"},{href:"mailto:ryan@private.tentara.mil"}),"ryan@private.tentara.mil"),"\nBuild-Depends: debhelper, cdbs, pkg-config, libgtk2.0-dev\nStandards-Version: 3.6.0"),Object(b.b)("li",{parentName:"ul"},"Kemudian definisikan paket binari kita, yaitu labusiyam. Section diisi\nsesuai dengan kategori perangkat lunaknya. Silakan konsultasi dengan\nmanual Debian. Arsitektur diisi dengan any karena mengandung berkas-\nberkas binari.\nPackage: labusiyam\nSection: base\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends},\nDescription: Labusiyam\nLabusiyam digunakan untuk membuat sayur."),Object(b.b)("li",{parentName:"ul"},"Lalu paket pustaka.\nPackage: liblabusiyam0\nSection: base\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends},\nDescription: Pustaka Labusiyam\nPustaka Labusiyam digunakan untuk membuat sayur lainnya."),Object(b.b)("li",{parentName:"ul"},"Lalu paket pengembangan. Arsitektur kita isi dengan all karena ia hanya\nmenginstal berkas labusiyam.h dan tautan simbolik saja. Bila ia juga\nmenyertakan berkas binari maka harus kita ganti ke any.\nPackage: labusiyam-dev\nSection: base\nArchitecture: all\nDepends: ${shlibs:Depends}, ${misc:Depends},\nDescription: Pengembangan Labusiyam\nPaket ini digunakan untuk membantu pembuatan sayur lain."),Object(b.b)("li",{parentName:"ul"},"Cukup sekian. Paket debug tidak perlu kita definisikan dalam debian/\ncontrol.")),Object(b.b)("h4",{id:"mendaftarkan-berkas"},"Mendaftarkan berkas"),Object(b.b)("p",null,"Selanjutnya adalah mendaftarkan berkas yang akan diinstal dalam masing-masing\npaket. Mari kita sunting berkas-berkas berikut dan mengisinya dengan informasi\nyang juga diberikan di bawah."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"labusiyam.install\ndebian/tmp/usr/bin/labusiyam\ndebian/tmp/etc/labusiyam/config.txt\ndebian/tmp/usr/share/labusiyam/data.txt"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam0.install\ndebian/tmp/usr/lib/liblabusiyam.so.0.0.1\ndebian/tmp/usr/lib/liblabusiyam.so.0\natau boleh juga:\ndebian/tmp/usr/lib/liblabusiyam.so.*"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam-dev.install\ndebian/tmp/usr/lib/liblabusiyam.so\ndebian/tmp/usr/include/labusiyam.h")),Object(b.b)("h4",{id:"membuat-catatan-versi"},"Membuat catatan versi"),Object(b.b)("p",null,"Sunting berkas changelog, isikan:\nlabusiyam (0.0.1-0blankon1) konde; urgency=low"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"New release.\n-- Prajurit Ryan ",Object(b.b)("a",Object(i.a)({parentName:"li"},{href:"mailto:ryan@private.tentara.mil"}),"ryan@private.tentara.mil"),"  Wed,  4 Jul 2007 11:37:37 +0300\nPerhatikan bahwa penulisan tanggal harus dilakukan dengan bentuk seperti di\natas. Silakan konsultasi dengan manual Debian untuk lebih jelasnya. Perhatikan\ndi mana harus menulis spasi dan di mana tidak. Penomoran nomor versi bergantung\ndengan konvensi distribusi. Kata konde di atas menandakan bahwa paket ini\nditujukan untuk distribusi konde. Pada Debian biasanya menggunakan unstable\natau testing.")),Object(b.b)("h4",{id:"membangun-paket"},"Membangun paket"),Object(b.b)("p",null,"Sekarang mari kita bangun paketnya:"),Object(b.b)("p",null,"cd ..    # tadi ada di dalam direktori debian/ sekarang kita naik satu tingkat\ndpkg-buildpackage -rfakeroot"),Object(b.b)("p",null,"Bila tidak ada aral melintang, maka dalam direktori atasnya lagi kita akan\npunya berkas-berkas berikut:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"labusiyam_0.0.1-0ubuntu1_i386.deb"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam0_0.0.1-0ubuntu1_i386.deb"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam-dev_0.0.1-0ubuntu1_all.deb"),Object(b.b)("li",{parentName:"ul"},"liblabusiyam0-dbg_0.0.1-0ubuntu1_i386.deb"),Object(b.b)("li",{parentName:"ul"},"labusiyam-dbg_0.0.1-0ubuntu1_i386.deb"),Object(b.b)("li",{parentName:"ul"},"labusiyam_0.0.1-0ubuntu1.dsc"),Object(b.b)("li",{parentName:"ul"},"labusiyam_0.0.1-0ubuntu1.tar.gz")),Object(b.b)("h2",{id:"pengecekan"},"Pengecekan"),Object(b.b)("p",null,"Pengecekan perlu kita lakukan pada tiap-tiap paket yang dihasilkan guna\nmemastikan bahwa paket-paket tersebut berisi berkas-berkas yang benar."),Object(b.b)("h3",{id:"pengecekan-daftar-isi"},"Pengecekan daftar isi"),Object(b.b)("p",null,"Mengeceknya mudah. Gunakan perintah:\ndpkg --contents nama-berkas.deb\nDalam hasil keluaran biasanya akan muncul bahwa ada berkas bernama\nchangelog.gz, changelog.Debian.gz, dan copyright. Ini tidak apa-apa. Namun\npastikan bahwa berkas-berkas yang sudah kita masukkan ke dalam berkas *.install\nbenar-benar ada dalam hasil keluarannya."),Object(b.b)("h3",{id:"pengecekan-instalasi"},"Pengecekan instalasi"),Object(b.b)("p",null,"Cek dengan menginstal paket tersebut:\nsudo dpkg -i nama-berkas.deb\nBiasanya masalah yang timbul disini adalah ketidakcocokan dalam ketergantungan\npaket, dsb."),Object(b.b)("h3",{id:"pengecekan-kesalahan-lain"},"Pengecekan kesalahan lain"),Object(b.b)("p",null,"Gunakan perangkat lunak khusus pengecekan paket, misalnya linda atau lintian.\nCaranya silakan lihat halaman manualnya masing-masing."),Object(b.b)("h2",{id:"ada-pertanyaan"},"Ada pertanyaan?"),Object(b.b)("p",null,"Silakan tanya ke milis ubuntu-id@\u2026 dengan subyek ","[PAKET]","."),Object(b.b)("h2",{id:"tautan-penting"},"Tautan penting"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u200bDebian_Policy_Manual"),Object(b.b)("li",{parentName:"ul"},"\u200bManual_CDBS\nKategoriPemaket\nLast modified on 08/20/2009 04:13:49 PM")),Object(b.b)("hr",null))}m.isMDXComponent=!0}}]);