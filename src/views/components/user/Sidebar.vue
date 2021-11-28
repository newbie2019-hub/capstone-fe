<template>
  <div>
   <div class="sidenav" id="user-sidenav">
     <div class="close-nav" id="close-nav">X</div>
     <h6 class="text-white mb-4 ms-2">MANAGEMENT</h6>
     <router-link v-if="$can('orgunit_dashboard') || $can('osa_permissions')" to="/user/dashboard" :class="getRoute == '/home' ? 'router-link-active' : ''"><i class="bi bi-app-indicator me-2 bi-2x"></i><span class="sidenav-sr"> Dashboard</span></router-link>
     <router-link v-if="$can('orgunit_posts')" to="/user/post"><i class="bi bi-receipt me-2 bi-2x"></i> <span class="sidenav-sr">Posts</span></router-link>
     <router-link v-if="$can('orgunit_members')" to="/user/members"><i class="bi bi-person me-2 bi-2x"></i> <span class="sidenav-sr">Members</span></router-link>
     <router-link v-if="$can('access_organization')"  to="/user/department/organization"><i class="bi bi-people me-2 bi-2x"></i> <span class="sidenav-sr">Organization</span></router-link>
     <router-link v-if="$can('osa_permissions')" to="/user/osa/post" ><i class="bi bi-megaphone me-2 bi-2x"></i> <span class="sidenav-sr">Posts</span></router-link>
     <router-link v-if="$can('osa_permissions')" to="/user/directory" class="w-100"><i class="bi bi-telephone bi-2x me-2"></i><span class="sidenav-sr">Tel Directory</span></router-link>
     <router-link v-if="$can('osa_permissions')" to="/user/faqs" class="w-100"><i class="bi bi-question-circle me-2 bi-2x"></i><span class="sidenav-sr">FAQs</span></router-link>
     <router-link v-if="$can('osa_permissions')" to="/user/osa/organizations" class="w-100"><i class="bi bi-list-ul me-2 bi-2x"></i><span class="sidenav-sr">Organizations</span></router-link>
     <router-link v-if="$can('osa_permissions')" to="/user/osa/archived" class="w-100"><i class="bi bi-archive me-2 bi-2x"></i><span class="sidenav-sr">Archived Post</span></router-link>
     <router-link to="/user/activity/log" class="w-100"><i class="bi bi-journal-text me-2 bi-2x"></i><span class="sidenav-sr">Activity Log</span></router-link>
     <router-link to="/user/settings"><i class="bi bi-tools me-2 bi-2x"></i> <span class="sidenav-sr">Settings</span></router-link>
     <a class="text-white mobile-logout" to="" v-on:click.prevent="$bvModal.show('logoutModal')"><i class="bi bi-x-circle me-2 "></i> <span class="sidenav-sr">Logout</span></a>
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