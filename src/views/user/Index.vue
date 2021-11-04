<template>
 <div>
   <Navbar />
   <Sidebar />
    <div class="main-content">
     <router-view name="userdashboard"/>
     <router-view name="post"/>
     <router-view name="members"/>
     <router-view name="createpost"/>
     <router-view name="updatepost"/>
     <router-view name="deporganization"/>
     <router-view name="usersettings"/>
     <router-view name="osafaqs"/>
     <router-view name="directory"/>
     <router-view name="osapost"/>
     <router-view name="osaorganizations"/>
   </div>
 </div>
</template>
<script>
import Navbar from '../components/user/Navbar.vue'
import Sidebar from '../components/user/Sidebar.vue'
export default {
  components: { Navbar, Sidebar },
  created(){
    this.sideBarMobile()
  },
  mounted() {
    this.sideBarMobile()
  },
  methods: {
   sideBarMobile(){
     setTimeout(() => {
       let sidebar = document.getElementById('user-sidenav')
       let sidebarBtn = document.getElementById('navbtn')
       let closeNavBtn = document.getElementById('close-nav')
       sidebarBtn.addEventListener('click', function(){
         sidebar.classList.add('sidenav-active')
       })
  
       closeNavBtn.addEventListener('click', function(){
        sidebar.classList.remove('sidenav-active')
       })
     }, 1500)
   }
  },
  computed: {
    getRoute: function(){
      return this.$route.path
    }
  },
  watch: {
    getRoute(){
       let sidebar = document.getElementById('user-sidenav')
       sidebar.classList.remove('sidenav-active')
    }
  }
}
</script>