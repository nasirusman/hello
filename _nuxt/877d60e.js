(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{180:function(t,n,e){var content=e(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(74).default)("6759f5ab",content,!0,{sourceMap:!1})},185:function(t,n,e){var map={"./doraemon.jpg":186,"./mr bean.jpg":187};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=185},186:function(t,n,e){t.exports=e.p+"img/doraemon.4f16604.jpg"},187:function(t,n,e){t.exports=e.p+"img/mr bean.7c5daae.jpg"},188:function(t,n,e){"use strict";e(180)},189:function(t,n,e){var o=e(73)(!1);o.push([t.i,".red{color:red}",""]),t.exports=o},192:function(t,n,e){"use strict";e.r(n);var o={layout:"main-page",head:function(){},data:function(){return{image:"mr bean"}},methods:{hello:function(){window.alert("Hello, World !!!")},changeImage:function(data){this.image=data}}},r=(e(188),e(34)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("h1",{staticClass:"red"},[t._v("Halo Dunia")]),t._v(" "),o("img",{staticClass:"img-thumbnail",attrs:{src:e(185)("./"+t.image+".jpg")}}),o("br"),t._v(" "),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",size:"sm"},on:{click:function(n){return t.changeImage("mr bean")}}},[t._v("Mr Bean")]),t._v(" "),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",size:"sm"},on:{click:function(n){return t.changeImage("doraemon")}}},[t._v("Doraemon")]),t._v(" "),o("b-button",{staticClass:"mt-2",attrs:{variant:"success",size:"sm"},on:{click:t.hello}},[t._v("Hello")])],1)}),[],!1,null,null,null);n.default=component.exports}}]);