(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bdbbe65"],{"0b9e":function(t,e,n){t.exports=n.p+"img/lnulogo.59c8c4c1.png"},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var r=n("c6b6"),a=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var s=n.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"2e7b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[r("div",{staticClass:"card mb-3 pe-5 ps-5 pb-4 pt-4"},[r("h5",{staticClass:"mt-4"},[t._v("Organization Monitoring")]),r("p",{staticClass:"text-muted"},[t._v("Manage organization member post below")]),t.viewMembers?t._e():r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"table-responsive mt-4"},[r("div",{staticClass:"row justify-content-end mb-3"},[r("div",{staticClass:"col-10 col-sm-8 col-md-5 col-lg-4 col-xl-4"},[r("b-input-group",[r("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),r("b-input-group-append",[r("b-button",{staticClass:"rounded-0",attrs:{filter:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)]),r("b-table",{attrs:{id:"orgstable",items:t.organizations,filter:t.filter,"sort-icon-left":"","filter-included-fields":["name","abbreviation"],fields:t.orgSelectionFields,"per-page":8,"current-page":t.currentOrgPage,striped:""},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"table-caption",fn:function(){return[t._v("Organizations of the university ")]},proxy:!0},{key:"cell(logo)",fn:function(e){return[e.item.image?r("img",{attrs:{src:t.imgURL+"/"+e.item.image,alt:"",width:"40"}}):r("img",{attrs:{src:n("0b9e"),alt:"",width:"40"}})]}},{key:"cell(actions)",fn:function(e){return[r("b-button",{staticClass:"mr-1 btn-purple ",attrs:{variant:"",size:"sm"},on:{click:function(n){t.currentOrganization=e.item.members,t.viewMembers=!0}}},[t._v(" View ")])]}}],null,!1,714419503)}),r("div",{staticClass:"d-flex justify-content-end"},[r("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.organizations.length,"per-page":8,"aria-controls":"orgstable"},model:{value:t.currentOrgPage,callback:function(e){t.currentOrgPage=e},expression:"currentOrgPage"}})],1)],1)]),t.viewMembers&&!t.viewPost?r("div",{staticClass:"table-responsive mt-4"},[r("button",{staticClass:"btn btn-purple",on:{click:function(e){t.viewMembers=!1}}},[r("i",{staticClass:"bi bi-arrow-left me-2"}),t._v(" Return ")]),t.viewMembers?r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"table-responsive mt-4"},[r("div",{staticClass:"row justify-content-end mb-3"},[r("div",{staticClass:"col-10 col-sm-8 col-md-5 col-lg-4 col-xl-4"},[r("b-input-group",[r("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filterMembers,callback:function(e){t.filterMembers=e},expression:"filterMembers"}}),r("b-input-group-append",[r("b-button",{staticClass:"rounded-0",attrs:{filter:!t.filterMembers},on:{click:function(e){t.filterMembers=""}}},[t._v("Clear")])],1)],1)],1)]),r("b-table",{attrs:{id:"orgstable",items:t.currentOrganization,filter:t.filterMembers,"sort-icon-left":"","filter-included-fields":[],"show-empty":"",fields:t.orgMemberFields,"per-page":8,"current-page":t.currentOrgMemberPage,striped:""},on:{filtered:t.onFilteredMembers},scopedSlots:t._u([{key:"table-caption",fn:function(){return[t._v("Members of the selected organization")]},proxy:!0},{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(e.item.userinfo.first_name)+" "+t._s(e.item.userinfo.last_name)+" ")]}},{key:"cell(role)",fn:function(e){return[t._v(" "+t._s(e.item.userinfo.role.role)+" ")]}},{key:"cell(actions)",fn:function(e){return[r("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn btn-sm btn-purple me-2",attrs:{title:"View Posts"},on:{click:function(n){n.preventDefault(),t.posts=e.item.posts,t.viewPost=!0}}},[t._v(" Post ")]),r("b-button",{staticClass:"mr-1 btn-purple ",attrs:{variant:"",size:"sm"},on:{click:function(n){t.accDisplayed=e.item,t.$bvModal.show("viewInfoModal"),t.viewMembers=!0}}},[t._v(" Details ")])]}}],null,!1,655980184)}),r("div",{staticClass:"d-flex justify-content-end"},[r("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.currentOrganization.length,"per-page":8,"aria-controls":"orgstable"},model:{value:t.currentOrgMemberPage,callback:function(e){t.currentOrgMemberPage=e},expression:"currentOrgMemberPage"}})],1)],1)]):t._e()]):t._e(),t.viewPost?r("div",{staticClass:"mt-4 mb-3"},[r("button",{staticClass:"btn btn-purple",on:{click:function(e){e.preventDefault(),t.viewPost=!1,t.posts=[]}}},[r("i",{staticClass:"bi bi-arrow-left me-2"}),t._v("Return")])]):t._e(),t.viewPost?r("div",{staticClass:"table-responsive mt-3"},[t.isLoading?r("b-skeleton-table",{attrs:{rows:4,columns:7,"table-props":{bordered:!1,striped:!0}}}):t._e(),t.isLoading?t._e():r("table",{staticClass:"table table-hover"},[t._m(0),r("tbody",t._l(t.posts,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"cursor-pointer",on:{click:function(n){n.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(n+1))]),r("td",{staticClass:"cursor-pointer",on:{click:function(n){n.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[e.postcontent.image?r("img",{attrs:{src:t.imgURL+"/"+e.postcontent.image,alt:"",width:"100"}}):r("p",{staticClass:"text-muted"},[t._v("No Image")])]),r("td",{staticClass:"cursor-pointer text-nowrap",on:{click:function(n){n.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(e.postcontent.title))]),r("td",{staticClass:"cursor-pointer",on:{click:function(n){n.preventDefault(),t.postContent=e,t.$bvModal.show("viewPostModal")}}},[t._v(t._s(e.postcontent.post_excerpt))]),r("td",[r("b-badge",{staticClass:"rounded-pill",attrs:{variant:"Approved"==e.status?"success":"info"}},[t._v(t._s(e.status))])],1),r("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("moment")(e.created_at)))]),r("td",[r("div",{staticClass:"d-flex"},["Approved"!=e.status?r("button",{staticClass:"btn btn-sm btn-success rounded-pill btn-approve me-2",on:{click:function(n){n.preventDefault(),t.approve_post.id=e.id,t.$bvModal.show("approvePostModal")}}},[r("i",{staticClass:"bi bi-check"})]):t._e(),r("button",{staticClass:"btn btn-sm btn-danger rounded-pill btn-approve me-2",on:{click:function(n){t.deletePost=e.id,t.$bvModal.show("deletePostModal")}}},[r("i",{staticClass:"bi bi-trash"})])])])])})),0)])],1):t._e()])])])]),r("b-modal",{attrs:{id:"viewPostModal",scrollable:"",centered:"",title:t.postContent.postcontent.title},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Close ")])]}}])},[r("div",{domProps:{innerHTML:t._s(t.postContent.postcontent.content)}}),r("p",{staticClass:"mt-4"},[r("small",[t._v("Views: "+t._s(t.postContent.views))])]),r("p",{staticClass:" mb-2"},[r("small",[t._v("Date Posted: "+t._s(t._f("moment")(t.postContent.created_at)))])])]),r("b-modal",{attrs:{id:"viewInfoModal",centered:"",title:"Account Info"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Close ")])]}}])},[r("div",{staticClass:"row justify-content-center text-center"},[r("b-avatar",{attrs:{size:"6rem",variant:"dark",src:t.imgURL+"/"+t.accDisplayed.userinfo.image}}),r("h5",{staticClass:"mt-3 "},[t._v(t._s(t.accDisplayed.userinfo.first_name)+" "+t._s(t.accDisplayed.userinfo.last_name))]),r("p",{},[t._v(t._s(t.accDisplayed.email))]),r("p",{},[t._v("Contact: "+t._s(t.accDisplayed.userinfo.contact_number))]),r("p",{},[t._v("Gender: "+t._s(t.accDisplayed.userinfo.gender))]),r("p",{},[t._v("Role: "+t._s(t.accDisplayed.userinfo.role.role))])],1)]),r("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[r("b-button",{attrs:{variant:"primary",size:"sm",disabled:t.isLoading},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),r("b-button",{attrs:{size:"sm",variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.removeAccount.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[r("p",[t._v("Are you sure you want to delete this account?")])]),r("b-modal",{attrs:{id:"deletePostModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[r("b-button",{attrs:{variant:"primary",size:"sm",disabled:t.isLoading},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),r("b-button",{attrs:{size:"sm",variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.destroyPost.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[r("p",[t._v("Are you sure you want to delete this account?")])]),r("b-modal",{attrs:{id:"approvePostModal",centered:"",title:"Confirm Approve"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[r("b-button",{attrs:{disabled:t.isLoading,variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),r("b-button",{attrs:{disabled:t.isLoading,variant:"success"},on:{click:function(e){return e.preventDefault(),t.approvePost.apply(null,arguments)}}},[t._v(" Approve ")])]}}])},[r("p",{},[t._v("Are you sure you want to approve this post?")])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("ID")]),n("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Image")]),n("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Title")]),n("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Post Excerpt")]),n("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Status")]),n("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date Posted")]),n("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],s=n("1da1"),o=n("5530"),i=(n("159b"),n("ac1f"),n("841c"),n("96cf"),n("2f62")),c=n("c1df"),l=n.n(c),u=n("2ef0"),d={filters:{moment:function(t){return l()(t).format("MMM Do YYYY, h:mm a")}},watch:{search:function(t,e){this.debouncedOrgMemberSearch()}},created:function(){this.debouncedOrgMemberSearch=u.debounce(this.orgmembersSearch,1e3)},data:function(){return{initialLoading:!1,isLoading:!1,isSearching:!1,currentOrganization:"",selectedOrganization:"",postContent:{postcontent:{title:"",content:""}},viewPost:!1,posts:[],current_id:"",search:"",accDisplayed:{organization:{name:""},userinfo:{image:"",first_name:"",last_name:"",role:{role:""}}},approve_post:{id:""},deletePost:"",currentOrgPage:1,currentOrgMemberPage:1,viewMembers:!1,filter:null,filterMembers:null,orgSelectionFields:[{key:"id",sortable:!0},{key:"logo"},{key:"name",sortable:!0},{key:"abbreviation",sortable:!0},{key:"actions"}],orgMemberFields:[{key:"id",sortable:!0},{key:"name"},{key:"role"},{key:"actions"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])("auth",["user"])),Object(i["c"])("osa",["organizations"])),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Organization Members",t.initialLoading=!0,t.isLoading=!0,e.next=5,t.$store.dispatch("auth/checkAuthUser");case 5:return e.next=7,t.$store.dispatch("osa/getOrganizations",1);case 7:t.isLoading=!1,t.initialLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},methods:{setCurrentOrganization:function(){var t=this;this.organizations.forEach((function(e){e.id==t.selectedOrganization&&(t.currentOrganization=e.members)}))},onFiltered:function(t){this.totalRows=t.length,this.currentOrgPage=1},onFilteredMembers:function(t){this.totalRows=t.length,this.currentOrgMemberPage=1},destroyPost:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("post/deleteOrgMemberPost",t.deletePost);case 3:n=e.sent,200==n.status?(t.viewPost=!1,t.$router.go(),t.$toast.success("Post deleted successfully!")):t.$toast.error("Something went wrong"),t.$bvModal.hide("deletePostModal"),t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},approvePost:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("post/approveOrgMemberPost",t.approve_post);case 2:n=e.sent,200==n.status?(t.viewPost=!1,t.$toast.success("Post has been approved")):t.$toast.error("Something went wrong"),t.$bvModal.hide("approvePostModal");case 5:case"end":return e.stop()}}),e)})))()},searchOrganizationMember:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isSearching=!0,r={search:e.search},n.next=4,e.$store.dispatch("osa/searchOrganization",{page:t,data:r});case 4:e.isSearching=!1;case 5:case"end":return n.stop()}}),n)})))()},getOrgMembers:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,n.next=3,e.$store.dispatch("osa/getOrganizations",r);case 3:case"end":return n.stop()}}),n)})))()},orgmembersSearch:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:1,e.isSearching=!0,""!=e.search){n.next=8;break}return n.next=5,e.getOrgMembers(r);case 5:e.isSearching=!1,n.next=11;break;case 8:return n.next=10,e.searchOrganizationMember(r);case 10:e.isSearching=!1;case 11:case"end":return n.stop()}}),n)})))()}}},p=d,f=n("2877"),v=Object(f["a"])(p,r,a,!1,null,null,null);e["default"]=v.exports},"841c":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),s=n("1d80"),o=n("129f"),i=n("14c3");r("search",1,(function(t,e,n){return[function(e){var n=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=a(t),c=String(this),l=s.lastIndex;o(l,0)||(s.lastIndex=0);var u=i(s,c);return o(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},9263:function(t,e,n){"use strict";var r=n("ad6d"),a=n("9f7f"),s=n("5692"),o=RegExp.prototype.exec,i=s("native-string-replace",String.prototype.replace),c=o,l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=l||d||u;p&&(c=function(t){var e,n,a,s,c=this,p=u&&c.sticky,f=r.call(c),v=c.source,b=0,m=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",m=" "+m,b++),n=new RegExp("^(?:"+v+")",f)),d&&(n=new RegExp("^"+v+"$(?!\\s)",f)),l&&(e=c.lastIndex),a=o.call(p?n:c,m),p?a?(a.input=a.input.slice(b),a[0]=a[0].slice(b),a.index=c.lastIndex,c.lastIndex+=a[0].length):c.lastIndex=0:l&&a&&(c.lastIndex=c.global?a.index+a[0].length:e),d&&a&&a.length>1&&i.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),t.exports=c},"9f7f":function(t,e,n){"use strict";var r=n("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),s=n("d039"),o=n("b622"),i=n("9112"),c=o("species"),l=RegExp.prototype,u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=o("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),v=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var b=o(t),m=!s((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),g=m&&!s((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return e=!0,null},n[b](""),!e}));if(!m||!g||"replace"===t&&(!u||!d||f)||"split"===t&&!v){var h=/./[b],_=n(b,""[t],(function(t,e,n,r,s){var o=e.exec;return o===a||o===l.exec?m&&!s?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),w=_[0],x=_[1];r(String.prototype,t,w),r(l,b,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}p&&i(l[b],"sham",!0)}}}]);
//# sourceMappingURL=chunk-7bdbbe65.ca48d3a8.js.map