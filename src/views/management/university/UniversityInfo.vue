<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center m-0">
   <div class="col-11 col-sm-12 col-md-12 col-lg-7 col-xl-6">
     <div class="card pe-5 ps-5 pt-5 pb-4 br-20 mb-2">
       <div class="d-flex ">
         <div class="d-flex flex-column me-auto">
           <h4 v-if="user.length != 0">{{msg}}, {{user.admininfo.last_name}}</h4>
           <p class="mt-3 lh-1 -1 mb-3">You can manage all of the info's about the university here. </p>
         </div>
         <div class="cardimg">
           <img src="@/assets/images/lightning.svg" alt="" class="img-fluid" > 
         </div>
       </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-6">
      <div class="row justify-content-center m-0 mb-4">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
          <div class="card mt-2 sys-primary text-white br-20 ps-4 p-3" :class="msg == 'Good Morning' ? 'bg-morning' : '' || msg == 'Good Afternoon' ? 'bg-afternoon' : '' || msg == 'Good Evening' ? 'bg-evening' : ''">
           <b-skeleton-wrapper v-if="initialLoading">
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
            </b-skeleton-wrapper>
            <div class="lh-l">
              <p class="date">{{date}}</p>
              <p class="time">{{time}}</p>
            </div>
          </div>
        </div>
      </div>
     </div>
  </div>

  <div class="row  mt-5 mb-3 m-0 ps-lg-1 ps-xl-1 ps-md-4 pe-0 pe-md-4 pe-lg-2 pe-xl-5">
    <div class="col-12 col-md-12 col-lg-6 col-xl-6">
      <h5 class="text-center fw-bold">THE UNIVERSITY</h5>
      <p class="text-muted text-center mb-3"><small>MISSION/VISION</small></p>
      <carousel id="carousel" :perPage="1" :scrollPerPage="true" :autoPlayTimeout="1000">
      <slide v-for="lnumission in info" :key="lnumission.lnu_mission">
        <div class="corevalue">
          <blockquote>
            <div class="d-flex justify-content-end">
              <a href="" @click.prevent="mission = lnumission; $bvModal.show('updateMissionModal')"><i class="bi bi-pencil-square"></i></a>
            </div>
            <span class="fw-bold">OUR MISSION</span><br><br>
             <span><small>{{lnumission.lnu_mission}}</small></span>
          </blockquote>
        </div>
      </slide>
      <slide v-for="lnuvision in info" :key="lnuvision.lnu_vision">
        <div class="corevalue">
            <blockquote>
            <div class="d-flex justify-content-end">
              <a href="" @click.prevent="vision = lnuvision; $bvModal.show('updateVisionModal')"><i class="bi bi-pencil-square"></i></a>
            </div>
            <span class="fw-bold">OUR VISION</span><br><br>
            <span><small>{{lnuvision.lnu_vision}}</small></span>
          </blockquote>
        </div>
      </slide>
      </carousel>
    </div>
    <div class="col-12 col-md-11 col-lg-6 col-xl-6">
      <h5 class="text-center fw-bold">CORE VALUES</h5>
      <p class="text-muted text-center mb-3"><small>Approved as per BOR no. 705, s.2015</small></p>
      <carousel id="carousel" :perPage="1" :scrollPerPage="true" :autoPlayTimeout="1000">
      <slide v-for="(cv, i) in core_values" :key="i" >
        <div class="corevalue">
          <blockquote>
            <div class="d-flex justify-content-end">
            <a href="" @click.prevent="core_value = cv; $bvModal.show('updateCVModal')"><i class="bi bi-pencil-square"></i></a>
            </div>
            <span class="fw-bold">{{cv.core_value.toUpperCase()}}</span><br><br>
            <span class=""><small>{{cv.description}}</small></span>
          </blockquote>
        </div>
      </slide>
      </carousel>
    </div>
  </div>
   
  <!---SCHOOL OFFICIALS --->
  <div class="row m-0 mb-4">
   <div class="col-12 col-md-12 col-lg-12 col-xl-12 pe-xl-5 mt-3">
    <div class="card p-5">
    <h5 class="text-violet fw-bold">SCHOOL OFFICIALS</h5>
    <p class="text-muted fw-bold lh-r"><small>ADMINISTRATION</small></p>
    <div class="d-flex justify-content-end mt-4">
      <router-link to="/home/official/new" class="btn btn-purple btn-sm d-flex align-items-center me-2">
        <i class="bi bi-plus-circle me-2"></i> Add Official
      </router-link>
      <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
        <div class="input-group form-floating">
          <input type="text" v-model="search" class="form-control" id="floatingSearchDep" placeholder="Search here"/>
          <label for="floatingSearchDep" class="">Search</label>
          <button @click.prevent="officialSearch" class="btn btn-purple"><i class="bi bi-search"></i></button>
        </div>
      </div>
    </div>
    <div class="table-responsive mt-4">
      <b-skeleton-table :rows="6" :columns="10" :table-props="{ bordered: false, striped: true }" v-if="(initialLoading && officials.data == 0) || isOfficialTableLoading"></b-skeleton-table>
        <table class="table table-hover" v-else>
          <caption>Showing {{officials.from}} to {{officials.to}} of {{officials.total}} data</caption>
          <thead v-if="!initialLoading">
            <tr>
              <th scope="col"></th>
              <th scope="col" class="text-nowrap">Title</th>
              <th scope="col" class="text-nowrap">First Name</th>
              <th scope="col" class="text-nowrap">Last Name</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(official, i) in officials.data" :key="i">
              <th scope="row" class="justify-content-center" v-if="officials.data != 0">
                <avatar :size="40" :src="'http://127.0.0.1:8000/uploads/' + official.image" :username="official.first_name + ' ' + official.last_name"></avatar>
              </th>
              <td>{{official.title}}</td>
              <td>{{official.first_name}}</td>
              <td>{{official.last_name}}</td>
              <td>{{official.role}}</td>
              <td>{{official.email}}</td>
              <td>
                <div class="d-flex">
                  <button v-on:click.prevent="setUpdateAccount(official)" v-b-tooltip.hover title="Update Account Account" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                   <i class="bi bi-pencil-square"></i>
                  </button>
                  <button :disabled="isLoading && current_id == official.id" v-on:click.prevent="data.id = official.id; $bvModal.show('deleteModal')" v-b-tooltip.hover title="Delete Account" class="btn btn-sm btn-danger rounded-pill btn-approve" >
                    <i v-if="current_id != official.id" class="bi bi-trash"></i>
                    <div v-if="isLoading && current_id == official.id" class="spinner-grow text-light spinner-grow-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
       </div>
       <div class="row" v-if="officials.data">
       <pagination :showDisabled="true" :align="'right'" :data="officials" @pagination-change-page="getOfficials">
          <span slot="prev-nav">&laquo;</span>
          <span slot="next-nav">&raquo;</span>
        </pagination>
       </div>
     </div>
    </div>
   </div>
  </div>

  <!-- DELETE SCHOOL OFFICIAL MODAL --->
  <b-modal id="deleteModal" centered title="Confirm Delete">
    <p class="">Are you sure you want to delete this school official?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button variant="danger" v-on:click.prevent="deleteOfficial" :disabled="isLoading">
        Delete
      </b-button>
    </template>
   </b-modal>

  <!-- UPDATE CORE VALUES MODAL --->
  <b-modal id="updateCVModal" centered title="Update Core Value">
      <div class="form-floating mb-2 mt-3 ">
      <input v-model="core_value.core_value" type="text" class="form-control" id="updateCV" placeholder="" autocomplete="off">
      <label for="updateCV">Core Value</label>
      </div>
      <div class="form-floating mb-2 mt-4 ">
      <input v-model="core_value.description" type="text" class="form-control" id="updateCVDesc" placeholder="" autocomplete="off">
      <label for="updateCVDesc">Description</label>
      </div>
      <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="updateCV" :disabled="isLoading">
          Update
      </b-button>
      </template>
  </b-modal>

  <!-- UPDATE MISSION MODAL --->
  <b-modal id="updateMissionModal" centered title="Update Mission">
    <div class="form mb-2 text-center">
      <textarea v-model="mission.lnu_mission" type="text" class="form-control text-justify" id="updateMission" placeholder="TEXT HERE" autocomplete="off"></textarea>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="updateMission" :disabled="isLoading">
        Update
      </b-button>
    </template>
  </b-modal>

  <!-- UPDATE VISION MODAL --->
  <b-modal id="updateVisionModal" centered title="Update Vision">
    <div class="form mb-2  text-center">
      <textarea v-model="vision.lnu_vision" type="text" class="form-control" id="updateVision" placeholder="TEXT HERE" autocomplete="off"></textarea>
    </div>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" @click="cancel()"> Cancel </b-button>
      <b-button variant="success" v-on:click.prevent="updateVision" :disabled="isLoading">
        Update
      </b-button>
    </template>
  </b-modal>
 </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

