(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{1022:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),h=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=h(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(t),b=a,m=p["".concat(r,".").concat(b)]||p[b]||d[b]||o;return t?i.a.createElement(m,s(s({ref:n},l),{},{components:t})):i.a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},372:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return h}));var a=t(2),i=t(6),o=(t(0),t(1022)),r={},s={unversionedId:"TimPengembang/Pemaket/dep5",id:"TimPengembang/Pemaket/dep5",isDocsHomePage:!1,title:"dep5",description:'DEP-5: Machine-readable debian/copyright"',source:"@site/Wiki/TimPengembang/Pemaket/dep5.md",slug:"/TimPengembang/Pemaket/dep5",permalink:"/TimPengembang/Pemaket/dep5",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/dep5.md",version:"current"},c=[{value:"DEP-5: Machine-readable debian/copyright&quot;",id:"dep-5-machine-readable-debiancopyright",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Rationale",id:"rationale",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]},{value:"File syntax",id:"file-syntax",children:[]},{value:"Header paragraph (Once)",id:"header-paragraph-once",children:[]},{value:"Files paragraph (Repeatable)",id:"files-paragraph-repeatable",children:[]},{value:"Standalone License Paragraph (Optional, Repeatable)",id:"standalone-license-paragraph-optional-repeatable",children:[]},{value:"License specifications",id:"license-specifications",children:[{value:"Short name",id:"short-name",children:[]}]}],l={rightToc:c};function h(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"dep-5-machine-readable-debiancopyright"},'DEP-5: Machine-readable debian/copyright"'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," Title: Machine-readable debian/copyright DEP: 5 State: CANDIDATE\n Date: 2011-01-06 Drivers: Steve Langasek <vorlon@\u2026>,\n      Lars Wirzenius <liw@\u2026>\n URL: \u200bhttp://dep.debian.net/deps/dep5 License:\n      Copying and distribution of this file, with or without\n      modification, are permitted in any medium without royalty\n      provided the copyright notice and this notice are\n      preserved.\n Abstract:\n      Establish a standard, machine-readable format for debian/\n      copyright files within packages, to facilitate automated\n      checking and reporting of licenses for packages and sets of\n      packages.\n")),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This is a proposal to make debian/copyright machine-interpretable. This file is\none of the most important files in Debian packaging, yet there is currently no\nstandard format defined for it and its contents vary tremendously across\npackages, making it difficult to automatically extract licensing information.\nThis is not a proposal to change the policy in the short term. In particular,\nnothing in this proposal supersedes or modifies any of the requirements\nspecified in Debian Policy regarding the appropriate detail or granularity to\nuse when documenting copyright and license status in debian/copyright."),Object(o.b)("h2",{id:"rationale"},"Rationale"),Object(o.b)("p",null,'The diversity of free software licenses means that Debian needs to care not\nonly about the freeness of a given work, but also its license\'s compatibility\nwith the other parts of Debian it uses.\nThe arrival of the GPL version 3, its incompatibility with version 2, and our\ninability to spot the software where the incompatibility might be problematic\nis one prominent occurrence of this limitation.\nThere are earlier precedents, also. One is the GPL/OpenSSL incompatibility.\nApart from grepping debian/copyright, which is prone to numerous false\npositives (packaging under the GPL but software under another license) or\nnegatives (GPL software but with an "OpenSSL special exception" dual licensing\nform), there is no reliable way to know which software in Debian might be\nproblematic.\nAnd there is more to come. There are issues with shipping GPLv2-only software\nwith a CDDL operating system such as Nexenta. The GPL version 3 solves this\nissue, but not all GPL software can switch to it and we have no way to know how\nmuch of Debian should be stripped from such a system.\nA user might want to have a way to avoid software with certain licenses they\nhave a problem with, even if the licenses are DFSG-free. For example, the\nAffero GPL.'),Object(o.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(o.b)("p",null,"Many people have worked on this specification over the years. The following\nalphabetical list is incomplete, please suggest missing people:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"* Russ Allbery,\n* Ben Finney,\n* Sam Hocevar,\n* Steve Langasek,\n* Charles Plessy,\n* Noah Slater,\n* Jonas Smedegaard,\n* Lars Wirzenius.\n")),Object(o.b)("h2",{id:"file-syntax"},"File syntax"),Object(o.b)("p",null,"The debian/copyright file must be machine-interpretable, yet human-readable,\nwhile communicating all mandated upstream information, copyright notices and\nlicensing details.\nThe syntax of the file is the same as for other Debian control files, as\nspecified in section 5.1 of the Debian Policy Manual. See <\u200bhttp://\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.debian.org/doc/debian-policy/ch-controlfields.html#s-controlsyntax%3E"}),"www.debian.org/doc/debian-policy/ch-controlfields.html#s-controlsyntax>")," for\ndetails. Extra fields can be added to any paragraph. No prefixing is necessary\nor desired, but please avoid names similar to standard ones so that mistakes\nare easier to catch. Future versions of the debian/copyright specification will\nattempt to avoid conflicting specifications for widely used extra fields.\nThere are four kinds values for fields. Each field specifies which kind is\nallowed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"* Single-line values.\n* White space separated lists.\n* Line based lists.\n* Text formatted like package long descriptions.\n")),Object(o.b)("p",null,'A single-line value means that the whole value of a field must fit on a single\nline. For example, the Format field has a single line value specifying the\nversion of the machine-readable format that is used.\nA white space separated list means that the field value may be on one line or\nmany, but values in the list are separated by one or more white space\ncharacters (including space, TAB, and newline). For example, the Files field\nhas a list of filename patterns.\nAnother kind of list value has one value per line. For example, Copyright can\nlist many copyright statements, one per line.\nFormatted text fields use the same rules as the long description in a package\'s\nDescription field, possibly also using the first line as a synopsis, like\nDescription uses it for the short description. See section 5.6.13,\n"Description", at <\u200b',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.debian.org/doc/debian-policy/ch-"}),"http://www.debian.org/doc/debian-policy/ch-"),"\ncontrolfields.html#s-f-Description> for details. For example, Disclaimer has no\nspecial first line, whereas License does."),Object(o.b)("h1",{id:"paragraphs"},"Paragraphs"),Object(o.b)("p",null,'There are three kinds of paragraphs: the first one is called the "header\nparagraph". Every other paragraph is either a "Files" paragraph or a stand-\nalone license paragraph. This is similar to source and binary package\nparagraphs in debian/control files.'),Object(o.b)("h2",{id:"header-paragraph-once"},"Header paragraph (Once)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"* Format\n      o Required\n      o Syntax: single line\n      o URI of the format specification, such as:\n            # \u200bhttp://svn.debian.org/wsvn/dep/web/deps/\n              dep5.mdwn?op=file&rev=REVISION\n* Upstream-Name\n      o Optional\n      o Syntax: single line\n      o The name upstream uses for the software.\n* Upstream-Contact\n      o Optional\n      o Syntax: line based list\n      o The preferred address(es) to reach the upstream project. May be\n        free-form text, but by convention will usually be written as a list\n        of RFC5822 addresses or URIs.\n* Source\n      o Required\n      o Syntax: formatted text, no synopsis\n      o An explanation from where the upstream source came from. Typically\n        this would be a URL, but it might be a free-form explanation. If\n        the upstream source has been modified to remove non-free parts,\n        that should be explained in this field.\n* Disclaimer\n      o Optional\n      o Syntax: formatted text, no synopsis\n      o This field can be used in the case of non-free and contrib packages\n        (see [Policy 12.5]( \u200bhttp://www.debian.org/doc/debian-policy/ch-\n        docs.html#s-copyrightfile))\n* Comment\n      o Optional\n      o Syntax: formatted text, no synopsis\n      o Description: This field can provide additional information. For\n        example, it might quote an e-mail from upstream justifying why the\n        license is acceptable to the main archive, or an explanation of how\n        this version of the package has been forked from a version known to\n        be DFSG-free, even though the current upstream version is not.\n* Copyright\n      o Optional.\n      o Syntax: line based list\n      o In the header paragraph (no Files specification), this field gives\n        the copyright information for the package as a whole, which may be\n        different or simplified from a combination of all the per-file\n        copyright information. See also Copyright below in the Files\n        paragraph section.\n")),Object(o.b)("p",null,"Example:\nFormat: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://dep.debian.net/deps/dep5/"}),"http://dep.debian.net/deps/dep5/"),"\nUpstream-Name: SOFTware\nUpstream-Contact: John Doe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:john.doe@example.com"}),"john.doe@example.com"),"\nSource: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.example.com/software/project"}),"http://www.example.com/software/project")),Object(o.b)("h2",{id:"files-paragraph-repeatable"},"Files paragraph (Repeatable)"),Object(o.b)("p",null,"The declaration of copyright and license for files is done in one or more\nparagraphs. In the simplest case, a single paragraph can be used which applies\nto all files and lists all applicable copyrights and licenses."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'* Files\n      o Required (not in header paragraph).\n      o Syntax: white space separated list\n      o List of patterns indicating files covered by the license and\n        copyright specified in this paragraph. See below for details.\n* Copyright\n      o Required\n      o Syntax: line based list\n      o One or more free-form copyright statement(s), one per line, that\n        apply to the files matched by the above pattern. If a work has no\n        copyright holder (i.e., it is in the public domain), that\n        information should be recorded here.\n           The Copyright field collects all relevant\n           copyright notices for the files of this\n           paragraph. Not all copyright notices may apply to\n           every individual file, and years of publication\n           for one copyright holder may be gathered\n           together. For example, if file A has:\n                    Copyright 2008 John Smith\n                    Copyright 2009 Angela Watts\n           and file B has:\n                    Copyright 2010 Angela Watts\n           the Copyright field for a stanza covering both\n           file A and file B need contain only:\n                    Copyright 2008 John Smith\n                    Copyright 2009, 2010 Angela Watts\n      The Copyright field may contain the original copyright\n      statement copied exactly (including the word "Copyright"),\n      or it can shorten the text, as long as it does not\n      sacrifice information. Examples in this specification use\n      both forms.\n* License\n      o Licensing terms for the files listed in Files field for this\n        paragraph\n      o Required\n      o Syntax: formatted text, with synopsis\n      o First line: an abbreviated name for the license, or expression\n        giving alternatives (see *Short names* section for a list of\n        standard abbreviations). If there are licenses present in the\n        package without a standard short name, an arbitrary short name may\n        be assigned for these licenses. These arbitrary names are only\n        guaranteed to be unique within a single copyright file.\n      o Remaining lines: if left blank here, the file must include a stand-\n        alone License paragraph matching each license short name listed on\n        the first line (see the *Standalone License Paragraph\n      o section). Otherwise, this field should either include the full text\n        of the license(s) or include a pointer to the license file under /\n        usr/share/common-licenses. This field should include all text\n        needed in order to fulfill both Debian Policy\'s requirement for\n        including a copy of the software\'s distribution license (<a\n        href="\u200bhttp://www.debian.org/doc/debian-policy/ch-docs.html#s-\n        copyrightfile">\xa712.5</a>), and any license requirements to include\n        warranty disclaimers or other notices with the binary package.\n* Comment\n      o Same as in the header paragraph.\n')),Object(o.b)("p",null,"Filename patterns in the Files field are specified using a simplified shell\nglob syntax. Patterns are separated by white space."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'* Only the wildcards * and ? apply; the former matches any number of\n  characters (including none), the latter a single character. Both match a\n  slash ("/") and a leading dot.\n* The backslash ("\\\\") is used to remove the magic from the next character;\n  see table below.\n* Patterns match pathnames that start at the root of the source tree. Thus,\n  "Makefile.in" matches only the file at the root of the tree, but "*/\n  Makefile.in" matches at any depth.\n')),Object(o.b)("p",null,"Backslash escape sequences:\n","*"," match star (asterisk) \\? match question mark\nmatch backslash\nAny other character following a backslash is an error.\nMultiple Files paragraphs are allowed. The last paragraph that matches a\nparticular file applies to it.\nExclusions are done by having multiple Files paragraphs.\nExample:\nFiles: ",Object(o.b)("em",{parentName:"p"},"\nCopyright: 1975-2010 Ulla Upstream\nLicense: GPL-2+\nFiles: debian/"),"\nCopyright: 2010 Daniela Debianizer\nLicense: GPL-2+\nFiles: debian/patches/fancy-feature\nCopyright: 2010 Daniela Debianizer\nLicense: GPL-3+\nFiles: ",Object(o.b)("em",{parentName:"p"},"/"),".1\nCopyright: 2010 Manuela Manpager\nLicense: GPL-2+\nIn this example, all files are copyright by the upstream and licensed under the\nGPL, version 2 or later, with three exceptions. All the Debian packaging files\nare copyright by the packager, and further one specific file providing a new\nfeature is licensed differently. Finally, there are some manual pages added to\nthe package, written by a third person."),Object(o.b)("h2",{id:"standalone-license-paragraph-optional-repeatable"},"Standalone License Paragraph (Optional, Repeatable)"),Object(o.b)("p",null,"Where a set of files are dual (tri, etc) licensed, or when the same license\noccurs multiple times, you can use a single line License field and standalone\nLicense paragraphs to expand the license short names.\nExample 1 (tri-licensed files).\nFiles: src/js/editline/",Object(o.b)("em",{parentName:"p"},"\nCopyright: 1993, John Doe\n1993, Joe Average\nLicense: MPL-1.1 or GPL-2 or LGPL-2.1\nLicense: MPL-1.1\n","[LICENSE TEXT]","\nLicense: GPL-2\n","[LICENSE TEXT]","\nLicense: LGPL-2.1\n","[LICENSE TEXT]","\nExample 2 (recurrent license).\nFiles: src/js/editline/"),"\nCopyright: 1993, John Doe\n1993, Joe Average\nLicense: MPL-1.1\nFiles: src/js/fdlibm/*\nCopyright: 1993, J-Random Corporation\nLicense: MPL-1.1\nLicense: MPL-1.1\n","[LICENSE TEXT]"),Object(o.b)("h2",{id:"license-specifications"},"License specifications"),Object(o.b)("h3",{id:"short-name"},"Short name"),Object(o.b)("p",null,'Much of the value of a machine-parseable copyright file lies in being able to\ncorrelate the licenses of multiple pieces of software. To that end, this spec\ndefines standard short names for a number of commonly used licenses, which can\nbe used in the first line of a "License" field.\nThese short names have the specified meanings across all uses of this file\nformat, and ',Object(o.b)("em",{parentName:"p"},"must not"),' be used to refer to any other licenses. Parsers may thus\nrely on these short names referring to the same licenses wherever they occur,\nwithout needing to parse or compare the full license text.\nFrom time to time, licenses may be added to or removed from the list of\nstandard short names. Such changes in the list of short names will always be\naccompanied by changes to the recommended Format value. Implementors who are\nparsing copyright files should take care not to assume anything about the\nmeaning of license short names for unknown Format versions.\nUse of a standard short name does not override the Debian Policy requirement to\ninclude the full license text in debian/copyright, nor any requirements in the\nlicense of the work regarding reproduction of legal notices. This information\nmust still be included in the License field, either in a stand-alone license\nparagraph or in the relevant files paragraph.\nFor licenses which have multiple versions in use, the version number is added,\nusing a dash as a separator. If omitted, the lowest version number is implied.\nWhen the license grant permits using the terms of any later version of that\nlicense, the short name is finished with a plus sign. For SPDX compatibility,\ntrailing "dot-zeroes" are considered to be equal to plainer version (e.g.,\n"2.0.0" is considered equal to "2.0" and "2").\n',Object(o.b)("strong",{parentName:"p"},"keyword")," | ",Object(o.b)("strong",{parentName:"p"},"meaning"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Apache")," | Apache license. For versions, consult the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.apache.org/licenses/"}),"Apache Software\nFoundation"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"Artistic")," | Artistic license. For versions, consult the ","[Perl Foundation]","\n(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.perlfoundation.org/legal"}),"http://www.perlfoundation.org/legal"),")\n",Object(o.b)("inlineCode",{parentName:"p"},"BSD-2-clause")," | Berkeley software distribution license, 2-clause version\n",Object(o.b)("inlineCode",{parentName:"p"},"BSD-3-clause")," | Berkeley software distribution license, 3-clause version\n",Object(o.b)("inlineCode",{parentName:"p"},"BSD-4-clause")," | Berkeley software distribution license, 4-clause version\n",Object(o.b)("inlineCode",{parentName:"p"},"FreeBSD")," | FreeBSD Project license\n",Object(o.b)("inlineCode",{parentName:"p"},"ISC")," | ","[Internet Software Consortium]","(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://opensource.org/licenses/isc-"}),"http://opensource.org/licenses/isc-"),"\nlicense.txt)'s license, sometimes also known as the OpenBSD License\n",Object(o.b)("inlineCode",{parentName:"p"},"CC-BY")," | Creative Commons Attribution license\n",Object(o.b)("inlineCode",{parentName:"p"},"CC-BY-SA")," | Creative Commons Attribution Share Alike license\n",Object(o.b)("inlineCode",{parentName:"p"},"CC-BY-ND")," | Creative Commons Attribution No Derivatives\n",Object(o.b)("inlineCode",{parentName:"p"},"CC-BY-NC")," | Creative Commons Attribution Non-Commercial\n",Object(o.b)("inlineCode",{parentName:"p"},"CC-BY-NC-SA")," | Creative Commons Attribution Non-Commercial Share Alike\n",Object(o.b)("inlineCode",{parentName:"p"},"CC-BY-NC-ND")," | Creative Commons Attribution Non-Commercial No Derivatives\n",Object(o.b)("inlineCode",{parentName:"p"},"CC0")," | Creative Commons Universal waiver\n",Object(o.b)("inlineCode",{parentName:"p"},"CDDL")," | Common Development and Distribution License. For versions, consult\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.sun.com/cddl/"}),"Sun Microsystems"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"CPL")," | IBM Common Public License. For versions, consult the ","[IBM Common Public\nLicense (CPL) Frequently asked questions]","(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.ibm.com/developerworks/"}),"http://www.ibm.com/developerworks/"),"\nlibrary/os-cplfaq.html).\n",Object(o.b)("inlineCode",{parentName:"p"},"EFL")," | The Eiffel Forum License. For versions, consult the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.opensource.org/licenses/eiffel.html"}),"Open Source\nInitiative"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"Expat")," | The Expat license\n",Object(o.b)("inlineCode",{parentName:"p"},"GPL")," | GNU General Public License\n",Object(o.b)("inlineCode",{parentName:"p"},"LGPL")," | GNU Lesser General Public License, (GNU Library General Public License\nfor versions lower than 2.1)\n",Object(o.b)("inlineCode",{parentName:"p"},"GFDL")," | GNU Free Documentation License\n",Object(o.b)("inlineCode",{parentName:"p"},"GFDL-NIV")," | GNU Free Documentation License, with no invariant sections\n",Object(o.b)("inlineCode",{parentName:"p"},"LPPL")," | LaTeX Project Public License\n",Object(o.b)("inlineCode",{parentName:"p"},"MPL")," | Mozilla Public License. For versions, consult ","[Mozilla.org]","(http://\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.mozilla.org/MPL"}),"www.mozilla.org/MPL"),")\n",Object(o.b)("inlineCode",{parentName:"p"},"Perl"),' | Perl license (use "GPL-1+ or Artistic-1" instead)\n',Object(o.b)("inlineCode",{parentName:"p"},"Python-CNRI")," | Python Software Foundation license. For versions, consult the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.python.org/psf/license/"}),"Python Software Foundation"),"\n",Object(o.b)("inlineCode",{parentName:"p"},"QPL")," | Q Public License\n",Object(o.b)("inlineCode",{parentName:"p"},"W3C")," | W3C Software License. For more information, consult the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.w3.org/Consortium/Legal/IPR-FAQ-20000620S"}),"W3C\nIntellectual Rights FAQ"),"\nand the ","[20021231 W3C Software notice and license]","(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.w3.org/"}),"http://www.w3.org/"),"\nConsortium/Legal/2002/copyright-software-20021231)\n",Object(o.b)("inlineCode",{parentName:"p"},"Zlib")," | ","[zlib/libpng license]","(",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.opensource.org/licenses/zlib-"}),"http://www.opensource.org/licenses/zlib-"),"\nlicense.php)\n",Object(o.b)("inlineCode",{parentName:"p"},"Zope")," | Zope Public License. For versions, consult ","[Zope.org]","(http://\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.zope.org/Resources/License/"}),"www.zope.org/Resources/License/"),")\nThere are ","[many versions of the MIT license]","(\u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://en.wikipedia.org/wiki/"}),"http://en.wikipedia.org/wiki/"),'\nMIT_License#Various_versions).Please use Expat instead, when it matches.\nExceptions and clarifications are signaled in plain text, by appending "with\nkeywords exception" to the short name. This document provides a list of\nkeywords that refer to the most frequent exceptions.\nThe GPL "Font" exception refers to the text added to the license notice of each\nfile as specified at ',"[How does the GPL apply to fonts?]","(\u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.gnu.org/"}),"http://www.gnu.org/"),"\nlicenses/gpl-faq.html#FontException). The precise text corresponding to this\nexception is:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'As a special exception, if you create a document which uses this font,\nand embed this font or unaltered portions of this font into the\ndocument, this font does not by itself cause the resulting document to\nbe covered by the GNU General Public License. This exception does not\nhowever invalidate any other reasons why the document might be covered\nby the GNU General Public License. If you modify this font, you may\nextend this exception to your version of the font, but you are not\nobligated to do so. If you do not wish to do so, delete this exception\nstatement from your version.\nThe GPL "OpenSSL" exception gives permission to link GPL-licensed code with the\nOpenSSL library, which contains GPL-incompatible clauses. For more information,\nsee ','["The -OpenSSL License and The GPL"]',"(\u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.gnome.org/~markmc/openssl-"}),"http://www.gnome.org/~markmc/openssl-"),"\nand-the-gpl.html) by Mark McLoughlin? and the message ",'["middleman software\nlicense conflicts with OpenSSL"]',"(\u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://lists.debian.org/debian-legal/2004/05/"}),"http://lists.debian.org/debian-legal/2004/05/"),"\nmsg00595.html) by Mark McLoughlin? on the debian-legal mailing list. The text\ncorresponding to this exception is:\nIn addition, as a special exception, the copyright holders give\npermission to link the code of portions of this program with the\nOpenSSL library under certain conditions as described in each\nindividual source file, and distribute linked combinations including\nthe two.\nYou must obey the GNU General Public License in all respects for all\nof the code used other than OpenSSL. If you modify file(s) with this\nexception, you may extend this exception to your version of the file\n(s), but you are not obligated to do so. If you do not wish to do so,\ndelete this exception statement from your version. If you delete this\nexception statement from all source files in the program, then also\ndelete it here."),Object(o.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"syntax"}),"Syntax"),Object(o.b)("p",{parentName:"blockquote"},'License names are case-insensitive, and may not contain spaces.\nIn case of multi-licensing, the license short names are separated by or when\nthe user can chose between different licenses, and by and when use of the work\nmust simultaneously comply with the terms of multiple licenses.\nFor instance, this is a simple, "GPL version 2 or later" field:\nLicense: GPL-2+\nThis is a dual-licensed GPL/Artistic work such as Perl:\nLicense: GPL-1+ or Artistic\nThis is for a file that has both GPL and classic BSD code in it:\nLicense: GPL-2+ and BSD\nFor the most complex cases, the comma is used to disambiguate the priority of\nors and ands: and has the priority over or, unless preceded by a comma. For\ninstance:\nA or B and C means A or (B and C). A or B, and C means (A or B), and\nC.\nThis is for a file that has Perl code and classic BSD code in it:\nLicense: GPL-2+ or Artistic-2.0, and BSD\nA GPL-2+ work with the OpenSSL exception is in effect a dual-licensed work that\ncan be redistributed either under the GPL-2+, or under the GPL-2+ with the\nOpenSSL exception. It is thus expressed as GPL-2+ with OpenSSL exception:\nLicense: GPL-2+ with OpenSSL exception\nThis program is free software; you can redistribute it and/\nor modify it under the terms of the GNU General Public\nLicense as published by the Free Software Foundation;\neither version 2 of the License, or (at your option) any\nlater version. . In addition, as a special exception, the\nauthor of this program gives permission to link the code of\nits release with the OpenSSL project\'s "OpenSSL" library\n(or with modified versions of it that use the same license\nas the "OpenSSL" library), and distribute the linked\nexecutables. You must obey the GNU General Public License\nin all respects for all of the code used other than\n"OpenSSL". If you modify this file, you may extend this\nexception to your version of the file, but you are not\nobligated to do so. If you do not wish to do so, delete\nthis exception statement from your version. . This program\nis distributed in the hope that it will be useful, but\nWITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See\nthe GNU General Public License for more details. . You\nshould have received a copy of the GNU General Public\nLicense along with this package; if not, write to the Free\nSoftware Foundation, Inc., 51 Franklin St, Fifth Floor,\nBoston, MA 02110-1301 USA . On Debian systems, the full\ntext of the GNU General Public License version 2 can be\nfound in the file `/usr/share/common-licenses/GPL-2\'.'),Object(o.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"spdx"}),"SPDX"),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"%E2%80%8Bhttp://spdx.org/"}),"SPDX")," is an attempt to standardize a format for\ncommunicating the components, licenses and copyrights associated with a\nsoftware package. It and the machine-readable debian/copyright format attempt\nto be somewhat compatible. However, the two formats have different aims, and so\nthe formats are different. The ","[DEP5 wiki page]","(\u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://wiki.debian.org/"}),"http://wiki.debian.org/"),"\nProposals/CopyrightFormat) will be used to track the differences."),Object(o.b)("h1",Object(a.a)({parentName:"blockquote"},{id:"examples"}),"Examples"),Object(o.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"simple"}),"Simple"),Object(o.b)("p",{parentName:"blockquote"},"A possible copyright file for the program 'X Solitaire' distributed in the\nDebian source package xsol:\nFormat: \u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://dep.debian.net/deps/dep5/"}),"http://dep.debian.net/deps/dep5/")," Upstream-Name: X Solitaire\nSource: \u200bftp://ftp.example.com/pub/games\nCopyright: Copyright 1998 John Doe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:jdoe@%E2%80%A6"}),"jdoe@\u2026")," License: GPL-2+\nThis program is free software; you can redistribute it and/\nor modify it under the terms of the GNU General Public\nLicense as published by the Free Software Foundation;\neither version 2 of the License, or (at your option) any\nlater version. . This program is distributed in the hope\nthat it will be useful, but WITHOUT ANY WARRANTY; without\neven the implied warranty of MERCHANTABILITY or FITNESS FOR\nA PARTICULAR PURPOSE. See the GNU General Public License\nfor more details. . You should have received a copy of the\nGNU General Public License along with this package; if not,\nwrite to the Free Software Foundation, Inc., 51 Franklin\nSt, Fifth Floor, Boston, MA 02110-1301 USA . On Debian\nsystems, the full text of the GNU General Public License\nversion 2 can be found in the file `/usr/share/common-\nlicenses/GPL-2'.\nFiles: debian/* Copyright: Copyright 1998 Jane Smith ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:jsmith@%E2%80%A6"}),"jsmith@\u2026"),"\nLicense:\n","[LICENSE TEXT]"),Object(o.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"complex"}),"Complex"),Object(o.b)("p",{parentName:"blockquote"},"A possible copyright file for the program 'Planet Venus', distributed in the\nDebian source package planet-venus:\nFormat: \u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://dep.debian.net/deps/dep5/"}),"http://dep.debian.net/deps/dep5/")," Upstream-Name: Planet Venus\nUpstream-Contact: John Doe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:jdoe@%E2%80%A6"}),"jdoe@\u2026")," Source: \u200b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/"),"\ncode/venus\nCopyright: 2008, John Doe ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:jdoe@%E2%80%A6"}),"jdoe@\u2026"),"\n2007, Jane Smith ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:jsmith@%E2%80%A6"}),"jsmith@\u2026")," 2007, Joe Average ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:joe@%E2%80%A6"}),"joe@\u2026")," 2007,\nJ. Random User ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:jr@%E2%80%A6"}),"jr@\u2026"),"\nLicense: PSF-2\n","[LICENSE TEXT]","\nFiles: debian/",Object(o.b)("em",{parentName:"p"}," Copyright: 2008, Dan Developer ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"mailto:dan@%E2%80%A6"}),"dan@\u2026")," License:\nCopying and distribution of this package, with or without\nmodification, are permitted in any medium without royalty\nprovided the copyright notice and this notice are\npreserved.\nFiles: debian/patches/theme-diveintomark.patch Copyright: 2008, Joe\nHacker ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"mailto:hack@%E2%80%A6"}),"hack@\u2026")," License: GPL-2+\n","[LICENSE TEXT]","\nFiles: planet/vendor/compat_logging/")," Copyright: 2002, Mark Smith\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:msmith@%E2%80%A6"}),"msmith@\u2026")," License: MIT\n","[LICENSE TEXT]","\nFiles: planet/vendor/httplib2/* Copyright: 2006, John Brown ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:brown@%E2%80%A6"}),"brown@\u2026"),"\nLicense: MIT2\nUnspecified MIT style license.\nFiles: planet/vendor/feedparser.py Copyright: 2007, Mike Smith\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:mike@%E2%80%A6"}),"mike@\u2026")," License: PSF-2\n","[LICENSE TEXT]","\nFiles: planet/vendor/htmltmpl.py Copyright: 2004, Thomas Brown\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:coder@%E2%80%A6"}),"coder@\u2026")," License: GPL-2+\nThis program is free software; you can redistribute it and/\nor modify it under the terms of the GNU General Public\nLicense as published by the Free Software Foundation;\neither version 2 of the License, or (at your option) any\nlater version. . This program is distributed in the hope\nthat it will be useful, but WITHOUT ANY WARRANTY; without\neven the implied warranty of MERCHANTABILITY or FITNESS FOR\nA PARTICULAR PURPOSE. See the GNU General Public License\nfor more details. . You should have received a copy of the\nGNU General Public License along with this package; if not,\nwrite to the Free Software Foundation, Inc., 51 Franklin\nSt, Fifth Floor, Boston, MA 02110-1301 USA . On Debian\nsystems, the full text of the GNU General Public License\nversion 2 can be found in the file `/usr/share/common-\nlicenses/GPL-2'."),Object(o.b)("h1",Object(a.a)({parentName:"blockquote"},{id:"appendix-note-about-the-use-of-this-format-in-debian"}),"Appendix: Note about the use of this format in Debian"),Object(o.b)("p",{parentName:"blockquote"},"The Debian Policy (\xa712.5) demands that each package is accompanied by a file,\ndebian/copyright in source packages and /usr/share/doc/package/copyright in\nbinary packages, that contains a verbatim copy of its copyright and\ndistribution license. In addition, it requires that copyrights must be\nextractable by mechanical means. This proposal for machine-readable copyright\nand license summary files has been crafted for Debian's use, but it is our hope\nthat other software distributions, as well as upstream developers will adopt\nit, so that review efforts can be easily reproduced and shared.\nThe copyright of the Debian packaging and the history of package maintainers is\nsimply indicated in a Files: debian/* paragraph.\nLast modified on 01/12/2011 05:13:31 AM"),Object(o.b)("h4",Object(a.a)({parentName:"blockquote"},{id:""}))),Object(o.b)("hr",null))}h.isMDXComponent=!0}}]);