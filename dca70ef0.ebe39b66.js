(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1022:function(a,n,e){"use strict";e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return g}));var i=e(0),t=e.n(i);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,i)}return e}function s(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function k(a,n){if(null==a)return{};var e,i,t=function(a,n){if(null==a)return{};var e,i,t={},r=Object.keys(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(t[e]=a[e]);return t}(a,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(t[e]=a[e])}return t}var l=t.a.createContext({}),d=function(a){var n=t.a.useContext(l),e=n;return a&&(e="function"==typeof a?a(n):s(s({},n),a)),e},m=function(a){var n=d(a.components);return t.a.createElement(l.Provider,{value:n},a.children)},p={inlineCode:"code",wrapper:function(a){var n=a.children;return t.a.createElement(t.a.Fragment,{},n)}},o=t.a.forwardRef((function(a,n){var e=a.components,i=a.mdxType,r=a.originalType,u=a.parentName,l=k(a,["components","mdxType","originalType","parentName"]),m=d(e),o=i,g=m["".concat(u,".").concat(o)]||m[o]||p[o]||r;return e?t.a.createElement(g,s(s({ref:n},l),{},{components:e})):t.a.createElement(g,s({ref:n},l))}));function g(a,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof a||i){var r=e.length,u=new Array(r);u[0]=o;var s={};for(var k in n)hasOwnProperty.call(n,k)&&(s[k]=n[k]);s.originalType=a,s.mdxType="string"==typeof a?a:i,u[1]=s;for(var l=2;l<r;l++)u[l]=e[l];return t.a.createElement.apply(null,u)}return t.a.createElement.apply(null,e)}o.displayName="MDXCreateElement"},900:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return u})),e.d(n,"metadata",(function(){return s})),e.d(n,"rightToc",(function(){return k})),e.d(n,"default",(function(){return d}));var i=e(2),t=e(6),r=(e(0),e(1022)),u={},s={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab13",id:"TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab13",isDocsHomePage:!1,title:"Panduan5Bab13",description:"BAB XIII : Pengaturan Piranti Keras",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab13.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab13",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab13",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/Panduan5Bab13.md",version:"current"},k=[{value:"Konfigurasi Kartu Video (VGA Card)",id:"konfigurasi-kartu-video-vga-card",children:[]},{value:"Konfigurasi Monitor",id:"konfigurasi-monitor",children:[]},{value:"Konfigurasi Mesin Pencetak",id:"konfigurasi-mesin-pencetak",children:[]},{value:"Konfigurasi Scanner",id:"konfigurasi-scanner",children:[]},{value:"Pengaturan Kartu Wireless LAN",id:"pengaturan-kartu-wireless-lan",children:[]},{value:"Konfigurasi Bluetooth",id:"konfigurasi-bluetooth",children:[]}],l={rightToc:k};function d(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"bab-xiii--pengaturan-piranti-keras"},"BAB XIII : Pengaturan Piranti Keras"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Panduan BlankOn 5")),Object(r.b)("p",null,"Pengaturan piranti keras yang terpasang di komputer menggunakan BlankOn Linux\nsangat mudah sekali. Anda hampir tidak perlu melakukan pemasangan driver\npiranti keras, karena BlankOn Linux sudah menyediakan hampir semua driver\npiranti keras esensial yang ada saat ini. Sehingga, setelah pemasangan BlankOn\nLinux, hampir semua piranti keras esensial seperti kartu video, kartu suara,\ndsb bisa berjalan dengan baik.\nNamun untuk memantapkan piranti keras tersebut, Anda perlu mengetahui bagaimana\nmelakukan pengaturan piranti keras yang ada. Semua hal menyangkut piranti keras\ndibahas dalam bab ini.\nINFO: Walaupun hampir semua piranti keras esensial mampu digunakan di Linux\n(termasuk BlankOn Linux didalamnya) dapat digunakan dengan baik dan out-of-the-\nbox (tanpa perlu pengaturan mendetail), sampai saat ini masalah driver piranti\nkeras masih merupakan masalah dominan dan menganggu dunia Linux. Tidak semua\nprodusen piranti keras merilis driver-nya untuk platform Linux. Walaupun ada\nbeberapa, itupun tidak Open Source dan masih dikembangan secara tertutup.\nHampir semua driver yang saat ini ada di Linux merupakan hasil jerih payah para\nkomunitas tanpa bantuan dari produsen piranti keras. Namun, hal ini akan\nmenjadi masalah waktu saja. Beberapa produsen piranti keras mulai maju untuk\nmengembangkan driver-nya untuk Linux mengingat Linux semakin populer saat ini\nsebagai sistem operasi untuk Desktop."),Object(r.b)("h3",{id:"konfigurasi-kartu-video-vga-card"},"Konfigurasi Kartu Video (VGA Card)"),Object(r.b)("p",null,"Hampir semua kartu video yang ada saat ini sudah didukung oleh BlankOn Linux.\nBahkan, jika kartu grafis Anda memiliki dukungan akselerasi 3D, Anda bisa\nmembuat penampilan desktop menjadi indah dengan mengaktifkan fitur efek visual\nyang ada di BlankOn.\nNamun untuk pengguna kartu video merk ATI dan NVIDIA, Akselerasi 3D tidak\ndiaktifkan secara default karena driver untuk akselerasi 3D adalah tidak Open\nSource dan tidak diperbolehkan untuk diaktifkan langsung karena masalah\nlisensi. Untuk mengaktifkannya, Anda bisa mengikuti langkah berikut ini :"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Klik menu System > Administrasi > Hardware Drivers."),Object(r.b)("li",{parentName:"ol"},"Tunggu sebentar, fitur Hardware Drivers akan mencari piranti keras yang\nmenggunakan driver non-Open Source, setelah pencarian selesai, maka akan\nmuncul beberapa pilihan driver.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/jockey-gtk.png]"),Object(r.b)("li",{parentName:"ol"},"Klik pada driver yang bertuliskan \u201cRecommend\u201d, kemudian klik tombol\n\u201cActive\u201d untuk mengaktifkan driver tersebut, kemudian fitur ini akan\nmenginstalkan driver tersebut untuk Anda melalui APT."),Object(r.b)("li",{parentName:"ol"},"Setelah instalasi driver selesai, Restart komputer.")),Object(r.b)("h3",{id:"konfigurasi-monitor"},"Konfigurasi Monitor"),Object(r.b)("p",null,"Konfigurasi monitor di BlankOn Linux sudah diatur sedemikian rupa, sehingga\nresolusi layar monitor sesuai dengan kemampuan monitor yang Anda miliki. Namun\njika Anda ingin mengatur resolusi monitor agar lebih optimal, atau memanfaatkan\nbeberapa monitor yang terpasang di komputer, Anda bisa melakukannya dengan\nfitur pengaturan Monitor dengan langkah sebagai berikut."),Object(r.b)("h4",{id:"pada-blankon-reguler"},"Pada BlankOn reguler"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Klik menu System > Preferensi > Tampilan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/screen-resolution-gnome.png]"),Object(r.b)("li",{parentName:"ol"},"Tentukan resolusi layar pada pilihan \u201cResolusi\u201d serta laju refresh-nya\npada pilihan \u201cLaju Refesh\u201d."),Object(r.b)("li",{parentName:"ol"},"Tentukan monitor yang akan dihidupkan dengan memilih opsi \u201cOn\u201d pada\nmasing-masing jenis monitor yang muncul. Jika monitor yang terpasang\nbelum muncul, silahkan klik tombol \u201cDeteksi Monitor\u201d untuk melakukan\npendeteksian ulang monitor."),Object(r.b)("li",{parentName:"ol"},"Jika ingin menyamakan semua tampilan monitor, Anda bisa memberi centang\npada \u201cLayar bayangan\u201d. Sedangkan, jika ingin mengaktifkan mode multi\nmonitor, Anda bisa hilangkan centang tersebut dan mengatur layar sesuai\ndengan yang Anda inginkan pada bagian \u201cTarik-tarik monitor itu untuk\ndiatur pada tempatnya\u201d serta resolusi masing-masing."),Object(r.b)("li",{parentName:"ol"},"Setelah semua pengaturan selesai, klik tombol \u201cTerapkan\u201d. Mungkin saja,\nAnda akan diminta untuk me-restart mode grafis agar konfigurasi bisa\nditerapkan.\nTIP: Jika terdapat kegagalan dalam pengaturan layar bayangan, Anda bisa restart\nBlankOn Linux dalam keadaan kabel VGA output masih terpasang. Setelah kembali\nke desktop, maka layar bayangan akan langsung diterapkan dengan resolusi layar\nyang sudah disesuaikan.")),Object(r.b)("h4",{id:"pada-blankon-minimalis"},"Pada BlankOn minimalis"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Klik pada menu BlankOn > Settings > Monitor Settings"),Object(r.b)("li",{parentName:"ol"},"Beri tanda centang pada \u201cHidupkan\u201d di masing-masing monitor yang ingin\nAnda aktifkan, kemudian Anda bisa mengatur resolusi layar serta laju\nrefresh dari masing-masing layar."),Object(r.b)("li",{parentName:"ol"},"Klik tombol OK untuk menerapkan pengaturan Anda.")),Object(r.b)("h3",{id:"konfigurasi-mesin-pencetak"},"Konfigurasi Mesin Pencetak"),Object(r.b)("p",null,"Manajemen mesin pencetak atau printer yang ada di BlankOn Linux diatur oleh\nsebuah piranti lunak server bernama CUPS (Common Unix Printing System). CUPS\nbertanggung jawab untuk menerima permintaan pencetakan baik dari lokal maupun\ndari jaringan, melakukan job pencetakan dan mengirim informasi ke printer untuk\nmelakukan pencetakan.\nSecara default, driver mesin pencetak akan langsung terpasang di BlankOn Linux\njika mesin pencetak tersebut sudah tersedia di sistem pada saat printer pertama\nkalinya dipasang ke komputer. Anda akan melihat pesan notifikasi bahwa printer\nbaru telah ditambahkan. Namun, jika mesin pencetak Anda tidak terdeteksi sama\nsekali atau printer terbagi di jaringan, Anda bisa membuka tool konfigurasi\nmesin pencetak yang Anda bisa buka melalui menu System > Administrasi >\nMencetak. Berikut adalah langkah \u2013 langkah penambahan mesin pencetak melalui\ntool konfigurasi printer :"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Klik ikon \u201cBaru\u201d pada toolbar. Tunggu sebentar, CUPS akan melakukan\npengecekan terhadap mesin pencetak yang terpasang di port komputer maupun\nyang ada di jaringan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/cups-select-printer-to-\nadd.png]"),Object(r.b)("li",{parentName:"ol"},"Setelah proses pengecekan selesai, pilih koneksi/sambungan printer pada\nbagian \u201cSelect device\u201d."),Object(r.b)("li",{parentName:"ol"},"Tunggu sebentar, CUPS sedang mencari driver yang tepat untuk mesin\npencetak Anda. Kemudian, tentukan sumber driver dari mesin pencetak\ntersebut. Terdapat tiga pilihan opsi, antara lain :\no \u201cSelect printer from database\u201d, pilih opsi ini jika Anda ingin\nmenggunakan driver mesin pencetak yang sudah tersedia di sistem.\nJika memilih opsi ini, pilih merk dari mesin pencetak Anda\n(biasanya sudah dipilihkan secara otomatis).\no \u201cProvide PPD file\u201d, pilih opsi ini jika ingin memasang driver dari\nfile PPD yang kadang tersedia di CD Driver mesin pencetak Anda.\no \u201cSearch for printer driver to download\u201d, pilih opsi ini jika Anda\ntidak memiliki driver yang cocok untuk printer Anda. Ketik nama dan\nmodel mesin pencetak dan CUPS akan mengunduh driver-nya untuk Anda.\nPilih salah satu opsi, kemudian lakukan pengaturan sesuai opsi tersebut dan\nklik tombol \u201cMaju\u201d."),Object(r.b)("li",{parentName:"ol"},"Jika Anda memilih opsi kesatu pada langkah sebelumnya, pilih tipe mesin\npencetak yang Anda gunakan, kemudian klik tombol \u201cMaju\u201d."),Object(r.b)("li",{parentName:"ol"},"Masukkan Nama mesin pencetak, deskripsi (opsional) dan lokasi nyata\n(opsional) dari mesin pencetak yang akan ditambahkan. Langkah terakhir,\nklik tombol \u201cTerapkan\u201d."),Object(r.b)("li",{parentName:"ol"},"Untuk melakukan percobaan pada printer, Anda bisa klik tombol \u201cYa\u201d pada\nsaat muncul pesan pertanyaan apakah Anda ingin melakukan tes pencetakkan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/cups-printer-manager.png]","\nINFO: Tidak semua driver (pengendali) mesin pencetak tersedia di BlankOn Linux\nsecara default. Beberapa mesin pencetak seri terbaru mungkin saja belum\ntersedia driver-nya di BlankOn. Untuk informasi dukungan driver mesin pencetak\ndi BlankOn Linux, silahkan buka situs \u200b",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"http://openprinting.org."}),"http://openprinting.org.")," Disana juga\nakan terdapat dokumentasi cara pemasangan mesin pencetak jenis-jenis tertentu\nyang tidak bisa Anda pasang driver-nya melalui langkah di atas.")),Object(r.b)("h3",{id:"konfigurasi-scanner"},"Konfigurasi Scanner"),Object(r.b)("p",null,"Manajemen scanner di BlankOn Linux menggunakan piranti lunak bernama SANE\n(",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.sane-project.org"}),"www.sane-project.org"),"). Untuk melakukan scanning, Anda bisa buka aplikasi XSANE\nmelalui menu BlankOn > Grafis > Xsane Image Scanner.\nSebelum melakukan scanning, XSANE akan melakukan pendeteksian terhadap mesin\nscanner yang terpasang di komputer. Setelah scanner ditemukan, maka Anda akan\nmelihat tampilan utama XSANE.\nTampilan utama XSANE terdiri dari tiga bagian, yaitu jendela penampil, jendela\nutama dan histogram. Sebelum melakukan scanning, Anda dapat melakukan\npengaturan scanning seperti penggunaan warna, resolusi, tempat penyimpanan pada\njendela utama. Setelah pengaturan selesai, Anda dapat melakukan scanning dengan\nklik pada tombol \u201cScan\u201d pada jendela utama.\nJika Anda ingin melakukan OCR untuk mengambil teks dari suatu berkas yang di-\nscan, Anda bisa memasang paket \u201cgocr\u201d dengan perintah berikut melalui terminal\n:\nblankon@blankon:~$ sudo apt-get install gocr\u21b5\nKemudian, untuk melakukan OCR, klik menu File > OCR \u2013 Save as text.\nINFO: Untuk melihat daftar lengkap scanner yang didukung oleh SANE, silahkan\nbuka halaman \u200b",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"http://www.sane-project.org/sane-mfgs.html"}),"http://www.sane-project.org/sane-mfgs.html"),"."),Object(r.b)("h3",{id:"pengaturan-kartu-wireless-lan"},"Pengaturan Kartu Wireless LAN"),Object(r.b)("p",null,"Berbeda dengan sistem operasi yang lain, dalam Linux khususnya BlankOn Linux,\nAnda tidak perlu lagi dipusingkan dengan masalah kartu wireless LAN (WLAN),\nkarena BlankOn Linux sudah memasang driver-nya secara otomatis, hampir sebagian\nbesar dari jenis-jenis kartu WLAN yang ada saat ini sudah di dukung oleh\nBlankOn Linux.\nNamun, memang tidak dapat dipungkiri bahwa sampai saat ini masih saja ada\nbeberapa jenis kartu WLAN yang belum di dukung sepenuhnya oleh BlankOn, seperti\nchipset Broadcom dan Atheros.\nUntuk dapat mengetahui apakah kartu WLAN yang kita miliki bekerja dengan baik,\nkita dapat memeriksannya dengan mengetikkan perintah \u201csudo iwconfig\u201d ini pada\nantarmuka teks. Dengan mengetikkan perintah tersebut, akan keluar output\nseperti berikut ini :\nblankon@blankon:~$ sudo iwconfig\u21b5\n","[sudo]",' sandi for blankon:\nlo        no wireless extensions.\neth0      no wireless extensions.\nwmaster0  no wireless extensions.\nwlan0     IEEE 802.11bgn  ESSID:""\nMode:Managed  Frequency:2.412 GHz  Access Point: Not-Associated\nTx-Power=27 dBm\nRetry min limit:7   RTS thr:off   Fragment thr=2352 B\nEncryption key:off\nPower Management:off\nLink Quality:0  Signal level:0  Noise level:0\nRx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0\nTx excessive retries:0  Invalid misc:0   Missed beacon:0\npan0      no wireless extensions.\nPerintah tersebut akan menampilkan semua perangkat jaringan yang terpasang di\nkomputer. Jika perangkat bukan merupakan WLAN, maka pada bagian kanan nama\nperangkat tersebut akan muncul teks \u201cno wireless extensions\u201d. Jika perangkat\ntersebut merupakan WLAN, maka akan muncul beberapa detail pada bagian perangkat\ntersebut seperti pada bagian wlan0.\nTeks pada bagian wlan0 menandakan bahwa driver WLAN sudah terpasang dan siap\ndigunakan. Namun, jika sebaliknya, berarti driver WLAN Anda belum terpasang\nLalu, bagaimana caranya menyelesaikan persoalan tersebut?. Banyak jalan menuju\nroma, dan begitu juga dengan permasalahan yang satu ini, BlankOn Linux sudah\nmenyediakan alternatif bagi penggunya yang tidak dapat menggunakan kartu WLAN-\nnya karena masalah dukungan hardware yang masih kurang.\nDalam menyelesaikan permasalahan ini, memang ada beberapa hal yang harus kita\npersiapkan terlebih dahulu, dan disini kita akan membahasnya secara rinci.\nUntuk dapat menggunakan kartu wireless yang tidak dapat berfungsi secara\notomatis, pertama yang harus dilakukan adalah memasang satu piranti lunak yang\nbernama ndiswrapper. Dengan menggunakan piranti lunak ini, memungkinkan kita\nuntuk menggunakan driver WLAN yang digunakan pada sistem operasi Microsoft\nWindows pada BlankOn.\nUntuk memasang Ndiswrapper, instal paket \u201cndisgtk\u201d melalui APT dengan perintah\n\u201csudo apt-get install ndiswrapper\u201d seperti berikut ini :\nblankon@blankon:~$ sudo apt-get install ndisgtk\u21b5\nSetelah Ndiswrapper terpasang, tahapan selanjutnya adalah mencari driver WLAN\nuntuk Windows 2000/XP. Anda dapat menemukannya pads CD driver yang disertakan\npada WLAN atau mencarinya di Internet. Setelah mendapatakannya, klik menu\nSystem > Administrasi > Driver Nirkabel Windows. Klik pada tombol \u201cInstall\nDriver Baru\u201d, kemudian klik pada berkas *.inf dari driver WLAN versi Windows\n2000/XP. Kemudian driver tersebut akan diinstal. Setelah instalasi berhasil,\nAnda bisa merestart komputer untuk mengaktifkan driver tersebut.\nPada saat kembali ke Desktop, buka Terminal lalu ketik kembali perintah \u201csudo\niwconfig\u201d. Jika perangkat WLAN terdeteksi, berarti driver dari kartu WLAN\ntersebut berhasil dipasang dan siap digunakan.'),Object(r.b)("h3",{id:"konfigurasi-bluetooth"},"Konfigurasi Bluetooth"),Object(r.b)("p",null,"Bluetooth saat ini menjadi sarana komunikasi antarperangkat mobile yang sangat\nbanyak digunakan saat ini. Dengan menggunakan Bluetooth, tidak perlu lagi\nmemasang kabel LAN, mengatur ESSID, Alamat IP, Gateway dan segala tetek bengek\nlainnya untuk melakukan komunikasi antar perangkat. Cukup tentukan tujuan\npengiriman data, maka data akan terkirim.\nUntuk menggunakan Bluetooth pada komputer, Anda dapat menggunakan alat yang\nbernama Bluetooth Adapter atau Bluetooth Dongle. Bahkan, alat ini sudah\ntertanam secara built-in pada notebook-notebook terbaru.\nMenggunakan Bluetooth adapter pada BlankOn tidaklah sulit. Sebagian besar\nBluetooth adapter yang ada saat ini sudah dapat digunakan di BlankOn tanpa\nperlu memasang driver-nya lagi. Jika Bluetooth adapter sudah terpasang dan\nsudah aktif, maka akan muncul ikon berlambang Bluetooth pada area notikasi/\ntray.\nUntuk melakukan sambungan terhadap suatu perangkat, berikut adalah langkah-\nlangkahnya :"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Klik kanan pada ikon bluetooth pada notifikasi area, lalu pilih menu\n\u201cSetup new Device...\u201d."),Object(r.b)("li",{parentName:"ol"},"Pilih perangkat bluetooth yang ingin Anda sambungan dan tentukan nomor\nPIN yang Anda inginkan untuk proses pairing, kemudian klik tombol \u201cMaju\u201d.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/bluez-find-devices.png]"),Object(r.b)("li",{parentName:"ol"},"Kemudian, BlankOn akan melakukan koneksi ke perangkat yang Anda pilih.\nPada tahapan ini, Anda juga diberitahukan informasi kode PIN yang harus\nAnda masukkan di perangkat agar bisa melakukan koneksi dengan baik.\nSetelah sambungan terjalin, klik tombol \u201cMaju\u201d."),Object(r.b)("li",{parentName:"ol"},"Pada konfigurasi terakhir, klik tombol \u201cTutup\u201d.\nUntuk melakukan transfer berkas ke perangkat, klik kanan pada ikon bluetooth\npada area notifikasi, lalu klik menu \u201cKirim berkas ke perangkat..\u201d. Kemudian,\npilih berkas yang ingin Anda transfer.\nLast modified on 07/20/2009 12:02:57 PM")),Object(r.b)("h4",{id:"attachments-5"},"Attachments (5)"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"* bluez-find-devices.png\u200b (31.1 KB) - added by wirama 8 years ago.\n* cups-printer-manager.png\u200b (18.1 KB) - added by wirama 8 years ago.\n* cups-select-printer-to-add.png\u200b (20.3 KB) - added by wirama 8 years ago.\n* jockey-gtk.png\u200b (14.9 KB) - added by wirama 8 years ago.\n* screen-resolution-gnome.png\u200b (29.8 KB) - added by wirama 8 years ago.\n")),Object(r.b)("h4",{id:""}))}d.isMDXComponent=!0}}]);