(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6010"],{7166:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"card p-4 ps-5 pe-5 pt-5 mb-3"},[t._m(0),a("div",{staticClass:"table-responsive mt-3"},[0==t.reviews.data?a("div",[t._v("No reviews found")]):t._e(),t.initialLoading?a("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):t._e(),t.initialLoading?t._e():a("table",{staticClass:"table table-hover"},[a("caption"),t._m(1),a("tbody",t._l(t.reviews.data,(function(e,s){return a("tr",{key:s},[0!=t.reviews.data?a("td",[t._v(t._s(e.emoji))]):t._e(),a("td",[t._v(t._s(e.suggestion))]),a("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("moment")(e.created_at)))])])})),0)])],1),t.reviews.data?a("div",{staticClass:"row mt-3"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:t.reviews},on:{"pagination-change-page":t.getReview}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"d-flex flex-column mt-2"},[a("h5",{staticClass:"text-violet"},[t._v("Users Review")]),a("p",[t._v("Reviews and suggestions from the users")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Review")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Suggestion(s)")]),a("th",{attrs:{scope:"col"}},[t._v("Date Created")])])])}],i=a("1da1"),r=a("5530"),o=(a("96cf"),a("2f62")),c=a("c1df"),l=a.n(c),v={filters:{moment:function(t){return l()(t).format("MMMM D, YYYY, h:mm a")}},data:function(){return{initialLoading:!1}},computed:Object(r["a"])({},Object(o["c"])("review",["reviews"])),mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="User Review",t.initialLoading=!0,a=1,e.next=5,t.$store.dispatch("review/getReview",a);case 5:t.initialLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},methods:{emoji:function(t){return"sad"==t?"sad.png":"happy"==t?"laugh.png":"angry"==t?"angry.png":void 0},getReview:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,a.next=3,e.$store.dispatch("review/getReview",s);case 3:case"end":return a.stop()}}),a)})))()}}},d=v,u=a("2877"),p=Object(u["a"])(d,s,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d6010.2e26c7d5.js.map