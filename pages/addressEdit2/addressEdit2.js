(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addressEdit2/addressEdit2"],{"144b":function(e,n,t){"use strict";(function(e){t("34c8");r(t("66fd"));var n=r(t("43c1"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"43c1":function(e,n,t){"use strict";t.r(n);var r=t("ba4e"),o=t("6a11");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("9115");var u,i=t("f0c5"),s=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=s.exports},"595f":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a")),o=(t("6ee4"),u(t("2726")),t("b475"));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=a();if(n&&n.has(e))return n.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(t,o,u):t[o]=e[o]}return t.default=e,n&&n.set(e,t),t}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,n,t,r,o,a,u){try{var i=e[a](u),s=i.value}catch(c){return void t(c)}i.done?n(s):Promise.resolve(s).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function u(e){s(a,r,o,u,i,"next",e)}function i(e){s(a,r,o,u,i,"throw",e)}u(void 0)}))}}var d={data:function(){return{show:!1,title:"新增收货地址",form:{consignee:"",phone:void 0,gender:0,detail:"",label:"公司"},labelList:["无","公司","家","学校"],id:void 0,activeIndex:0,windowheight:0}},onLoad:function(n){var t=this;console.log("地址ID"+n.id),this.id=n.id,(0,o.addressFindOneApi)(n.id).then((function(n){if(0!==n.code)return e.$showMsg(n.msg);t.form=n.data}));var r=this;console.log("init"),e.getSystemInfo({success:function(e){console.log(e),r.windowheight=e.windowHeight}})},computed:{},created:function(){},mounted:function(){this.labelOnload()},methods:{cancel:function(){this.show=!1},labelOnload:function(){var e=this.labelList;for(var n in e)console.log(n,e[n]),this.form.label==e[n]&&(this.activeIndex=n)},confirm:function(){var n=this;return c(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(n.id),t.next=3,(0,o.deleteAddressApi)({id:n.id});case 3:if(a=t.sent,0!==a.code){t.next=8;break}e.navigateBack({delta:1}),t.next=9;break;case 8:return t.abrupt("return",e.$showMsg(a.msg));case 9:case"end":return t.stop()}}),t)})))()},saveAddress:function(){var n=this;return c(r.default.mark((function t(){var a,u,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=n.form,a.consignee){t.next=3;break}return t.abrupt("return",e.$showMsg("请输入联系人",1500,"none"));case 3:if(a.phone){t.next=5;break}return t.abrupt("return",e.$showMsg("请输入手机号",1500,"none"));case 5:if(a.detail){t.next=7;break}return t.abrupt("return",e.$showMsg("请输入收货地址",1500,"none"));case 7:if(u=/^1[3|4|5|7|8][0-9]{9}$/,u.test(a.phone)){t.next=10;break}return t.abrupt("return",e.$showMsg("手机号不合法",1500,"none"));case 10:if(i={},!n.id){t.next=17;break}return t.next=14,(0,o.updateAddressApi)(n.form);case 14:i=t.sent,t.next=20;break;case 17:return t.next=19,(0,o.addAddressApi)(n.form);case 19:i=t.sent;case 20:if(0!==i.code){t.next=24;break}e.navigateBack({delta:1}),t.next=25;break;case 24:return t.abrupt("return",e.$showMsg(i.msg));case 25:case"end":return t.stop()}}),t)})))()},deleteAddress:function(){this.show=!0}}};n.default=d}).call(this,t("543d")["default"])},"6a11":function(e,n,t){"use strict";t.r(n);var r=t("595f"),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},9115:function(e,n,t){"use strict";var r=t("93b4"),o=t.n(r);o.a},"93b4":function(e,n,t){},ba4e:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"1230"))},uModal:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(t.bind(null,"1763"))}},o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.form.gender="1"},e.e1=function(n){e.form.gender="0"},e.e2=function(n,t,r){var o=arguments[arguments.length-1].currentTarget.dataset,a=o.eventParams||o["event-params"];t=a.item,r=a.index;e.form.label=t,e.activeIndex=r})},a=[]}},[["144b","common/runtime","common/vendor"]]]);