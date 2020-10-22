(window.webpackJsonp=window.webpackJsonp||[]).push([[886],{1022:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return k}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var a=i.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):b(b({},a),e)),n},u=function(e){var a=s(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},c=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=t,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?i.a.createElement(k,b(b({ref:a},p),{},{components:n})):i.a.createElement(k,b({ref:a},p))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=c;var b={};for(var o in a)hasOwnProperty.call(a,o)&&(b[o]=a[o]);b.originalType=e,b.mdxType="string"==typeof e?e:t,l[1]=b;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},942:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return b})),n.d(a,"rightToc",(function(){return o})),n.d(a,"default",(function(){return s}));var t=n(2),i=n(6),r=(n(0),n(1022)),l={},b={unversionedId:"TimPengembang/Dokumentasi/Kelas/MengenalPerkakas",id:"TimPengembang/Dokumentasi/Kelas/MengenalPerkakas",isDocsHomePage:!1,title:"MengenalPerkakas",description:"Mengenal Berkas-berkas di direktori debian",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/MengenalPerkakas.md",slug:"/TimPengembang/Dokumentasi/Kelas/MengenalPerkakas",permalink:"/TimPengembang/Dokumentasi/Kelas/MengenalPerkakas",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/MengenalPerkakas.md",version:"current"},o=[{value:"Persiapan",id:"persiapan",children:[]},{value:"File Control",id:"file-control",children:[]},{value:"File changelog",id:"file-changelog",children:[]},{value:"Membangun paket",id:"membangun-paket",children:[]}],p={rightToc:o};function s(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"mengenal-berkas-berkas-di-direktori-debian"},"Mengenal Berkas-berkas di direktori debian"),Object(r.b)("p",null,"Direktori debian merupakan direktori khas distro debian/turunannya yang ditambahkan pada file sumber sebagai metadata dalam pembuatan paket. Direktori debian terdiri dari banyak file, file yang wajib ada adalah: changelog, control, copyright dan rules. "),Object(r.b)("h2",{id:"persiapan"},"Persiapan"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Buat identitas pemaket  "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),'$ vim .bashrc\n(tambahkan pada akhir baris:)\nexport DEBFULLNAME="Joe Hacker" (sesuaikan dengan nama Anda)\nexport DEBEMAIL="joe.hacker@isp.com" (sesuaikan dengan e-mail Anda)\n$ source .bashrc\n')),Object(r.b)("p",{parentName:"li"},"2.Install paket yang di butuhkan"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(t.a)({parentName:"pre"},{})," $ sudo apt-get install build-essential devscripts debhelper dh-make fakeroot lintian gnupg\n")))),Object(r.b)("p",null,"build-essensial: paket meta yang akan menginstall paket-paket dasar yang dibutuhkan untuk development kaya gcc, make, libc6-dev, dpkg-dev, dll.\ndevscripts: kumpulan tools yang membuat hidup pemaket jadi lebih menyenangkan, seperti dch (tool edit changelog), debuild (bangun paket) dsb.\ndebhelper: kumpulan script2 yang digunakan di berkas debian/rules\ndh-make: tool untuk mendebiankan paket kode sumber (isinya template2 untuk direktori debian)\nlintian: nah ini nih si tukang ngecek paket apakah sudah sesuai tidak dengan\ngnupg: dibutuhkan untuk menandatangi paket debian\nfakeroot: biar bisa ngompail tanpa akses root sebenernya "),Object(r.b)("p",null," 3.Buat gpg key"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --gen-key\nReal name: Joe Hacker\nE-mail address: joe.hacker@isp.com\nPassphrase: paswordpercobaanjanganditiru\n")),Object(r.b)("p",null,"FYI di debian dan ubuntu setiap paket yang akan dikirim ke pabrik paket perlu ditandatangani oleh pemaket, nanti robot pabrik akan ngecek apakah tandatanganya benar2 milik anda. klo sudah beres HARAP BACKUP direktori .gnupg ke tempat yg aman karena kunci gpg adalah satu-satunya identitas Anda agar dapat dikenal oleh irgsh"),Object(r.b)("p",null," 4.Download paket yang akan dijadikan contoh pada lokakarya ini. letakkan pada direktori tertentu "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ mkdir -p lokakarya\n$ cd lokakarya\n$ wget http://cecunguk.blankonlinux.or.id/~imtheface/lokakarya/jao-theme-1.8.tar.gz\n$ tar xzf jao-theme-1.8.tar.gz\n$ cd jao-theme-1.8\n$ ls\n")),Object(r.b)("p",null," 5.Buat direktori debian dengan menggunakan dh_make "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ dh_make -c gpl -f ../jao-theme-1.8.tar.gz\nType of package: single binary, multiple binary, library, kernel module or cdbs?\n [s/m/l/k/b] s\n\nMaintainer name : Joe Hacker\nEmail-Address   : joe.hacker@isp.com\nDate            : Thu, 13 Nov 2008 05:37:17 +0700\nPackage Name    : jao-theme\nVersion         : 1.8\nLicense         : gpl\nType of Package : Single\nHit <enter> to confirm: \nDone. Please edit the files in the debian/ subdirectory now. jao-theme\nuses a configure script, so you probably don't have to edit the Makefiles.\n")),Object(r.b)("p",null,"Proses ini akan membuat direktori debian beserta isinya dari template yang telah disediakan. Serta membuat file jao-theme_1.8.orig.tar.gz sejajar dengan direktori jao-theme-1.8.tar.gz\nDi debian ada policy bahwa kode sumber dari upstream tidak boleh kita boleh kita ubah secara langsung, setiap perubahan yg kita lakukan akan dilakukan di dalam direktori debian. Nantinya isi dari direktori debian itu kalau paket sudah dibangun akan di kompres menjadi nama-paket.diff.gz "),Object(r.b)("h2",{id:"file-control"},"File Control"),Object(r.b)("p",null,"Secara umum file ini berisi:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"Source: jao-theme\nSection: unknown\nPriority: extra\nMaintainer: Joe Hacker <joe.hacker@isp.com>\nBuild-Depends: debhelper (>= 5), autotools-dev\nStandards-Version: 3.7.2\n\nPackage: jao-theme\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends}\nDescription: <insert up to 60 chars description>\n <insert long description, indented with spaces>\n")),Object(r.b)("p",null,"Isi control itu terdiri dari 2 bagian:\n1.Bagian source "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Source:")," nama-paket"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Section:")," itu entri dimana paket debian mau ditaro"),Object(r.b)("p",null,"klo di debian policy section itu terdiri dari beberapa: admin, comm, devel, doc, editors, electronics, embedded, games, gnome, graphics, hamradio, interpreters, kde, libs, libdevel, mail, math, misc, net, news, oldlibs, otherosfs, perl, python, science, shells, sound, tex, text, utils, web, x11. (\u200b",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections"}),"http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections"),")"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Priority:"),' menunjukkan tingkat pentingnya paket. Dapat berisi: required, important, standard, optional, extra. Paket-paket biasanya sih menggunakan priority "optional" saja, di atas priority "optional" hanya digunakan paket-paket penting. Kalau di debian perlu mendapatkan persetujuan dari para bos untuk bisa menggunakan priority di atas "optional". (\u200b',Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities"}),"http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities"),")"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Maintainer:")," nama orang yang memaketkan."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Build-Depends:")," Paket yg dibutuhkan untuk membuat paket tersebut.\nBagaimana cari tahu isinya build-depends?"),Object(r.b)("p",null," \u2022liat README\n\u2022tanya pengelola/pembuat\n\u2022liat Makefile.am "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Standars-Version:")," Versi dari dh-make yang digunakan "),Object(r.b)("p",null," 2.Bagian binary\nBagian binary bisa menghasilkan 1 macam paket atau lebih tergantung kebutuhan, kadang-kadang paket sumber kita perlu pecah jadi beberapa paket binary. contohnya seperti OpenOfficeorg?, kenapa harus dipecah OOo? agar kita bisa pilih paket2 mana saja yg ingin kita install sesuai kebutuhan. klo cuman butuh OOo writer aja buat apa harus install seluruh paket OOo, makanya lebih baik dipecah saja. klo jao-theme sih gak perlu dipecah2."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Package: nama paket")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Architecture: menunjukkan arsitektur yang akan dipakai")),Object(r.b)("p",null,"bisa menggunakan:"),Object(r.b)("p",null,"i386 = kalau ingin hanya arsitektur i386 saja"),Object(r.b)("p",null,"amd64 = kalau ingin hanya arsitektur i386 saja"),Object(r.b)("p",null,"i386, amd64 = kalau ingin kedua-duanya"),Object(r.b)("p",null,"any = semua arsitektur yang tersedia akan dibuat paketnya (i386, amd64, powerpc, sparc, dll)"),Object(r.b)("p",null,"all = untuk paket yg bisa diinstall di semua arsitektur (arsitektur independen)."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Depends:"),' paket-paket yg dibutuhkan agar paket kita dapat berjalan dengan baik. bagaimana menentukan "Depends" sebuah paket? hal ini dapat diketahui hanya dengan mengisinya dengan ${shlibs:Depends}, ${misc:Depends} nanti klo pas kita bangun paket parameter2 itu akan diganti sendiri oleh script debhelper menjadi paket-paket Dependencies paket tersebut. tapi kadang2 kita juga perlu tambah manual "Depends" itu. untuk jao-theme selain yg udah ada sekarang, silakan tambah Depends: rae-icon-theme'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Description:")," berisi deskripsi singkat tentang paket (max 60 karakter). Baris selanjutya berisi deskkripsi panjang tentang paket (harus diawali dengan spasi dan tiap baris max 80 karakter)"),Object(r.b)("p",null,"Sehingga file control akan seperti: "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"Source: jao-theme\nSection: x11\nPriority: extra\nMaintainer: Joe Hacker <joe.hacker@isp.com>\nBuild-Depends: debhelper (>= 5), autotools-dev\nStandards-Version: 3.7.2\n\nPackage: jao-theme\nArchitecture: all\nDepends: ${shlibs:Depends}, ${misc:Depends}, rae-icon-theme\nDescription: jao theme, tema khusus untuk blankon\n quick brown fox jumps over the lazy dog\n quick brown fox jumps over the lazy dog\n .quick brown fox jumps over the lazy dog\n quick brown fox jumps over the lazy dog\n")),Object(r.b)("h2",{id:"file-changelog"},"File changelog"),Object(r.b)("p",null,"file changelog sangat penting bagi pemaket. file ini berisi versi paket, catatan sejarah perubahan paket, siapa yang merubah dan informasi penting lainya.\nfile ini sudah digenerate otomatis pas kita jalankan dh_make tadi. atau jika ingin yang baru dapat menggunakan tools dch.\nhapus changelog lama, lalu generate yang baru "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ pwd\njao-theme-1.8\n$ rm -rf debian/changelog\n$ dch --create\n")),Object(r.b)("p",null,"akan dibuatkan file changelog baru dengan format:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"PACKAGE (VERSION) UNRELEASED; urgency=low\n\n  * Initial release. (Closes: #XXXXXX)\n\n -- Joe Hacker <joe.hacker@isp.com>  Thu, 13 Nov 2008 06:32:18 +0700\n")),Object(r.b)("p",null,"Secara umum file changelog terdiri dari 3 bagian:"),Object(r.b)("p",null," 1.Bagian atas "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"PACKAGE:")," isi dengan nama paket kode sumber (jao-theme)"),Object(r.b)("p",null,"VERSION: versi yang akan digunakan (1.8-1)"),Object(r.b)("p",null,"1.8-1 itu artinya 1.8 versi upstream -1 itu versi revisi debian"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"UNREALEASED:")," berisi distribusi yang akan digunakan"),Object(r.b)("p",null,"kalau di debian bisa diisi dengan: stable, unstable, testing, etch dll kalau di ubuntu bisa diisi dengan: gutsy, hardy, intrepid dll kalau di blankon bisa diisi dengan: konde, lontara, meulogoe dll"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"urgency:")," menunjukkan seberapa penting kan update yg kita lakukan"),Object(r.b)("p",null,"bisa diisi dengan: urgency: pilihannya low, medium, high, emergency, critical"),Object(r.b)("p",null," 2.Bagian tengah\nisinya ini deskripsi perubahan yg kita lakukan di paket tsb, isi deskripsi yg baik itu harus dapat menjelaskan apa-apa saja yg kita ubah dan alasannya kenapa? contoh yang baik lihat di: \u200b(",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu"}),"http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu"),")"),Object(r.b)("p",null,"contoh: sekarang coba edit file AUTHORS lalu tambah authors di situ Tim Artis BlankOn ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"mailto:BlankOn@googlegroup.com"}),"BlankOn@googlegroup.com")),Object(r.b)("p",null,"karena kita mengubah sesuatu di berkas debian, maka perubahan itu harus ditulis di changelog bagian tengah"),Object(r.b)("p",null,"\u2022 AUTHORS: Tambah author Tim Artis BlankOn ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"mailto:BlankOn@googlegroup.com"}),"BlankOn@googlegroup.com")," "),Object(r.b)("p",null," 3.Bagian terakhir\nbagian bawah isinya itu info tentang siapa yg mengubah paket ini, dan tanggal berapa diubahnya. nama (alamat email) itu diambil dari parameter DEBFULLNAME dan DEBEMAIL yg kita set tadi."),Object(r.b)("p",null,"sehingga changelog menjadi:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"jao-theme (1.8-1) meuligoe; urgency=low\n\n  * Initial release. \n  * AUTHORS: Tambah author Tim Artis BlankOn <BlankOn@googlegroup.com>\n\n -- Joe Hacker <joe.hacker@isp.com>  Wed, 13 Nov 2008 22:45:09 +0700\n")),Object(r.b)("p",null,"##File copyright"),Object(r.b)("p",null,"File copyright itu salah satu file terpenting di dir debian, isinya yah tentu saja yg berhubungan dengan hak cipta. di debian setiap paket yg masuk ke dalam pabrik paket akan di cek terlebih dahulu apakan lisensi yg digunakan sesuai tidak dengan Debian Free Software Guideline"),Object(r.b)("p",null,"File ini berisi keterangan tentang author, sumbernya didonwload dari mana, lisensinya apa dll. lisensi yang dituliskan dalam file ini cuma sebagian saja, selengkapnya bisa dibaca di file lain (biasanya di /usr/share/common-licenses/)."),Object(r.b)("p",null,"Untuk mengetahui lisensi suatu paket dapat di lihat file COPYING atau juga kode sumbernya, karena kadang-kadang satu paket terdiri dari beberapa lisensi."),Object(r.b)("p",null,"Contoh: paket blankon-sounds menggunakan 2 lisensi, 1 GPL untuk karya om blex dan 1 lagi CC untuk karya2 dari pengembang ubuntu. Yang CC karena gak ada di /usr/share/common-licenses/ maka perlu ditulis lengkap isi lisensinya. \u200b",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright"}),"http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright")," "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"his package was debianized by Joe Hacker <joe.hacker@isp.com> on\nWed, 12 Nov 2008 13:24:36 +0700.\n\nIt was downloaded from http://dev.blankonlinux.or.id/\n\nUpstream Author(s):\n\n    Farhan Perdana\n\nCopyright:\n\n        (C) 2008 Farhan Perdana <blackdramon@gmail.com>\n        License: GPL Version 3\n\nLicense:\n\n    This package is free software; you can redistribute it and/or modify\n    it under the terms of the GNU General Public License as published by\n    the Free Software Foundation; either version 2 of the License, or\n    (at your option) any later version.\n\n    This package is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU General Public License for more details.\n\n    You should have received a copy of the GNU General Public License\n    along with this package; if not, write to the Free Software\n    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA\n\nOn Debian systems, the complete text of the GNU General\nPublic License can be found in `/usr/share/common-licenses/GPL'.\n\nThe Debian packaging is (C) 2008, Joe Hacker <joe.hacker@isp.com> and\nis licensed under the GPL, see above.\n\n\n# Please also look if there are files or directories which have a\n# different copyright/license attached and list them here.\n\n\n")),Object(r.b)("p",null,"##File Rules\nFile rules itu file Makefile untuk paket debian kira2 fungsinya sama dengan file Makefile nya autoconf. Perintah-perintah untuk membangun paket kita tulis di sini, di debian sih cukup enak dah banyak tool & script untuk mempermudah membangun paket salah satunya debhelper. Kita tinggal tulis aja di rules script-script debhelper itu yg berawalan dh_*, ini otomatis dibuatkan saat kita menjalankan dh_make diawal."),Object(r.b)("p",null,"Selain menggunakan debhelper, ada juga script lain untuk membuat rules. namanya cdbs (common debian build system). "),Object(r.b)("h2",{id:"membangun-paket"},"Membangun paket"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Hapus file-file di direktori debian selain control, changelog, rules, copyright (tidak dihapus juga tidak apa-apa) ")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ pwd\ndebian\n$ rm *.ex *.EX\n")),Object(r.b)("p",null,"2.Kembali ke direktori jao-theme, lalu jalankan: "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"$ pwd\njao-theme-1.8\n$ dpkg-buildpackage -rfakeroot\n...\n... (dipotong)\n...\ndpkg-genchanges\ndpkg-genchanges: including full source code in upload\ndpkg-buildpackage: full upload (original source is included)\n(WARNING: Failed to sign .dsc and .changes file)\n")),Object(r.b)("p",null,"3.Abaikan saja WARNING diatas. maka akan terbentuk file-file: "),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{}),"jao-theme_1.8-1_all.deb\njao-theme_1.8-1_amd64.changes\njao-theme_1.8-1.diff.gz\njao-theme_1.8-1.dsc\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," berdasarkan lokakarya tanggal 12-11-08 di #blankon by imtheface"),Object(r.b)("p",null,"oiya...ada PRnya juga:"),Object(r.b)("p",null,"\u200b",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.debian.org/doc/debian-policy/"}),"http://www.debian.org/doc/debian-policy/")),Object(r.b)("p",null,"\u200b",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.debian.org/doc/maint-guide/"}),"http://www.debian.org/doc/maint-guide/")),Object(r.b)("p",null,"\u200b",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"http://www.debian.org/doc/developers-reference/"}),"http://www.debian.org/doc/developers-reference/")," "))}s.isMDXComponent=!0}}]);