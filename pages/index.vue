<template>
  <div>
   
    <AppLayout>
      <div class="">
        <!-- Navbar -->
         <Navbar/>

        <div class=" relative">
          <!-- Banner -->
         <Banner/>
         <PreviewCard/>

         <div class="pl-40  w-8/12 p-10 ">
          <div class=" container">
            <LearningHighlights/>
            <CourseIncludes/>
            <CourseContent/>
            <CourseDescription/>
            <FeaturedReview/>
            <StudentBoughtCourses/>
          </div>
         </div>

        </div>


        <Footer/>
      </div>
      
    </AppLayout>

  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>