(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{1022:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return l}));var a=r(0),t=r.n(a);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var b=t.a.createContext({}),m=function(e){var n=t.a.useContext(b),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=m(e.components);return t.a.createElement(b.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=t.a.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,l=p["".concat(o,".").concat(d)]||p[d]||c[d]||i;return r?t.a.createElement(l,u(u({ref:n},b),{},{components:r})):t.a.createElement(l,u({ref:n},b))}));function l(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var b=2;b<i;b++)o[b]=r[b];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},670:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return m}));var a=r(2),t=r(6),i=(r(0),r(1022)),o={},u={unversionedId:"TimPengembang/Infrastruktur/RepositoriPengembangan",id:"TimPengembang/Infrastruktur/RepositoriPengembangan",isDocsHomePage:!1,title:"RepositoriPengembangan",description:"Repositori Pengembangan",source:"@site/Wiki/TimPengembang/Infrastruktur/RepositoriPengembangan.md",slug:"/TimPengembang/Infrastruktur/RepositoriPengembangan",permalink:"/TimPengembang/Infrastruktur/RepositoriPengembangan",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/RepositoriPengembangan.md",version:"current"},s=[{value:"Persiapan",id:"persiapan",children:[{value:"Membuat direktori",id:"membuat-direktori",children:[]},{value:"Membuat berkas konfigurasi",id:"membuat-berkas-konfigurasi",children:[]}]},{value:"Kegiatan sehari-hari",id:"kegiatan-sehari-hari",children:[{value:"Membuat cermin dari upstream",id:"membuat-cermin-dari-upstream",children:[]},{value:"Membuat cermin dari BlankOn",id:"membuat-cermin-dari-blankon",children:[]}]},{value:"Penggunaan",id:"penggunaan",children:[]}],b={rightToc:s};function m(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"repositori-pengembangan"},"Repositori Pengembangan"),Object(i.b)("p",null,"Repositori pengembangan menggunakan repositori berversi.\nLokasi cermin ada di /mnt/sdb1/repo-dev."),Object(i.b)("h2",{id:"persiapan"},"Persiapan"),Object(i.b)("h3",{id:"membuat-direktori"},"Membuat direktori"),Object(i.b)("p",null,"Dilakukan saat hendak membuat kode rilis baru (Meuligoe, Nanggar, Nanggar + 1,\ndsb)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"export NAMARILIS=<isi di sini nama rilisnya>\nmkdir -p /mnt/sdb1/repo-dev/ftp-$NAMARILIS/{dists,pool}\ncd /home/irgsh/repo/dev/\nmkdir -p $NAMARILIS/dists/$NAMARILIS\npushd $NAMARILIS\nln -s /mnt/sdb1/repo-dev/ftp-$NAMARILIS/pool .\npopd\n")),Object(i.b)("h3",{id:"membuat-berkas-konfigurasi"},"Membuat berkas konfigurasi"),Object(i.b)("p",null,"Dibuat di /home/irgsh/.mirror-$NAMARILIS.\nIsinya (contoh dari isi .mirror-jaunty)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'DIST=jaunty\nDEST=ftp-jaunty\nHOST=kambing.vlsm.org\nREPOPATH=ubuntu\nREPOS="main/debian-installer main restricted universe multiverse"\nARCHS="i386 amd64"\nWORKDIR="/mnt/sdb1/repo-dev/ubuntu"\nMETHOD=rsync\n')),Object(i.b)("h2",{id:"kegiatan-sehari-hari"},"Kegiatan sehari-hari"),Object(i.b)("h3",{id:"membuat-cermin-dari-upstream"},"Membuat cermin dari upstream"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"export NAMARILISUPSTREAM=<isi di sini nama rilis upstreamnya>\n/home/irgsh/utils/mirror-repository.sh $NAMARILISUPSTREAM\n/home/irgsh/utils/release-repository.sh $NAMARILISUPSTREAM\n")),Object(i.b)("p",null,"Pembaruan cermin upstream dapat dilakukan berkala sebelum melakukan Jahitan\nresmi."),Object(i.b)("h3",{id:"membuat-cermin-dari-blankon"},"Membuat cermin dari BlankOn"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"export NAMARILIS=<isi di sini nama rilis blankon>\n/home/irgsh/utils/mirror-repository.sh $NAMARILIS\n/home/irgsh/utils/release-repository.sh $NAMARILIS\n")),Object(i.b)("p",null,"Pembaruan cermin BlankOn dapat dilakukan berkala sebelum melakukan Jahitan\nharian."),Object(i.b)("h2",{id:"penggunaan"},"Penggunaan"),Object(i.b)("p",null,"Repositori digunakan dengan menuliskan baris berikut di sources.list pabrik CD:\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://arsip.blankonlinux.or.id/dev/jaunty"}),"http://arsip.blankonlinux.or.id/dev/jaunty")," jaunty/current main restricted\nuniverse multiverse\ndeb ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://arsip.blankonlinux.or.id/dev/nanggar"}),"http://arsip.blankonlinux.or.id/dev/nanggar")," nanggar/current main restricted\nKata current dapat digantikan dengan nomor versi yang digunakan pada suatu\njahitan tertentu agar memperoleh hasil jahitan yang identik dengan jahitan yang\ndilakukan di dev.boi.\nNomor versi terakhir dapat dilihat di (misalnya) URL berikut: \u200bhttp://\narsip.blankonlinux.or.id/dev/nanggar/dists/nanggar/version\nLast modified on 01/12/2009 03:58:18 AM"),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}m.isMDXComponent=!0}}]);