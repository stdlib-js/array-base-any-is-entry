"use strict";var f=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=f(function(y,v){
var c=require('@stdlib/array-base-assert-is-accessor-array/dist'),o=require('@stdlib/array-base-resolve-getter/dist'),u=require('@stdlib/assert-has-own-property/dist');function l(r,e,n){var i,t;for(t=0;t<r.length;t++)if(i=r[t],u(i,e)&&i[e]===n)return!0;return!1}function q(r,e,n){var i,t,s;for(i=o(r),s=0;s<r.length;s++)if(t=i(r,s),u(t,e)&&t[e]===n)return!0;return!1}function g(r,e,n){return c(r)?q(r,e,n):l(r,e,n)}v.exports=g
});var h=a();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
