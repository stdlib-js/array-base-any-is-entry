// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";function s(s,n,i){return r(s)?function(r,s,n){var i,a,o;for(i=t(r),o=0;o<r.length;o++)if(a=i(r,o),e(a,s)&&a[s]===n)return!0;return!1}(s,n,i):function(r,t,s){var n,i;for(i=0;i<r.length;i++)if(n=r[i],e(n,t)&&n[t]===s)return!0;return!1}(s,n,i)}export{s as default};
//# sourceMappingURL=index.mjs.map
