(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217ffc"],{c8b3:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container pe-sm-0 ps-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[s("div",{staticClass:"card pe-5 ps-5 pb-4 pt-5 mb-4"},[e._m(0),s("div",{staticClass:"row justify-content-end mb-3"},[s("div",{staticClass:"col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4"},[s("b-input-group",[s("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filterLogs,callback:function(t){e.filterLogs=t},expression:"filterLogs"}}),s("b-input-group-append",[s("b-button",{staticClass:"rounded-0 btn-purple",attrs:{filter:!e.filterLogs},on:{click:function(t){e.filterLogs=""}}},[e._v("Clear")])],1)],1)],1)]),s("div",{staticClass:"table-responsive mt-3"},[s("b-table",{attrs:{id:"logstable",items:e.logs,filter:e.filterLogs,"sort-icon-left":"","filter-included-fields":["user","event"],"show-empty":"",fields:e.logsFields,"per-page":10,"current-page":e.currentLogsPage,striped:""},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"table-caption",fn:function(){return[e._v("Users activity logs")]},proxy:!0},{key:"cell(user)",fn:function(t){return[s("div",{staticClass:"text-nowrap cursor-pointer",on:{click:function(s){e.selectedLog=t.item,e.$bvModal.show("logInfoModal")}}},[e._v(" "+e._s(t.item.user.userinfo.first_name)+" "+e._s(t.item.user.userinfo.last_name)+" ")])]}},{key:"cell(activity)",fn:function(t){return[s("div",{staticClass:"text-nowrap cursor-pointer",on:{click:function(s){e.selectedLog=t.item,e.$bvModal.show("logInfoModal")}}},[e._v(" "+e._s(t.item.log_name)+" ")])]}},{key:"cell(event_type)",fn:function(t){return[s("small",[s("b-badge",{attrs:{variant:e.badgeEvent(t.item.event),pill:""}},[e._v(e._s(t.item.event))])],1)]}},{key:"cell(date_and_time)",fn:function(t){return[e._v(" "+e._s(e._f("moment")(t.item.created_at))+" ")]}}])})],1),s("div",{staticClass:"d-flex justify-content-end"},[s("b-pagination",{staticClass:"mt-1",attrs:{"total-rows":e.logs.length,"per-page":10,"aria-controls":"logstable"},model:{value:e.currentLogsPage,callback:function(t){e.currentLogsPage=t},expression:"currentLogsPage"}})],1)])])])]),e.selectedLog.user?s("b-modal",{attrs:{id:"logInfoModal",scrollable:"",centered:"",title:"Log Info"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var a=t.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(e){return a()}}},[e._v("Close")])]}}],null,!1,2708092184)},[s("p",{},[s("span",{staticClass:"fw-bold"},[e._v("Activity")]),e._v(": "+e._s(e.selectedLog.log_name))]),s("p",{},[s("span",{staticClass:"fw-bold"},[e._v("User")]),e._v(": "+e._s(e.selectedLog.user.userinfo.first_name)+" "+e._s(e.selectedLog.user.userinfo.last_name))]),s("p",{},[s("span",{staticClass:"fw-bold"},[e._v("Event Type")]),e._v(": "),s("small",[s("b-badge",{attrs:{variant:e.badgeEvent(e.selectedLog.event),pill:""}},[e._v(e._s(e.selectedLog.event))])],1)]),"deleted"==e.selectedLog.event?s("div",{},[s("h6",{staticClass:"mt-3 fw-bold mb-2"},[e._v("Deleted Data")]),e._l(e.selectedLog.properties.old,(function(t,a,n){return s("div",{key:n},[s("p","created_at"==a||"updated_at"==a?[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(e._f("moment")(t)))]:[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(t))])])}))],2):e._e(),"login failed"==e.selectedLog.event||"logout"==e.selectedLog.event||"login success"==e.selectedLog.event?s("div",{},[s("h6",{staticClass:"fw-bold mt-1 mb-2"},[e._v("User IP: "),s("span",{staticClass:"fw-normal"},[e._v(e._s(e.selectedLog.properties.ip))])])]):e._e(),"deleted account"==e.selectedLog.event?s("div",{},[s("h6",{staticClass:"mt-3 fw-bold mb-2"},[e._v("Deleted Account")]),e._l(e.selectedLog.properties,(function(t,a,n){return s("div",{key:n},[s("p","created_at"==a||"updated_at"==a?[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(e._f("moment")(t)))]:[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(t))])])}))],2):e._e(),"created"==e.selectedLog.event?s("div",{},[s("h6",{staticClass:"mt-3 fw-bold mb-2"},[e._v("Data Created")]),e._l(e.selectedLog.properties.attributes,(function(t,a,n){return s("div",{key:n},[s("p","created_at"==a||"updated_at"==a?[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(e._f("moment")(t)))]:[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(t))])])}))],2):e._e(),"updated"==e.selectedLog.event?s("div",{},[s("h6",{staticClass:"mt-3 fw-bold mb-2"},[e._v("New Data")]),e._l(e.selectedLog.properties.attributes,(function(t,a,n){return s("div",{key:n},[s("p","created_at"==a||"updated_at"==a?[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(e._f("moment")(t)))]:[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(t))])])})),s("h6",{staticClass:"mt-3 fw-bold mb-2"},[e._v("Old Data")]),e._l(e.selectedLog.properties.old,(function(t,a){return s("div",{key:a.id},[s("p","created_at"==a||"updated_at"==a?[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(e._f("moment")(t)))]:[s("span",{staticClass:"fw-bold"},[e._v(e._s(a)+":")]),e._v(" "+e._s(t))])])}))],2):e._e()]):e._e()],1)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex flex-column me-auto mt-2"},[s("h5",[e._v("Activity Logs")]),s("p",{staticClass:"mb-4"},[s("small",[e._v("Listed below are the activity of the users")])])])}],l=s("5530"),o=s("1da1"),i=(s("96cf"),s("2f62")),r=s("c1df"),c=s.n(r),d=(s("2ef0"),{filters:{moment:function(e){return c()(e).format("MMMM D, YYYY, h:mm a")}},data:function(){return{initialLoading:!1,selectedLog:{user:{userinfo:{first_name:"",last_name:""}},properties:{old:{data:""},attributes:{data:""}}},search:"",isSearching:!1,currentLogsPage:1,filterLogs:null,logsFields:[{key:"user"},{key:"activity"},{key:"event_type"},{key:"description"},{key:"date_and_time"}]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.initialLoading=!0,document.title="Activity Logs - Management",t.next=4,e.$store.dispatch("logs/getAllActivityLogs");case 4:e.initialLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},methods:{badgeEvent:function(e){switch(e){case"created":return"success";case"deleted account":return"danger";case"deleted":return"danger";case"updated":return"primary";case"login success":return"success";case"login failed":return"danger";default:break}},onFiltered:function(e){this.totalRows=e.length,this.currentLogsPage=1},getLogs:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.length>0&&void 0!==e[0]?e[0]:1,s.next=3,t.$store.dispatch("logs/getAllActivityLogs",a);case 3:case"end":return s.stop()}}),s)})))()}},computed:Object(l["a"])({},Object(i["c"])("logs",["logs"]))}),u=d,_=s("2877"),f=Object(_["a"])(u,a,n,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d217ffc.838eb7ee.js.map