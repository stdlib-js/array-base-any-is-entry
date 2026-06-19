"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var a=f(function(y,v){
var c=require('@stdlib/array-base-assert-is-accessor-array/dist'),o=require('@stdlib/array-base-resolve-getter/dist'),u=require('@stdlib/assert-has-own-property/dist');function l(r,e,t){var i,n;for(n=0;n<r.length;n++)if(i=r[n],u(i,e)&&i[e]===t)return!0;return!1}function q(r,e,t){var i,n,s;for(i=o(r),s=0;s<r.length;s++)if(n=i(r,s),u(n,e)&&n[e]===t)return!0;return!1}function g(r,e,t){return c(r)?q(r,e,t):l(r,e,t)}v.exports=g
});var h=a();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