import {mapState, mapActions} from 'vuex'
import moment from 'moment'
import Avatar from 'vue-avatar'
const _ = require('lodash');

export default {
  data(){
   return {
    msg: 'Good Day',
    time: '',
    date: '',
    initialLoading: false,
    isLoading: false,
    current_id: '',
    search: '',
    schoolinfo: {
     title: '',
     content: '',
    },
    core_value: '',
    mission: '',
    vision: '',
    data: {
      id: '',
    },
    isOfficialTableLoading: false,
   }
  },
  components: { Avatar, Carousel, Slide},
  watch: {
   search: function(after, before) {
    this.debouncedOfficialSearch()
   },
  },
  created: function () {
    this.debouncedOfficialSearch = _.debounce(this.officialSearch, 1000)
  },
  async mounted() {
   document.title = "University Information Management"
   this.initialLoading = true
   setInterval(() =>{
      this.currentdate()
      this.currenttime()
      this.greetingMsg()
    }, 1000)
  
   await this.getUniOfficials();
   await this.getUniInfo();
   await this.getCoreValues();
   this.initialLoading = false

  },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('universityinfo', ['officials', 'info', 'core_values']),
  },
  methods: {
    ...mapActions('universityinfo', ['getUniOfficials', 'getUniInfo', 'getCoreValues']),
    setUpdateAccount(data) {
      this.$store.commit('universityinfo/SET_UPDATE_ACCOUNT', { data: data });
      this.$router.push({ name: 'updateofficial', params: { slug: data.id } });
    },
    async deleteOfficial(){
      this.isLoading = true
      this.current_id = this.data.id
      const { data, status } = await this.$store.dispatch('universityinfo/deleteOfficial', this.data)

      if(status == 200){
        await this.getUniOfficials();
        this.$toast.success(data.msg);
        this.$bvModal.hide('deleteModal');
      }
      else {
        this.$toast.error(data.msg);
      }

      this.current_id = ''
      this.isLoading = false

    },
    currentdate(){
      var a = new Date();
      this.date = moment(a).format(' MMMM D[,] YYYY'); 
    },
    async updateMission(){
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveMission', this.mission)
      if(res.status == 200 ){
        this.$toast.success('Mission updated successfully!')
        this.$bvModal.hide('updateMissionModal')
        this.mission = ''
      }
      this.isLoading = false
    },
    async updateVision(){
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveVision', this.vision)
      if(res.status == 200 ){
        this.$toast.success('Vision updated successfully!')
        this.$bvModal.hide('updateVisionModal')
        this.vision = ''
      }
      this.isLoading = false
    },
    async updateCV(){
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveCV', this.core_value)
      if(res.status == 200 ){
        this.$toast.success('Core Value updated successfully!')
        this.$bvModal.hide('updateCVModal')
        this.core_value = ''
      }
      this.isLoading = false
    },
    async searchOfficial(page) {
      let data = {
        search: this.search,
      };
      await this.$store.dispatch('universityinfo/searchUniversityOfficial', { page: page, data: data });
   },
   async officialSearch(page = 1) {
    this.isOfficialTableLoading = true
    if (this.search == '') {
     await this.getOfficials(page);
     this.isOfficialTableLoading = false;
    } else {
     await this.searchOfficial(page);
     this.isOfficialTableLoading = false;
    }
   },
    currenttime(){
      var a = new Date();
      this.time =  moment(a).format('hh:mm:ss A'); 
    },
    greetingMsg(){
      var today = new Date()
      var curHr = today.getHours()

      if (curHr < 12) {
        this.msg = 'Good Morning'
      } else if (curHr < 18) {
        this.msg = 'Good Afternoon'
      } else {
        this.msg = 'Good Evening'
      }
    },
    async getOfficials(page = 1){
     this.$store.dispatch('universityinfo/getUniOfficials', page)
    },
    

  }
}
</script>