<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card p-5 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5 class="text-violet">Update College</h5>
        <p class="mb-4"><small>Please fill in all fields</small></p>
       </div>
      </div>
      <form>
       <div class="row">
        <div class="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-7">
         <label class="" for="newCourseAbbreviation">College</label>
         <input v-model="updateCollege.name" type="text" class="form-control" id="newCourseName" placeholder=" " autocomplete="off"/>
         <label class="mt-2" for="collegeAbbreviation">Abbreviation</label>
         <input v-model="updateCollege.abbreviation" type="text" class="form-control" id="collegeAbbreviation" placeholder=" " autocomplete="off"/>
         <label class="mt-2" for="newCourseAbbreviation">Dean</label>
         <input v-model="updateCollege.dean" type="text" class="form-control" id="dean" placeholder="" autocomplete="off"/>
        </div>
        <div class="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-7">
         <label class="mt-3" for="newCourseName">Objectives</label>
         <div class="mb-2" v-for="(objective, i) in updateCollege.objectives" :key="i">
          <textarea
           v-model="objective.objective"
           type="text"
           class="form-control"
           id="newCourseAbbreviation"
           placeholder=" "
           autocomplete="off"></textarea>
         </div>
         <button class="btn btn-sm btn-primary mt-2 me-2" v-on:click.prevent="addObjective">
          <i class="bi bi-plus-circle me-2"></i>Objective
         </button>
         <button
          v-if="updateCollege.objectives.length > 1"
          class="btn btn-sm btn-danger mt-2"
          v-on:click.prevent="removeObjective">
          <i class="bi bi-trash me-2"></i>Remove
         </button>
         <div>
          <label class="mt-3" for="newCourseName">Goals</label>
          <div class="mb-2" v-for="(goal, i) in updateCollege.goals" :key="i">
            <textarea
            v-model="goal.goal" type="text" class="form-control" id="newCourseAbbreviation" placeholder="" autocomplete="off"></textarea>
          </div>
          <button class="btn btn-sm btn-primary mt-2 me-2" v-on:click.prevent="addGoal">
            <i class="bi bi-plus-circle me-2"></i>Add Goal
          </button>
          <button
            v-if="updateCollege.goals.length > 1"
            class="btn btn-sm btn-danger mt-2"
            v-on:click.prevent="removeGoal">
            <i class="bi bi-trash me-2"></i>Remove
          </button>
         </div>
        </div>
       </div>
      </form>
      <div class="d-block mt-4">
       <button class="btn btn-primary mt-3 me-2" @click.prevent="update" :disabled="isLoading">Update</button>
       <button @click.prevent="$router.back()" class="btn btn-secondary mt-3">Cancel</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
import { mapState } from 'vuex';
 export default {
  data() {
   return {
    isLoading: false,
    data: {
     college: '',
     abbreviation: '',
     dean: '',
     objectives: [
      {
       objective: '',
      },
     ],
     goals: [
      {
       goal: '',
      },
     ],
    },
   };
  },
  async mounted() {
   this.isLoading = true;
   document.title = "Update Basic Education and College"
   this.addObjective()
   this.addGoal()
   this.isLoading = false;
  },
  methods: {
   addObjective() {
    this.updateCollege.objectives.push({ objective: '' });
   },
   addGoal() {
    this.updateCollege.goals.push({ goal: '' });
   },
   removeObjective() {
    this.updateCollege.objectives.pop();
   },
   removeGoal() {
    this.updateCollege.goals.pop();
   },
   async update(){
     if(this.updateCollege.name == '') return this.$toast.error('Name is required!');  
     if(this.updateCollege.abbreviation == '') return this.$toast.error('Abbreviation is required!');

     this.isLoading = true
     const res = await this.$store.dispatch('universityinfo/updateCollege', this.updateCollege)
     if(res.status == 200 ){
       this.$router.back()
       this.$toast.success('College updated successfully!')
     }
     this.isLoading = false
   },

  },
  computed: {
   ...mapState('universityinfo', ['updateCollege'])
  }
 };
</script>
