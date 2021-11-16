<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card p-5 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5 class="text-violet">New Entry</h5>
        <p class="mb-4"><small>Please fill in all fields</small></p>
       </div>
      </div>
      <form>
       <div class="row">
        <div class="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-7">
         <label class="" for="newCourseAbbreviation">College</label>
         <input v-model="data.college" type="text" class="form-control" id="newCourseName" placeholder=" " autocomplete="off"/>
         <label class="mt-2" for="collegeAbbreviation">Abbreviation</label>
         <input v-model="data.abbreviation" type="text" class="form-control" id="collegeAbbreviation" placeholder=" " autocomplete="off"/>
         <label class="mt-2" for="newCourseAbbreviation">Dean</label>
         <input v-model="data.dean" type="text" class="form-control" id="dean" placeholder="" autocomplete="off"/>
        </div>
        <div class="col-12 col-sm-11 col-md-8 col-lg-7 col-xl-7">
         <label class="mt-3" for="newCourseName">Objectives</label>
         <div class="mb-2" v-for="(objective, i) in data.objectives" :key="i">
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
          v-if="data.objectives.length > 1"
          class="btn btn-sm btn-danger mt-2"
          v-on:click.prevent="removeObjective">
          <i class="bi bi-trash me-2"></i>Remove
         </button>
         <div>
          <label class="mt-3" for="newCourseName">Goals</label>
          <div class="mb-2" v-for="(goal, i) in data.goals" :key="i">
            <textarea
            v-model="goal.goal" type="text" class="form-control" id="newCourseAbbreviation" placeholder="" autocomplete="off"></textarea>
          </div>
          <button class="btn btn-sm btn-primary mt-2 me-2" v-on:click.prevent="addGoal">
            <i class="bi bi-plus-circle me-2"></i>Add Goal
          </button>
          <button
            v-if="data.goals.length > 1"
            class="btn btn-sm btn-danger mt-2"
            v-on:click.prevent="removeGoal">
            <i class="bi bi-trash me-2"></i>Remove
          </button>
         </div>
        </div>
       </div>
      </form>
      <div class="d-block mt-4">
       <button class="btn btn-primary mt-3 me-2" @click.prevent="saveCollege" :disabled="isLoading">Save</button>
       <button @click.prevent="$router.back()" class="btn btn-secondary mt-3">Cancel</button>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
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
   document.title = "Create Basic Education and College"
   this.isLoading = false;
  },
  computed: {
  },
  methods: {
   addObjective() {
    this.data.objectives.push({ objective: '' });
   },
   addGoal() {
    this.data.goals.push({ goal: '' });
   },
   removeObjective() {
    this.data.objectives.pop();
   },
   removeGoal() {
    this.data.goals.pop();
   },
   async saveCollege(){
      if(this.data.college == '') return this.$toast.error('Name is required!');  
      if(this.data.abbreviation == '') return this.$toast.error('Abbreviation is required!');  
      this.isLoading = true
      const res = await this.$store.dispatch('universityinfo/saveCollege', this.data)
      if(res.status == 200 ){
        this.$router.back()
        this.$toast.success('College added successfully!')
      }
      this.isLoading = false
    },
  },
 };
</script>
