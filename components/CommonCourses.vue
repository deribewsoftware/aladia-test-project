<template>
  <div class="space-y-14">

    <div class="space-y-5">
      <h1 class=" text-2xl font-bold text-black">More Courses by <span class="text-blue-800">Google Cloud Experts Cloud Architect</span></h1>
      <div class=" grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CardCourse :course="course" v-for="course in commonCourses" :key="course.title"/>

    </div>
    </div>

    <div class="space-y-5">
      <h1 class=" text-2xl font-bold text-black">More Courses by <span class="text-blue-800">Google Cloud Platform Gurus !</span></h1>
      <div class=" grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <CardCourse :course="course" v-for="course in commonCourses" :key="course.title"/>

    </div>
    </div>

  
    <div class="border-t pt-4 border-gra-300 w-full">

      <div class="w-full border hover:bg-black/20 border-black p-2 text-black flex justify-center items-center">
        <p class=" font-semibold">Report abuse</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCourses } from '~/composables/data/useCourses';

const {commonCourses}=useCourses();
</script>

<style>

</style>