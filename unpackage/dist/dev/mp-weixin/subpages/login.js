(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpages/login"],{119:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(120));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},120:function(e,n,t){"use strict";t.r(n);var r=t(121),u=t(123);for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t(125);var i,o=t(11),c=Object(o["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,"4278492c",null,!1,r["components"],i);c.options.__file="subpages/login.vue",n["default"]=c.exports},121:function(e,n,t){"use strict";t.r(n);var r=t(122);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},122:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return i})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=!1,i=[];u._withStripped=!0},123:function(e,n,t){"use strict";t.r(n);var r=t(124),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},124:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t(25));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,u,a,i){try{var o=e[a](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,u)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var a=e.apply(n,t);function o(e){i(a,r,u,o,c,"next",e)}function c(e){i(a,r,u,o,c,"throw",e)}o(void 0)}))}}var c=e.importObject("user"),s={methods:{toLogin:function(){var e=this;return o(u.default.mark((function n(){var t,a,i,o,s;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getUserInfo();case 2:if(t=n.sent,t){n.next=5;break}return n.abrupt("return");case 5:return e.$toast.loading({message:"登录中...",forbidClick:!0,duration:0}),n.next=8,r.login({provider:"weixin"});case 8:if(a=n.sent,i=a[1]||{},o=i.errMsg,s=i.code,"login:ok"!=o){n.next=22;break}return n.next=13,c.login(s,t);case 13:if(a=n.sent,0==a.code){n.next=17;break}return e.$toast.fail("登录失败！"),n.abrupt("return");case 17:r.setStorageSync("_user",{user_id:a.user_id,user_info:t}),e.$toast.success("登录成功！"),r.switchTab({url:"/pages/index/index"}),n.next=23;break;case 22:e.$toast.fail("获取用户信息失败，请稍后重试！");case 23:case"end":return n.stop()}}),n)})))()},getUserInfo:function(){return o(u.default.mark((function e(){var n,t,a,i;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.getUserProfile({desc:"获取用户信息"});case 2:return n=e.sent,t=n[1].userInfo,a=t.avatarUrl,i=t.nickName,e.abrupt("return",{avatar:a,nickname:i});case 5:case"end":return e.stop()}}),e)})))()}}};n.default=s}).call(this,t(38)["default"],t(1)["default"])},125:function(e,n,t){"use strict";t.r(n);var r=t(126),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},126:function(e,n,t){}},[[119,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/subpages/login.js.map