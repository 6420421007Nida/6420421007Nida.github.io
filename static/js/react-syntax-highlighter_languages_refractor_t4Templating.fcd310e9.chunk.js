"use strict";(self.webpackChunkmy_chakra_app_2=self.webpackChunkmy_chakra_app_2||[]).push([[2279],{921:e=>{function a(e){!function(e){function a(e,a,t){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:a,alias:t}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(t){var n=e.languages[t],s="language-"+t;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:a("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:a("=",n,s),"class-feature":a("\\+",n,s),standard:a("",n,s)}}}}})}(e)}e.exports=a,a.displayName="t4Templating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Templating.fcd310e9.chunk.js.map