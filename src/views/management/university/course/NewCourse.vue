<template>
 <div>
  <div class="container pe-0 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     <div class="card p-5 mb-4">
      <div class="d-flex align-items-center">
       <div class="d-flex flex-column me-auto mt-2">
        <h5 class="text-violet">New Course</h5>
        <p class="mb-4"><small>Please fill in all fields</small></p>
       </div>
      </div>
      <form>
       <div class="row">
        <div class="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-6">
         <label class="" for="newCourseAbbreviation">Select College </label>
         <select v-model="data.college" class="form-select" id="newGoalFor">
          <option v-for="(college, j) in colleges.data" :key="j" :value="college.id">{{ college.name }}</option>
         </select>
         <label class="mt-2" for="newCourseName">Course</label>
         <input
          v-model="data.name"
          type="text"
          class="form-control"
          id="newCourseName"
          placeholder=" "
          autocomplete="off"
         />
         <label class="mt-2" for="newCourseAbbreviation">Abbreviation</label>
         <input
          v-model="data.abbreviation"
          type="text"
          class="form-control"
          id="newCourseAbbreviation"
          placeholder=" "
          autocomplete="off"
         />
        </div>
        <div class="col-12 col-sm-11 col-md-8 col-lg-6 col-xl-6">
         <label class="" for="newCourseName">Course Objective</label>
         <div class="mb-2" v-for="(objective, i) in data.objectives" :key="i">
          <textarea
           v-model="objective.objective"
           type="text"
           class="form-control"
           id="newCourseAbbreviation"
           placeholder=" "
           autocomplete="off"
          ></textarea>
         </div>
         <button class="btn btn-sm btn-primary mt-2 me-2" v-on:click.prevent="addObjective">
          <i class="bi bi-plus-circle me-2"></i>Add Field
         </button>
         <button
          v-if="data.objectives.length > 1"
          class="btn btn-sm btn-danger mt-2"
          v-on:click.prevent="removeObjective"
         >
          <i class="bi bi-trash me-2"></i>Remove
         </button>
        </div>
       </div>
      </form>
      <div class="d-block mt-4">
       <button class="btn btn-primary mt-3 me-2" @click.prevent="saveCourse">Save Course</button>
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
     name: '',
     objectives: [
      {
       objective: '',
      },
     ],
    },
   };
  },
  async mounted() {
   this.isLoading = true;
   await this.$store.dispatch('universityinfo/getCollege');
   this.isLoading = false;
  },
  computed: {
   ...mapState('universityinfo', ['colleges']),
  },
  methods: {
   addObjective() {
    this.data.objectives.push({ objective: '' });
   },
   removeObjective() {
    this.data.objectives.pop();
   },
   async saveCourse() {
    if (this.data.college == '') return this.$toast.error('College field is required');
    if (this.data.name == '') return this.$toast.error('Course Name is required!');
    if (this.data.abbreviation == '') return this.$toast.error('Course Abbreviation is required!');
    this.isLoading = true;
    const res = await this.$store.dispatch('universityinfo/saveCourse', this.data);
    if (res.status == 200) {
     this.$toast.success('Course added successfully!');
     this.$router.back()
     this.course = { name: '', abbreviation: '' };
    }
    this.isLoading = false;
   },
  },
 };
</script>
