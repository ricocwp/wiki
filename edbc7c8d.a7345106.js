(window.webpackJsonp=window.webpackJsonp||[]).push([[912],{1022:function(a,n,e){"use strict";e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return g}));var i=e(0),t=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function d(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function l(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function u(a,n){if(null==a)return{};var e,i,t=function(a,n){if(null==a)return{};var e,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var k=t.a.createContext({}),p=function(a){var n=t.a.useContext(k),e=n;return a&&(e="function"==typeof a?a(n):l(l({},n),a)),e},m=function(a){var n=p(a.components);return t.a.createElement(k.Provider,{value:n},a.children)},s={inlineCode:"code",wrapper:function(a){var n=a.children;return t.a.createElement(t.a.Fragment,{},n)}},b=t.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,d=a.parentName,k=u(a,["components","mdxType","originalType","parentName"]),m=p(e),b=i,g=m["".concat(d,".").concat(b)]||m[b]||s[b]||r;return e?t.a.createElement(g,l(l({ref:n},k),{},{components:e})):t.a.createElement(g,l({ref:n},k))}));function g(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,d=new Array(r);d[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=a,l.mdxType="string"==typeof a?a:i,d[1]=l;for(var k=2;k<r;k++)d[k]=e[k];return t.a.createElement.apply(null,d)}return t.a.createElement.apply(null,e)}b.displayName="MDXCreateElement"},968:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return d})),e.d(n,"metadata",(function(){return l})),e.d(n,"rightToc",(function(){return u})),e.d(n,"default",(function(){return p}));var i=e(2),t=e(6),r=(e(0),e(1022)),d={},l={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab5",id:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab5",isDocsHomePage:!1,title:"Panduan5Bab5",description:"BAB V Desktop BlankOn Minimalis",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab5.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab5",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab5",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab5.md",version:"current"},u=[{value:"Bagian-bagian LXDE",id:"bagian-bagian-lxde",children:[]},{value:"Bekerja dengan aplikasi",id:"bekerja-dengan-aplikasi",children:[]},{value:"Pengaturan Panel",id:"pengaturan-panel",children:[]},{value:"Mengganti Tema",id:"mengganti-tema",children:[]},{value:"Mengubah Latar Belakang",id:"mengubah-latar-belakang",children:[]},{value:"Mengakhiri Sesi",id:"mengakhiri-sesi",children:[]}],k={rightToc:u};function p(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(r.b)("wrapper",Object(i.a)({},k,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bab-v-desktop-blankon-minimalis"},"BAB V Desktop BlankOn Minimalis"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Panduan BlankOn 5"),"\nBerbeda dengan BlankOn Linux edisi Reguler, BlankOn minimalis menggunakan\ndesktop bernama LXDE (",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.lxde.org"}),"www.lxde.org"),") yang sangat ringan. Desktop ini tidak\nberbeda jauh dengan desktop GNOME.\nPada bab ini, dijelaskan mengenai penggunaan desktop LXDE pada BlankOn edisi\nminimalis beserta cara konfigurasinya."),Object(r.b)("h3",{id:"bagian-bagian-lxde"},"Bagian-bagian LXDE"),Object(r.b)("p",null,"Desktop LXDE pada BlankOn Linux edisi Minimalis memiliki dua bagian utama,\nyaitu area kerja dan panel. Area kerja menampilkan aplikasi-aplikasi yang\nsedang dibuka serta menampilkan gambar latar belakang dan ikon-ikon untuk\nmembuka suatu folder.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/blankon-minimalist-\ndesktop.png]","\nPanel pada LXDE berjumlah dua, yaitu bagian atas dan bagian bawah. Panel bagian\nterdiri dari berbagai bagian dengan fungsi masing-masing yang membantu Anda\ndalam bekerja, berikut adalah penjelasannya masing-masing bagian :\nPanel Atas\n","[/raw-attachment/wiki/Dokumentasi/    Menu BlankOn, merupakan menu utama untuk\nPanduan/5/Bab5/lxde-blankon-menu.png]"," memulai suatu aplikasi dan melakukan\nsuatu pekerjaan pada desktop LXDE.\n","[/raw-attachment/wiki/Dokumentasi/    Ikon satu klik untuk menjalankan\nPanduan/5/Bab5/lxde-launcher.png]","     aplikasi.\nMenampilkan grafik beban pekerjaan yang\n","[/raw-attachment/wiki/Dokumentasi/    dilakukan komputer, semakin banyak warna\nPanduan/5/Bab5/lxde-load-graph.png]","   hijau yang dilihat, berarti komputer\nsedang bekerja dengan berat.\nBlank                                 Area untuk menampilkan notifikasi sistem\n(tray)\n","[/raw-attachment/wiki/Dokumentasi/    Penanda tanggal dan waktu sistem\nPanduan/5/Bab5/lxde-clock.png][/raw-attachment/wiki/Dokumentasi/    Mengaktifkan fitur kunci layar\nPanduan/5/Bab5/lxde-lock.png]","\n","[/raw-attachment/wiki/Dokumentasi/    Keluar dari sistem\nPanduan/5/Bab5/lxde-quit-desktop.png]","\nPanel Bawah\n","[/raw-attachment/wiki/Dokumentasi/    Menyembunyikan semua jendela dan\nPanduan/5/Bab5/lxde-show-desktop.png]"," menampilkan ikon desktop\n","[/raw-attachment/wiki/Dokumentasi/    Berisi daftar aplikasi yang terbuka pada\nPanduan/5/Bab5/lxde-taskbar.png]","      suatu area kerja\n","[/raw-attachment/wiki/Dokumentasi/\nPanduan/5/Bab5/lxde-workspace-        Penukar area kerja\nselector.png]","\nUntuk melakukan konfigurasi suatu panel, Anda bisa klik kanan pada panel, lalu\nmemilih menu \u201cPengaturan Panel\u201d. Pembahasan mengenai pengaturan panel lebih\nlanjut dijelaskan pada subbab tentang pengaturan panel."),Object(r.b)("h3",{id:"bekerja-dengan-aplikasi"},"Bekerja dengan aplikasi"),Object(r.b)("p",null,"Untuk membuka suatu aplikasi di desktop LXDE, Anda bisa klik menu BlankOn pada\npojok kiri atas, kemudian memilih kategori dari aplikasi yang ingin Anda buka\ndan terakhir memilih aplikasi dengan cara mengklik mouse.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-run-applications.png]","\nDesktop LXDE juga menyediakan lebih dari satu area kerja. Untuk memindahkan\nsuatu jendela aplikasi ke area kerja lainnya, Anda bisa klik kanan pada baris\njudul jendela, lalu memilih menu \u201cSend to desktop\u201d, kemudian memilih nomor\ndesktop atau area kerja yang diinginkan.\nUntuk berpindah antar satu area kerja dengan area kerja lainnya, Anda bisa\nmemanfaatkan penukar area kerja yang ada di pojok kanan bawah desktop.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/workspace-switcher-lxde.png]"),Object(r.b)("h3",{id:"pengaturan-panel"},"Pengaturan Panel"),Object(r.b)("p",null,"Panel pada LXDE bisa Anda atur sesuai dengan keinginan Anda. Pada subbab ini,\ndijelaskan mengenai manipulasi dan pengaturan panel pada desktop LXDE. Anda\nbisa mengatur panel sesuai dengan selera Anda."),Object(r.b)("h4",{id:"mengatur-penampilan-panel"},"Mengatur penampilan Panel"),Object(r.b)("p",null,"Untuk mengatur penampilan suatu panel, klik pada panel yang ingin Anda atur\nlalu pilih menu \u201cPengaturan Panel\u201d. Pada jendela properti, terdapat dua tab\nyaitu tab General, Panel Applets, dan Advanced.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-panel-configuration.png]","\nPada tab General, Anda dapat melakukan pengaturan antara lain :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* \u201cPosisi\u201d, mengatur letak/orientasi dari suatu panel.\n* \u201cUkuran\u201d, mengatur ukuran lebar dan tinggi dari panel.\n* \u201cLatar Belakang\u201d, mengatur latar belakang dari suatu panel, Anda bisa\n  menggunakan warna sistem, transparansi atau menggunakan latar belakang\n* \u201cFonta\u201d, mengatur warna dari fonta pada panel.\n")),Object(r.b)("p",null,"Setelah pengaturan selesai dilakukan, Anda bisa klik tombol \u201cTutup\u201d untuk\nkeluar dari jendela pengaturan panel LXDE."),Object(r.b)("h4",{id:"menambahmenghapus-panel"},"Menambah/Menghapus? Panel"),Object(r.b)("p",null,"Untuk menambah panel baru, Anda bisa klik kanan pada ruang kosong pada suatu\npanel, lalu pilih menu \u201cBuat Panel Baru\u201d. Maka akan dibuatlah sebuah panel baru\nyang masih kosong. Sekarang Anda bisa mengisi objek yang Anda inginkan pada\npanel baru tersebut. Sedangkan untuk menghapus panel, Anda bisa klik kanan pada\npanel yang hendak Anda hapus, lalu pilih menu \u201cHapus Panel ini\u201d."),Object(r.b)("h4",{id:"menambahmenghapus-aplet-pada-suatu-panel"},"Menambah/Menghapus? aplet pada suatu panel"),Object(r.b)("p",null,"Bila panel sudah terpasang dengan baik, Anda bisa menambahkan aplet baru pada\npanel yang berfungsi untuk membantu pekerjaan Anda di desktop. Misalnya, Anda\nbisa menambahkan aplet monitor baterai untuk melihat atau memonitor penggunaan\nbaterai pada notebook atau laptop.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-applet-configuration.png]","\nUntuk melakukan hal ini, klik kanan panel yang hendak di setting kemudia pilih\nPanel settings. Untuk melakukan menambahan applet, klik pada tab \u201cAplet Panel\u201d,\nkemudian klik tombol \u201cAdd\u201d yang berada di pojok atas.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-insert-applet.png]","\nPenambahan dapat dilakukan dengan cara memilih daftar aplet yang disediakan,\nmisalnya saja, aplet kendali volume. Bila sudah melakukan pemilihan kemudian\nklik \u201cAdd\u201d yang terdapat di pojok kanan bawah. Untuk melakukan penambahan aplet\nyang lain, ulangi lagi cara diatas. Untuk menghapus aplet yang terdapat pada\npanel caranya sukup sederhana. Klik kanan pada applet yang hendak di hilangkan\ndari panel. Kemudian pilihlah Hapus dari panel. Maka secara otomatis aplet\ntersebut akan di hapus dari panel."),Object(r.b)("h3",{id:"mengganti-tema"},"Mengganti Tema"),Object(r.b)("p",null,"Untuk mengubah tema pada lingkungan desktop LXDE, dapat dilakukan dengan cara\nsebagai berikut. Pertama, klik pada menu BlankOn > Preferensi > Appearance.\nKemudian akan muncul jendela pengaturan tampilan. Pada tab \u201cJendela\u201d, pilihlah\njenis tema yang hendak digunakan, kemudian lihat preview tema pada bagian kanan\njendela pengaturan tampilan tersebut.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-theme-configuration.png]","\nPada tab \u201cIkon\u201d, pilihlah jenis icon yang ingin digunakan. Selanjutnya pada tab\n\u201cLainnya\u201d, digunakan untuk pengaturan penempatan text pada icon tertentu,\nbiasanya ada beberapa pilihan yang dapat dipilih, misalnya \u201ctext only\u201d, \u201cicon\nonly\u201d dan lain sebagainya.\nPada jendela pengaturan tampilan ini, pengguna juga dapat mengatur jenis font\nyang digunakan oleh sistem mereka. Hal ini dilakukan dengan cara mengklik\nbagian \u201cfonta\u201d yang terdapat pada kiri bawah pada tab window. Bila pengaturan\nsudah dirasa cukup, perubahan dapat langsung dilihat dengan mengklik\n\u201cTerapkan\u201d, yang terdapat di kanan bawah jendela pengaturan tampilan tesebut.\nSementara untuk pengaturan bingkai jendela, Anda bisa membuka jendela\npengaturannya melalui menu BlankOn > Preferensi > Openbox Configuration\nManager.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-openbox-window.png]","\nKemudian, Anda bisa memilih tema bingkai jendela yang diinginkan. Setelah\nselesai melakukan perubahan, Anda bisa klik tombol \u201cClose\u201d."),Object(r.b)("h3",{id:"mengubah-latar-belakang"},"Mengubah Latar Belakang"),Object(r.b)("p",null,"Diantara semua bagian area kerja, kita akan hampir selalu melihat yang namanya\nlatar belakang atau wallpaper. Jadi sangatlah wajar, jika para pengguna\nkomputer yang sangat sering mengubah latar belakang dari area kerja mereka.\nUntuk mengubah latar belakang pada lingkungan desktop LXDE, caranya cukup\nsederhana. Yaitu dengan klik kanan pada sembarang tempat di layar desktop,\nkemudian pilihlah menu \u201cDesktop Settings\u201d. Kemudian akan muncul sebuah jendela\nbaru, pada tab \u201cDekstop\u201d, pilihlah pada bagian \u201cWallpaper\u201d, pada bagian inilah\nAnda dapat melakukan perubahan pada latar belakang yang dimiliki.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab5/lxde-background.png]","\nUntuk melakukan perubahan latar belakang, kliklah garis yang terdapat di\nsebelah kanan tulisan \u201cwallpaper\u201d, kemudian cari tempat dimana wallpaper yang\nyang Anda inginkan berada, bila sudah klik \u201cOpen\u201d, akhiri perubahan yang\ndilakukan dengan cara mengklik tombol \u201cOK\u201d."),Object(r.b)("h3",{id:"mengakhiri-sesi"},"Mengakhiri Sesi"),Object(r.b)("p",null,"Setelah Anda selesai bekerja, Anda bisa mengakhiri sesi bekerja Anda pada\ndekstop. Untuk melakukan hal ini, klik menu BlankOn pada pojok kiri atas,\nkemudian pilihlah Logout. Kemudian, Anda akan diberi beberapa pilihan, yaitu :"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* Shutdown, mematikan komputer Anda.\n* Reboot, mematikan komputer Anda dan menghidupkannya kembali.\n* Suspend, mengaktifkan mode tidur pada komputer. Semua komponen komputer\n  akan mati kecuali Memory.\n* Hibernate, menyimpan sesi ke harddisk dan mematikan komputer. Sesi akan\n  dikembalikan setelah komputer dihidupkan.\n* Switch User, untuk berpindah antar sesi pengguna.\n* Log Out, untuk keluar dari sesi pengguna yang sedang aktif.\n")),Object(r.b)("p",null,"Last modified on 07/05/2009 07:33:49 PM"),Object(r.b)("h4",{id:"attachments-18"},"Attachments (18)"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* blankon-minimalist-desktop.png\u200b (115.4 KB) - added by wirama 8 years ago.\n* lxde-applet-configuration.png\u200b (28.5 KB) - added by wirama 8 years ago.\n* lxde-background.png\u200b (24.2 KB) - added by wirama 8 years ago.\n* lxde-blankon-menu.png\u200b (1.3 KB) - added by wirama 8 years ago.\n* lxde-clock.png\u200b (470 bytes) - added by wirama 8 years ago.\n* lxde-insert-applet.png\u200b (20.4 KB) - added by wirama 8 years ago.\n* lxde-launcher.png\u200b (3.9 KB) - added by wirama 8 years ago.\n* lxde-load-graph.png\u200b (214 bytes) - added by wirama 8 years ago.\n* lxde-lock.png\u200b (1.1 KB) - added by wirama 8 years ago.\n* lxde-openbox-window.png\u200b (40.5 KB) - added by wirama 8 years ago.\n* lxde-panel-configuration.png\u200b (31.8 KB) - added by wirama 8 years ago.\n* lxde-quit-desktop.png\u200b (947 bytes) - added by wirama 8 years ago.\n* lxde-run-applications.png\u200b (63.2 KB) - added by wirama 8 years ago.\n* lxde-show-desktop.png\u200b (707 bytes) - added by wirama 8 years ago.\n* lxde-taskbar.png\u200b (2.9 KB) - added by wirama 8 years ago.\n* lxde-theme-configuration.png\u200b (41.6 KB) - added by wirama 8 years ago.\n* lxde-workspace-selector.png\u200b (558 bytes) - added by wirama 8 years ago.\n* workspace-switcher-lxde.png\u200b (177 bytes) - added by wirama 8 years ago.\n")),Object(r.b)("h4",{id:""}))}p.isMDXComponent=!0}}]);