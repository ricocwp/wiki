(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1027:function(a,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s}));var t=e(0),i=e.n(t);function u(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function l(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){u(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function o(a,n){if(null==a)return{};var e,t,i=function(a,n){if(null==a)return{};var e,t,i={},u=Object.keys(a);for(t=0;t<u.length;t++)e=u[t],n.indexOf(e)>=0||(i[e]=a[e]);return i}(a,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(t=0;t<u.length;t++)e=u[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(i[e]=a[e])}return i}var b=i.a.createContext({}),k=function(a){var n=i.a.useContext(b),e=n;return a&&(e="function"==typeof a?a(n):l(l({},n),a)),e},c=function(a){var n=k(a.components);return i.a.createElement(b.Provider,{value:n},a.children)},d={inlineCode:"code",wrapper:function(a){var n=a.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(a,n){var e=a.components,t=a.mdxType,u=a.originalType,r=a.parentName,b=o(a,["components","mdxType","originalType","parentName"]),c=k(e),p=t,s=c["".concat(r,".").concat(p)]||c[p]||d[p]||u;return e?i.a.createElement(s,l(l({ref:n},b),{},{components:e})):i.a.createElement(s,l({ref:n},b))}));function s(a,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof a||t){var u=e.length,r=new Array(u);r[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=a,l.mdxType="string"==typeof a?a:t,r[1]=l;for(var b=2;b<u;b++)r[b]=e[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"},159:function(a,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return r})),e.d(n,"metadata",(function(){return l})),e.d(n,"rightToc",(function(){return o})),e.d(n,"default",(function(){return k}));var t=e(2),i=e(6),u=(e(0),e(1027)),r={},l={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab4-BucketFillTool",id:"TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab4-BucketFillTool",isDocsHomePage:!1,title:"PanduanInkscapeBab4-BucketFillTool",description:"Bab 4-BucketFillTool",source:"@site/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab4-BucketFillTool.md",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab4-BucketFillTool",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab4-BucketFillTool",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Panduan/PanduanAplikasi/PanduanInkscape/PanduanInkscapeBab4-BucketFillTool.md",version:"current"},o=[{value:"4.16. Bucket Fill Tool",id:"416-bucket-fill-tool",children:[]}],b={rightToc:o};function k(a){var n=a.components,e=Object(i.a)(a,["components"]);return Object(u.b)("wrapper",Object(t.a)({},b,e,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"bab-4-bucketfilltool"},"Bab 4-BucketFillTool"),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png][/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]"),Object(u.b)("h3",{id:"416-bucket-fill-tool"},"4.16. Bucket Fill Tool"),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\n4.16.Bucket_Fill_Tool.png]"," Digunakan untuk menambahkan warna dan menggandakan\nobject dengan bentuk berbeda yang saling bertumpuk atau tumpang tindih, object\nyang di beri warna akan menjadi dua, object pertama adalah object asli\nsedangkan object kedua bentuk dan warnanya berubah.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\n4.16A.Bucket_Fill_Tool_Buat_object.png]"),Object(u.b)("h4",{id:"cara-menggunakan"},"Cara menggunakan"),Object(u.b)("p",null,"Buat beberapa object dengan bentuk yang berbeda, atur object-object tersebut\nsaling bertumpuk, dalam contoh gambar dibawah, pertama buat object berbetuk\npersegi panjang, kemudian buat lagi object berbentuk bintang yang diletakkan\npojok kiri atas pada persegi panjang, setelah itu buat object lingkaran,\nletakkan di pojok kanan bagian bawah\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nCara_menggunakan.png]","\nKlik ikon Fill bounded areas pada Tool Boox atau tekan Shift+F7, arahkan kursor\npada Color Palette, pilih warna yang di inginkan, klik object berbentuk persegi\npanjang, geser object tersebut ke kanan.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nCara_Menggunakan1.png]","\nSaat Bucket Fill Tool aktif terdapat beberapa ikon dan menu pada Tool Control\nyang dapat digunakan untuk mengatur proses modifikasi object."),Object(u.b)("h6",{id:"41611-fill-by"},"4.16.1.1. Fill by"),Object(u.b)("p",null,"Pada ikon paling kiri di Tool Control terdapat beberapa menu yang dapat\ndigunakan untuk melakukan pengaturan warna dan efek pada object yang dibuat,\nuntuk memilih menu yang tersedia, klik tanda segitiga mengarah kebawah,\nterdapat 8 (delapan) submenu yang dapat dipergunakan yaitu: Visible Color, Red,\nGreen, Blue, Hue, Saturation, Ligtness, dan Alpha.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nA.Fill_by.png]"),Object(u.b)("h6",{id:"41612-threshold"},"4.16.1.2. Threshold"),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nB.Threshold.png]"," Digunakan untuk mengatur jangkauan warna yang ditambahkan pada\nobject dari titik awal ke object lainnya, nilai standard pada menu ini adalah\n10 yang artinya jika menggunakan nilai ini (10) maka jangkauan warna yang\nditambahkan sesuai object yang diklik, sedangkan jika digeser ke nilai yang\nlebih tinggi, maka jangkauan warna akan ditambahkan pada object lainya."),Object(u.b)("h6",{id:"41613-grow-shrink-by"},"4.16.1.3. Grow/ shrink by"),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nC.Grow_shrink_by.png]"," Digunakan untuk mengatur ukuran object yang ditambahkan,\nsemakin besar nilai yang dipakai maka object yang ditambahkan akan semakin\nbesar, jika object tersebut memiliki sudut maka sudut tersebut akan sedikit\nmembulat. Nilai standar pada menu ini adalah 0 (nol) yang artinya jika\nmenggunakan nilai ini (nol) maka ukuran object yang ditambahkan sama persis\ndengan object asli (sudut tidak membulat)"),Object(u.b)("h6",{id:"41614-close-gaps"},"4.16.1.4. Close gaps"),Object(u.b)("p",null,"Menu Close gaps digunakan untuk mengatur celah pada Paint Bucket yang akan\ndibuat, sehingga fill (cat) tidak tumpah pada area yang tidak dinginkan.\nTerdapat empat pengaturan Close gaps yang dapat digunakan:"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"None atau tidak ada"),Object(u.b)("li",{parentName:"ul"},"Small atau kecil (dengan ukuran 2 pixels)"),Object(u.b)("li",{parentName:"ul"},"Medium atau sedang (dengan ukuran 4 pixels)"),Object(u.b)("li",{parentName:"ul"},"Large atau besar (dengan ukuran 6 pixels)\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nD.Close_gaps.png]")),Object(u.b)("h6",{id:"catatan"},"Catatan:"),Object(u.b)("p",null,"Pada saat menggunakan salah satu menu pada Close gaps dapat memperlambat\nkinerja Inkscape."),Object(u.b)("h6",{id:"41615-reset"},"4.16.1.5. Reset"),Object(u.b)("p",null,"[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-BucketFillTool/\nE.Reset.png]"," Digunakan untuk mengembalikan ke pengaturan awal menu pada Tool\nControl yang sudah diubah sebelumnya.\n","[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png][/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]","\nLast modified on 06/29/2014 03:17:43 PM"),Object(u.b)("h4",{id:"attachments-9"},"Attachments (9)"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},"4.16.Bucket_Fill_Tool.png\u200b (1.1 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"4.16A.Bucket_Fill_Tool_Buat_object.png\u200b (16.0 KB) - added by imgos 3\nyears ago."),Object(u.b)("li",{parentName:"ul"},"Cara_menggunakan.png\u200b (3.5 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"Cara_Menggunakan1.png\u200b (4.9 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"A.Fill_by.png\u200b (12.4 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"B.Threshold.png\u200b (1.6 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"C.Grow_shrink_by.png\u200b (3.3 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"D.Close_gaps.png\u200b (5.5 KB) - added by imgos 3 years ago."),Object(u.b)("li",{parentName:"ul"},"E.Reset.png\u200b (802 bytes) - added by imgos 3 years ago.")),Object(u.b)("h4",{id:""}),Object(u.b)("hr",null))}k.isMDXComponent=!0}}]);