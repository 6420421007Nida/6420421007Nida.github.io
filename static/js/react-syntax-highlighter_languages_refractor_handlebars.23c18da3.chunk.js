"use strict";(self.webpackChunkmy_chakra_app_2=self.webpackChunkmy_chakra_app_2||[]).push([[6804,6403],{6075:(e,a,n)=>{var t=n(9701);function r(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=r,r.displayName="handlebars",r.aliases=["hbs"]},9701:e=>{function a(e){!function(e){function a(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,t,r,s){if(n.language===t){var o=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof s&&!s(e))return e;for(var r,i=o.length;-1!==n.code.indexOf(r=a(t,i));)++i;return o[i]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,t){if(n.language===t&&n.tokenStack){n.grammar=e.languages[t];var r=0,s=Object.keys(n.tokenStack);!function o(i){for(var l=0;l<i.length&&!(r>=s.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=s[r],p=n.tokenStack[c],g="string"===typeof u?u:u.content,f=a(t,c),k=g.indexOf(f);if(k>-1){++r;var d=g.substring(0,k),b=new e.Token(t,e.tokenize(p,n.grammar),"language-"+t,p),h=g.substring(k+f.length),m=[];d&&m.push.apply(m,o([d])),m.push(b),h&&m.push.apply(m,o([h])),"string"===typeof u?i.splice.apply(i,[l,1].concat(m)):u.content=m}}else u.content&&o(u.content)}return i}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.23c18da3.chunk.js.map