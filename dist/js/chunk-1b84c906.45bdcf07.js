(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b84c906"],{cf25:function(t,s,e){t.exports=e.p+"img/lightning.2fa408c0.svg"},dc3f:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"row justify-content-center m-0"},[e("div",{staticClass:"col-11 col-md-11 col-lg-7 col-xl-6"},[e("div",{staticClass:"card  pe-5 ps-5 pt-5 pb-4 br-20"},[e("div",{staticClass:"d-flex "},[e("div",{staticClass:"d-flex flex-column me-auto"},[t.user?e("h4",[t._v(t._s(t.msg)+", "+t._s(t.user.userinfo.last_name))]):e("b-skeleton",{attrs:{animation:"throb",width:"95%"}}),t._m(0)],1),t._m(1)])]),t.$can("osa_permissions")?e("div",{staticClass:"card mt-4 pe-5 ps-5 pt-5 pb-4 mb-4 br-20"},[t._m(2),e("div",{staticClass:"table-responsive"},[t.initialLoading?e("b-skeleton-table",{attrs:{rows:4,columns:4,"table-props":{bordered:!0,striped:!1}}}):e("table",{staticClass:"table table-hover"},[e("thead",[e("tr",[e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Post")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("User")]),e("th",{attrs:{scope:"col"}},[t._v("Status")])])]),e("tbody",t._l(t.post_summary,(function(s,a){return e("tr",{key:a,staticClass:"cursor-pointer",on:{click:function(e){e.preventDefault(),t.viewPost=s,t.$bvModal.show("viewPostModal")}}},[e("td",[t._v(t._s(s.postcontent.title))]),e("td",[t._v(t._s(s.useraccount.userinfo.first_name)+" "+t._s(s.useraccount.userinfo.last_name))]),e("td",[e("small",[e("b-badge",{staticClass:"rounded-pill",class:"Approved"==s.status?"bg-success":"bg-danger"},[t._v(t._s(s.status))])],1)])])})),0)])],1)]):e("div",{staticClass:"card mt-4 mb-4 p-5 br-20"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"row w-100 flex-column me-auto"},[t.user?e("h5",[t._v(t._s("Organization"==t.user.type?"Organization":"Department")+" Members")]):e("b-skeleton",{attrs:{animation:"throb",width:"65%"}}),t.user?e("p",{staticClass:"mb-4"},[e("small",[t._v("Latest members of your "+t._s("Organization"==t.user.type?"organization":"department")+" ")])]):e("b-skeleton",{attrs:{animation:"throb",width:"90%"}})],1),t._m(3)]),e("div",{staticClass:"table-responsive"},[t.initialLoading&&0==t.accounts?e("b-skeleton-table",{attrs:{rows:4,columns:4,"table-props":{bordered:!0,striped:!1}}}):t._e(),e("table",{staticClass:"table table-hover"},[t._m(4),e("tbody",t._l(t.accounts,(function(s,a){return e("tr",{key:a},[0!=s.length?e("th",{staticClass:"d-flex justify-content-center",attrs:{scope:"row"}},[s.user.userinfo.image?e("b-avatar",{attrs:{variant:"dark",src:t.imgURL+"/"+s.user.userinfo.image}}):e("b-avatar",{attrs:{variant:"dark"}})],1):t._e(),0!=s.length?e("td",{staticClass:"text-nowrap"},[t._v(t._s(s.user.userinfo.first_name)+" "+t._s(s.user.userinfo.last_name))]):t._e(),0!=s.length?e("td",[t._v(t._s(s.user.userinfo.role.role))]):t._e(),0!=s.length?e("td",[t._v(t._s(s.user.email))]):t._e()])})),0)])],1)])]),e("div",{staticClass:"col-11 col-md-11 col-lg-5 col-xl-6"},[e("div",{staticClass:"row justify-content-center mb-4"},[e("div",{staticClass:"col-sm-12 col-md-12 col-lg-12 col-xl-12"},[e("div",{staticClass:"card sys-primary text-white br-20 ps-4 p-3"},[e("div",{staticClass:"lh-l"},[e("p",{staticClass:"date"},[t._v(t._s(t.date))]),e("p",{staticClass:"time"},[t._v(t._s(t.time))])])])])]),t.$can("osa_permissions")?e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-6"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(5),e("div",{staticClass:"summary-container"},[e("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.org)+" ")])])])]),e("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-6"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(6),e("div",{staticClass:"summary-container"},[e("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.post)+" ")])])])]),e("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-6"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(7),e("div",{staticClass:"summary-container"},[e("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.faqs)+" ")])])])]),e("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-6"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(8),e("div",{staticClass:"summary-container"},[e("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.tel)+" ")])])])])]):e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-6"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(9),e("div",{staticClass:"summary-container"},[e("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.members)+" ")])])])]),e("div",{staticClass:"col-6 col-md-6 col-lg-6 col-xl-6"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(10),e("div",{staticClass:"summary-container"},[e("p",{staticClass:"summary-text"},[t._v(" "+t._s(t.summary.post)+" ")])])])]),e("div",{staticClass:"col-12 col-md-12 col-lg-12 col-xl-12"},[e("div",{staticClass:"card pe-5 ps-5 pb-5 pt-4 br-20 mb-4"},[t._m(11),e("div",{staticClass:"table-responsive mt-3"},[t.initialLoading?e("b-skeleton-table",{attrs:{rows:5,columns:4,"table-props":{bordered:!1,striped:!0}}}):e("table",{staticClass:"table table-hover"},[e("thead",[e("tr",[e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("ID")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Activity")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Event Type")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date and Time")])])]),e("tbody",[t._l(t.logsummary,(function(s,a){return e("tr",{key:a,staticClass:"cursor-pointer"},[e("th",[t._v(t._s(a+1))]),e("td",[t._v(t._s(s.log_name))]),e("td",[e("small",[e("b-badge",{attrs:{variant:t.badgeEvent(s.event),pill:""}},[t._v(t._s(s.event))])],1)]),e("td",[t._v(t._s(t._f("moment")(s.created_at)))])])})),0==t.logsummary?e("tr",[e("td",{staticClass:"text-center pt-3 pb-3",attrs:{colspan:"6"}},[t._v("No data available")])]):t._e()],2)])],1)])])])])]),e("b-modal",{attrs:{id:"viewPostModal",scrollable:"",centered:"",title:t.viewPost.postcontent.title},scopedSlots:t._u([{key:"modal-footer",fn:function(s){var a=s.cancel;return[e("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Close ")])]}}])},[e("div",{domProps:{innerHTML:t._s(t.viewPost.postcontent.content)}}),e("p",{staticClass:"mt-2"},[e("small",[t._v("Date Posted: "+t._s(t._f("moment")(t.viewPost.created_at)))])]),e("p",{staticClass:"mb-3"},[e("small",[t._v("Views: "+t._s(t.viewPost.views))])])])],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",{staticClass:"mt-3 lh-1 -1"},[t._v("It's good to know you're here. "),e("br"),t._v("Have a great day")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cardimg"},[a("img",{staticClass:"img-fluid",attrs:{src:e("cf25"),alt:""}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row w-100 flex-column me-auto"},[e("h5",[t._v("Latest Post")]),e("p",{staticClass:"mb-4"},[e("small",[t._v("Latest post of the organizations")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex"},[e("a",{staticClass:"text-decoration-none text-violet cursor-pointer ",attrs:{href:"members"}},[t._v("View")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}}),e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Name")]),e("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Position")]),e("th",{attrs:{scope:"col"}},[t._v("Email")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mb-3"},[e("i",{staticClass:"bi bi-person-circle me-2 bi-5x"}),e("h6",{staticClass:"mt-2"},[t._v("ORGANIZATIONS")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex mb-3 flex-column justify-content-center align-items-center"},[e("i",{staticClass:"bi bi-receipt me-2 bi-5x"}),e("h6",{staticClass:"mt-2"},[t._v("POSTS")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex mb-3 flex-column justify-content-center align-items-center"},[e("i",{staticClass:"bi bi-receipt me-2 bi-5x"}),e("h6",{staticClass:"mt-2"},[t._v("FAQs")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex mb-3 flex-column justify-content-center align-items-center"},[e("i",{staticClass:"bi bi-receipt me-2 bi-5x"}),e("h6",{staticClass:"mt-2"},[t._v("Telephone")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex flex-column justify-content-center align-items-center mb-3"},[e("i",{staticClass:"bi bi-person-circle me-2 bi-5x"}),e("h6",{staticClass:"mt-2"},[t._v("MEMBERS")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex mb-3 flex-column justify-content-center align-items-center"},[e("i",{staticClass:"bi bi-receipt me-2 bi-5x"}),e("h6",{staticClass:"mt-2"},[t._v("POSTS")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"d-flex flex-column me-auto mt-2"},[e("h5",[t._v("Activity Logs")]),e("p",{staticClass:"mb-4"},[e("small",[t._v("Listed below are latest logs of your activities")])])])}],r=e("5530"),c=e("1da1"),l=(e("96cf"),e("2f62")),n=e("c1df"),o=e.n(n),m={data:function(){return{msg:"Good Day",viewPost:{postcontent:{title:"",content:""}},time:"",date:"",initialLoading:!1,isLoading:!1,current_id:""}},filters:{moment:function(t){return o()(t).format("MMM D, YYYY, h:mm a")}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.initialLoading=!0,s.next=3,t.checkAuthUser();case 3:return t.$can("osa_permissions")?t.$store.dispatch("userdashboard/getOSAPostSummary"):t.$store.dispatch("userdashboard/recentAccounts"),t.$store.dispatch("userdashboard/summary"),s.next=7,t.$store.dispatch("logs/summary");case 7:setInterval((function(){t.currentdate(),t.currenttime(),t.greetingMsg()}),1e3),document.title="User Dashboard - Touchless Information Management",t.initialLoading=!1;case 10:case"end":return s.stop()}}),s)})))()},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["c"])("auth",["user"])),Object(l["c"])("logs",["logsummary"])),Object(l["c"])("userdashboard",["accounts","summary","post_summary"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["b"])("auth",["checkAuthUser"])),{},{badgeEvent:function(t){switch(t){case"created":return"success";case"deleted":return"danger";case"updated":return"primary";case"login success":return"success";case"login failed":return"danger";default:break}},currentdate:function(){var t=new Date;this.date=o()(t).format(" MMMM D[,] YYYY")},currenttime:function(){var t=new Date;this.time=o()(t).format("hh:mm:ss A")},greetingMsg:function(){var t=new Date,s=t.getHours();this.msg=s<12?"Good Morning":s<18?"Good Afternoon":"Good Evening"}})},d=m,u=e("2877"),v=Object(u["a"])(d,a,i,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-1b84c906.45bdcf07.js.map