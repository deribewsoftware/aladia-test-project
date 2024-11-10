<template>
  <div class="space-y-14">
    <!-- Section for Courses by Google Cloud Experts Cloud Architect -->
    <div class="space-y-5">
      <h1 class="text-2xl font-bold text-black">
        More Courses by 
        <span class="text-blue-800">Google Cloud Experts Cloud Architect</span>
      </h1>
      <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardCourse
          v-for="course in commonCourses"
          :key="course.title"
          :course="course"
        />
      </div>
    </div>

    <!-- Section for Courses by Google Cloud Platform Gurus -->
    <div class="space-y-5">
      <h1 class="text-2xl font-bold text-black">
        More Courses by 
        <span class="text-blue-800">Google Cloud Platform Gurus!</span>
      </h1>
      <div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardCourse
          v-for="course in commonCourses"
          :key="course.title"
          :course="course"
        />
      </div>
    </div>

    <!-- Report Abuse Section -->
    <div class="border-t pt-4 border-gray-300 w-full">
      <button class="w-full border border-black p-2 text-black font-semibold flex justify-center items-center hover:bg-black/20">
        Report abuse
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCourses } from '~/composables/data/useCourses';

const { commonCourses } = useCourses();
</script>

<style scoped>
/* Add component-specific styles here if needed */
</style>
