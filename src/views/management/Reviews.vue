<template>
 <div>
    <div class="container pe-sm-0 ps-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
     <div class="row justify-content-center mt-3">
      <div class="col-12 col-sm-11 col-md-12 col-lg-12 col-xl-12">
        <div class="card p-4 ps-5 pe-5 pt-5 mb-3">
          <div class="d-flex align-items-center">
            <div class="d-flex flex-column mt-2">
              <h5 class="text-violet">Users Review</h5>
              <p>Reviews and suggestions from the users</p>
            </div>
          </div>
          <div class="table-responsive mt-3">
            <div v-if="reviews.data == 0">No reviews found</div>
            <b-skeleton-table
                :rows="4"
                :columns="3"
                :table-props="{ bordered: false, striped: true }"
                v-if="initialLoading"
              ></b-skeleton-table>
            <table class="table table-hover" v-if="!initialLoading">
              <caption></caption>
              <thead>
                <tr>
                  <th scope="col" class="text-nowrap">Review</th>
                  <th scope="col" class="text-nowrap">Suggestion(s)</th>
                  <th scope="col">Date Created</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(review, i) in reviews.data" :key="i">
                  <td v-if="reviews.data != 0">{{review.emoji}}</td>
                  <td>{{review.suggestion}}</td>
                  <td class="text-nowrap">{{review.created_at | moment}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row mt-3" v-if="reviews.data">
            <pagination :showDisabled="true" :align="'right'" :data="reviews" @pagination-change-page="getReview">
              <span slot="prev-nav">&laquo;</span>
              <span slot="next-nav">&raquo;</span>
            </pagination>
          </div>
        </div>
      </div>
    </div>
    </div>
 </div>
</template>
<script>
import { mapState } from 'vuex';
import moment from 'moment'
export default {
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM D, YYYY, h:mm a');
    }
  },
  data(){
    return {
      initialLoading: false,
    }
  },
  computed: {
      ...mapState('review', ['reviews']),
  },
  async mounted(){
    document.title = 'User Review'
    this.initialLoading = true
    const page = 1
    await this.$store.dispatch('review/getReview', page);
    this.initialLoading = false
  },
  methods: {
    emoji(emoji){
      if(emoji == 'sad'){
        return 'sad.png'
      }
      if(emoji == 'happy'){
        return 'laugh.png'
      }
      if(emoji == 'angry'){
        return 'angry.png'
      }
    },
    async getReview(page = 1){
      await this.$store.dispatch('review/getReview', page);
    }
  }
}
</script>