(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2380af"],{fe60:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"card p-4 mb-4"},[t._m(0),a("div",{staticClass:"d-flex justify-content-end mt-2 mb-2"},[a("button",{staticClass:"btn btn-purple btn-sm me-2",on:{click:function(e){return e.preventDefault(),t.$bvModal.show("newFaqModal")}}},[a("i",{staticClass:"bi bi-plus-circle"}),t._v(" Add FAQ")]),a("div",{staticClass:"col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3"},[a("div",{staticClass:"input-group form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_faq,expression:"search_faq"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchOrg",placeholder:"Search here"},domProps:{value:t.search_faq},on:{input:function(e){e.target.composing||(t.search_faq=e.target.value)}}}),a("label",{attrs:{for:"floatingSearchOrg"}},[t._v("Search here")]),t._m(1)])])]),a("div",{staticClass:"table-responsive mt-3"},[0==t.faqs.data?a("div",[t._v("No FAQs found")]):t._e(),t.initialLoading||t.isSearching?a("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):a("table",{staticClass:"table table-hover"},[a("caption",[t._v("Showing "+t._s(t.faqs.to)+" out "+t._s(t.faqs.total)+" of data")]),a("thead",[a("tr",[a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Question")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Answer")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date Created")]),a("th",{attrs:{scope:"col"}},[t._v("Actions")])])]),a("tbody",t._l(t.faqs.data,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.question))]),a("td",[t._v(t._s(e.answer))]),a("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("moment")(e.created_at)))]),a("td",[a("div",{staticClass:"d-flex"},[a("button",{staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",attrs:{href:""},on:{click:function(a){a.preventDefault(),t.update=e,t.$bvModal.show("updateFaqModal")}}},[a("i",{staticClass:"bi bi-pencil-square"})]),a("button",{staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",on:{click:function(a){t.deleteFaq=e.id,t.$bvModal.show("deleteModal")}}},[a("i",{staticClass:"bi bi-trash"})])])])])})),0)])],1),t.faqs.data?a("div",{staticClass:"row mt-3"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:t.faqs}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])])])]),a("b-modal",{attrs:{id:"newFaqModal",centered:"",title:"New FAQ"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return s()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"success",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.saveFAQ.apply(null,arguments)}}},[t._v(" Save FAQ ")])]}}])},[a("div",{staticClass:"form-floating mb-2 mt-3 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.faq.question,expression:"faq.question"}],staticClass:"form-control",attrs:{type:"text",id:"newFaqQuestion",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.faq.question},on:{input:function(e){e.target.composing||t.$set(t.faq,"question",e.target.value)}}}),a("label",{attrs:{for:"newFaqQuestion"}},[t._v("Type a new question")])]),a("div",{staticClass:"form-floating mb-2 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.faq.answer,expression:"faq.answer"}],staticClass:"form-control",attrs:{type:"text",id:"newFaqAnswer",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.faq.answer},on:{input:function(e){e.target.composing||t.$set(t.faq,"answer",e.target.value)}}}),a("label",{attrs:{for:"newFaqAnswer"}},[t._v("Answer")])])]),a("b-modal",{attrs:{id:"updateFaqModal",centered:"",title:"Update FAQ"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return s()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"success",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.updateFAQ.apply(null,arguments)}}},[t._v(" Update ")])]}}])},[a("div",{staticClass:"form-floating mb-2 mt-3 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.update.question,expression:"update.question"}],staticClass:"form-control",attrs:{type:"text",id:"updateFaqQuestion",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.update.question},on:{input:function(e){e.target.composing||t.$set(t.update,"question",e.target.value)}}}),a("label",{attrs:{for:"updateFaqQuestion"}},[t._v("Question")])]),a("div",{staticClass:"form-floating mb-2 mt-4 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.update.answer,expression:"update.answer"}],staticClass:"form-control",attrs:{type:"text",id:"updateFaqAnswer",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.update.answer},on:{input:function(e){e.target.composing||t.$set(t.update,"answer",e.target.value)}}}),a("label",{attrs:{for:"updateFaqAnswer"}},[t._v("Answer")])])]),a("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return s()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"danger"},on:{click:function(e){return e.preventDefault(),t.destroyFAQ.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[a("p",{},[t._v("Are you sure to delete this FAQ?")])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"d-flex flex-column me-auto mt-2"},[a("h5",{staticClass:"text-violet"},[t._v("FAQs")]),a("p",{staticClass:"mb-4"},[a("small",[t._v("Manage FAQs below")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn-purple"},[a("i",{staticClass:"bi bi-search"})])}],r=a("1da1"),o=a("5530"),i=(a("96cf"),a("2f62")),c=a("c1df"),l=a.n(c),u=a("2ef0"),d={data:function(){return{initialLoading:!1,isLoading:!1,isSearching:!1,search_faq:"",faq:{question:"",answer:""},update:{question:"",answer:""},deleteFaq:""}},filters:{moment:function(t){return l()(t).format("MMMM D, YYYY, h:mm a")}},watch:{search_faq:function(t,e){this.debouncedFaqsSearch()}},created:function(){this.debouncedFaqsSearch=u.debounce(this.faqsSearch,1e3)},computed:Object(o["a"])({},Object(i["c"])("faq",["faqs"])),mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.initialLoading=!0,e.next=3,t.$store.dispatch("faq/getFaq",1);case 3:t.initialLoading=!1;case 4:case"end":return e.stop()}}),e)})))()},methods:{saveFAQ:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("faq/saveFaq",t.faq);case 3:a=e.sent,200==a.status&&(t.$toast.success("FAQ added successfully!"),t.$bvModal.hide("newFaqModal"),t.faq={question:"",answer:""}),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},updateFAQ:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("faq/updateFaq",t.update);case 3:a=e.sent,200==a.status&&(t.$toast.success("FAQ updated successfully!"),t.$bvModal.hide("updateFaqModal"),t.update={question:"",answer:""}),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},destroyFAQ:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("faq/deleteFaq",t.deleteFaq);case 3:a=e.sent,200==a.status?(t.$toast.success("FAQ deleted successfully!"),t.$bvModal.hide("deleteModal")):t.$toast.error("Something went wrong"),t.islLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},searchFaqs:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isSearching=!0,s={search:e.search_faq},a.next=4,e.$store.dispatch("faq/searchFaqs",{page:t,data:s});case 4:e.isSearching=!1;case 5:case"end":return a.stop()}}),a)})))()},getFaqs:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("faq/getFaq",t);case 2:case"end":return a.stop()}}),a)})))()},faqsSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search_faq?this.getFaqs(t):this.searchFaqs(t)}}},p=d,f=a("2877"),m=Object(f["a"])(p,s,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d2380af.0f4574f4.js.map