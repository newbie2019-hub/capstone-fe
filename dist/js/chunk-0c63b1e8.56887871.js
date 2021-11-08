(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c63b1e8"],{"3e30":function(e,t,a){},"4bc6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"},[a("div",{staticClass:"card mb-3 pe-5 ps-5 pb-4 pt-4"},[a("h5",{staticClass:"mt-3"},[e._v("Create Post")]),a("p",{staticClass:"text-muted"},[e._v("All fields are required")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.savePost.apply(null,arguments)}}},[a("div",{staticClass:"col-10 col-sm-10 col-md-7 col-lg-6"},[a("label",{staticClass:"mt-3",attrs:{for:""}},[e._v("Image")]),a("VueFileAgent",{ref:"vueFileAgent",staticClass:"mb-2",attrs:{multiple:!1,maxSize:"5MB",deletable:!0,accept:"image/*,",theme:"list",errorText:{type:"Invalid file type. Only image file is allowed",size:"Image should not exceed 5MB in size"}},on:{select:function(t){return e.filesSelected(t)},beforedelete:function(t){return e.onBeforeDelete(t)},delete:function(t){return e.fileDeleted(t)}},model:{value:e.fileRecords,callback:function(t){e.fileRecords=t},expression:"fileRecords"}}),a("label",{staticClass:"mt-1",attrs:{for:"posttitle"}},[e._v("Enter Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.data.title,expression:"data.title"}],staticClass:"form-control",attrs:{type:"text",id:"posttitle",placeholder:" "},domProps:{value:e.data.title},on:{input:function(t){t.target.composing||e.$set(e.data,"title",t.target.value)}}}),a("label",{staticClass:"mt-1",attrs:{for:"postexcerpt"}},[e._v("Post Excerpt")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.data.post_excerpt,expression:"data.post_excerpt"}],staticClass:"form-control",attrs:{type:"text",id:"postexcerpt",placeholder:" "},domProps:{value:e.data.post_excerpt},on:{input:function(t){t.target.composing||e.$set(e.data,"post_excerpt",t.target.value)}}}),a("label",{staticClass:"mt-2",attrs:{for:"updatecontent"}},[e._v("Content")])],1),a("vue-editor",{attrs:{id:"editor",customModules:e.customModulesForEditor,editorOptions:e.editorSettings,editorToolbar:e.customToolbar,useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.data.content,callback:function(t){e.$set(e.data,"content",t)},expression:"data.content"}}),a("div",{staticClass:"d-flex mt-3"},[a("button",{staticClass:"btn btn-success btn-sm me-1",attrs:{type:"submit",disabled:e.isLoading}},[e._v("Save Post")]),a("a",{staticClass:"btn btn-secondary btn-sm",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.$router.back()}}},[e._v("Cancel")])])],1)])])])])])},o=[],r=a("5530"),i=a("1da1"),n=(a("4de4"),a("99af"),a("a434"),a("96cf"),a("5873")),l=a("a60e"),c=a.n(l),d=a("2a19"),u=a("2f62"),p={components:{VueEditor:n["a"]},data:function(){return{customModulesForEditor:[{alias:"imageDrop",module:d["a"]},{alias:"imageResize",module:c.a}],fileRecords:[],fileRecordsForUpload:[],editorSettings:{modules:{imageDrop:!0,imageResize:{}}},customToolbar:[[{header:[!1,1,2,3,4,5,6]}],["bold","italic","underline","strike"],[{align:""},{align:"center"},{align:"right"},{align:"justify"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{list:"check"}],[{script:"sub"},{script:"super"}],[{color:[]},{background:[]}],["link","image"],["clean"]],data:{title:"",content:"",post_excerpt:""},isLoading:!1,initialLoading:!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.title="Create Post - Touchless Information Management",e.isLoading=!0,e.initialLoading=!0,t.next=5,e.checkAuthUser();case 5:e.initialLoading=!1,e.isLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},methods:Object(r["a"])(Object(r["a"])({},Object(u["b"])("auth",["checkAuthUser"])),{},{filesSelected:function(e){var t=e.filter((function(e){return!e.error}));this.fileRecordsForUpload=this.fileRecordsForUpload.concat(t)},fileDeleted:function(e){var t=this.fileRecordsForUpload.indexOf(e);-1!==t&&this.fileRecordsForUpload.splice(t,1)},onBeforeDelete:function(e){console.log(e);var t=this.fileRecordsForUpload.indexOf(e);if(-1!==t){this.fileRecordsForUpload.splice(t,1);var a=this.fileRecords.indexOf(e);-1!==a&&this.fileRecords.splice(a,1)}},handleImageAdded:function(e){var t=new FormData;t.append("image",e)},savePost:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.data.title){t.next=2;break}return t.abrupt("return",e.$toast.error("Title is required!"));case 2:if(""!=e.data.content){t.next=4;break}return t.abrupt("return",e.$toast.error("Post content is required!"));case 4:if(""!=e.data.post_excerpt){t.next=6;break}return t.abrupt("return",e.$toast.error("Post excerpt is required!"));case 6:if(!(e.fileRecordsForUpload.length>0)){t.next=11;break}return t.next=9,e.$refs.vueFileAgent.upload("".concat(e.envURL,"/user/uploadPostImage?token=")+localStorage.getItem("auth"),{"X-Requested-With":"XMLHttpRequest"},e.fileRecordsForUpload);case 9:a=t.sent,e.data.image=a[0].data;case 11:return e.isLoading=!0,t.next=14,e.$store.dispatch("post/savePost",e.data);case 14:s=t.sent,200==s.status&&(e.$toast.success("Post added successfully!"),e.data={title:"",content:""},e.$router.back()),e.isLoading=!1;case 17:case"end":return t.stop()}}),t)})))()}})},f=p,m=(a("9b68"),a("2877")),g=Object(m["a"])(f,s,o,!1,null,null,null);t["default"]=g.exports},"9b68":function(e,t,a){"use strict";a("3e30")}}]);
//# sourceMappingURL=chunk-0c63b1e8.56887871.js.map