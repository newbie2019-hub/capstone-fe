(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b90bf1a"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,s){var n=s("c6b6"),a=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var r=s.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},6171:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[s("div",{staticClass:"row justify-content-center mt-3"},[s("div",{staticClass:"col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12"},[s("div",{staticClass:"card p-5 mb-4"},[t._m(0),s("div",{staticClass:"d-flex justify-content-end mt-2"},[s("button",{staticClass:"btn rounded-pill d-flex align-items-center me-2",on:{click:function(e){return e.preventDefault(),t.$bvModal.show("noteModal")}}},[s("i",{staticClass:"bi bi-question-circle bi-2x"})]),s("div",{staticClass:"col-10 col-sm-5 col-md-5 col-lg-4 col-xl-3"},[s("div",{staticClass:"input-group form-floating"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"floatingSearchOrg",placeholder:"Search here"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),s("label",{attrs:{for:"floatingSearchOrg"}},[t._v("Search here")]),t._m(1)])])]),s("div",{staticClass:"table-responsive mt-4"},[0==t.posts?s("div",[t._v("No Posts found")]):t._e(),t.initialLoading?s("b-skeleton-table",{attrs:{rows:4,columns:7,"table-props":{bordered:!1,striped:!0}}}):t._e(),t.initialLoading?t._e():s("table",{staticClass:"table table-hover table-striped"},[s("caption",[t._v("Showing "+t._s(t.posts.from)+" to "+t._s(t.posts.to)+" out of "+t._s(t.posts.total)+" posts.")]),t._m(2),s("tbody",[0!=t.posts.data||t.initialLoading?t._e():s("tr",[s("td",{staticClass:"text-center pt-3 pb-3",attrs:{colspan:"8"}},[t._v("No data available")])]),t._l(t.posts.data,(function(e,n){return s("tr",{key:n},[s("td",{on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[e.postcontent.image?s("img",{attrs:{src:t.imgURL+"/"+e.postcontent.image,alt:"",width:"100"}}):s("p",{staticClass:"text-muted"},[t._v("No Image")])]),s("td",{staticClass:"text-nowrap cursor-pointer",on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[t._v(" "+t._s(e.useraccount.userinfo.first_name)+" "+t._s(e.useraccount.userinfo.last_name)),s("br"),s("small",[s("span",{},[t._v(t._s(e.useraccount.deleted_at?"Account Deleted":""))])])]),s("td",{staticClass:"text-nowrap cursor-pointer",on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[t._v(" "+t._s(e.postcontent.title)+" "),s("br")]),s("td",[s("b-badge",{staticClass:"rounded-pill ",class:"Approved"==e.status?"bg-success":"bg-danger"},[t._v(t._s(e.status))])],1),s("td",[s("span",{staticClass:"text-muted fw-bold"},[s("small",[t._v(t._s(e.deleted_at?"Deleted":""))])])]),s("td",{staticClass:"cursor-pointer",on:{click:function(s){s.preventDefault(),t.viewPost=e,t.$bvModal.show("viewPostModal")}}},[s("div",{staticStyle:{width:"250px"}},[t._v(" "+t._s(e.postcontent.post_excerpt)+" ")])]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t._f("moment")(e.created_at)))]),s("td",[s("div",{staticClass:"d-flex"},[e.deleted_at?t._e():s("button",{staticClass:"btn btn-sm btn-danger d-flex me-2",on:{click:function(s){t.deletePost=e.id,t.$bvModal.show("deleteModal")}}},[s("i",{staticClass:"bi bi-trash me-1"}),t._v(" Delete ")]),e.deleted_at&&!e.useraccount.deleted_at?s("button",{staticClass:"btn btn-sm btn-secondary d-flex me-2",on:{click:function(s){t.restorePost=e.id,t.$bvModal.show("restoreModal")}}},[s("i",{staticClass:"bi bi-recycle me-1"}),t._v(" Restore ")]):t._e()])])])}))],2)])],1),t.posts.data?s("div",{staticClass:"row mt-3"},[s("pagination",{attrs:{showDisabled:!0,align:"right",data:t.posts}},[s("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[t._v("«")]),s("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[t._v("»")])])],1):t._e()])])])]),s("b-modal",{attrs:{id:"noteModal",centered:"",title:"Note"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Close ")])]}}])},[s("p",{},[t._v("Listed on the table are the posts created by the users. For the deleted posts, you can restore it if the user account is not deleted. But, if you'd wish to really restore the post you can then restore the account first on the "),s("router-link",{attrs:{to:"/home/archived/accounts"}},[t._v("Archived Account")]),t._v(" section.")],1)]),s("b-modal",{attrs:{id:"deleteModal",centered:"",title:"Confirm Delete"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.destroyPost.apply(null,arguments)}}},[t._v(" Delete ")])]}}])},[s("p",{},[t._v("Are you sure you want to delete this post?")])]),s("b-modal",{attrs:{id:"restoreModal",centered:"",title:"Confirm Restore"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Cancel ")]),s("b-button",{attrs:{variant:"danger",disabled:t.isLoading},on:{click:function(e){return e.preventDefault(),t.revertPost.apply(null,arguments)}}},[t._v(" Restore ")])]}}])},[s("p",{},[t._v("Are you sure you want to restore this post?")])]),s("b-modal",{attrs:{id:"viewPostModal",scrollable:"",centered:"",title:t.viewPost.postcontent.title},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[s("b-button",{attrs:{variant:"primary"},on:{click:function(t){return n()}}},[t._v(" Close ")])]}}])},[s("div",{domProps:{innerHTML:t._s(t.viewPost.postcontent.content)}}),s("p",{staticClass:"mt-3"},[s("small",[t._v("Date Posted: "+t._s(t._f("moment")(t.viewPost.created_at)))])]),s("p",{},[s("small",[t._v("Posted by: "+t._s(t.viewPost.useraccount.userinfo.first_name)+" "+t._s(t.viewPost.useraccount.userinfo.last_name))])])])],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"d-flex flex-column me-auto mt-2"},[s("h5",{staticClass:"text-violet"},[t._v("USER POSTS")]),s("p",{staticClass:"mb-4"},[s("small",[t._v("Manage post added by the users below")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-purple"},[s("i",{staticClass:"bi bi-search"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Image")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("User")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Title")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Status")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Deleted")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Post Excerpt")]),s("th",{staticClass:"text-nowrap",attrs:{scope:"col"}},[t._v("Date Posted")]),s("th",{attrs:{scope:"col"}},[t._v("Actions")])])])}],r=s("1da1"),o=s("5530"),c=(s("ac1f"),s("841c"),s("96cf"),s("2f62")),i=s("c1df"),l=s.n(i),u=s("2ef0"),d={data:function(){return{viewPost:{useraccount:{userinfo:{first_name:"",last_name:""}},postcontent:{title:"",content:""}},initialLoading:!1,isLoading:!1,isSearching:!1,search:"",approve_post:{id:""},post:{title:"",content:"",image:""},update:{title:"",content:"",image:""},deletePost:"",restorePost:""}},filters:{moment:function(t){return l()(t).format("MMM D, YYYY, h:mm a")}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])("auth",["user"])),Object(c["c"])("post",["posts","post_types"])),mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Info Kiosk - Post Management",t.initialLoading=!0,e.next=4,t.checkUser();case 4:return e.next=6,t.$store.dispatch("post/getUserPosts",1);case 6:t.initialLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])("auth",["checkUser"])),{},{destroyPost:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("post/deleteUserPost",t.deletePost);case 3:if(s=e.sent,200!=s.status){e.next=11;break}return e.next=7,t.$store.dispatch("post/getUserPosts",1);case 7:t.$toast.success("Post deleted successfully!"),t.$bvModal.hide("deleteModal"),e.next=12;break;case 11:t.$toast.error("Something went wrong");case 12:t.isLoading=!1;case 13:case"end":return e.stop()}}),e)})))()},revertPost:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$store.dispatch("post/restoreUserPost",t.restorePost);case 3:if(s=e.sent,200!=s.status){e.next=11;break}return e.next=7,t.postSearch();case 7:t.$toast.success("Post restored successfully!"),t.$bvModal.hide("restoreModal"),e.next=12;break;case 11:t.$toast.error("Something went wrong");case 12:t.isLoading=!1;case 13:case"end":return e.stop()}}),e)})))()},searchPost:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return n={search:e.search},e.isSearching=!0,s.next=4,e.$store.dispatch("post/searchUserPosts",{page:t,data:n});case 4:e.isSearching=!1;case 5:case"end":return s.stop()}}),s)})))()},getPost:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,e.$store.dispatch("post/getUserPosts",t);case 2:case"end":return s.stop()}}),s)})))()},postSearch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;""==this.search?this.getPost(t):this.searchPost(t)}}),created:function(){this.debouncedPostSearch=u.debounce(this.postSearch,800)},watch:{search:function(t,e){this.debouncedPostSearch()}}},p=d,v=s("2877"),f=Object(v["a"])(p,n,a,!1,null,null,null);e["default"]=f.exports},"841c":function(t,e,s){"use strict";var n=s("d784"),a=s("825a"),r=s("1d80"),o=s("129f"),c=s("14c3");n("search",1,(function(t,e,s){return[function(e){var s=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,s):new RegExp(e)[t](String(s))},function(t){var n=s(e,t,this);if(n.done)return n.value;var r=a(t),i=String(this),l=r.lastIndex;o(l,0)||(r.lastIndex=0);var u=c(r,i);return o(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},9263:function(t,e,s){"use strict";var n=s("ad6d"),a=s("9f7f"),r=s("5692"),o=RegExp.prototype.exec,c=r("native-string-replace",String.prototype.replace),i=o,l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=l||d||u;p&&(i=function(t){var e,s,a,r,i=this,p=u&&i.sticky,v=n.call(i),f=i.source,h=0,m=t;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),m=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(f="(?: "+f+")",m=" "+m,h++),s=new RegExp("^(?:"+f+")",v)),d&&(s=new RegExp("^"+f+"$(?!\\s)",v)),l&&(e=i.lastIndex),a=o.call(p?s:i,m),p?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=i.lastIndex,i.lastIndex+=a[0].length):i.lastIndex=0:l&&a&&(i.lastIndex=i.global?a.index+a[0].length:e),d&&a&&a.length>1&&c.call(a[0],s,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(a[r]=void 0)})),a}),t.exports=i},"9f7f":function(t,e,s){"use strict";var n=s("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,s){"use strict";var n=s("23e7"),a=s("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,s){"use strict";var n=s("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,s){"use strict";s("ac1f");var n=s("6eeb"),a=s("9263"),r=s("d039"),o=s("b622"),c=s("9112"),i=o("species"),l=RegExp.prototype,u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=o("replace"),v=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,p){var h=o(t),m=!r((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),b=m&&!r((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[i]=function(){return s},s.flags="",s[h]=/./[h]),s.exec=function(){return e=!0,null},s[h](""),!e}));if(!m||!b||"replace"===t&&(!u||!d||v)||"split"===t&&!f){var g=/./[h],_=s(h,""[t],(function(t,e,s,n,r){var o=e.exec;return o===a||o===l.exec?m&&!r?{done:!0,value:g.call(e,s,n)}:{done:!0,value:t.call(s,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),x=_[0],w=_[1];n(String.prototype,t,x),n(l,h,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}p&&c(l[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-8b90bf1a.d4370685.js.map