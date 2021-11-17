(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8b22"],{"307f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"card p-5 mb-4"},[e._m(0),a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("router-link",{staticClass:"btn btn-purple btn-sm me-2 d-flex align-items-center",attrs:{to:"basiceducandcolleges/create"}},[a("i",{staticClass:"bi bi-plus-circle me-2"}),e._v(" Add Entry")]),a("div",{staticClass:"col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3"},[a("div",{staticClass:"input-group form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search_college,expression:"search_college"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchCollege",placeholder:"Search here"},domProps:{value:e.search_college},on:{input:function(t){t.target.composing||(e.search_college=t.target.value)}}}),a("label",{attrs:{for:"floatingSearchCollege"}},[e._v("Search here")]),e._m(1)])])],1),a("div",{staticClass:"table-responsive mt-3"},[0==e.colleges.data?a("div",[e._v("No college or basic education found")]):e._e(),e.initialLoading||e.isCollegeSearching?a("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):a("table",{staticClass:"table table-hover"},[a("caption",[e._v("Showing "+e._s(e.colleges.from)+" to "+e._s(e.colleges.to)+" out of "+e._s(e.colleges.total)+" data")]),a("thead",[a("tr",[a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[e._v("Name")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[e._v("Dean")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[e._v("Abbreviation")]),a("th",{attrs:{scope:"col"}},[e._v("Actions")])])]),a("tbody",e._l(e.colleges.data,(function(t,n){return a("tr",{key:n},[a("td",{staticClass:"cursor-pointer",on:{click:function(a){a.preventDefault(),e.collegeInfo=t,e.$bvModal.show("collegeInfoModal")}}},[e._v(e._s(t.name))]),a("td",{staticClass:"cursor-pointer text-nowrap",on:{click:function(a){a.preventDefault(),e.collegeInfo=t,e.$bvModal.show("collegeInfoModal")}}},[e._v(e._s(t.dean))]),a("td",{staticClass:"cursor-pointer",on:{click:function(a){a.preventDefault(),e.collegeInfo=t,e.$bvModal.show("collegeInfoModal")}}},[e._v(e._s(t.abbreviation))]),a("td",[a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",attrs:{href:""},on:{click:function(a){return a.preventDefault(),e.setUpdateData(t)}}},[a("i",{staticClass:"bi bi-pencil-square"})]),a("button",{staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",on:{click:function(a){e.deleteCollege=t.id,e.$bvModal.show("deleteModal")}}},[a("i",{staticClass:"bi bi-trash"})])])])])})),0)])],1),e.colleges.data?a("div",{staticClass:"row mt-3"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:e.colleges},on:{"pagination-change-page":e.collegeSearch}},[e._v("> "),a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[e._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[e._v("»")])])],1):e._e()])])])]),a("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var n=t.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return n()}}},[e._v(" Cancel ")]),a("b-button",{attrs:{variant:"danger",disabled:e.isLoading},on:{click:function(t){return t.preventDefault(),e.destroyCollege.apply(null,arguments)}}},[e._v(" Delete ")])]}}])},[a("p",{},[e._v("Are you sure you want to delete this?")])]),a("b-modal",{attrs:{id:"collegeInfoModal",scrollable:"",centered:"",title:"College Information"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var n=t.cancel;return[a("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return n()}}},[e._v(" Close ")])]}}])},[a("h5",{staticClass:"mt-1"},[e._v("Name: "+e._s(e.collegeInfo.name))]),a("h5",{class:e.collegeInfo.dean?"":"text-muted"},[e._v("Dean: "+e._s(e.collegeInfo.dean?e.collegeInfo.dean:"No data found"))]),0!=e.collegeInfo.goals?a("div",[a("h5",{staticClass:"mt-3"},[e._v("Goals: ")]),e._l(e.collegeInfo.goals,(function(t,n){return a("p",{key:n,staticClass:"mt-1"},[e._v(e._s(n+1)+". "+e._s(t.goal))])}))],2):e._e(),0!=e.collegeInfo.objectives?a("div",[a("h5",{staticClass:"mt-3"},[e._v("Objectives: ")]),e._l(e.collegeInfo.objectives,(function(t,n){return a("p",{key:n,staticClass:"mt-1"},[e._v(e._s(n+1)+". "+e._s(t.objective))])}))],2):e._e()])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"d-flex flex-column me-auto mt-2"},[a("h5",{staticClass:"text-violet"},[e._v("College and Basic Education")]),a("p",{staticClass:"mb-4"},[a("small",[e._v("Manage colleges below")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn btn-purple"},[a("i",{staticClass:"bi bi-search"})])}],l=a("1da1"),s=a("5530"),c=(a("96cf"),a("2f62")),i=a("c1df"),r=a.n(i),d=a("2ef0"),u={data:function(){return{collegeInfo:{name:"",dean:"",objective:{objective:""}},initialLoading:!1,isLoading:!1,isSearching:!1,isCollegeSearching:!1,search_college:"",college:{name:"",dean:"",abbreviation:""},goal:{academic:"",goal_content:""},goalUpdate:{academic:"",goal_content:""},objective:{academic:"",objective_content:""},objectiveUpdate:{academic:"",objective_content:""},updateCollege:{name:"",abbreviation:"",dean:""},deleteCollege:"",search_goal:"",search_objective:""}},props:{disabledOption:{type:String,default:"Select education"}},filters:{moment:function(e){return r()(e).format("MMMM D, YYYY, h:mm a")}},computed:Object(s["a"])(Object(s["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("universityinfo",["colleges"])),watch:{search_college:function(e,t){this.debouncedCollegeSearch()}},created:function(){this.debouncedCollegeSearch=d.debounce(this.collegeSearch,800)},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Colleges and Basic Education - Touchless Information Management",e.initialLoading=!0,t.next=4,e.$store.dispatch("universityinfo/getCollege",1);case 4:e.initialLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},methods:{setUpdateData:function(e){this.$store.commit("universityinfo/SET_UPDATE_COLLEGE",e),this.$router.push("basiceducandcolleges/update")},destroyCollege:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$store.dispatch("universityinfo/deleteCollege",e.deleteCollege);case 3:if(a=t.sent,200!=a.status){t.next=11;break}return t.next=7,e.$store.dispatch("universityinfo/getCollege",1);case 7:e.$toast.success("College deleted successfully!"),e.$bvModal.hide("deleteModal"),t.next=12;break;case 11:e.$toast.error("Something went wrong");case 12:e.isLoading=!1;case 13:case"end":return t.stop()}}),t)})))()},getCollege:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("universityinfo/getCollege",e);case 2:case"end":return a.stop()}}),a)})))()},searchCollege:function(e){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.isCollegeSearching=!0,n={search:t.search_college},a.next=4,t.$store.dispatch("universityinfo/searchCollege",{page:e,data:n});case 4:t.isCollegeSearching=!1;case 5:case"end":return a.stop()}}),a)})))()},collegeSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search_college?this.getCollege(e):this.searchCollege(e)}}},g=u,v=a("2877"),f=Object(v["a"])(g,n,o,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b8b22.40edb4cd.js.map