"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=d(function(x,l){
var c=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),g=require('@stdlib/ndarray-base-shape/dist'),u=require('@stdlib/ndarray-base-strides/dist'),q=require('@stdlib/ndarray-base-offset/dist'),f=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-ztril/dist').ndarray;function p(e){var r,a,s,t,i,v;return t=e[0],i=e[1],v=c(e[2]),r=g(t,!1),a=u(t,!1),s=u(i,!1),o(r[0],r[1],v,f(t),a[0],a[1],q(t),f(i),s[0],s[1],q(i)),i}l.exports=p
});var h=n();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
