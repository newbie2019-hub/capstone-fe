(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aba5"],{bd6c:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[s("div",{staticClass:"card p-5 mb-4"},[e._m(0),s("div",{staticClass:"d-flex justify-content-end mt-2"},[s("router-link",{staticClass:"btn btn-purple btn-sm me-2 d-flex align-items-center",attrs:{to:"/home/courses/new"}},[s("i",{staticClass:"bi bi-plus-circle me-2"}),e._v(" Add Course")]),s("div",{staticClass:"col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[s("div",{staticClass:"input-group form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.search_course,expression:"search_course"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchCollege",placeholder:"Search here"},domProps:{value:e.search_course},on:{input:function(t){t.target.composing||(e.search_course=t.target.value)}}}),s("label",{attrs:{for:"floatingSearchCollege"}},[e._v("Search here")]),e._m(1)])])],1),s("div",{staticClass:"table-responsive mt-3"},[0==e.courses.data?s("div",[e._v("No course found")]):e._e(),e.initialLoading||e.isCourseSearching?s("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):s("table",{staticClass:"table table-hover"},[s("caption",[e._v("Showing "+e._s(e.courses.from)+" to "+e._s(e.courses.to)+" out of "+e._s(e.courses.total)+" data")]),s("thead",[s("tr",[s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[e._v("Course")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[e._v("Abbreviation")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[e._v("College")]),s("th",{attrs:{scope:"col"}},[e._v("Actions")])])]),s("tbody",e._l(e.courses.data,(function(t,r){return s("tr",{key:r},[s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),e.courseInfo=t,e.$bvModal.show("courseInfoModal")}}},[e._v(e._s(t.course_name))]),s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),e.courseInfo=t,e.$bvModal.show("courseInfoModal")}}},[e._v(e._s(t.course_abbreviation))]),s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),e.courseInfo=t,e.$bvModal.show("courseInfoModal")}}},[e._v(e._s(t.college.name))]),s("td",[s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",attrs:{href:""},on:{click:function(s){return s.preventDefault(),e.setUpdateCourse(t)}}},[s("i",{staticClass:"bi bi-pencil-square"})]),s("button",{staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",on:{click:function(s){e.deleteCourse=t.id,e.$bvModal.show("deleteModal")}}},[s("i",{staticClass:"bi bi-trash"})])])])])})),0)])],1),e.courses.data?s("div",{staticClass:"row mt-3"},[s("pagination",{attrs:{showDisabled:!0,align:"right",data:e.courses},on:{"pagination-change-page":e.courseSearch}},[e._v("> "),s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[e._v("«")]),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[e._v("»")])])],1):e._e()])])])]),s("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(e){return r()}}},[e._v(" Cancel ")]),s("b-button",{attrs:{variant:"danger",disabled:e.isLoading},on:{click:function(t){return t.preventDefault(),e.destroyCourse.apply(null,arguments)}}},[e._v(" Delete ")])]}}])},[s("p",{},[e._v("Are you sure to delete this?")])]),s("b-modal",{attrs:{id:"courseInfoModal",centered:"",title:"Course Information"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.cancel;return[s("b-button",{attrs:{variant:"secondary"},on:{click:function(e){return r()}}},[e._v(" Close ")])]}}])},[s("h5",[e._v("Course Info")]),s("p",{staticClass:"mt-1"},[e._v("Name: "+e._s(e.courseInfo.course_name))]),s("p",{},[e._v("Abbreviation: "+e._s(e.courseInfo.course_abbreviation))]),s("p",{},[e._v("College: "+e._s(e.courseInfo.college.name))]),s("h5",{staticClass:"mt-3"},[e._v("Course Objectives: ")]),e._l(e.courseInfo.objectives,(function(t,r){return s("p",{key:r,staticClass:"mt-2"},[e._v(e._s(r+1)+". "+e._s(t.course_objective))])}))],2)],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"d-flex flex-column me-auto mt-2"},[s("h5",{staticClass:"text-violet"},[e._v("Courses Offered")]),s("p",{staticClass:"mb-4"},[s("small",[e._v("Manage courses below")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"btn btn-purple"},[s("i",{staticClass:"bi bi-search"})])}],a=s("1da1"),n=s("5530"),c=(s("96cf"),s("2f62")),i=s("c1df"),u=s.n(i),l=s("2ef0"),d={data:function(){return{initialLoading:!1,isLoading:!1,isSearching:!1,search_course:"",courseInfo:{college:{name:""}},isCourseSearching:!1,course:{name:"",college:"",abbreviation:""},course_objective:{objective:"",college:""},updateCourse:{name:"",abbreviation:"",college:{}},updateCourseObjective:{objective:""},deleteCourse:"",deleteCourseObjective:""}},props:{disabledOption:{type:String,default:"Select college"}},filters:{moment:function(e){return u()(e).format("MMMM D, YYYY, h:mm a")}},computed:Object(n["a"])(Object(n["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("universityinfo",["courses","colleges","course_objectives"])),watch:{search_course:function(e,t){this.debouncedCourseSearch()}},created:function(){this.debouncedCourseSearch=l.debounce(this.courseSearch,1e3)},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.initialLoading=!0,document.title="Course Management - Touchless Information Management",t.next=4,e.$store.dispatch("universityinfo/getCourse",1);case 4:return t.next=6,e.$store.dispatch("universityinfo/getCollege",1);case 6:e.initialLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},methods:{setUpdateCourse:function(e){this.$store.commit("universityinfo/SET_UPDATE_COURSE",e),this.$router.push("/home/courses/update")},destroyCourse:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$store.dispatch("universityinfo/deleteCourse",e.deleteCourse);case 3:if(s=t.sent,200!=s.status){t.next=11;break}return t.next=7,e.$store.dispatch("universityinfo/getCourse",1);case 7:e.$toast.success("Course deleted successfully!"),e.$bvModal.hide("deleteModal"),t.next=12;break;case 11:e.$toast.error("Something went wrong");case 12:e.isLoading=!1;case 13:case"end":return t.stop()}}),t)})))()},getCourse:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$store.dispatch("universityinfo/getCourse",e);case 2:case"end":return s.stop()}}),s)})))()},searchCourse:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.isCourseSearching=!0,r={search:t.search_course},s.next=4,t.$store.dispatch("universityinfo/searchCourse",{page:e,data:r});case 4:t.isCourseSearching=!1;case 5:case"end":return s.stop()}}),s)})))()},courseSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search_course?this.getCourse(e):this.searchCourse(e)}}},v=d,f=s("2877"),p=Object(f["a"])(v,r,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21aba5.b84df53a.js.map