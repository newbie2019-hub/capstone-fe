<template>
 <div>
  <div class="container pe-2 pe-sm-0 pe-md-2 pe-lg-4 pe-xl-4">
   <div class="row justify-content-center">
    <div class="col-11 col-sm-11 col-md-12 col-lg-12 col-xl-12">
     <div class="d-flex">
      <div class="d-flex flex-column me-auto mt-2">
        <h5 class="text-violet">Updates</h5>
        <p class="mb-4"><small>Listed below are your updates</small></p>
      </div>
      <div class="d-flex flex-column ms-auto mt-2">
        <router-link to="updates/new" class="btn btn-purple"><i class="bi bi-plus-circle me-2"></i>New Update</router-link>
      </div>
     </div>
     <div class="row">
      <div class="col-11 col-sm-10 col-md-6 col-lg-4 mt-2">
       <div class="card">
        <img src="@/assets/images/hero-bg.jpg" alt="">
         <div class="card-body">
           <h5 class="card-title">Title Goes here</h5>
           <p class="card-text lh-1 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <a href="#" class="btn btn-primary btn-sm mt-3 me-1">Update</a>
           <a href="#" class="btn btn-danger btn-sm mt-3">Delete</a>
         </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
 export default {};
</script>
