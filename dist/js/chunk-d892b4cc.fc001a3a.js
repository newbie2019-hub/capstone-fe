(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d892b4cc"],{"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,o=a("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),l=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},7370:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"card p-4"},[a("div",{staticClass:"d-flex align-items-center"},[t._m(0),a("div",{staticClass:"d-flex flex-column mt-2"},[a("button",{staticClass:"btn btn-purple",on:{click:function(e){return e.preventDefault(),t.$bvModal.show("newOrganizationModal")}}},[a("i",{staticClass:"bi bi-diagram-2"}),t._v(" New Org")])])]),a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("div",{staticClass:"col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[a("div",{staticClass:"input-group form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_organization,expression:"search_organization"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchOrg",placeholder:"Search here"},domProps:{value:t.search_organization},on:{input:function(e){e.target.composing||(t.search_organization=e.target.value)}}}),a("label",{attrs:{for:"floatingSearchOrg"}},[t._v("Search")]),a("button",{staticClass:"btn btn-purple",on:{click:function(e){return e.preventDefault(),t.organizationSearch.apply(null,arguments)}}},[a("i",{staticClass:"bi bi-search"})])])])]),a("div",{staticClass:"table-responsive mt-3"},[0==t.organizations.data?a("div",[t._v("No accounts under organizations")]):t._e(),t.initialLoading||t.isSearching?a("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):a("table",{staticClass:"table table-hover"},[a("caption",[t._v("Showing "+t._s(t.organizations.from)+" to "+t._s(t.organizations.to)+" out of "+t._s(t.organizations.total)+" organizations")]),a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("ID")]),a("th",{staticClass:"text-nowrap text-center",attrs:{scope:"col"}},[t._v("Organization")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Abbreviation")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Department")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Added on")]),a("th",{attrs:{scope:"col"}},[t._v("Actions")])])]),a("tbody",t._l(t.organizations.data,(function(e,n){return a("tr",{key:n},[a("th",{staticClass:"justify-content-center",attrs:{scope:"row"}},[t._v(" "+t._s(t.organizations.from+n)+" ")]),a("td",{},[t._v(t._s(e.name))]),a("td",{class:e.abbreviation?"":"text-muted"},[t._v(t._s(e.abbreviation?e.abbreviation:"N/A"))]),a("td",{class:e.department?"":"text-muted"},[t._v(t._s(e.department?e.department.name:"N/A"))]),a("td",{staticClass:"text-nowrap text-center"},[t._v(t._s(t._f("moment")(e.created_at)))]),a("td",[a("div",{staticClass:"d-flex"},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",attrs:{href:"",title:"Update"},on:{click:function(a){a.preventDefault(),t.update_organization=Object.assign({},e),t.$bvModal.show("updateOrganizationModal")}}},[a("i",{staticClass:"bi bi-pencil-square"})]),a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",attrs:{disabled:t.isLoading&&t.delete_id==e.id,href:"",title:"Delete"},on:{click:function(a){a.preventDefault(),t.delete_id=e.id,t.$bvModal.show("deleteOrganizationModal")}}},[a("i",{staticClass:"bi bi-trash"}),t.isLoading&&t.delete_id==e.id?a("div",{staticClass:"spinner-grow text-light spinner-grow-sm",attrs:{role:"status"}},[a("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e()])])])])})),0)])],1),t.organizations.data?a("div",{staticClass:"row mt-3"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:t.organizations},on:{"pagination-change-page":t.organizationSearch}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])]),a("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12 mt-3 mb-3"},[a("div",{staticClass:"card p-4"},[a("div",{staticClass:"d-flex align-items-center"},[t._m(1),a("div",{staticClass:"d-flex flex-column mt-2"},[a("button",{staticClass:"btn btn-purple",on:{click:function(e){return e.preventDefault(),t.$bvModal.show("newRoleModal")}}},[a("i",{staticClass:"bi bi-diagram-2"}),t._v(" New Role")])])]),a("div",{staticClass:"d-flex justify-content-end mt-2"},[a("div",{staticClass:"col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[a("div",{staticClass:"input-group form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_role,expression:"search_role"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchOrganization",placeholder:"Search here"},domProps:{value:t.search_role},on:{input:function(e){e.target.composing||(t.search_role=e.target.value)}}}),a("button",{staticClass:"btn btn-purple",on:{click:function(e){return e.preventDefault(),t.organizationRoleSearch.apply(null,arguments)}}},[a("i",{staticClass:"bi bi-search"})]),a("label",{attrs:{for:"floatingSearchOrganization"}},[t._v("Search")])])])]),a("div",{staticClass:"table-responsive mt-3"},[0==t.org_roles.data?a("div",[t._v("No roles for department added")]):t._e(),t.initialLoading||t.isSearching?a("b-skeleton-table",{attrs:{rows:4,columns:3,"table-props":{bordered:!1,striped:!0}}}):a("table",{staticClass:"table table-hover"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("ID")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Organization Role")]),a("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Added on")]),a("th",{attrs:{scope:"col"}},[t._v("Actions")])])]),a("tbody",t._l(t.org_roles.data,(function(e,n){return a("tr",{key:n},[a("th",[t._v(t._s(t.org_roles.from+n))]),a("td",[t._v(t._s(e.role))]),a("td",[t._v(t._s(t._f("moment")(e.created_at)))]),a("td",[a("div",{staticClass:"d-flex"},[a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",attrs:{disabled:t.isLoading,href:"",title:"Update"},on:{click:function(a){a.preventDefault(),t.role_update=Object.assign({},e),t.$bvModal.show("updateRoleModal")}}},[a("i",{staticClass:"bi bi-pencil-square"})]),a("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",attrs:{disabled:t.isLoading,href:"",title:"Delete"},on:{click:function(a){a.preventDefault(),t.delete_id=e.id,t.$bvModal.show("deleteModal")}}},[a("i",{staticClass:"bi bi-trash"}),t.isLoading?a("div",{staticClass:"spinner-grow text-light spinner-grow-sm",attrs:{role:"status"}},[a("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e()])])])])})),0)])],1),t.org_roles.data?a("div",{staticClass:"row mt-3"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:t.org_roles},on:{"pagination-change-page":t.organizationRoleSearch}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])])])]),a("b-modal",{attrs:{id:"newOrganizationModal",centered:"",title:"New Organization"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"success",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.saveOrganization.apply(null,arguments)}}},[t._v(" Save Organization ")])]}}])},[a("label",{staticClass:"mt-2",attrs:{for:"brand"}},[t._v("Logo")]),a("VueFileAgent",{ref:"vueFileAgent",staticClass:"mb-4",attrs:{multiple:!1,maxSize:"3MB",deletable:!0,accept:"image/*,",theme:"list",errorText:{type:"Invalid file type. Only image file is allowed",size:"Image should not exceed 3MB in size"}},on:{select:function(e){return t.filesSelected(e)},beforedelete:function(e){return t.onBeforeDelete(e)},delete:function(e){return t.fileDeleted(e)}},model:{value:t.fileRecords,callback:function(e){t.fileRecords=e},expression:"fileRecords"}}),a("div",{staticClass:"form-floating mb-2 mt-3 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.organization.organization,expression:"organization.organization"}],staticClass:"form-control",attrs:{type:"text",id:"newOrganization",placeholder:"name@example.com"},domProps:{value:t.organization.organization},on:{input:function(e){e.target.composing||t.$set(t.organization,"organization",e.target.value)}}}),a("label",{attrs:{for:"newOrganization"}},[t._v("Type a new organization")])]),a("div",{staticClass:"form-floating mb-2 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.organization.abbreviation,expression:"organization.abbreviation"}],staticClass:"form-control",attrs:{type:"text",id:"newOrgAbbrev",placeholder:""},domProps:{value:t.organization.abbreviation},on:{input:function(e){e.target.composing||t.$set(t.organization,"abbreviation",e.target.value)}}}),a("label",{attrs:{for:"newOrgAbbrev"}},[t._v("Abbreviation")])]),a("div",{staticClass:"mb-2 mt-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.organization.department_id,expression:"organization.department_id"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.organization,"department_id",e.target.multiple?a:a[0])}}},t._l(t.signup.unit,(function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)])],1),a("b-modal",{attrs:{id:"updateOrganizationModal",centered:"",title:"Update Organization"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"success",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.updateOrganization.apply(null,arguments)}}},[t._v(" Update ")])]}}])},[a("label",{staticClass:"mt-2",attrs:{for:"brand"}},[t._v("Logo")]),a("VueFileAgent",{ref:"vueFileAgent",staticClass:"mb-4",attrs:{multiple:!1,maxSize:"3MB",deletable:!0,accept:"image/*,",theme:"list",errorText:{type:"Invalid file type. Only image file is allowed",size:"Image should not exceed 3MB in size"}},on:{select:function(e){return t.filesSelected(e)},beforedelete:function(e){return t.onBeforeDelete(e)},delete:function(e){return t.fileDeleted(e)}},model:{value:t.fileRecords,callback:function(e){t.fileRecords=e},expression:"fileRecords"}}),a("div",{staticClass:"form-floating mb-2 mt-3 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.update_organization.name,expression:"update_organization.name"}],staticClass:"form-control",attrs:{type:"text",id:"updateOrganization",placeholder:""},domProps:{value:t.update_organization.name},on:{input:function(e){e.target.composing||t.$set(t.update_organization,"name",e.target.value)}}}),a("label",{attrs:{for:"updateOrganization"}},[t._v("Type a new organization")])]),a("div",{staticClass:"form-floating mb-2 mt-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.update_organization.abbreviation,expression:"update_organization.abbreviation"}],staticClass:"form-control",attrs:{type:"text",id:"updateOrgAbbrev",placeholder:""},domProps:{value:t.update_organization.abbreviation},on:{input:function(e){e.target.composing||t.$set(t.update_organization,"abbreviation",e.target.value)}}}),a("label",{attrs:{for:"updateOrgAbbrev"}},[t._v("Abbreviation")])]),a("div",{staticClass:"mb-2 mt-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.update_organization.department_id,expression:"update_organization.department_id"}],staticClass:"form-select",attrs:{id:"unitSelect","aria-label":"Department"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.update_organization,"department_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"default",selected:"",disabled:""}},[t._v("Select a department")]),t._l(t.signup.unit,(function(e,n){return a("option",{key:n,domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)])],1),a("b-modal",{attrs:{id:"deleteOrganizationModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.$bvModal.show("selectOrganizationModal")}}},[t._v(" Change Organization ")]),a("b-button",{attrs:{variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.deleteOrganization.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[a("p",{},[t._v("Deleting an organization will delete all accounts under that organization. You cannot undo this action but you can set a new organization for those accounts. Are you sure you want to delete this department?")])]),a("b-modal",{attrs:{id:"selectOrganizationModal",centered:"",title:"Select Organization"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"success"},on:{click:function(t){return n()}}},[t._v(" Save ")])]}}])},[a("p",{staticClass:"mb-3"},[t._v("If there are accounts under this organization, you can transfer them to a new organization so that those accounts will not be deleted.")]),a("label",{attrs:{for:"organizationModal"}},[a("small",[t._v("New Organization")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.new_organization,expression:"new_organization"}],staticClass:"form-select",attrs:{id:"organizationModal","aria-label":"Select Organization modal"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.new_organization=e.target.multiple?a:a[0]}}},t._l(t.organizations.data,(function(e,n){return a("option",{key:n,attrs:{disabled:t.delete_id==e.id},domProps:{value:e.id}},[t._v(t._s(e.organization))])})),0),t.organizations.data?a("div",{staticClass:"mt-4"},[a("pagination",{attrs:{showDisabled:!0,align:"right",data:t.organizations},on:{"pagination-change-page":t.getOrganizations}},[a("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),a("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()]),a("b-modal",{attrs:{id:"updateRoleModal",centered:"",title:"Update Role"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"success",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.updateRole.apply(null,arguments)}}},[t._v(" Update Role ")])]}}])},[a("div",{staticClass:"form-floating mb-2 mt-3 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.role_update.role,expression:"role_update.role"}],staticClass:"form-control",attrs:{type:"text",id:"updateRole",placeholder:""},domProps:{value:t.role_update.role},on:{input:function(e){e.target.composing||t.$set(t.role_update,"role",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Type a new role")])])]),a("b-modal",{attrs:{id:"newRoleModal",centered:"",title:"New Role"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"success",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.saveRole.apply(null,arguments)}}},[t._v(" Save Role ")])]}}])},[a("div",{staticClass:"form-floating mb-2 mt-3 "},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.role,expression:"data.role"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"name@example.com"},domProps:{value:t.data.role},on:{input:function(e){e.target.composing||t.$set(t.data,"role",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Type a new role")])])]),a("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"primary",disabled:t.isLoading},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return e.preventDefault(),t.$bvModal.show("selectRoleModal")}}},[t._v(" Change Role ")]),a("b-button",{attrs:{variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.deleteRole.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[a("p",{},[t._v("Deleting a role will delete all accounts under that role. You cannot undo this action but you can set a new role for those accounts. Are you sure you want to delete this role?")])]),a("b-modal",{attrs:{id:"selectRoleModal",centered:"",title:"Select Role"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[a("b-button",{attrs:{variant:"success"},on:{click:function(t){return n()}}},[t._v(" Save ")])]}}])},[a("p",{staticClass:"mb-3"},[t._v("If there are accounts under this role you can select a new role so that those accounts will not be deleted.")]),a("label",{attrs:{for:"floatingSelect text-muted "}},[a("small",[t._v("New Role")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.role,expression:"role"}],staticClass:"form-select",attrs:{id:"floatingSelect","aria-label":"Select role modal"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.role=e.target.multiple?a:a[0]}}},t._l(t.org_roles.data,(function(e,n){return a("option",{key:n,attrs:{disabled:t.delete_id==e.id},domProps:{value:e.id}},[t._v(t._s(e.role))])})),0)])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column me-auto mt-2"},[a("h5",{staticClass:"text-violet"},[t._v("Organizations")]),a("p",{staticClass:"mb-4"},[a("small",[t._v("Manage your organizations below")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column me-auto mt-2"},[a("h5",{staticClass:"text-violet"},[t._v("Organization Roles")]),a("p",{staticClass:"mb-4"},[a("small",[t._v("Manage your roles for organizations below")])])])}],o=a("5530"),i=a("1da1"),s=(a("4de4"),a("99af"),a("a434"),a("b0c0"),a("498a"),a("96cf"),a("2f62")),l=a("c1df"),c=a.n(l),d=a("2ef0"),u={components:{},filters:{moment:function(t){return c()(t).format("MMMM D, YYYY, h:mm a")}},data:function(){return{initialLoading:!1,isLoading:!1,delete_id:"",role:"",new_organization:"",data:{role:"",role_id:""},search_organization:"",search_role:"",isSearching:!1,organization:{organization:"",image:"",abbreviation:"",organization_id:""},update_organization:{organization:"",image:"",abbreviation:"",organization_id:"",department_id:"",department:{id:""}},fileRecords:[],fileRecordsForUpload:[],role_update:""}},watch:{search_organization:function(t,e){this.debouncedOrganizationSearch()},search_role:function(t,e){this.debouncedOrganizationRoleSearch()},"update_organization.department_id":function(){null==this.update_organization.department_id&&(this.update_organization.department_id="default")}},created:function(){this.debouncedOrganizationRoleSearch=d.debounce(this.organizationRoleSearch,1e3),this.debouncedOrganizationSearch=d.debounce(this.organizationSearch,1e3)},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Organization and Organization Roles Management",t.initialLoading=!0,e.next=4,t.$store.dispatch("depandorg/getOrganizations",1);case 4:return e.next=6,t.$store.dispatch("depandorg/getRoleOrganizations");case 6:return e.next=8,t.getSignUpInfo();case 8:t.initialLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])("auth",["getSignUpInfo"])),{},{filesSelected:function(t){var e=t.filter((function(t){return!t.error}));this.fileRecordsForUpload=this.fileRecordsForUpload.concat(e)},fileDeleted:function(t){var e=this.fileRecordsForUpload.indexOf(t);-1!==e&&this.fileRecordsForUpload.splice(e,1)},onBeforeDelete:function(t){console.log(t);var e=this.fileRecordsForUpload.indexOf(t);if(-1!==e){this.fileRecordsForUpload.splice(e,1);var a=this.fileRecords.indexOf(t);-1!==a&&this.fileRecords.splice(a,1)}},getOrganizations:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,a.next=3,e.$store.dispatch("depandorg/getOrganizations",n);case 3:case"end":return a.stop()}}),a)})))()},getRoleOrganizations:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:1,a.next=3,e.$store.dispatch("depandorg/getRoleOrganizations",n);case 3:case"end":return a.stop()}}),a)})))()},deleteRole:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("depandorg/deleteOrgRole",{id:t.delete_id,role:t.role});case 2:a=e.sent,t.isLoading=!0,200==a.status&&(t.$toast.success("Role deleted successfully!"),t.$bvModal.hide("deleteModal")),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},saveOrganization:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.organization.organization){e.next=2;break}return e.abrupt("return",t.$toast.error("Organization name is required!"));case 2:if(t.isLoading=!0,!(t.fileRecordsForUpload.length>0)){e.next=8;break}return e.next=6,t.$refs.vueFileAgent.upload("http://127.0.0.1:8000/api/admin/uploadOrganizationImage?token="+localStorage.getItem("auth"),{"X-Requested-With":"XMLHttpRequest"},t.fileRecordsForUpload);case 6:a=e.sent,t.organization.image=a[0].data;case 8:return e.next=10,t.$store.dispatch("depandorg/saveOrganization",t.organization);case 10:if(n=e.sent,200!=n.status){e.next=17;break}return e.next=14,t.$store.dispatch("depandorg/getOrganizations",1);case 14:t.$toast.success("Organization added successfully!"),t.$bvModal.hide("newOrganizationModal"),t.organization={organization:"",abbreviation:"",organization_id:""};case 17:t.isLoading=!1;case 18:case"end":return e.stop()}}),e)})))()},updateOrganization:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.update_organization.name){e.next=2;break}return e.abrupt("return",t.$toast.error("Organization name is required"));case 2:if(t.isLoading=!0,!(t.fileRecordsForUpload.length>0)){e.next=8;break}return e.next=6,t.$refs.vueFileAgent.upload("http://127.0.0.1:8000/api/admin/uploadOrganizationImage?token="+localStorage.getItem("auth"),{"X-Requested-With":"XMLHttpRequest"},t.fileRecordsForUpload);case 6:a=e.sent,t.update_organization.image=a[0].data;case 8:return e.next=10,t.$store.dispatch("depandorg/updateOrganization",t.update_organization);case 10:if(n=e.sent,200!=n.status){e.next=17;break}return e.next=14,t.$store.dispatch("depandorg/getOrganizations",1);case 14:t.$toast.success("Organization updated successfully!"),t.$bvModal.hide("updateOrganizationModal"),t.update_organization={organization:"",abbreviation:"",organization_id:""};case 17:t.isLoading=!1;case 18:case"end":return e.stop()}}),e)})))()},deleteOrganization:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("depandorg/deleteOrganization",{id:t.delete_id,data:t.new_organization});case 3:if(a=e.sent,200!=a.status){e.next=11;break}return e.next=7,t.$store.dispatch("depandorg/getOrganizations",1);case 7:t.$toast.success("Organization deleted successfully!"),t.$bvModal.hide("deleteOrganizationModal"),t.new_organization="",t.delete_id="";case 11:t.isLoading=!1;case 12:case"end":return e.stop()}}),e)})))()},saveRole:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.data.role.trim()){e.next=2;break}return e.abrupt("return",t.$toast.error("Role is required"));case 2:return t.isLoading=!0,e.next=5,t.$store.dispatch("depandorg/saveOrgRole",t.data);case 5:if(a=e.sent,200!=a.status){e.next=12;break}return e.next=9,t.$store.dispatch("depandorg/getRoleOrganizations");case 9:t.$toast.success("Role added successfully!"),t.$bvModal.hide("newRoleModal"),t.data={role:"",role_id:""};case 12:t.isLoading=!1;case 13:case"end":return e.stop()}}),e)})))()},updateRole:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("depandorg/updateOrgRole",t.role_update);case 3:a=e.sent,200==a.status&&(t.$toast.success("Role updated successfully!"),t.$bvModal.hide("updateRoleModal"),t.role_update=""),t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},searchOrganization:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isSearching=!0,n={search:e.search_organization},a.next=4,e.$store.dispatch("depandorg/searchOrganization",{page:t,data:n});case 4:e.isSearching=!1;case 5:case"end":return a.stop()}}),a)})))()},searchOrganizationRole:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isSearching=!0,n={search:e.search_role},a.next=4,e.$store.dispatch("depandorg/searchOrganizationRole",{page:t,data:n});case 4:e.isSearching=!1;case 5:case"end":return a.stop()}}),a)})))()},organizationSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search_organization?this.getOrganizations(t):this.searchOrganization(t)},organizationRoleSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search_role?this.getRoleOrganizations(t):this.searchOrganizationRole(t)}}),computed:Object(o["a"])(Object(o["a"])({},Object(s["c"])("depandorg",["organizations","org_roles"])),Object(s["c"])("auth",["signup"]))},p=u,g=a("2877"),v=Object(g["a"])(p,n,r,!1,null,null,null);e["default"]=v.exports},"99af":function(t,e,a){"use strict";var n=a("23e7"),r=a("d039"),o=a("e8b5"),i=a("861d"),s=a("7b0b"),l=a("50c4"),c=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),g=a("2d00"),v=p("isConcatSpreadable"),f=9007199254740991,m="Maximum allowed index exceeded",b=g>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=u("concat"),_=function(t){if(!i(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},z=!b||!h;n({target:"Array",proto:!0,forced:z},{concat:function(t){var e,a,n,r,o,i=s(this),u=d(i,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],_(o)){if(r=l(o.length),p+r>f)throw TypeError(m);for(a=0;a<r;a++,p++)a in o&&c(u,p,o[a])}else{if(p>=f)throw TypeError(m);c(u,p++,o)}return u.length=p,u}})},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),o=a("a691"),i=a("50c4"),s=a("7b0b"),l=a("65f0"),c=a("8418"),d=a("1dde"),u=d("splice"),p=Math.max,g=Math.min,v=9007199254740991,f="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var a,n,d,u,m,b,h=s(this),_=i(h.length),z=r(t,_),w=arguments.length;if(0===w?a=n=0:1===w?(a=0,n=_-z):(a=w-2,n=g(p(o(e),0),_-z)),_+a-n>v)throw TypeError(f);for(d=l(h,n),u=0;u<n;u++)m=z+u,m in h&&c(d,u,h[m]);if(d.length=n,a<n){for(u=z;u<_-n;u++)m=u+n,b=u+a,m in h?h[b]=h[m]:delete h[b];for(u=_;u>_-n+a;u--)delete h[u-1]}else if(a>n)for(u=_-n;u>z;u--)m=u+n-1,b=u+a-1,m in h?h[b]=h[m]:delete h[b];for(u=0;u<a;u++)h[u+z]=arguments[u+2];return h.length=_-n+a,d}})},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}}}]);
//# sourceMappingURL=chunk-d892b4cc.fc001a3a.js.map