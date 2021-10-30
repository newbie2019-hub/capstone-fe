<template>
  <div>
   <div class="sidenav" id="user-sidenav">
     <div class="close-nav" id="close-nav">X</div>
     <h6 class="text-white mb-4 ms-2">MANAGEMENT</h6>
     <router-link to="/user/dashboard" :class="getRoute == '/home' ? 'router-link-active' : ''"><i class="bi bi-app-indicator me-2 bi-2x"></i><span class="sidenav-sr"> Dashboard</span></router-link>
     <router-link to="/user/post"><i class="bi bi-receipt me-2 bi-2x"></i> <span class="sidenav-sr">Posts</span></router-link>
     <router-link to="/user/members"><i class="bi bi-person me-2 bi-3x"></i> <span class="sidenav-sr">Members</span></router-link>
     <router-link v-if="$can('access_organization')"  to="/user/department/organization"><i class="bi bi-people me-2 bi-3x"></i> <span class="sidenav-sr">Organization</span></router-link>
     <router-link to="/user/settings"><i class="bi bi-tools me-2 bi-3x"></i> <span class="sidenav-sr">Settings</span></router-link>
   </div>
  </div>
</template>
<script>

export default {
 computed: {
  getRoute: function(){
    return this.$route.path
  }
 }
}
</script>