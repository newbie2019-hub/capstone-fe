<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
        <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">Telephone Directory</h5>
                <p class="mb-4"><small>Manage telephone directory below</small></p>
              </div>
              <div class="d-flex flex-column mt-2">
                <button v-on:click.prevent="$bvModal.show('newTelModal')" class="btn btn-purple"><i class="bi bi-telephone"></i> New Telephone</button>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2">
              <div class="col-6 col-sm-5 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating mb-3">
                  <input type="text" v-model="search_tel" class="form-control" id="floatingSearchOrg" placeholder="Search here">
                  <label  for="floatingSearchOrg" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="contacts.data == 0">No telephone found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{contacts.from}} to {{contacts.to}} of {{contacts.total}} data</caption>
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col" class="text-nowrap">Office Name</th>
                    <th scope="col" class="text-nowrap">Telephone Number</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(contact, i) in contacts.data" :key="i">
                    <th scope="col">{{contacts.from + i}}</th>
                    <td>{{contact.name}}</td>
                    <td class="text-nowrap">{{contact.tel_num}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="update = contact; $bvModal.show('updateTelModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteTel = contact.id; $bvModal.show('deleteModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="contacts.data">
              <pagination :showDisabled="true" :align="'right'" :data="contacts"  @pagination-change-page="contactSearch">>
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW FAQS MODAL --->
    <b-modal id="newTelModal" centered title="New Contact">
        <div class="form-floating mb-2 mt-3 ">
        <input v-model="tel.name" type="text" class="form-control" id="newTelName" placeholder="name@example.com" autocomplete="off">
        <label for="newTelName">Office Name</label>
        </div>
        <div class="form-floating mb-2 mt-4">
        <input v-model="tel.tel_num" type="text" class="form-control" id="newTelNumber" placeholder="name@example.com" autocomplete="off">
        <label for="newTelNumber">Telephone Number</label>
        </div>
        <template #modal-footer = {cancel} >
          <b-button variant="primary" @click="cancel()"> Cancel </b-button>
          <b-button variant="success" v-on:click.prevent="saveTel" :disabled="isLoading">
              Save Telephone
          </b-button>
        </template>
    </b-modal>

    <!-- UPDATE FAQS MODAL --->
    <b-modal id="updateTelModal" centered title="Update Contact">
        <div class="form-floating mb-2 mt-3 ">
        <input v-model="update.name" type="text" class="form-control" id="updateTelName" placeholder="name@example.com" autocomplete="off">
        <label for="updateTelName">Office Name</label>
        </div>
        <div class="form-floating mb-2 mt-4 ">
        <input v-model="update.tel_num" type="text" class="form-control" id="updateTelNumber" placeholder="name@example.com" autocomplete="off">
        <label for="updateTelNumber">Telephone Number</label>
        </div>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateTel" :disabled="isLoading">
            Update
        </b-button>
        </template>
    </b-modal>

    <!-- DELETE MODAL --->
    <b-modal id="deleteModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this contact?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyTel" :disabled="isLoading">
            Delete
        </b-button>
        </template>
    </b-modal>
 </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment'
const _ = require('lodash');

export default {
    data(){
    return {
       initialLoading: false,
       isLoading: false,
       isSearching: false,
       search_tel: '',
       tel: {
           name: '',
           tel_num: ''
       },
       update: {
           name: '',
           tel_num: ''
       },
       deleteTel: '',
    }
  },
    filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
  computed: {
     ...mapState('auth', ['user']),
    ...mapState('universityinfo', ['contacts']),
  },
  watch: {
    search_tel(before, after){
      this.isSearching = true
      this.debouncedContactSearch()
      this.isSearching = false
    },
  },
  created: function () {
    this.debouncedContactSearch = _.debounce(this.contactSearch, 1000)
  },
  async mounted(){
    this.initialLoading = true
    await this.$store.dispatch('universityinfo/getTel', 1);
    this.initialLoading = false
  },
  methods: {
    async saveTel(){
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveTel', this.tel)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getTel', 1);
        this.$toast.success('Telephone added successfully!')
        this.$bvModal.hide('newTelModal')
        this.tel = {name: '', tel_num: ''}
      }
      this.isLoading = false
    },
    async updateTel(){
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/updateTel', this.update)
      if(res.status == 200 ){
        await this.$store.dispatch('universityinfo/getTel', 1);
        this.$toast.success('Telephone updated successfully!')
        this.$bvModal.hide('updateTelModal')
        this.update = {name: '', tel_num: ''}
      }
      this.isLoading = false
    },
    async destroyTel(){
        this.isLoading = true
        const res = await this.$store.dispatch('universityinfo/deleteTel', this.deleteTel)
        if(res.status == 200){
            await this.$store.dispatch('universityinfo/getTel', 1);
            this.$toast.success('Telephone deleted successfully!')
            this.$bvModal.hide('deleteModal')
        } else {
            this.$toast.error('Something went wrong')
        }
        this.isLoading = false
    },
    async getTel(page){
       await this.$store.dispatch('universityinfo/getTel', page);
    },
    async searchContact(page){
      this.isSearching = true
      let data = {
        search: this.search_tel
      }
      await this.$store.dispatch('universityinfo/searchTel', {page: page, data: data})
      this.isSearching = false
    },
    contactSearch(page = 1){
      if(this.search_tel == ''){
        this.getTel(page)
      }
      else {
        this.searchContact(page)
      }
    },
  },

}
</script>