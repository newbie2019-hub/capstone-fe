(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc5f20b8"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,a){var s=a("c6b6"),n=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},"841c":function(t,e,a){"use strict";var s=a("d784"),n=a("825a"),r=a("1d80"),c=a("129f"),o=a("14c3");s("search",1,(function(t,e,a){return[function(e){var a=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a):new RegExp(e)[t](String(a))},function(t){var s=a(e,t,this);if(s.done)return s.value;var r=n(t),i=String(this),l=r.lastIndex;c(l,0)||(r.lastIndex=0);var d=o(r,i);return c(r.lastIndex,l)||(r.lastIndex=l),null===d?-1:d.index}]}))},9263:function(t,e,a){"use strict";var s=a("ad6d"),n=a("9f7f"),r=a("5692"),c=RegExp.prototype.exec,o=r("native-string-replace",String.prototype.replace),i=c,l=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),d=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],v=l||u||d;v&&(i=function(t){var e,a,n,r,i=this,v=d&&i.sticky,p=s.call(i),f=i.source,_=0,g=t;return v&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(f="(?: "+f+")",g=" "+g,_++),a=new RegExp("^(?:"+f+")",p)),u&&(a=new RegExp("^"+f+"$(?!\\s)",p)),l&&(e=i.lastIndex),n=c.call(v?a:i,g),v?n?(n.input=n.input.slice(_),n[0]=n[0].slice(_),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:l&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),u&&n&&n.length>1&&o.call(n[0],a,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(n[r]=void 0)})),n}),t.exports=i},"9f7f":function(t,e,a){"use strict";var s=a("d039");function n(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=n("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=n("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var s=a("23e7"),n=a("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(t,e,a){"use strict";var s=a("825a");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c8b3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container pe-sm-0 ps-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"card pe-5 ps-5 pb-4 pt-5 mb-4"},[t._m(0),a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("div",{staticClass:"col-10 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[a("div",{staticClass:"input-group form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchDep",placeholder:"Search here"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("label",{attrs:{for:"floatingSearchDep"}},[t._v("Search")]),t._m(1)])])]),a("div",{staticClass:"table-responsive mt-3"},[t.initialLoading||t.isSearching?a("b-skeleton-table",{attrs:{rows:6,columns:5,"table-props":{bordered:!1,striped:!0}}}):a("table",{staticClass:"table table-hover"},[a("caption",[t._v("Showing "+t._s(t.logs.from)+" to "+t._s(t.logs.to)+" out of "+t._s(t.logs.total)+" activity logs")]),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("User")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Activity")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Event Type")]),a("th",{attrs:{scope:"col"}},[t._v("Description")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date and Time")])])]),a("tbody",[t._l(t.logs.data,(function(e,s){return a("tr",{key:s,staticClass:"cursor-pointer",on:{click:function(a){a.preventDefault(),t.selectedLog=e,t.$bvModal.show("logInfoModal")}}},[a("th",[t._v(t._s(t.logs.from+s))]),e.user?a("td",{staticClass:"text-nowrap"},[t._v(t._s(e.user.userinfo.first_name)+" "+t._s(e.user.userinfo.last_name))]):t._e(),a("td",[t._v(t._s(e.log_name))]),a("td",[a("small",[a("b-badge",{attrs:{variant:t.badgeEvent(e.event),pill:""}},[t._v(t._s(e.event))])],1)]),a("td",[t._v(t._s(e.description))]),a("td",[t._v(t._s(t._f("moment")(e.created_at)))])])})),0==t.logs.data?a("tr",[a("td",{staticClass:"text-center pt-3 pb-3",attrs:{colspan:"6"}},[t._v("No data available")])]):t._e()],2)])],1),t.logs.data?a("div",{staticClass:"row mt-3"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:t.logs,limit:3},on:{"pagination-change-page":t.getLogs}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])])])]),t.selectedLog.user?a("b-modal",{attrs:{id:"logInfoModal",scrollable:"",centered:"",title:"Log Info"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return s()}}},[t._v("Close")])]}}],null,!1,2708092184)},[a("p",{},[a("span",{staticClass:"fw-bold"},[t._v("Activity")]),t._v(": "+t._s(t.selectedLog.log_name))]),a("p",{},[a("span",{staticClass:"fw-bold"},[t._v("User")]),t._v(": "+t._s(t.selectedLog.user.userinfo.first_name)+" "+t._s(t.selectedLog.user.userinfo.last_name))]),a("p",{},[a("span",{staticClass:"fw-bold"},[t._v("Event Type")]),t._v(": "),a("small",[a("b-badge",{attrs:{variant:t.badgeEvent(t.selectedLog.event),pill:""}},[t._v(t._s(t.selectedLog.event))])],1)]),"deleted"==t.selectedLog.event?a("div",{},[a("h6",{staticClass:"mt-3 fw-bold mb-2"},[t._v("Deleted Data")]),t._l(t.selectedLog.properties.old,(function(e,s,n){return a("div",{key:n},[a("p","created_at"==s||"updated_at"==s?[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(t._f("moment")(e)))]:[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(e))])])}))],2):t._e(),"login failed"==t.selectedLog.event||"logout"==t.selectedLog.event||"login success"==t.selectedLog.event?a("div",{},[a("h6",{staticClass:"fw-bold mt-1 mb-2"},[t._v("User IP: "),a("span",{staticClass:"fw-normal"},[t._v(t._s(t.selectedLog.properties.ip))])])]):t._e(),"deleted account"==t.selectedLog.event?a("div",{},[a("h6",{staticClass:"mt-3 fw-bold mb-2"},[t._v("Deleted Account")]),t._l(t.selectedLog.properties,(function(e,s,n){return a("div",{key:n},[a("p","created_at"==s||"updated_at"==s?[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(t._f("moment")(e)))]:[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(e))])])}))],2):t._e(),"created"==t.selectedLog.event?a("div",{},[a("h6",{staticClass:"mt-3 fw-bold mb-2"},[t._v("Data Created")]),t._l(t.selectedLog.properties.attributes,(function(e,s,n){return a("div",{key:n},[a("p","created_at"==s||"updated_at"==s?[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(t._f("moment")(e)))]:[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(e))])])}))],2):t._e(),"updated"==t.selectedLog.event?a("div",{},[a("h6",{staticClass:"mt-3 fw-bold mb-2"},[t._v("New Data")]),t._l(t.selectedLog.properties.attributes,(function(e,s,n){return a("div",{key:n},[a("p","created_at"==s||"updated_at"==s?[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(t._f("moment")(e)))]:[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(e))])])})),a("h6",{staticClass:"mt-3 fw-bold mb-2"},[t._v("Old Data")]),t._l(t.selectedLog.properties.old,(function(e,s){return a("div",{key:s.id},[a("p","created_at"==s||"updated_at"==s?[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(t._f("moment")(e)))]:[a("span",{staticClass:"fw-bold"},[t._v(t._s(s)+":")]),t._v(" "+t._s(e))])])}))],2):t._e()]):t._e()],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column me-auto mt-2"},[a("h5",[t._v("Activity Logs")]),a("p",{staticClass:"mb-4"},[a("small",[t._v("Listed below are the activity of the users")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-purple"},[a("i",{staticClass:"bi bi-search"})])}],r=a("5530"),c=a("1da1"),o=(a("ac1f"),a("841c"),a("96cf"),a("2f62")),i=a("c1df"),l=a.n(i),d=a("2ef0"),u={filters:{moment:function(t){return l()(t).format("MMMM D, YYYY, h:mm a")}},data:function(){return{initialLoading:!1,selectedLog:{user:{userinfo:{first_name:"",last_name:""}},properties:{old:{data:""},attributes:{data:""}}},search:"",isSearching:!1}},watch:{search:function(){this.debouncedActivityLogSearch()}},created:function(){this.debouncedActivityLogSearch=d.debounce(this.activityLogSearch,800)},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.initialLoading=!0,document.title="Activity Logs - Management",e.next=4,t.$store.dispatch("logs/getAllActivityLogs",1);case 4:t.initialLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{badgeEvent:function(t){switch(t){case"created":return"success";case"deleted account":return"danger";case"deleted":return"danger";case"updated":return"primary";case"login success":return"success";case"login failed":return"danger";default:break}},getLogs:function(){var t=arguments,e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t.length>0&&void 0!==t[0]?t[0]:1,a.next=3,e.$store.dispatch("logs/getAllActivityLogs",s);case 3:case"end":return a.stop()}}),a)})))()},searchActivityLog:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isSearching=!0,s={search:e.search},a.next=4,e.$store.dispatch("logs/searchActivityLog",{page:t,data:s});case 4:e.isSearching=!1;case 5:case"end":return a.stop()}}),a)})))()},activityLogSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search?this.getLogs(t):this.searchActivityLog(t)}},computed:Object(r["a"])({},Object(o["c"])("logs",["logs"]))},v=u,p=a("2877"),f=Object(p["a"])(v,s,n,!1,null,null,null);e["default"]=f.exports},d784:function(t,e,a){"use strict";a("ac1f");var s=a("6eeb"),n=a("9263"),r=a("d039"),c=a("b622"),o=a("9112"),i=c("species"),l=RegExp.prototype,d=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),v=c("replace"),p=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,v){var _=c(t),g=!r((function(){var e={};return e[_]=function(){return 7},7!=""[t](e)})),m=g&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[i]=function(){return a},a.flags="",a[_]=/./[_]),a.exec=function(){return e=!0,null},a[_](""),!e}));if(!g||!m||"replace"===t&&(!d||!u||p)||"split"===t&&!f){var h=/./[_],b=a(_,""[t],(function(t,e,a,s,r){var c=e.exec;return c===n||c===l.exec?g&&!r?{done:!0,value:h.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=b[0],w=b[1];s(String.prototype,t,x),s(l,_,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}v&&o(l[_],"sham",!0)}}}]);
//# sourceMappingURL=chunk-cc5f20b8.47c40c76.js.map