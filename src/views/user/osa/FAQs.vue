<template>
 <div>
    <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row me-0 ms-0 justify-content-center mt-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="card p-4 mb-4">
            <div class="d-flex align-items-center">
              <div class="d-flex flex-column me-auto mt-2">
                <h5 class="text-violet">FAQs</h5>
                <p class="mb-4"><small>Manage FAQs below</small></p>
              </div>
            </div>
            <div class="d-flex justify-content-end mt-2 mb-2">
              <button v-on:click.prevent="$bvModal.show('newFaqModal')" class="btn btn-purple btn-sm me-2"><i class="bi bi-plus-circle"></i> Add FAQ</button>
              <div class="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="input-group form-floating">
                  <input v-model="search_faq" type="text"  class="form-control" id="floatingSearchOrg" placeholder="Search here">
                  <label  for="floatingSearchOrg" class="">Search here</label>
                  <button class="btn btn-purple"><i class="bi bi-search"></i></button>
                </div>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <div v-if="faqs.data == 0">No FAQs found</div>
              <b-skeleton-table
                  :rows="4"
                  :columns="3"
                  :table-props="{ bordered: false, striped: true }"
                  v-if="initialLoading || isSearching"
                ></b-skeleton-table>
              <table class="table table-hover" v-else>
                <caption>Showing {{faqs.to}} out {{faqs.total}} of data</caption>
                <thead>
                  <tr>
                    <th scope="col" class="text-nowrap">Question</th>
                    <th scope="col" class="text-nowrap">Answer</th>
                    <th scope="col" class="text-nowrap">Date Created</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(faq, i) in faqs.data" :key="i">
                    <td>{{faq.question}}</td>
                    <td>{{faq.answer}}</td>
                    <td class="text-nowrap">{{faq.created_at | moment}}</td>
                    <td>
                      <div class="d-flex">
                        <button v-on:click.prevent="update = faq; $bvModal.show('updateFaqModal')" href="" class="btn btn-sm btn-success rounded-pill btn-approve me-2" >
                          <i class="bi bi-pencil-square"></i>
                        </button>
                        <button  @click="deleteFaq = faq.id; $bvModal.show('deleteModal')" class="btn btn-sm btn-danger rounded-pill btn-approve me-2" >
                          <i class="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="row mt-3" v-if="faqs.data">
              <pagination :showDisabled="true" :align="'right'" :data="faqs">
                <span slot="prev-nav">&laquo;</span>
                <span slot="next-nav">&raquo;</span>
              </pagination>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEW FAQS MODAL --->
    <b-modal id="newFaqModal" centered title="New FAQ">
        <label for="newFaqQuestion">Type a question</label>
        <textarea v-model="faq.question" type="text" class="form-control" id="newFaqQuestion" placeholder="" autocomplete="off"></textarea>
        <label for="newFaqAnswer" class="mt-3">Answer</label>
        <textarea v-model="faq.answer" type="text" class="form-control" id="newFaqAnswer" placeholder="" autocomplete="off"></textarea>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="saveFAQ" :disabled="isLoading">
            Save FAQ
        </b-button>
        </template>
    </b-modal>

    <!-- UPDATE FAQS MODAL --->
    <b-modal id="updateFaqModal" centered title="Update FAQ">
        <label for="updateFaqQuestion">Question</label>
        <textarea v-model="update.question" type="text" class="form-control" id="updateFaqQuestion" placeholder="" autocomplete="off"></textarea>
        <label class="mt-3" for="updateFaqAnswer">Answer</label>
        <textarea v-model="update.answer" type="text" class="form-control" id="updateFaqAnswer" placeholder="" autocomplete="off"></textarea>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="success" v-on:click.prevent="updateFAQ" :disabled="isLoading">
            Update
        </b-button>
        </template>
    </b-modal>

    <!-- DELETE MODAL --->
    <b-modal id="deleteModal" centered title="Confirm Delete">
        <p class="">Are you sure to delete this FAQ?</p>
        <template #modal-footer = {cancel} >
        <b-button variant="primary" @click="cancel()"> Cancel </b-button>
        <b-button variant="danger" v-on:click.prevent="destroyFAQ">
            Delete
        </b-button>
        </template>
    </b-modal>

 </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment'
const _ = require('lodash');

export default {
    data(){
    return {
       initialLoading: false,
       isLoading: false,
       isSearching: false,
       search_faq: '',
       faq: {
           question: '',
           answer: ''
       },
       update: {
           question: '',
           answer: ''
       },
       deleteFaq: ''
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
  watch: {
    search_faq(before, after){
      this.debouncedFaqsSearch()
    }
  },
  created: function () {
    this.debouncedFaqsSearch = _.debounce(this.faqsSearch, 1000)
  },
  computed: {
    ...mapState('osa', ['faqs']),
  },
  async mounted(){
    this.initialLoading = true
    document.title = 'Frequently Asked Questions Management'
    await this.$store.dispatch('osa/getFaq', 1);
    this.initialLoading = false
  },
  methods: {
    async saveFAQ(){
      this.isLoading = true
      const res = await this.$store.dispatch('osa/saveFaq', this.faq)
      if(res.status == 200 ){
        this.$toast.success('FAQ added successfully!')
        this.$bvModal.hide('newFaqModal')
        this.faq = {question: '', answer: ''}
      }
      this.isLoading = false
    },
    async updateFAQ(){
      this.isLoading = true
      const res = await this.$store.dispatch('osa/updateFaq', this.update)
      if(res.status == 200 ){
        this.$toast.success('FAQ updated successfully!')
        this.$bvModal.hide('updateFaqModal')
        this.update = {question: '', answer: ''}
      }
      this.isLoading = false
    },
    async destroyFAQ(){
      this.isLoading = true
      const res = await this.$store.dispatch('osa/deleteFaq', this.deleteFaq)
      if(res.status == 200){
          this.$toast.success('FAQ deleted successfully!')
          this.$bvModal.hide('deleteModal')
      } else {
          this.$toast.error('Something went wrong')
      }
      this.islLoading = false
    },
     async searchFaqs(page){
       this.isSearching = true
       let data = {
         search: this.search_faq
       }
       await this.$store.dispatch('osa/searchFaqs', {page: page, data: data})
       this.isSearching = false
    },
    async getFaqs(page){
       await this.$store.dispatch('osa/getFaq', page);
    },
    faqsSearch(page = 1){
      if(this.search_faq == ''){
        this.getFaqs(page)
      }
      else {
        this.searchFaqs(page)
      }
    },
  },
}
</script>