(window.webpackJsonp=window.webpackJsonp||[]).push([[826],{1022:function(e,a,r){"use strict";r.d(a,"a",(function(){return l})),r.d(a,"b",(function(){return k}));var n=r(0),i=r.n(n);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function u(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?u(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,i=function(e,a){if(null==e)return{};var r,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=i.a.createContext({}),p=function(e){var a=i.a.useContext(o),r=a;return e&&(r="function"==typeof e?e(a):b(b({},a),e)),r},l=function(e){var a=p(e.components);return i.a.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},c=i.a.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),l=p(r),c=n,k=l["".concat(u,".").concat(c)]||l[c]||d[c]||t;return r?i.a.createElement(k,b(b({ref:a},o),{},{components:r})):i.a.createElement(k,b({ref:a},o))}));function k(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,u=new Array(t);u[0]=c;var b={};for(var s in a)hasOwnProperty.call(a,s)&&(b[s]=a[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,u[1]=b;for(var o=2;o<t;o++)u[o]=r[o];return i.a.createElement.apply(null,u)}return i.a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},882:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return u})),r.d(a,"metadata",(function(){return b})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return p}));var n=r(2),i=r(6),t=(r(0),r(1022)),u={},b={unversionedId:"TimPengembang/Infrastruktur/Repositori",id:"TimPengembang/Infrastruktur/Repositori",isDocsHomePage:!1,title:"Repositori",description:"Repositori",source:"@site/Wiki/TimPengembang/Infrastruktur/Repositori.md",slug:"/TimPengembang/Infrastruktur/Repositori",permalink:"/TimPengembang/Infrastruktur/Repositori",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/Repositori.md",version:"current"},s=[{value:"Administratif",id:"administratif",children:[{value:"Memperbarui konfigurasi dari bzr",id:"memperbarui-konfigurasi-dari-bzr",children:[]},{value:"Memperbarui paket dari Ubuntu",id:"memperbarui-paket-dari-ubuntu",children:[]},{value:"Membuat berkas index Packages.gz Sources.gz",id:"membuat-berkas-index-packagesgz-sourcesgz",children:[]},{value:"Memasukkan berkas paket .deb/.udeb + kode sumber menggunakan berkas",id:"memasukkan-berkas-paket-debudeb--kode-sumber-menggunakan-berkas",children:[]},{value:"Memasukkan berkas paket .deb",id:"memasukkan-berkas-paket-deb",children:[]},{value:"Memasukkan berkas paket debian-installer (.udeb)",id:"memasukkan-berkas-paket-debian-installer-udeb",children:[]},{value:"Memasukkan berkas kode sumber saja",id:"memasukkan-berkas-kode-sumber-saja",children:[]},{value:"Menghapus paket dari repositori",id:"menghapus-paket-dari-repositori",children:[]},{value:"Inisialisasi repositori saat membuat rilis baru",id:"inisialisasi-repositori-saat-membuat-rilis-baru",children:[]},{value:"Perawatan",id:"perawatan",children:[]},{value:"Membekukan rilis",id:"membekukan-rilis",children:[]}]}],o={rightToc:s};function p(e){var a=e.components,r=Object(i.a)(e,["components"]);return Object(t.b)("wrapper",Object(n.a)({},o,r,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"repositori"},"Repositori"),Object(t.b)("p",null,"Repositori BlankOn dibuat menggunakan program \u200breprepro"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Lokasi konfigurasi dan log di rani: /home/arsipdev/reprepro ($CONF)"),Object(t.b)("li",{parentName:"ul"},"Lokasi konfigurasi di bzr: \u200b",Object(t.b)("a",Object(n.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/infrastruktur/reprepro-config-rani"}),"http://dev.blankonlinux.or.id/browser/infrastruktur/reprepro-config-rani")),Object(t.b)("li",{parentName:"ul"},"Bawa .gnupg-archive simpan di home arsipdev"),Object(t.b)("li",{parentName:"ul"},"Jangan lupa untuk lakukan bzr pull di $CONF/conf setiap kali membuat\nperubahan di bzr"),Object(t.b)("li",{parentName:"ul"},"Lokasi repositori di rani: /home/arsipdev/repo/blankon"),Object(t.b)("li",{parentName:"ul"},"Sinkronisasi dengan Ubuntu dilakukan via crontab pada pengguna arsipdev")),Object(t.b)("h2",{id:"administratif"},"Administratif"),Object(t.b)("h3",{id:"memperbarui-konfigurasi-dari-bzr"},"Memperbarui konfigurasi dari bzr"),Object(t.b)("p",null,"cd $CONF/conf\nbzr pull"),Object(t.b)("h3",{id:"memperbarui-paket-dari-ubuntu"},"Memperbarui paket dari Ubuntu"),Object(t.b)("p",null,"cd $CONF\nreprepro -v -v -v -v -v update DIST\nPerintah di atas akan melakukan apa yang dituliskan pada berkas conf/updates.\nPaket-paket yang terdaftar dalam berkas $DISTRO.blacklist tidak akan diperbarui."),Object(t.b)("h3",{id:"membuat-berkas-index-packagesgz-sourcesgz"},"Membuat berkas index Packages.gz Sources.gz"),Object(t.b)("p",null,"cd $CONF\nreprepro export DIST"),Object(t.b)("h3",{id:"memasukkan-berkas-paket-debudeb--kode-sumber-menggunakan-berkas"},"Memasukkan berkas paket .deb/.udeb + kode sumber menggunakan berkas"),Object(t.b)("p",null,".changes\ncd CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION include DIST /PATH/TO/\nPACKAGE.changes"),Object(t.b)("h3",{id:"memasukkan-berkas-paket-deb"},"Memasukkan berkas paket .deb"),Object(t.b)("p",null,"cd CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION includedeb DIST /PATH/TO/\nPACKAGE.deb"),Object(t.b)("h3",{id:"memasukkan-berkas-paket-debian-installer-udeb"},"Memasukkan berkas paket debian-installer (.udeb)"),Object(t.b)("p",null,"cd CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION includeudeb DIST /PATH/TO/\nPACKAGE.udeb"),Object(t.b)("h3",{id:"memasukkan-berkas-kode-sumber-saja"},"Memasukkan berkas kode sumber saja"),Object(t.b)("p",null,"cd $CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION includedsc DIST /PATH/TO/\nPACKAGE.dsc"),Object(t.b)("h3",{id:"menghapus-paket-dari-repositori"},"Menghapus paket dari repositori"),Object(t.b)("p",null,"cd $CONF\nreprepro remove DIST NAMA_PAKET"),Object(t.b)("h3",{id:"inisialisasi-repositori-saat-membuat-rilis-baru"},"Inisialisasi repositori saat membuat rilis baru"),Object(t.b)("p",null,"cd $CONF\nreprepro pull <nama-distro-asal",">"),Object(t.b)("h3",{id:"perawatan"},"Perawatan"),Object(t.b)("p",null,"Digunakan untuk menjaga/mengecek repository"),Object(t.b)("p",null,"cd $CONF\nreprepro dumpunreferenced\nGunakan opsi --keepunreferenced untuk simulasi"),Object(t.b)("h3",{id:"membekukan-rilis"},"Membekukan rilis"),Object(t.b)("p",null,"Tambahkan opsi ReadOnly? dan hilangkan tiffany.py , contoh"),Object(t.b)("p",null,"Origin: BlankOn\nLabel: BlankOn\nCodename: nanggar\nSuite: nanggar\n....\nReadOnly: Yes  <----------"),Object(t.b)("p",null,"Last modified on 10/10/2011 08:08:51 PM"),Object(t.b)("hr",null))}p.isMDXComponent=!0}}]);