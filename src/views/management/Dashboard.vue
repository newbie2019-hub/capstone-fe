<template>
  <div>
    <div class="row justify-content-center m-0">
      <div class="col-12 col-md-11 col-lg-7 col-xl-6">
        <div class="card pe-5 ps-5 pt-5 pb-4 br-20">
          <div class="d-flex ">
            <div class="d-flex flex-column me-auto">
              <h4 v-if="user">{{msg}}, {{user.admininfo.last_name}}</h4>
              <p class="mt-3 lh-1 -1">It's good to know you're here. <br/>Have a great day</p>
            </div>
            <div class="cardimg">
              <img src="@/assets/images/lightning.svg" alt="" class="img-fluid" > 
            </div>
          </div>
        </div>
        <div class="card mt-5 mb-4 p-5 br-20">
          <div class="d-flex">
            <div class="d-flex flex-column me-auto">
              <h5>Pending Accounts</h5>
              <p class="mb-4"><small>Here are the list of recent accounts </small></p>
            </div>
            <div class="d-flex">
              <a href="accounts" class="text-decoration-none text-violet cursor-pointer ">View All</a>
            </div>
          </div>
          <div class="table-responsive">
            <b-skeleton-table
              :rows="3"
              :columns="4"
              :table-props="{ bordered: true, striped: false }"
              v-if="initialLoading && accounts == 0"
            ></b-skeleton-table>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" class="text-nowrap">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(acc, i) in accounts" :key="i">
                  <th scope="row" class="d-flex justify-content-center" v-if="acc.length != 0">
                    <b-avatar variant="dark" :src="`${imgURL}/${acc.userinfo.image}`" ></b-avatar>
                  </th>
                  <td v-if="acc.length != 0" class="text-nowrap">{{acc.userinfo.first_name}} {{acc.userinfo.last_name}}</td>
                  <td v-if="acc.length != 0">{{acc.email}}</td>
                  <td>
                    <div class="d-flex">
                      <!--- DO NOT REMOVE - APPROVE BUTTON FROM ADMIN ---->
                      <!-- <button href="" v-b-tooltip.hover title="Approve Account"  v-on:click.prevent="setStatus(acc.id)" :disabled="isLoading && current_id == acc.id"  class="btn me-2 btn-sm btn-purple rounded-pill btn-approve">
                        <i v-if="current_id != acc.id" class="bi bi-check2" ></i>
                        <div v-if="isLoading && current_id == acc.id" class="spinner-grow text-light spinner-grow-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </button> -->
                      <button href="" v-on:click.prevent="$bvModal.show('deleteModal'); id = acc.id;" v-b-tooltip.hover title="Delete Account" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                        <i v-if="current_id != acc.id" class="bi bi-trash"></i>
                        <div v-if="isLoading && current_id == acc.id" class="spinner-grow text-light spinner-grow-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-11 col-lg-5 col-xl-6">
        <div class="row justify-content-center mb-4">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-10">
              <div class="card sys-primary text-white br-20 ps-4 p-3" :class="msg == 'Good Morning' ? 'bg-morning' : '' || msg == 'Good Afternoon' ? 'bg-afternoon' : '' || msg == 'Good Evening' ? 'bg-evening' : ''">
                <div class="lh-l">
                  <b-skeleton-wrapper v-if="initialLoading">
                    <b-skeleton width="85%"></b-skeleton>
                    <b-skeleton width="55%"></b-skeleton>
                  </b-skeleton-wrapper>
                  <p class="date">{{date}}</p>
                  <p class="time">{{time}}</p>
                </div>
              </div>
          </div>
        </div>
        <!-- ACCOUNTS AND POST -->
        <div class="row justify-content-center">
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                <i class="bi bi-person-circle me-2 bi-5x"></i>
                <h6 class="mt-2">ACCOUNTS</h6>
              </div>
              <div class="summary-container">
                <b-skeleton v-if="initialLoading"></b-skeleton>
                <p class="summary-text" v-else>
                  {{summary.users}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex mb-3 flex-column justify-content-center align-items-center">
                <i class="bi bi-receipt me-2 bi-5x"></i>
                <h6 class="mt-2">POSTS</h6>
              </div>
              <div class="summary-container">
                <b-skeleton v-if="initialLoading"></b-skeleton>
                <p class="summary-text" v-else>
                  {{summary.post}}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--- DEPARTMENT  AND ORG --->
        <div class="row justify-content-center">
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                <i class="bi bi-diagram-2 me-2 bi-5x"></i>
                <h6 class="mt-2">DEPARTMENT</h6>
              </div>
              <div class="summary-container">
                <b-skeleton v-if="initialLoading"></b-skeleton>
                <p class="summary-text" v-else>
                  {{summary.unit}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-6 col-lg-6 col-xl-5">
            <div class="card pe-5 ps-5 pb-5 pt-4 br-20 mb-4">
              <div class="d-flex mb-3 flex-column justify-content-center align-items-center">
                <i class="bi bi-grid me-2 bi-5x"></i>
                <h6 class="mt-2">ORGANIZATION</h6>
              </div>
              <div class="summary-container">
                <b-skeleton v-if="initialLoading"></b-skeleton>
                <p class="summary-text" v-else>
                  {{summary.org}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- DELETE MODAL --->
  <b-modal id="deleteModal" centered title="Confirm Delete">
    <p class="my-4">Are you sure you want to delete this account?</p>
    <template #modal-footer = {cancel} >
      <b-button variant="primary" size="sm" @click="cancel()" :disabled="isLoading"> Cancel </b-button>
      <b-button size="sm" variant="danger" v-on:click.prevent="removeAccount" :disabled="isLoading">
        Delete
      </b-button>
    </template>
   </b-modal>

  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import moment from 'moment'
export default {
  data(){
    return {
      date: '',
      time: '',
      current_id: '',
      id: '',
      msg: 'Good Day ',
      isLoading: false,
      initialLoading: false,
    }
  },
  async mounted(){
   this.initialLoading = true
   document.title = "Welcome to Dashboard"
   this.$store.dispatch('dashboard/recentAccounts')
   this.$store.dispatch('dashboard/summary')

   setInterval(() =>{
      this.currentdate()
      this.currenttime()
      this.greetingMsg()
    }, 1000)
  
   this.initialLoading = false
  },
  computed: {
   ...mapState('auth', ['user']),
   ...mapState('dashboard', ['accounts', 'summary']),
  },
  methods: {
   ...mapActions('account', ['approveAccount']),
   currentdate(){
      var a = new Date();
      this.date = moment(a).format(' MMMM D[,] YYYY'); 
    },
    currenttime(){
      var a = new Date();
      this.time =  moment(a).format('hh:mm:ss A'); 
    },
     async removeAccount(){
       this.isLoading = true
      const res = await this.$store.dispatch('dashboard/removeAccount', this.id)
      if(res.status == 200)
      {
        this.isLoading = false
        this.id = ''
        this.$toast.success('Account removed successfully');
        this.$bvModal.hide('deleteModal')
      }
      else {
        this.id = ''
        this.isLoading = false
        this.$toast.error('Something went wrong')
        this.$bvModal.hide('deleteModal')
      }
    },
    async setStatus(id){
      this.isLoading = true
      this.current_id = id
      const res = await this.approveAccount(id)
      if(res.status == 200){
        this.$toast.success('Account Approved \nAn email has been sent to the user.')
      }
      else {
        this.$toast.error('Something went wrong');
      }
      this.isLoading = false
      this.current_id = ''

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
    }
    
  }
 
}
</script>