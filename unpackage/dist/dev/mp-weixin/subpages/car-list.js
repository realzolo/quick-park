(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpages/car-list"],{70:function(n,e,t){"use strict";(function(n){t(5);r(t(3));var e=r(t(71));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},71:function(n,e,t){"use strict";t.r(e);var r=t(72),o=t(74);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);t(76);var u,a=t(11),c=Object(a["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"459c62f8",null,!1,r["components"],u);c.options.__file="subpages/car-list.vue",e["default"]=c.exports},72:function(n,e,t){"use strict";t.r(e);var r=t(73);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},73:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return r}));var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.__map(n.cars,(function(e,t){var r=n.__get_orig(e),o=JSON.stringify(e);return{$orig:r,g0:o}})));n.$mp.data=Object.assign({},{$root:{l0:t}})},i=!1,u=[];o._withStripped=!0},74:function(n,e,t){"use strict";t.r(e);var r=t(75),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},75:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{cars:[{id:1,plateNo:"陕A666666",owner:"李秀明",phone:"18391563384"},{id:2,plateNo:"陕A777777",owner:"李秀明",phone:"18391563384"},{id:3,plateNo:"陕A888888",owner:"李秀明",phone:"18391563384"}]}},onLoad:function(n){var e=n.data;if(e){var t=JSON.parse(e),r=t.operation,o=t.car;if("save"===r)return o.id=this.cars.length+1,void this.cars.push(o);"delete"===r&&(this.cars=this.cars.filter((function(n){return n.id!=o.id})))}},methods:{saveOrDelete:function(n){console.log(n)},toEditPage:function(){n.navigateTo({url:"/subpages/caredit"})}}};e.default=t}).call(this,t(1)["default"])},76:function(n,e,t){"use strict";t.r(e);var r=t(77),o=t.n(r);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);e["default"]=o.a},77:function(n,e,t){}},[[70,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/subpages/car-list.js.map