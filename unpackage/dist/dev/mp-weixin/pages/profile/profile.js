(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{51:function(n,e,t){"use strict";(function(n){t(5);o(t(3));var e=o(t(52));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},52:function(n,e,t){"use strict";t.r(e);var o=t(53),r=t(55);for(var i in r)"default"!==i&&function(n){t.d(e,n,(function(){return r[n]}))}(i);t(57);var u,a=t(11),c=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"60cb334c",null,!1,o["components"],u);c.options.__file="pages/profile/profile.vue",e["default"]=c.exports},53:function(n,e,t){"use strict";t.r(e);var o=t(54);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},54:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return u})),t.d(e,"recyclableRender",(function(){return i})),t.d(e,"components",(function(){return o}));var r=function(){var n=this,e=n.$createElement;n._self._c;n._isMounted||(n.e0=function(n){return this.$toast("功能正在开发中...")},n.e1=function(n){return this.$toast("功能正在开发中...")})},i=!1,u=[];r._withStripped=!0},55:function(n,e,t){"use strict";t.r(e);var o=t(56),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},56:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t(25));function i(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,o,r,i,u){try{var a=n[i](u),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(o,r)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(o,r){var i=n.apply(e,t);function a(n){u(i,o,r,a,c,"next",n)}function c(n){u(i,o,r,a,c,"throw",n)}a(void 0)}))}}var c=n.importObject("user"),s={data:function(){return{userInfo:{},metadata:[{id:1,name:"足迹",count:55,to:"/pages/index/index"},{id:2,name:"车位",count:0,to:"/pages/index/index"},{id:3,name:"消息",count:4,to:"/pages/index/index"}],bills:[{id:1,name:"钱包",icon:"gold-coin-o",to:"/subpages/wallet"},{id:2,name:"优惠券",icon:"coupon-o",to:"/subpages/coupon"},{id:3,name:"积分",icon:"discount",to:"/subpages/point/point"}],options:[{id:1,name:"我的车位",icon:"orders-o",to:"/subpages/carport-list"},{id:2,name:"我的爱车",icon:"font-o",to:"/subpages/car-list"},{id:3,name:"停车记录",icon:"completed",to:"/pages/index/index"}],showShare:!1,shareOptions:[{name:"微信",icon:"wechat",openType:"share"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]}},onLoad:function(){var n=this;return a(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.getUserInfo();case 2:case"end":return e.stop()}}),e)})))()},onReady:function(){this.$hasLogin()},methods:{getUserInfo:function(){var n=this;return a(r.default.mark((function e(){var t,i,u,a,s;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.getStorageSync("_user"),i=t.user_id,e.next=3,c.getUserInfo(i);case 3:if(u=e.sent,a=u.code,s=u.data,0==a){e.next=9;break}return n.$notify({type:"danger",message:"网络错误,获取数据失败！"}),e.abrupt("return");case 9:n.userInfo=s[0];case 10:case"end":return e.stop()}}),e)})))()},onClick:function(n){this.showShare=!0},onClose:function(){this.showShare=!1},onSelect:function(n){console.log(n.detail.name),this.onClose()}}};e.default=s}).call(this,t(38)["default"],t(1)["default"])},57:function(n,e,t){"use strict";t.r(e);var o=t(58),r=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=r.a},58:function(n,e,t){}},[[51,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/profile/profile.js.map