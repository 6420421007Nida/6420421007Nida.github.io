"use strict";(self.webpackChunkmy_chakra_app_2=self.webpackChunkmy_chakra_app_2||[]).push([[7508,6403],{4411:(e,a,n)=>{var t=n(9701);function s(e){e.register(t),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},9701:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,s,r){if(n.language===t){var o=n.tokenStack=[];n.code=n.code.replace(s,(function(e){if("function"===typeof r&&!r(e))return e;for(var s,i=o.length;-1!==n.code.indexOf(s=a(t,i));)++i;return o[i]=e,s})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var s=0,r=Object.keys(n.tokenStack);!function o(i){for(var u=0;u<i.length&&!(s>=r.length);u++){var l=i[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var g=r[s],c=n.tokenStack[g],p="string"===typeof l?l:l.content,f=a(t,g),k=p.indexOf(f);if(k>-1){++s;var m=p.substring(0,k),d=new e.Token(t,e.tokenize(c,n.grammar),"language-"+t,c),h=p.substring(k+f.length),_=[];m&&_.push.apply(_,o([m])),_.push(d),h&&_.push.apply(_,o([h])),"string"===typeof l?i.splice.apply(i,[u,1].concat(_)):l.content=_}}else l.content&&o(l.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.a540e900.chunk.js.map