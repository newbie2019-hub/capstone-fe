(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0086425f"],{bb6f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row justify-content-center m-0"},[s("div",{staticClass:"col-12 col-md-11 col-lg-7 col-xl-6"},[s("div",{staticClass:"card pe-5 ps-5 pt-5 pb-4 br-20"},[s("div",{staticClass:"d-flex "},[s("div",{staticClass:"d-flex flex-column me-auto"},[t.user?s("h4",[t._v(t._s(t.msg)+", "+t._s(t.user.admininfo.last_name))]):t._e(),t._m(0)]),t._m(1)])]),s("div",{staticClass:"card mt-5 mb-4 p-5 br-20"},[t._m(2),s("div",{staticClass:"table-responsive"},[t.initialLoading&&0==t.accounts?s("b-skeleton-table",{attrs:{rows:3,columns:4,"table-props":{bordered:!0,striped:!1}}}):t._e(),s("table",{staticClass:"table table-hover"},[t._m(3),s("tbody",t._l(t.accounts,(function(e,a){return s("tr",{key:a},[0!=e.length?s("th",{staticClass:"d-flex justify-content-center",attrs:{scope:"row"}},[s("b-avatar",{attrs:{variant:"dark",src:t.imgURL+"/"+e.userinfo.image}})],1):t._e(),0!=e.length?s("td",{staticClass:"text-nowrap"},[t._v(t._s(e.userinfo.first_name)+" "+t._s(e.userinfo.last_name))]):t._e(),0!=e.length?s("td",[t._v(t._s(e.email))]):t._e(),s("td",[s("div",{staticClass:"d-flex"},[s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn me-2 btn-sm btn-purple rounded-pill btn-approve",attrs:{href:"",title:"Approve Account",disabled:t.isLoading&&t.current_id==e.id},on:{click:function(s){return s.preventDefault(),t.setStatus(e.id)}}},[t.current_id!=e.id?s("i",{staticClass:"bi bi-check2"}):t._e(),t.isLoading&&t.current_id==e.id?s("div",{staticClass:"spinner-grow text-light spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e()]),s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",attrs:{href:"",title:"Delete Account"},on:{click:function(s){s.preventDefault(),t.$bvModal.show("deleteModal"),t.id=e.id}}},[t.current_id!=e.id?s("i",{staticClass:"bi bi-trash"}):t._e(),t.isLoading&&t.current_id==e.id?s("div",{staticClass:"spinner-grow text-light spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e()])])])])})),0)])],1)])]),s("div",{staticClass:"col-11 col-md-11 col-lg-5 col-xl-6"},[s("div",{staticClass:"row justify-content-center mb-4"},[s("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-10"},[s("div",{staticClass:"card sys-primary text-white br-20 ps-4 p-3",class:"Good Morning"==t.msg?"bg-morning":"Good Afternoon"==t.msg?"bg-afternoon":"Good Evening"==t.msg?"bg-evening":""},[s("div",{staticClass:"lh-l"},[t.initialLoading?s("b-skeleton-wrapper",[s("b-skeleton",{attrs:{width:"85%"}}),s("b-skeleton",{attrs:{width:"55%"}})],1):t._e(),s("p",{staticClass:"date"},[t._v(t._s(t.date))]),s("p",{staticClass:"time"},[t._v(t._s(t.time))])],1)])])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-5"},[s("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(4),s("div",{staticClass:"summary-container"},[t.initialLoading?s("b-skeleton"):s("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.users)+" ")])],1)])]),s("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-5"},[s("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(5),s("div",{staticClass:"summary-container"},[t.initialLoading?s("b-skeleton"):s("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.post)+" ")])],1)])])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-5"},[s("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(6),s("div",{staticClass:"summary-container"},[t.initialLoading?s("b-skeleton"):s("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.unit)+" ")])],1)])]),s("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-5"},[s("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(7),s("div",{staticClass:"summary-container"},[t.initialLoading?s("b-skeleton"):s("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.org)+" ")])],1)])])])])]),s("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary",size:"sm",disabled:t.isLoading},on:{click:function(t){return a()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{size:"sm",variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.removeAccount.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[s("p",{staticClass:"my-4"},[t._v("Are you sure you want to delete this account?")])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt-3 lh-1 -1"},[t._v("It's good to know you're here. "),s("br"),t._v("Have a great day")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cardimg"},[a("img",{staticClass:"img-fluid",attrs:{src:s("cf25"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex"},[s("div",{staticClass:"d-flex flex-column me-auto"},[s("h5",[t._v("Pending Accounts")]),s("p",{staticClass:"mb-4"},[s("small",[t._v("Here are the list of recent accounts ")])])]),s("div",{staticClass:"d-flex"},[s("a",{staticClass:"text-decoration-none text-violet cursor-pointer ",attrs:{href:"accounts"}},[t._v("View All")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Name")]),s("th",{attrs:{scope:"col"}},[t._v("Email")]),s("th",{attrs:{scope:"col"}},[t._v("Action")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mb-3"},[s("i",{staticClass:"bi bi-person-circle me-2 bi-5x"}),s("h6",{staticClass:"mt-2"},[t._v("ACCOUNTS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex mb-3 flex-column justify-content-center align-items-center"},[s("i",{staticClass:"bi bi-receipt me-2 bi-5x"}),s("h6",{staticClass:"mt-2"},[t._v("POSTS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mb-3"},[s("i",{staticClass:"bi bi-diagram-2 me-2 bi-5x"}),s("h6",{staticClass:"mt-2"},[t._v("DEPARTMENT")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex mb-3 flex-column justify-content-center align-items-center"},[s("i",{staticClass:"bi bi-grid me-2 bi-5x"}),s("h6",{staticClass:"mt-2"},[t._v("ORGANIZATION")])])}],n=s("5530"),r=s("1da1"),c=(s("96cf"),s("2f62")),o=s("c1df"),l=s.n(o),d={data:function(){return{date:"",time:"",current_id:"",id:"",msg:"Good Day ",isLoading:!1,initialLoading:!1}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.initialLoading=!0,document.title="Welcome to Dashboard",t.$store.dispatch("dashboard/recentAccounts"),t.$store.dispatch("dashboard/summary"),setInterval((function(){t.currentdate(),t.currenttime(),t.greetingMsg()}),1e3),t.initialLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("dashboard",["accounts","summary"])),methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])("account",["approveAccount"])),{},{currentdate:function(){var t=new Date;this.date=l()(t).format(" MMMM D[,] YYYY")},currenttime:function(){var t=new Date;this.time=l()(t).format("hh:mm:ss A")},removeAccount:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("dashboard/removeAccount",t.id);case 3:s=e.sent,200==s.status?(t.isLoading=!1,t.id="",t.$toast.success("Account removed successfully"),t.$bvModal.hide("deleteModal")):(t.id="",t.isLoading=!1,t.$toast.error("Something went wrong"),t.$bvModal.hide("deleteModal"));case 5:case"end":return e.stop()}}),e)})))()},setStatus:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.isLoading=!0,e.current_id=t,s.next=4,e.approveAccount(t);case 4:a=s.sent,200==a.status?e.$toast.success("Account Approved \nAn email has been sent to the user."):e.$toast.error("Something went wrong"),e.isLoading=!1,e.current_id="";case 8:case"end":return s.stop()}}),s)})))()},greetingMsg:function(){var t=new Date,e=t.getHours();this.msg=e<12?"Good Morning":e<18?"Good Afternoon":"Good Evening"}})},u=d,m=s("2877"),v=Object(m["a"])(u,a,i,!1,null,null,null);e["default"]=v.exports},cf25:function(t,e,s){t.exports=s.p+"img/lightning.2fa408c0.svg"}}]);
//# sourceMappingURL=chunk-0086425f.b34c6559.js.map