(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1030:function(e,n,a){"use strict";a.d(n,"a",(function(){return l})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function u(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?u(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),c=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=c(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=c(a),m=t,d=l["".concat(u,".").concat(m)]||l[m]||b[m]||i;return a?r.a.createElement(d,o(o({ref:n},s),{},{components:a})):r.a.createElement(d,o({ref:n},s))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,u=new Array(i);u[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,u[1]=o;for(var s=2;s<i;s++)u[s]=a[s];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},575:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return u})),a.d(n,"metadata",(function(){return o})),a.d(n,"rightToc",(function(){return p})),a.d(n,"default",(function(){return c}));var t=a(2),r=a(6),i=(a(0),a(1030)),u={},o={unversionedId:"TimPengembang/Infrastruktur/PenerbitanKunciLumbung",id:"TimPengembang/Infrastruktur/PenerbitanKunciLumbung",isDocsHomePage:!1,title:"PenerbitanKunciLumbung",description:"Persiapan kunci penanda tangan lumbung",source:"@site/Wiki/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md",slug:"/TimPengembang/Infrastruktur/PenerbitanKunciLumbung",permalink:"/TimPengembang/Infrastruktur/PenerbitanKunciLumbung",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/PenerbitanKunciLumbung.md",version:"current"},p=[{value:"Persiapan kunci penanda tangan lumbung",id:"persiapan-kunci-penanda-tangan-lumbung",children:[{value:"Mempersiapkan <code>rng</code> untuk mempercepat generate entropy",id:"mempersiapkan-rng-untuk-mempercepat-generate-entropy",children:[]},{value:"Membuat kunci GPG utama.",id:"membuat-kunci-gpg-utama",children:[]},{value:"Membuat sub kunci untuk keperluan penandatanganan paket",id:"membuat-sub-kunci-untuk-keperluan-penandatanganan-paket",children:[]},{value:"Memisahkan kunci master",id:"memisahkan-kunci-master",children:[]}]}],s={rightToc:p};function c(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"persiapan-kunci-penanda-tangan-lumbung"},"Persiapan kunci penanda tangan lumbung"),Object(i.b)("p",null,"Keaslian paket di lumbung turunan Debian dibantu oleh verifikasi tanda tangan digital dengan kunci GPG (itu sebabnya alamat lumbung tersebut tidak perlu lagi dilindungi oleh HTTPS/TLS, lihat ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://whydoesaptnotusehttps.com/"}),"https://whydoesaptnotusehttps.com/"),"). Kita memerlukan kunci GPG untuk menandatangani paket-paket nantinya. Setelah dibuat sesuai panduan di bawah ini, kunci-kunci ini akan tersimpan di ",Object(i.b)("inlineCode",{parentName:"p"},"/.gnugpg"),"."),Object(i.b)("h3",{id:"mempersiapkan-rng-untuk-mempercepat-generate-entropy"},"Mempersiapkan ",Object(i.b)("inlineCode",{parentName:"h3"},"rng")," untuk mempercepat generate entropy"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ sudo apt-get install rng-tools\n$ sudo rngd -r /dev/urandom\n")),Object(i.b)("h3",{id:"membuat-kunci-gpg-utama"},"Membuat kunci GPG utama."),Object(i.b)("p",null,"Abaikan permintaan ",Object(i.b)("inlineCode",{parentName:"p"},"passphrase")," untuk menunjang otomasi penandatanganan paket."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gpg --full-generate-key"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"gpg (GnuPG) 2.1.18; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 5y\nKey expires at Wed Jan 24 04:58:41 2024 EST\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: BlankOn Developer\nEmail address: blankon-dev@googlegroups.com\nComment:\nYou selected this USER-ID:\n    \"BlankOn Developer <blankon-dev@googlegroups.com>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\ngpg: key 17963DC67219B965 marked as ultimately trusted\ngpg: revocation certificate stored as '/home/arsipdev-reboot/.gnupg/openpgp-revocs.d/9584C1230204D624A15D215117963DC67219B965.rev'\npublic and secret key created and signed.\npub   rsa4096 2019-01-25 [SC] [expires: 2024-01-24]\n      9584C1230204D624A15D215117963DC67219B965\n      9584C1230204D624A15D215117963DC67219B965\nuid                      BlankOn Developer <blankon-dev@googlegroups.com>\nsub   rsa4096 2019-01-25 [E] [expires: 2024-01-24]\n")),Object(i.b)("h3",{id:"membuat-sub-kunci-untuk-keperluan-penandatanganan-paket"},"Membuat sub kunci untuk keperluan penandatanganan paket"),Object(i.b)("p",null,"Parameternya adalah identitas kunci master."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"gpg --edit-key 05657D94F29BDACB99F6CE7D0B352C08D746A9A6"))),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"gpg (GnuPG) 2.1.18; Copyright (C) 2017 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nSecret key is available.\n\ngpg: checking the trustdb\ngpg: marginals needed: 3  completes needed: 1  trust model: pgp\ngpg: depth: 0  valid:   2  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 2u\ngpg: next trustdb check due at 2021-01-24\nsec  rsa2048/0B352C08D746A9A6\n     created: 2019-01-25  expires: 2021-01-24  usage: SC\n     trust: ultimate      validity: ultimate\nssb  rsa2048/BE8FF591E6569748\n     created: 2019-01-25  expires: 2021-01-24  usage: E\n[ultimate] (1). BlankOn Developer <blankon-dev@googlegroups.com>\n\ngpg> addkey\nPlease select what kind of key you want:\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n   (5) Elgamal (encrypt only)\n   (6) RSA (encrypt only)\nYour selection? 4\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 5y\nKey expires at Wed Jan 24 05:06:05 2024 EST\nIs this correct? (y/N) y\nReally create? (y/N) y\n\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\nsec  rsa2048/0B352C08D746A9A6\n     created: 2019-01-25  expires: 2021-01-24  usage: SC\n     trust: ultimate      validity: ultimate\nssb  rsa2048/BE8FF591E6569748\n     created: 2019-01-25  expires: 2021-01-24  usage: E\nssb  rsa4096/1C608FE2ECC8842B\n     created: 2019-01-25  expires: 2024-01-24  usage: S\n[ultimate] (1). BlankOn Developer <blankon-dev@googlegroups.com>\n\ngpg> save\n")),Object(i.b)("p",null,"Identitas kunci anak ini (string ",Object(i.b)("inlineCode",{parentName:"p"},"0B352C08D746A9A6"),") yang akan dipakai di konfigurasi lumbung nantinya."),Object(i.b)("h3",{id:"memisahkan-kunci-master"},"Memisahkan kunci master"),Object(i.b)("p",null,"Tujuan penggunaan subkey dan pemisahan kunci master adalah supaya bila kunci tanda tangan terkena kompromi, kunci penanda tangan baru masih bisa diterbitkan dan paket lama masih bisa diverifikasi."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --armor --export-secret-key 05657D94F29BDACB99F6CE7D0B352C08D746A9A6 > private.key\n$ gpg --armor --export 05657D94F29BDACB99F6CE7D0B352C08D746A9A6 >> private.key\n")),Object(i.b)("p",null,"Simpan berkas ",Object(i.b)("inlineCode",{parentName:"p"},"private.key")," ini ke tempat yang aman."),Object(i.b)("p",null,"Pisahkan kunci publik master dan kunci privat anak."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --armor --export 05657D94F29BDACB99F6CE7D0B352C08D746A9A6 > public.key\n$ gpg --armor --export-secret-subkeys 0B352C08D746A9A6 > signing.key\n")),Object(i.b)("p",null,"Hapus kunci privat master dari ",Object(i.b)("inlineCode",{parentName:"p"},"gnupg"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --delete-secret-key 05657D94F29BDACB99F6CE7D0B352C08D746A9A6\n")),Object(i.b)("p",null,"Impor kembali kunci publik master dan kunci privat anak."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --import public.key signing.key\n")),Object(i.b)("p",null,"Pastikan kunci privat master sudah tidak terdaftar di ",Object(i.b)("inlineCode",{parentName:"p"},"gnupg"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"$ gpg --list-secret-keys\n/home/arsipdev/.gnupg/pubring.kbx\n----------------------------------------\nsec#  rsa4096 2019-01-25 [SC] [expires: 2024-01-24]\n      XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nuid           [ultimate] BlankOn Developer <blankon-dev@googlegroups.com>\nssb   rsa4096 2019-01-25 [E] [expires: 2024-01-24]\nssb   rsa4096 2019-01-25 [S] [expires: 2024-01-24]\n")),Object(i.b)("p",null,"Simbol # setelah ",Object(i.b)("inlineCode",{parentName:"p"},"sec")," menandakan tidak ada kunci privat master di ",Object(i.b)("inlineCode",{parentName:"p"},"gnupg"),"."))}c.isMDXComponent=!0}}]);