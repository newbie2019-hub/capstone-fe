<template>
  <div>
   <div class="navbar " :class="scrollpx >= 50 ? 'navbar-scrolled' : ''">
    <input type="checkbox" id="nav" class="hidden">
    <label for="nav" class="nav-btn" id="navbtn">
      <i></i>
      <i></i>
      <i></i>
    </label> 
    <div class="d-flex me-auto" v-if="user.length != 0">
     <avatar :username="user.userinfo.first_name + ' ' + user.userinfo.last_name" :src="'http://127.0.0.1:8000/uploads/' + user.userinfo.image"></avatar>
     <div class="d-flex flex-column justify-content-center ms-3">
      <h6 v-if="user.length != 0">{{user.userinfo.first_name}} {{user.userinfo.last_name}}</h6>
      <h6 v-if="user.length != 0 && user.userinfo.organization"><small class="font-weight-400" >{{user.userinfo.organization.abbreviation ? user.userinfo.organization.abbreviation : user.userinfo.organization.name}} - {{user.userinfo.role.role}}</small></h6>
      <h6 v-if="user.length != 0 && user.userinfo.department"><small class="font-weight-400" >{{user.userinfo.role.role}}</small></h6>
      <h6 v-if="user.length != 0 && user.userinfo.role.role == 'OSA'"><small class="font-weight-400" >{{user.userinfo.role.role}}</small></h6>
      <!-- <h6 v-if="user.length != 0 && user.userinfo.department"><small class="font-weight-400" >{{user.userinfo.department.abbreviation ? user.userinfo.department.abbreviation : user.userinfo.department.name}} - {{user.userinfo.role.role}}</small></h6> -->
     </div>
    </div>
    <div class="d-flex">
     <i v-b-tooltip.hover title="Dark Mode" class="bi bi-lightbulb c-primary bi-3x dark-mode-margin"></i>
    </div>
    <a href="" v-on:click.prevent="$bvModal.show('logoutModal')" class=" text-decoration-none ms-2 logout-btn">
      <div class="d-flex btn-logout ms-4 justify-content-center flex-row align-items-center c-primary ">
      <i class="bi bi-box-arrow-in-right bi-2x logout-btn me-2"></i>  
       Log-out
      </div>
    </a>
   </div>

   <b-modal id="logoutModal" centered title="Logout">
    <p class="my-4">Are you sure you want to log-out?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" size="sm" @click="cancel()"> Cancel </b-button>
      <b-button size="sm" variant="danger" v-on:click.prevent="logout">
        Logout
      </b-button>
    </template>
   </b-modal>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Avatar from 'vue-avatar'
export default {
 components: {
    Avatar
  },
  data(){
    return {
      scrollpx: 0,
    }
  },
  async mounted(){
   await this.checkAuthUser();
  },
  computed: {
   ...mapState('auth', ['user'])
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
   ...mapActions('auth', ['checkAuthUser', 'logoutAuthUser']),
   async logout(){
     const res = await this.logoutAuthUser()
     if(res.status == 200){
       this.$router.push('/')
     }
   },
   handleScroll() {
      this.scrollpx = window.scrollY;
   },
  }
 
}
</script>