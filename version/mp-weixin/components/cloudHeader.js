(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/cloudHeader"],{"23b0":function(t,e,n){"use strict";n.r(e);var u=n("45d0"),i=n.n(u);for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},"45d0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{background:{type:String,default:""},height:{type:Number,default:44},haveStatusBar:{type:Boolean,default:!0},zIndex:{type:Number,default:99},isSeize:{type:Boolean,default:!0}},data:function(){return{top:0,viewHeight:0,BoundingWidth:"0px"}},created:function(){var e=t.getSystemInfoSync();this.top=e.statusBarHeight,this.viewHeight=this.top+t.upx2px(this.height);e=t.getMenuButtonBoundingClientRect();this.BoundingWidth=e.width+20+"px"}};e.default=n}).call(this,n("543d")["default"])},"6add":function(t,e,n){"use strict";n.r(e);var u=n("8f00"),i=n("23b0");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("b535");var r,o=n("f0c5"),f=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"d92e3228",null,!1,u["a"],r);e["default"]=f.exports},"8f00":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},b535:function(t,e,n){"use strict";var u=n("f561"),i=n.n(u);i.a},f561:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/cloudHeader-create-component',
    {
        'components/cloudHeader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6add"))
        })
    },
    [['components/cloudHeader-create-component']]
]);
