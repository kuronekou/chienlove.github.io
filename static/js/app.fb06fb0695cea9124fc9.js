webpackJsonp([3],{Ednz:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAATlBMVEUAAAA0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNs0mNvz4IHRAAAAGXRSTlMA9cdgKe+FeU1ENOnkkhQN1byd3KoecGlWfMQhnwAAATpJREFUSMft1N1ygyAQBeBFFBAREH+Sff8XbbVlwLJUrjv9ZpJc5JzBJRD48/SxrcMilGuLu4DfzAgnK/j12fVkfjSYzM6+A/Nw4jhRjZ5hbjrfvhZakGx0WOAAZ9Aj1ZBFfFBa+nONa2l2wN1UFj5fMvvqPvqOlHB7WCYheVN5AZcZIyP2WBBIznzRmFne9QJEC+ZYF6TqZZlnacABW6wx70CxlkIXC6YTsqWxpRHazLEwNxZ4LKjGwn47l898dhHbR0jn4JmCDG/82ZLxcW9ft7y1Tvlf8+bHAvjkIG98nXHQvkT6f2nfJwElzh4OdsFWD+HQA82Or5XKa6jZN2qD+lrcyoE6EjvQ9MzIeW0RHLXichuQMnEovab6FXBAcXIlNzNoqNLhxyOxTcGDnofOG8b8solDwb/cBx2Zai7yPsfaAAAAAElFTkSuQmCC"},NHnr:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("TCn+"),n=e.n(a),s=e("7+uW"),o=(e("SSNS"),{metaInfo:function(){return document.title=this.$store.meta.Name,{meta:[{charset:"utf-8"},{name:"description",content:this.$stote.meta.Description},{property:"og:description",content:this.$stote.meta.Description},{property:"twitter:description",content:this.$stote.meta.Description},{property:"og:title",content:this.$stote.meta.Name},{property:"twitter:title",content:this.$stote.meta.Name}]}}}),i={render:function(){var A=this.$createElement,t=this._self._c||A;return t("div",{attrs:{id:"app",theme:this.$store.state.isDarkMode?"dark":"light"}},[t("div",{staticClass:"container-fluid"},[t("router-view")],1)])},staticRenderFns:[]};var r=e("VU/8")(o,i,!1,function(A){e("Q5X/")},null,null).exports,c=e("/ocq");s.a.use(c.a);var g=new c.a({mode:"history",routes:[{path:"/",component:function(){return e.e(1).then(e.bind(null,"HXef"))}},{path:"/package/:package",component:function(){return e.e(0).then(e.bind(null,"sXzy"))}}],scrollBehavior:function(A,t,e){return e||{x:0,y:0}}}),p=e("Dd8w"),N=e.n(p),m=e("NYxO"),u=e("424j"),f=e("QmSG");s.a.use(m.b);var B=new m.a({state:{packages:[],packagesLength:0,lastUpdate:NaN,isDarkMode:!1,meta:{}},plugins:[Object(u.a)("isDarkMode")],mutations:{resetPackages:function(A){return A.packages=[]},pushPackages:function(A,t){return A.packages.push(t)},setPackagesLength:function(A,t){return A.packagesLength=t},setLastUpdate:function(A,t){return A.lastUpdate=t},toggleDarkMode:function(A){return A.isDarkMode=!A.isDarkMode},setMeta:function(A,t){var e=t.Name,a=t.Description;return A.meta={Name:e,Description:a}}},getters:{packages:function(A){return A.packages.sort(function(A,t){return A.birthtimeMs>t.birthtimeMs})},sections:function(A){var t={};return A.packages.forEach(function(A){A.Section in t?t[A.Section].push(A):t[A.Section]=[A]}),t}}});fetch(f.a.baseURL+"/Packages.json").then(function(A){return A.json()}).then(function(A){for(var t in B.commit("resetPackages"),A.packages)B.commit("pushPackages",N()({Package:t},A.packages[t]));B.commit("setPackagesLength",A.length),B.commit("setLastUpdate",A.lastUpdate)});var h=B;n.a.init(),s.a.prototype.$inCydia=navigator.userAgent.search(/Cydia/)>-1,s.a.prototype.$config=f.a,Object.defineProperty(s.a.prototype,"$iOSVersion",{get:function(){var A=navigator.appVersion.split("OS ");return A&&A.length>1?A[1].split(" ")[0].replace("_","."):"unknown"}}),new s.a({el:"#app",router:g,store:h,components:{App:r},template:"<App/>"})},"Q5X/":function(A,t){},QmSG:function(A,t,e){"use strict";t.a={baseURL:"",Repo:{Name:"Nguyenthanh Repo",url:"https://nguyenthanh1995.github.io/"},Social:[{Icon:e("s65f"),Name:"Github",href:"#"},{Icon:e("vDBR"),Name:"Reddit",href:"#"},{Icon:e("Ednz"),Name:"Follow NguyenThanhDev",href:"#"}]}},SSNS:function(A,t){},s65f:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAeFBMVEUAAACtx9isxtesxtejyuGsxtesx9itxtejxtysxtesxtesx9esxtisxtesx9etxtesxdevydWsxtesxtetxtisxtetxtesxtitxdmtx9aryNeuydSsxtesxterxteryNarxtesxtasxtetx9esxtirxdisxtesxtfWu4GgAAAAJ3RSTlMAJvz2A4VWQgfU+dDEpphSRx7qsKFqXuM0MSoL9NxnGL2Qi391T2waAGbdAAABO0lEQVQ4y3WS2ZqDIAyFg4rWpa51a6vdh/d/w4EzOiDS/4Z8OYeQAGQQsHLmfC5ZQC4qXouFmlc7mTWeMPAattXDq7C4hubhD+HgoVs5CifHVW/FF1oCQyJjzrpUK2nHuFySAQ1MKhWpTvN3MY7FO1f9RSo7qTYK7GG7uZEuZHRH9LENH6TvRGcBItsQCXCm13YismZ/0cndwlr6RJlafMf7Bb5SMuoxNznAvfQEX+0y1KhNsVBc9voFQkwN1mFvGCA0xJdmbZbxOHVYvf1VexC6NejHrT72y0bcWJbJdp+Vsf3pr38GtZpL6El3fAog55hMn5zLEgFayc0fphOVLDdTO12zSr8C8JdE5Iv6Zl0R9P8/UCYiDm+H1XT405OSyHAoDtoA3SBKbUNq/7EiNg1xQXvCnzVqQ539BWahPhkTJR9zAAAAAElFTkSuQmCC"},vDBR:function(A,t){A.exports="data:image/png;base64,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"}},["NHnr"]);