(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{137:function(e,t,n){"use strict";n.r(t);n(27);var r=n(0),i=n.n(r),o=n(249),a={description:i.a.createElement("p",null,"Oi! Eu sou o Ângelo! Desenvolvedor Full-Stack desde 2007. ",i.a.createElement("br",null),"Amo Linux e tecnologias Open Source tanto quanto amo minha filha e esposa. ",i.a.createElement("br",null),"Atualmente uso React, Nodejs e Arch linux para desenvolvimento de Apps Web e Mobile."),descriptionForGoogle:"\n    Oi! Eu sou o Ângelo! Desenvolvedor Full-Stack desde 2007.\n    Amo Linux e tecnologias Open Source tanto quanto amo minha filha e esposa.\n    Atualmente uso React, Nodejs e Arch linux para desenvolvimento de Apps Web e Mobile.\n  "};t.default=function(e){return i.a.createElement(o.a,Object.assign({i18n:a},e))}},158:function(e,t,n){"use strict";var r=n(151).b.h1.withConfig({displayName:"H1",componentId:"e5vjwq-0"})(["font-size:",";margin:",";padding:",";text-align:",";"],function(e){return e.theme.h1.fontSize},function(e){return e.theme.h1.margin},function(e){return e.theme.h1.padding},function(e){return e.theme.h1.textAlign});t.a=r},179:function(e,t,n){n(27);var r={hugomn:{name:"Hugo Nogueira",additionalName:"hugomn",address:"Berlin CA",birthDate:"1986-09-01",birthPlace:"Juiz de Fora BR",brand:"Hugo Nogueira, Software Engineer, Lead Front-end engineer, Senior ReactJs developer",children:"...",email:"hugomn@gmail.com",familyName:"Nogueira",gender:"Male",givenName:"Hugo",height:"...",homeLocation:"Berlin",jobTitle:"Software Engineering Lead",knows:"...",memberOf:"...",nationality:"Brazilian",owns:"...",parent:"...",performerIn:"...",publishingPrinciples:"...",relatedTo:"...",seeks:"...",sibling:"...",spouse:{additionalName:"Lunara Leto Costa",name:"Lunara Leto Costa",givenName:"Lunara",familyName:"Costa",gender:"Female",nationality:"Brazilian",homeLocation:"Berlin"},telephone:"...",weight:"...",workLocation:"...",worksFor:"...",description:"...",disambiguatingDescription:"...",identifier:"...",image:"http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7",sameAs:"https://hugomagalhaes.com/en/about/",url:"https://hugomagalhaes.com/en/about/"}};e.exports={authors:r,getAuthor:function(e){var t=Object.assign({},r[e],{"@type":"Person"});return t||r[0]}}},180:function(e,t,n){"use strict";var r=n(151).b.section.withConfig({displayName:"BigFirstLetter",componentId:"sc-1rt4zyk-0"})(["p{font-size:",";line-height:",";}p:first-of-type::first-letter{font-size:",";color:",";float:left;line-height:",";padding:",";margin:",";}"],function(e){return e.theme.p.fontSize},function(e){return e.theme.p.lineHeight},function(e){return e.theme.p.firstLetter.fontSize},function(e){return e.theme.p.firstLetter.color},function(e){return e.theme.p.firstLetter.lineHeight},function(e){return e.theme.p.firstLetter.padding},function(e){return e.theme.p.firstLetter.margin});t.a=r},187:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return h});n(27);var r=n(161),i=n(242),o=n(179),a=Object(r.curry)(function(e,t){return Object(i.isNilOrEmpty)(t)?t:Object(r.keys)(t).reduce(function(n,r){var i=t[r];return"object"==typeof i?n[r]=a(e,t[r]):e(i)&&(n[r]=t[r]),n},{})}),c=a(function(e){return Object(i.isNotNilOrEmpty)(e)&&"..."!==e}),u=function(e){return Object(r.keys)(e).reduce(function(t,n){return t["type"===n?"@type":n]=e[n],t},{})},s=function(e){return e["@context"]="http://schema.org/",e},l=Object(r.pipe)(Object(r.prop)("frontmatter"),Object(r.prop)("date")),p=Object(r.pipe)(Object(r.prop)("frontmatter"),Object(r.prop)("title")),m=Object(r.pipe)(Object(r.prop)("html")),d=Object(r.pipe)(Object(r.prop)("frontmatter"),Object(r.prop)("title")),f=Object(r.pipe)(function(e){return Object(r.assocPath)(["frontmatter","structuredData","datePublished"],l(e),e)},function(e){return Object(r.assocPath)(["frontmatter","structuredData","headline"],p(e),e)},function(e){return Object(r.assocPath)(["frontmatter","structuredData","articleBody"],m(e),e)},function(e){return Object(r.assocPath)(["fields","langKey"],d(e),e)},Object(r.prop)("frontmatter"),Object(r.prop)("structuredData"),u,s,function(e){return e.author?Object.assign({},e,{author:Object(o.getAuthor)(e.author)}):e},c,JSON.stringify),h=Object(r.pipe)(u,s,c,JSON.stringify)},249:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),u=n(179),s=n(187),l=n(180),p=n(151),m=n(153),d=n(169),f=n.n(d),h=n(168),g=p.b.header.withConfig({displayName:"AboutPage__Header",componentId:"la8h4l-0"})(["padding:0 0 "," 0;"],function(e){return e.theme.scale(2)}),b=function(e){var t=Object(u.getAuthor)("hugomn");t.description=e.i18n.descriptionForGoogle;var n=Object(s.b)(t);return i.a.createElement(h.a,{location:e.location},i.a.createElement(l.a,null,i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}}),i.a.createElement(m.b,{id:"about"},function(e){return i.a.createElement(g,null,i.a.createElement(f.a,{title:e,meta:[{name:"description",content:e}]}),i.a.createElement(c.a,null,e))}),e.i18n.description))};b.propTypes={i18n:a.a.shape({description:a.a.object.isRequired,descriptionForGoogle:a.a.string.isRequired}).isRequired,location:a.a.object.isRequired},t.a=b}}]);
//# sourceMappingURL=component---src-pages-about-index-pt-js-b7cbb21ba7dabdf24e6d.js.map