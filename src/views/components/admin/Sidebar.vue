<template>
  <div>
   <div class="sidenav" id="admin-sidenav">
     <div class="close-nav" id="close-nav">X</div>
     <h6 class="text-white mb-3 ms-2">UNIVERSITY</h6>
     <router-link to="/home/dashboard" ><i class="bi bi-app-indicator me-2 bi-2x"></i><span class="sidenav-sr"> Dashboard</span></router-link>
     <router-link to="/home/accounts" :class="getRoute == '/home/account/new' ? 'router-link-active' : ''"><i class="bi bi-person-circle me-2 bi-2x"></i> <span class="sidenav-sr">Accounts</span></router-link>
     <router-link to="/home/department" ><i class="bi bi-diagram-2 me-2 bi-3x"></i> <span class="sidenav-sr">Departments</span></router-link>
     <router-link to="/home/organization" ><i class="bi bi-grid me-2 bi-2x"></i> <span class="sidenav-sr">Organization</span></router-link>
     <router-link to="/home/permission" ><i class="bi bi-shield-check me-2 bi-2x"></i> <span class="sidenav-sr">Permission</span></router-link>
     <a href="" :class="checkRoute" @click.prevent="toggleExpand" ref="expandedmenubtn">
       <div class="d-flex align-items-center w-100">
        <i class="bi bi-info-circle me-2 bi-2x"></i> 
        <span class="sidenav-sr me-auto">University</span>
        <i class="bi bi-arrow-right-short mx-auto bi-2x" ref="rightarrow"></i>
        <i class="bi bi-arrow-down-short mx-auto bi-2x expand" ref="downarrow"></i>
       </div>
     </a>
     <div class="expand w-100 bg-submenu" ref="expandedmenu">
      <router-link to="/home/universityinfo" class="w-100 d-inline-block">
        <i class="bi bi-diagram-2"></i>
        <span class="sidenav-sr">
          Info
        </span>
      </router-link>
      <router-link to="/home/faqs" class="w-100 d-inline-block">
        <i class="bi bi-question-circle"></i>
        <span class="sidenav-sr">
          FAQs
        </span>
      </router-link>
      <router-link to="/home/teldirectory" class="w-100 d-inline-block">
        <i class="bi bi-telephone"></i>
        <span class="sidenav-sr">
          Tel Directory
        </span>
      </router-link>
      <router-link to="/home/basiceducandcolleges" class="w-100 d-inline-block">
        <i class="bi bi-filter-right me-1"></i>
        <span class="sidenav-sr">Basic Education and Colleges</span>
      </router-link>
      <router-link to="/home/courses" class="w-100 d-inline-block">
        <i class="bi bi-sort-alpha-up me-1"></i>
        <span class="sidenav-sr">Courses</span>
      </router-link>
     </div>
     <router-link to="/home/reviews" ><i class="bi bi-emoji-laughing me-2 bi-2x"></i> <span class="sidenav-sr">Reviews</span></router-link>

     <h6 class="text-white mt-4 mb-3 ms-2">USERS ACTIVITY</h6>
     <router-link to="/home/userposts" ><i class="bi bi-stickies me-2 bi-2x"></i> <span class="sidenav-sr">User Post</span></router-link>
     <router-link to="/home/logs" ><i class="bi bi-journal-text me-2 bi-2x"></i> <span class="sidenav-sr">User Activity</span></router-link>
     <router-link to="/home/archived/accounts"><i class="bi bi-people me-2 bi-2x"></i> <span class="sidenav-sr">Archived</span></router-link>
     <!-- <router-link to="/home/admin/updates" ><i class="bi bi-megaphone me-2 bi-2x"></i> <span class="sidenav-sr">Updates</span></router-link> -->
     <h6 class="text-white mt-4 mb-3 ms-2">ACCOUNT</h6>
     <router-link to="/home/admin/logs" ><i class="bi bi-journal-text me-2 bi-2x"></i> <span class="sidenav-sr">Activity Logs</span></router-link>
     <a class="text-white mobile-logout" to="" v-on:click.prevent="$bvModal.show('logoutModal')"><i class="bi bi-x-circle me-2 "></i> <span class="sidenav-sr">Logout</span></a>
     <router-link to="/home/settings" ><i class="bi bi-tools me-2 bi-2x"></i> <span class="sidenav-sr">Settings</span></router-link>
   </div>
  </div>
</template>
<script>

export default {
 computed: {
  getRoute: function(){
    return this.$route.path
  },
  checkRoute: function(){
     let route = ['/home/universityinfo', '/home/goalsandobjectives', '/home/teldirectory', '/home/goalsandobjectives']
     let flag = false
     route.forEach(route => {
      if(this.getRoute == route){
        flag = true
      }
     });
     if(flag){
       return 'router-link-active'
     }
     else {
       return ''
     }
   }
 },
 methods: {
   toggleExpand(){
      this.$refs.expandedmenu.classList.toggle('expand')
      this.$refs.rightarrow.classList.toggle('expand')
      this.$refs.downarrow.classList.toggle('expand')
      this.$refs.expandedmenubtn.classList.toggle('expandedmenu-active')
   },
   
 }
}
</script>