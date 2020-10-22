(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1022:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,d=p["".concat(o,".").concat(s)]||p[s]||m[s]||c;return n?a.a.createElement(d,l(l({ref:t},i),{},{components:n})):a.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(1022)),o={},l={unversionedId:"TimPengembang/Infrastruktur/TarwitDocker",id:"TimPengembang/Infrastruktur/TarwitDocker",isDocsHomePage:!1,title:"TarwitDocker",description:"Deploy tarwit dengan Docker",source:"@site/Wiki/TimPengembang/Infrastruktur/TarwitDocker.md",slug:"/TimPengembang/Infrastruktur/TarwitDocker",permalink:"/TimPengembang/Infrastruktur/TarwitDocker",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/TarwitDocker.md",version:"current"},u=[],i={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"deploy-tarwit-dengan-docker"},"Deploy tarwit dengan Docker"),Object(c.b)("p",null,"Berikut langkah-langkah untuk melakukan deploy tarwit dengan docker dan docker-compose"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clone repository tarwit ")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/samsulmaarif/tarwit.git\n$ cd tarwit\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install Docker terlebih dahulu, cara termudahnya dengan menjalankan perintah berikut :")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ curl -fsSL https://get.docker.com | sudo bash -\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"tambahkan user ke grup docker")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ sudo usermod -aG docker namauser\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"install docker-compose")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'$ sudo curl -L "https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n$ sudo chmod +x /usr/local/bin/docker-compose\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"logout, lalu login lagi untuk menjalankan perintah berikutnya, atau gunakan tab terminal baru"),Object(c.b)("li",{parentName:"ul"},"Sunting berkas ",Object(c.b)("em",{parentName:"li"},"docker-compose.yml")),Object(c.b)("li",{parentName:"ul"},"pada service ",Object(c.b)("strong",{parentName:"li"},"php"),", bagian ",Object(c.b)("strong",{parentName:"li"},"environment")," lengkapi dengan credensial API twitter")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"- TW_CONSUMER_KEY=\n- TW_SECRET_KEY=\n- TW_ACCESS_TOKEN=\n- TW_ACCESS_TOKEN_SECRET=\n- DB_HOST=tarwitdb\n- DB_USER=root\n- DB_NAME=tarwit\n- DB_PASSWD=strongpassword\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"buat beberapa direktori")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ mkdir -p tmp/img\n$ mkdir logs\n$ mkdir dbdata\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"lakukan proses build dengan perintah:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose --verbose build\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"eksekusi perintah berikut untuk menjalankan tarwit:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose --verbose up\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"install dependency untuk twitteroauth dengan masuk ke container melalui perintah docker-compose")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ docker-compose exec php bash\nwww-data@a41a38a96ac6:~/html$ cd databaseFiles/twitteroauth\nwww-data@a41a38a96ac6:~/html/databaseFiles/twitteroauth$ composer install\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Jika semua berjalan lancar, coba akses melalui peramban URL http://ip-server:8000 atau jika di lokal dapat diakses langsung dengan http://localhost:8000")))}b.isMDXComponent=!0}}]);