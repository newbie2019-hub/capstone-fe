(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d213ab9"],{ae54:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[s("div",{staticClass:"card p-5"},[t._m(0),s("div",{staticClass:"d-flex justify-content-end mt-2"},[s("div",{staticClass:"col-10 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[s("div",{staticClass:"input-group form-floating mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search_member,expression:"search_member"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchOrg",placeholder:"Search here"},domProps:{value:t.search_member},on:{input:function(e){e.target.composing||(t.search_member=e.target.value)}}}),s("label",{attrs:{for:"floatingSearchOrg"}},[t._v("Search")]),s("button",{staticClass:"btn btn-purple",on:{click:function(e){return e.preventDefault(),t.memberSearch.apply(null,arguments)}}},[s("i",{staticClass:"bi bi-search"})])])])]),t.viewPost?t._e():s("div",{staticClass:"table-responsive mt-4"},[t.initialLoading?s("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):t._e(),t.initialLoading?t._e():s("table",{staticClass:"table table-hover"},[s("caption",[t._v("Showing "+t._s(t.members.from)+" to "+t._s(t.members.to)+" out of "+t._s(t.members.total)+" data")]),t._m(1),s("tbody",[0==t.members.data?s("tr",[t._m(2)]):t._e(),t._l(t.members.data,(function(e,a){return s("tr",{key:a},[s("th",{staticClass:"justify-content-center cursor-pointer",attrs:{scope:"row"},on:{click:function(s){s.preventDefault(),t.accDisplayed=e,t.$bvModal.show("viewInfoModal")}}},[s("b-avatar",{attrs:{variant:"dark",src:t.imgURL+"/"+e.user.userinfo.image}})],1),s("td",{staticClass:"pt-3 cursor-pointer",on:{click:function(s){s.preventDefault(),t.accDisplayed=e,t.$bvModal.show("viewInfoModal")}}},[t._v(t._s(e.user.userinfo.first_name)+" "+t._s(e.user.userinfo.middle_name)+" "+t._s(e.user.userinfo.last_name))]),s("td",{staticClass:"pt-3 cursor-pointer",on:{click:function(s){s.preventDefault(),t.accDisplayed=e,t.$bvModal.show("viewInfoModal")}}},[t._v(t._s(e.user.userinfo.role.role))]),s("td",{staticClass:"pt-3 cursor-pointer",on:{click:function(s){s.preventDefault(),t.accDisplayed=e,t.$bvModal.show("viewInfoModal")}}},[s("b-badge",{staticClass:"rounded-pill",class:"Approved"==e.user.status?"bg-success":"bg-danger"},[t._v(t._s(e.user.status))])],1),s("td",{staticClass:"text-nowrap pt-3"},[t._v(t._s(e.user.email))]),s("td",[s("div",{staticClass:"d-flex"},[t.$can("approve_user")&&"Pending"==e.user.status?s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-success rounded-pill me-2",attrs:{disabled:t.isLoading&&t.current_id==e.id,title:"Approve Account"},on:{click:function(s){s.preventDefault(),t.approve_data.id=e.user.id,t.$bvModal.show("approveModal")}}},[t.current_id!=e.id?s("i",{staticClass:"bi bi-check"}):t._e()]):t._e(),s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-success rounded-pill me-2",attrs:{title:"View Posts"},on:{click:function(s){s.preventDefault(),t.userPosts=e.user.posts,t.viewPost=!0}}},[t.current_id!=e.id?s("i",{staticClass:"bi bi-newspaper"}):t._e()]),t.$can("delete_user")?s("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger rounded-pill me-2",attrs:{href:"",title:"Delete Account"},on:{click:function(s){s.preventDefault(),t.$bvModal.show("deleteModal"),t.delete_data.id=e.user.id,t.delete_data.type=e.user.type}}},[t.current_id!=e.user.id?s("i",{staticClass:"bi bi-trash"}):t._e(),t.isLoading&&t.current_id==e.user.id?s("div",{staticClass:"spinner-grow text-light spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e()]):t._e()])])])}))],2)])],1),t.members.data?s("div",{staticClass:"row mt-3"},[s("pagination",{attrs:{showDisabled:!0,align:"right",data:t.members},on:{"pagination-change-page":t.memberSearch}},[s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e(),t.viewPost?s("div",{staticClass:"mt-2"},[s("button",{staticClass:"btn btn-purple",on:{click:function(e){e.preventDefault(),t.viewPost=!1,t.posts=[]}}},[s("i",{staticClass:"bi bi-arrow-left me-2"}),t._v("Return")])]):t._e(),t.viewPost?s("div",{staticClass:"table-responsive mt-3"},[t.isLoading?s("b-skeleton-table",{attrs:{rows:4,columns:7,"table-props":{bordered:!1,striped:!0}}}):t._e(),t.isLoading?t._e():s("table",{staticClass:"table table-hover"},[t._m(3),s("tbody",t._l(t.userPosts,(function(e,a){return s("tr",{key:a},[s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(a+1))]),s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[e.postcontent.image?s("b-avatar",{attrs:{size:"6rem",variant:"dark",src:"http://127.0.0.1:8000/uploads/"+e.postcontent.image}}):s("p",{staticClass:"text-muted"},[t._v("No Image")])],1),s("td",{staticClass:"cursor-pointer text-nowrap",on:{click:function(s){s.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(e.postcontent.title))]),s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(e.postcontent.post_excerpt))]),s("td",[s("b-badge",{attrs:{variant:"Approved"==e.status?"success":"info"}},[t._v(t._s(e.status))])],1),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("moment")(e.created_at)))]),s("td",[s("div",{staticClass:"d-flex"},[t.$can("approve_post")&&"Approved"!=e.status||t.adviser_id==t.user.id?s("button",{staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",on:{click:function(s){s.preventDefault(),t.approve_post.id=e.id,t.$bvModal.show("approvePostModal")}}},[s("i",{staticClass:"bi bi-check"})]):t._e(),t.$can("delete_post")||e.user_account_id==t.user.id||t.adviser_id==t.user.id?s("button",{staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",on:{click:function(s){t.deletePost=e.id,t.$bvModal.show("deletePostModal")}}},[s("i",{staticClass:"bi bi-trash"})]):t._e()])])])})),0)])],1):t._e()])])])]),s("b-modal",{attrs:{id:"viewPostModal",size:"lg",scrollable:"",centered:"",title:t.postContent.postcontent.title},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Close ")])]}}])},[s("div",{domProps:{innerHTML:t._s(t.postContent.postcontent.content)}}),s("p",{staticClass:"mt-4"},[s("small",[t._v("Views: "+t._s(t.postContent.views))])]),s("p",{staticClass:" mb-2"},[s("small",[t._v("Date Posted: "+t._s(t._f("moment")(t.postContent.created_at)))])])]),s("b-modal",{attrs:{id:"viewInfoModal",centered:"",title:"Account Info"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Close ")])]}}])},[s("div",{staticClass:"row justify-content-center text-center"},[s("b-avatar",{attrs:{size:"6rem",variant:"dark",src:"http://127.0.0.1:8000/uploads/"+t.accDisplayed.user.userinfo.image}}),s("h5",{staticClass:"mt-3 "},[t._v(t._s(t.accDisplayed.user.userinfo.first_name)+" "+t._s(t.accDisplayed.user.userinfo.last_name))]),s("p",{},[t._v(t._s(t.accDisplayed.email))]),s("p",{},[t._v("Contact: "+t._s(t.accDisplayed.user.userinfo.contact_number))]),s("p",{},[t._v("Gender: "+t._s(t.accDisplayed.user.userinfo.gender))]),s("p",{},[t._v("Role: "+t._s(t.accDisplayed.user.userinfo.role.role))])],1)]),s("b-modal",{attrs:{id:"approveModal",centered:"",title:"Confirm Approve"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{disabled:t.isLoading,variant:"primary"},on:{click:function(t){return a()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{disabled:t.isLoading,variant:"success"},on:{click:function(e){return e.preventDefault(),t.approveAccount.apply(null,arguments)}}},[t._v(" Approve ")])]}}])},[s("p",{},[t._v("An email of approval will be sent to the user. Are you sure you want to approve this account?")])]),s("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var a=e.cancel;return[s("b-button",{attrs:{variant:"primary",size:"sm",disabled:t.isLoading},on:{click:function(t){return a()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{size:"sm",variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.removeAccount.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[s("p",[t._v("Are you sure you want to delete this account?")])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"d-flex flex-column me-auto mt-2"},[s("h5",{staticClass:"text-violet"},[t._v("Members")]),s("p",{staticClass:"mb-4"},[s("small",[t._v("All your members are listed below")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Name")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Role")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Email")]),s("th",{attrs:{scope:"col"}},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"p-4",attrs:{colspan:"6"}},[s("h6",{staticClass:"text-center"},[t._v("No accounts found ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("ID")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Image")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Title")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Post Excerpt")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date Posted")]),s("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],n=s("5530"),o=s("1da1"),i=(s("96cf"),s("2f62")),c=s("c1df"),l=s.n(c),d=s("2ef0"),u={filters:{moment:function(t){return l()(t).format("MMMM D, YYYY, h:mm a")}},data:function(){return{initialLoading:!1,current_id:"",isLoading:!1,userPosts:[],search_member:"",viewPost:!1,approve_data:{id:""},postContent:{postcontent:{title:"",content:""}},isSearching:"",accDisplayed:{user:{userinfo:{image:"",first_name:"",last_name:"",orgunit:{name:""},role:{role:""}}}},delete_data:{id:"",type:""},accPostsDisplayed:{post:{title:"",content:"",image:"",type:""}}}},watch:{search_member:function(t,e){this.debouncedMemberSearch()}},created:function(){this.debouncedMemberSearch=d.debounce(this.memberSearch,1e3)},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="All Accounts",t.initialLoading=!0,e.next=4,t.$store.dispatch("auth/checkAuthUser");case 4:return e.next=6,t.$store.dispatch("members/getMembers");case 6:t.initialLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])("auth",["checkAuthUser"])),{},{getMembers:function(){var t=arguments,e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=t.length>0&&void 0!==t[0]?t[0]:1,s.next=3,e.$store.dispatch("members/getMembers",a);case 3:case"end":return s.stop()}}),s)})))()},removeAccount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("members/deleteMember",t.delete_data.id);case 3:if(s=e.sent,200!=s.status){e.next=12;break}return e.next=7,t.$store.dispatch("members/getMembers");case 7:t.delete_data={id:"",type:""},t.$toast.success("Account removed successfully"),t.$bvModal.hide("deleteModal"),e.next=15;break;case 12:t.delete_data={id:"",type:""},t.$toast.error("Something went wrong"),t.$bvModal.hide("deleteModal");case 15:t.isLoading=!1;case 16:case"end":return e.stop()}}),e)})))()},searchMember:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a={search:e.search_member},e.isSearching=!0,s.next=4,e.$store.dispatch("members/searchMember",{page:t,data:a});case 4:e.isSearching=!1;case 5:case"end":return s.stop()}}),s)})))()},approveAccount:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("members/approveMember",t.approve_data);case 2:s=e.sent,a=s.status,r=s.data,200==a?t.$toast.success("Account of member has been approved"):t.$toast.error(r.msg),t.$bvModal.hide("approveModal"),t.approve_data.id="";case 8:case"end":return e.stop()}}),e)})))()},memberSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search_member?this.getMembers(t):this.searchMember(t)}}),computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("auth",["user"])),Object(i["c"])("members",["members","posts"]))},p=u,m=s("2877"),v=Object(m["a"])(p,a,r,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d213ab9.20a97aa1.js.map