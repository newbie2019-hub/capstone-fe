<template>
  <div class="admin">
   <Sidenav />
   <Navbar />
   <div class="main-content">
     <router-view name="dashboard"/>
     <router-view name="universityinfo"/>
     <router-view name="newofficial"/>
     <router-view name="updateofficial"/>
     <router-view name="review"/>
     <router-view name="settings"/>
     <router-view name="faqs"/>
     <router-view name="accounts"/>
     <router-view name="newaccount"/>
     <router-view name="accountupdate"/>
     <router-view name="organization"/>
     <router-view name="department"/>
     <router-view name="basiceducandcolleges"/>
     <router-view name="createbasiceducandcollege"/>
     <router-view name="updatebasiceducandcollege"/>
     <router-view name="teldirectory"/>
     <router-view name="archivedaccounts"/>
     <router-view name="permission"/>
     <router-view name="courses"/>
     <router-view name="logs"/>
     <router-view name="accountlogs"/>
     <router-view name="newcourse"/>
     <router-view name="userposts"/>
     <router-view name="updatecourse"/>
   </div>
  </div>
</template>
<script>
import Sidenav from '../components/admin/Sidebar.vue'
import Navbar from '../components/admin/Navbar.vue'
export default {
  components: {Sidenav, Navbar},
  mounted() {
    this.sideBarMobile()
  },
  methods: {
   sideBarMobile(){
     let sidebar = document.getElementById('admin-sidenav')
     let sidebarBtn = document.getElementById('navbtn')
     let closeNavBtn = document.getElementById('close-nav')

     sidebarBtn.addEventListener('click', function(){
       sidebar.classList.add('sidenav-active')

     })

     closeNavBtn.addEventListener('click', function(){
      sidebar.classList.remove('sidenav-active')
     })
   }
  },
  computed: {
    getRoute: function(){
      return this.$route.path
    }
  },
  watch: {
    getRoute(){
       let sidebar = document.getElementById('admin-sidenav')
       sidebar.classList.remove('sidenav-active')
    }
  }

}
</script>
