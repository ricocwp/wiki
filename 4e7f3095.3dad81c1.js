(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1022:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||p[m]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),i=n(6),o=(n(0),n(1022)),a={},c={unversionedId:"TimPengembang/Dokumentasi/Kelas/PembuatanISO",id:"TimPengembang/Dokumentasi/Kelas/PembuatanISO",isDocsHomePage:!1,title:"PembuatanISO",description:"Pembuatan ISO",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/PembuatanISO.md",slug:"/TimPengembang/Dokumentasi/Kelas/PembuatanISO",permalink:"/TimPengembang/Dokumentasi/Kelas/PembuatanISO",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/PembuatanISO.md",version:"current"},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"pembuatan-iso"},"Pembuatan ISO"),Object(o.b)("p",null,"1.Install genisoimage "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"~/livecd$ sudo apt-get install genisoimage\n")),Object(o.b)("p",null,"2.Generate menjadi iso image "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'~/livecd$ genisoimage -v -A BlankOnCDFactory -p BlankOn -publisher BlankOn -V "BlankOnSaya" -no-emul-boot -boot-load-size 4 -boot-info-table -r -b isolinux/isolinux.bin -c isolinux/boot.cat -o binary.iso -J -l -cache-inodes -allow-multidot binary\n')),Object(o.b)("p",null,"#####Keluaran:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Warning: creating filesystem that does not conform to ISO-9660.\nI: -input-charset not specified, using utf-8 (detected in locale settings)\ngenisoimage 1.1.6 (Linux)\nScanning binary\nScanning binary/isolinux\nExcluded by match: binary/isolinux/boot.cat\nScanning binary/casper\ngenisoimage: Permission denied. File binary/casper/filesystem.squashfs is not readable - ignoring\nWriting:   Initial Padblock                        Start Block 0\nDone with: Initial Padblock                        Block(s)    16\nWriting:   Primary Volume Descriptor               Start Block 16\nDone with: Primary Volume Descriptor               Block(s)    1\nWriting:   Eltorito Volume Descriptor              Start Block 17\nSize of boot image is 4 sectors -> No emulation\nDone with: Eltorito Volume Descriptor              Block(s)    1\nWriting:   Joliet Volume Descriptor                Start Block 18\nDone with: Joliet Volume Descriptor                Block(s)    1\nWriting:   End Volume Descriptor                   Start Block 19\nDone with: End Volume Descriptor                   Block(s)    1\nWriting:   Version block                           Start Block 20\nDone with: Version block                           Block(s)    1\nWriting:   Path table                              Start Block 21\nDone with: Path table                              Block(s)    4\nWriting:   Joliet path table                       Start Block 25\nDone with: Joliet path table                       Block(s)    4\nWriting:   Directory tree                          Start Block 29\nDone with: Directory tree                          Block(s)    3\nWriting:   Joliet directory tree                   Start Block 32\ngenisoimage: Unexpected joliet directory length 164 expected: 168 ''\nDone with: Joliet directory tree                   Block(s)    3\nWriting:   Directory tree cleanup                  Start Block 35\nDone with: Directory tree cleanup                  Block(s)    0\nWriting:   Extension record                        Start Block 35\nDone with: Extension record                        Block(s)    1\nWriting:   The File(s)                             Start Block 36\n 87.96% done, estimate finish Fri Oct 31 19:51:40 2008\nTotal translation table size: 2048\nTotal rockridge attributes bytes: 1813\nTotal directory bytes: 4574\nPath table size(bytes): 40\nDone with: The File(s)                             Block(s)    5502\nWriting:   Ending Padblock                         Start Block 5538\nDone with: Ending Padblock                         Block(s)    150\nMax brk space used 0\n5688 extents written (11 MB)\n")),Object(o.b)("p",null,"3.Akan tercipta file binary.iso "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"~/livecd$ ls\nbinary  binary.iso  chroot  pabrik-cd\n")),Object(o.b)("p",null,"4.Siap dicoba. Screenshot di attachment "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Last modified 9 years ago Last modified on 10/31/2008 08:37:38 PM\nAttachments (1)\n")),Object(o.b)("p",null,"Screenshot-ubuntu (LiveCD-snapshot1) ","[Running]"," - VirtualBox OSE.png (22.1 KB) - added by kholis 9 years ago."),Object(o.b)("p",null,"Download all attachments as:.",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"dev.blankonlinux.or.id/zip-attachment/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PembuatanISO/"}),"zip")))}b.isMDXComponent=!0}}]);