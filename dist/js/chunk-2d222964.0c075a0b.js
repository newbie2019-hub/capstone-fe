(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d222964"],{cef2:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[s("div",{staticClass:"card pe-5 ps-5 pb-4 pt-5 mb-4"},[t._m(0),s("div",{staticClass:"d-flex justify-content-end mt-2"},[s("div",{staticClass:"col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[s("div",{staticClass:"input-group form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_post,expression:"search_post"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchOrg",placeholder:"Search here"},domProps:{value:t.search_post},on:{input:function(e){e.target.composing||(t.search_post=e.target.value)}}}),s("label",{attrs:{for:"floatingSearchOrg"}},[t._v("Search here")]),t._m(1)])])]),s("div",{staticClass:"table-responsive mt-4"},[0==t.posts?s("div",[t._v("No Posts found")]):t._e(),t.initialLoading?s("b-skeleton-table",{attrs:{rows:4,columns:7,"table-props":{bordered:!1,striped:!0}}}):t._e(),t.initialLoading?t._e():s("table",{staticClass:"table table-hover"},[s("caption",[t._v("Showing "+t._s(t.posts.from)+" to "+t._s(t.posts.to)+" out of "+t._s(t.posts.total)+" posts.")]),t._m(2),s("tbody",t._l(t.posts.data,(function(e,a){return s("tr",{key:a},[s("td",{on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[e.postcontent.image?s("img",{attrs:{src:t.imgURL+"/"+e.postcontent.image,alt:"",width:"100"}}):s("p",{staticClass:"text-muted"},[t._v("No Image")])]),s("td",{staticClass:"text-nowrap cursor-pointer",on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[t._v(" "+t._s(e.postcontent.title)+" "),s("br"),s("span",{staticClass:"text-muted"},[s("small",[t._v("Added by: "+t._s(e.useraccount.userinfo.first_name)+" "+t._s(e.useraccount.userinfo.last_name))])])]),s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(e.postcontent.post_excerpt))]),s("td",{staticClass:"cursor-pointer"},[s("b-badge",{attrs:{variant:"Approved"==e.status?"success rounded-pill":"info rounded-pill"}},[t._v(t._s(e.status))])],1),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("moment")(e.created_at)))]),s("td",[s("button",{staticClass:"btn btn-sm btn-secondary d-flex me-2",on:{click:function(s){t.restorePost=e.id,t.$bvModal.show("restoreModal")}}},[s("i",{staticClass:"bi bi-recycle me-1"}),t._v(" Restore ")])])])})),0)])],1),t.posts.data?s("div",{staticClass:"row mt-3"},[s("pagination",{attrs:{showDisabled:!0,align:"right",data:t.posts}},[s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])])])]),s("b-modal",{attrs:{id:"restoreModal",centered:"",title:"Confirm Restore"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.revertPost.apply(null,arguments)}}},[t._v(" Restore ")])]}}])},[s("p",{},[t._v("Are you sure you want to restore this post?")])]),s("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.destroyPost.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[s("p",{},[t._v("Are you sure to delete this post?")])]),s("b-modal",{attrs:{id:"viewPostModal",scrollable:"",centered:"",title:t.viewPost.postcontent.title},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Close ")])]}}])},[s("div",{domProps:{innerHTML:t._s(t.viewPost.postcontent.content)}}),t.viewPost.useraccount?s("p",{staticClass:"mt-3"},[s("small",[t._v("Added by: "),s("strong",[t._v(t._s(t.viewPost.useraccount.userinfo.first_name)+" "+t._s(t.viewPost.useraccount.userinfo.last_name))])])]):t._e(),s("p",{staticClass:"text-muted "},[s("small",[t._v("Date Posted: "+t._s(t._f("moment")(t.viewPost.created_at)))])]),s("p",{},[s("small",[t._v("Views: "+t._s(t.viewPost.views))])])]),s("b-modal",{attrs:{id:"approvePostModal",centered:"",title:"Confirm Approve"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{disabled:t.isLoading,variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{disabled:t.isLoading,variant:"success"},on:{click:function(e){return e.preventDefault(),t.approvePost.apply(null,arguments)}}},[t._v(" Approve ")])]}}])},[s("p",{},[t._v("Are you sure you want to approve this post?")])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"d-flex flex-column me-auto mt-2"},[s("h5",{staticClass:"text-violet"},[t._v("DELETED POSTS")]),s("p",{staticClass:"mb-4"},[s("small",[t._v("Manage your posts below")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-purple"},[s("i",{staticClass:"bi bi-search"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Image")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Title")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Post Excerpt")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date Posted")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Actions")])])])}],o=s("1da1"),n=s("5530"),c=(s("96cf"),s("2f62")),i=s("c1df"),l=s.n(i),u={data:function(){return{viewPost:{postcontent:{title:"",content:""}},data:{schedule:""},initialLoading:!1,isLoading:!1,isSearching:!1,search_post:"",approve_post:{id:""},post:{title:"",content:"",image:""},update:{title:"",content:"",image:""},deletePost:"",restorePost:""}},filters:{moment:function(t){return l()(t).format("MMM D, YYYY, h:mm a")}},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("osa",["posts","schedule"])),mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Info Kiosk - Post Management",t.initialLoading=!0,e.next=4,t.checkAuthUser();case 4:return e.next=6,t.$store.dispatch("osa/getArchived",1);case 6:return e.next=8,t.$store.dispatch("osa/getSchedule");case 8:t.initialLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])("auth",["checkAuthUser"])),{},{revertPost:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("post/restoreUserPost",t.restorePost);case 3:if(s=e.sent,200!=s.status){e.next=11;break}return e.next=7,t.postSearch();case 7:t.$toast.success("Post has been restored!"),t.$bvModal.hide("restoreModal"),e.next=12;break;case 11:t.$toast.error("Something went wrong");case 12:t.isLoading=!1;case 13:case"end":return e.stop()}}),e)})))()},saveSchedule:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("osa/saveSchedule",t.data);case 3:if(s=e.sent,200!=s.status){e.next=9;break}return t.$bvModal.hide("scheduleModal"),t.$toast.success("Schedule has been updated successfully"),e.next=9,t.$store.dispatch("osa/getSchedule");case 9:t.isLoading=!1;case 10:case"end":return e.stop()}}),e)})))()},searchPost:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a={search:e.search_role},e.isSearching=!0,s.next=4,e.$store.dispatch("post/searchPost",{page:t,data:a});case 4:e.isSearching=!1;case 5:case"end":return s.stop()}}),s)})))()},getPost:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$store.dispatch("post/getArchived",t);case 2:case"end":return s.stop()}}),s)})))()},postSearch:function(){var t=arguments,e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(a=t.length>0&&void 0!==t[0]?t[0]:1,""!=e.search_post){s.next=6;break}return s.next=4,e.$store.dispatch("osa/getArchived",a);case 4:s.next=7;break;case 6:e.searchPost(a);case 7:case"end":return s.stop()}}),s)})))()}}),watch:{search_post:function(t,e){this.postSearch()}}},d=u,p=s("2877"),v=Object(p["a"])(d,a,r,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d222964.0c075a0b.js.map