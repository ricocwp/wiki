(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1022:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},c=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,m=p["".concat(o,".").concat(c)]||p[c]||d[c]||i;return t?a.a.createElement(m,l(l({ref:n},b),{},{components:t})):a.a.createElement(m,l({ref:n},b))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},495:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(1022)),o={},l={unversionedId:"TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",id:"TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",isDocsHomePage:!1,title:"ImplementasiPabrikPaketCabang",description:"Implementasi Pabrik Paket Cabang",source:"@site/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang.md",slug:"/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",permalink:"/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/ImplementasiPabrikPaketCabang.md",version:"current"},u=[{value:"Instalasi",id:"instalasi",children:[]},{value:"Lampiran",id:"lampiran",children:[]}],b={rightToc:u};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"implementasi-pabrik-paket-cabang"},"Implementasi Pabrik Paket Cabang"),Object(i.b)("h3",{id:"instalasi"},"Instalasi"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Instal pbuilder\nsudo apt-get install pbuilder"),Object(i.b)("li",{parentName:"ol"},"Buat pengguna blankon-dev\nsudo useradd blankon-dev"),Object(i.b)("li",{parentName:"ol"},"Masukkan blankon-dev sebagai pengguna sudo untuk pbuilder\n",Object(i.b)("inlineCode",{parentName:"li"},'# echo "blankon-dev ALL=NOPASSWD: /usr/sbin/pbuilder" >> /etc/sudoers')),Object(i.b)("li",{parentName:"ol"},"Siapkan rootstrap (dilakukan sebagai blankon-dev)\n",Object(i.b)("inlineCode",{parentName:"li"},"# sudo - blankon-dev"),Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"sudo  pbuilder create  --configfile /home/blankon-dev/.pbuilderrc")),Object(i.b)("li",{parentName:"ol"},"Instalasi skrip pabrik paket cabang")),Object(i.b)("h3",{id:"lampiran"},"Lampiran"),Object(i.b)("h4",{id:"pbuilderrc"},".pbuilderrc"),Object(i.b)("p",null,"Letakkan berkas .pbuilderrc di /home/blankon-dev, isinya:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'BASETGZ=/home/blankon-dev/pbuilder/base.tgz\n#EXTRAPACKAGES=gcc3.0-athlon-builder\nexport DEBIAN_BUILDARCH=i386\nBUILDPLACE=/home/blankon-dev/pbuilder/build/\nMIRRORSITE=http://gx.tmp.mnots.eu\n\n#Ini nanti dibuka kalau sudah ada isinya\n#OTHERMIRROR="deb http://konde-dev.ubuntu-id.org konde main"\n#export http_proxy=http://your-proxy:8080/\nUSEPROC=no\nUSEDEVPTS=yes\nUSEDEVFS=no\nBUILDRESULT=/home/blankon-dev/pbuilder/result/\n\n# specifying the distribution forces the distribution on "pbuilder update"\nDISTRIBUTION=gutsy\n\n# specifying the components of the distribution (default is "main")\n#COMPONENTS="main restricted universe multiverse"\n#specify the cache for APT\nAPTCACHE="/home/blankon-dev/pbuilder/aptcache/"\nAPTCACHEHARDLINK="yes"\nREMOVEPACKAGES="lilo"\n#HOOKDIR="/usr/lib/pbuilder/hooks"\nHOOKDIR=""\n# make debconf not interact with user\nexport DEBIAN_FRONTEND="noninteractive"\nDEBEMAIL=""\n#for pbuilder debuild\nBUILDSOURCEROOTCMD="fakeroot"\nPBUILDERROOTCMD="sudo"\n# command to satisfy build-dependencies; the default is an internal shell\n# implementation which is relatively slow; there\'s an alternate experimental\n# implementation, "pbuilder-satisfydepends-experimental", which might be useful\n# to pull packages from experimental or from repositories with a low APT Pin\n# Priority\nPBUILDERSATISFYDEPENDSCMD="/usr/lib/pbuilder/pbuilder-satisfydepends"\n#default is to build everything. Passed on to dpkg-buildpackage\n#DEBBUILDOPTS="-b"\nDEBBUILDOPTS=""\n#APT configuration files directory\nAPTCONFDIR=""\n# the username and ID used by pbuilder, inside chroot. Needs fakeroot, really\nBUILDUSERID=1234\nBUILDUSERNAME=pbuilder\n# BINDMOUNTS is a space separated list of things to mount\n# inside the chroot.\nBINDMOUNTS=""\n# Set the debootstrap variant to \'buildd\' type.\n# DEBOOTSTRAPOPTS[0]=\'--variant=buildd\'\n# or work around bug in debootstrap 3.0.0 (314858)\nunset DEBOOTSTRAPOPTS\nDEBOOTSTRAPOPTS[0]=\'--arch\'\nDEBOOTSTRAPOPTS[1]=\'i386\'\n# Set the PATH I am going to use inside pbuilder: default is "/usr/sbin:/usr/bin\n# DEBOOTSTRAPOPTS[0]=\'--variant=buildd\'\n# or work around bug in debootstrap 3.0.0 (314858)\nunset DEBOOTSTRAPOPTS\nDEBOOTSTRAPOPTS[0]=\'--arch\'\nDEBOOTSTRAPOPTS[1]=\'i386\'\n# Set the PATH I am going to use inside pbuilder: default is "/usr/sbin:/usr/bin:/sbin:/bin:/usr/X11R6/bin"\n#\nexport PATH="/usr/sbin:/usr/bin:/sbin:/bin:/usr/X11R6/bin"\n# SHELL variable is used inside pbuilder by commands like \'su\'; and they need sane values\nexport SHELL=/bin/bash\n# The name of debootstrap command.\nDEBOOTSTRAP="debootstrap"\n# default file extension for pkgname-logfile\nPKGNAME_LOGFILE_EXTENTION="_$(dpkg --print-architecture).build"\n# default PKGNAME_LOGFILE\nPKGNAME_LOGFILE=""\nKategoriPemaket KategoriInfra\nLast modified on 07/01/2008 01:29:41 PM\n')),Object(i.b)("hr",null))}s.isMDXComponent=!0}}]);