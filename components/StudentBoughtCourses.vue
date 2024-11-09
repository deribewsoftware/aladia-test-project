<template>
  <div class="mt-10">
    <h2 class="text-2xl font-bold mb-4">Students also bought</h2>
    <div class="space-y-4">
      <div
        v-for="(course, index) in courses"
        :key="index"
        class="md:flex items-start bg-white border-b pb-4 last:border-none"
      >
        <!-- Course Image -->
       <div class="w-full md:w-20 h-40 mb-5 md:mb-0 md:h-20 ">
        <img :src="course.image" alt="Course image" class=" h-full w-full object-fit mr-4" />
       </div>

        <!-- Course Info -->
        <div class=" md:ml-4 flex-grow">
          <div class="flex  w-full justify-between ">
            <h3 class="font-bold text-gray-900">{{ course.title }}</h3>
          <div class="flex gap-2 ">
            <span class="text-yellow-950 font-semibold">{{ course.rating }}</span>
            <svg  class="h-5 w-5 text-yellow-700" fill="#9a3412" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
           
          </div>

          <div class="md:flex gap-2">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="currentColor"
  viewBox="0 0 24 24"
  class="inline-block text-gray-700"
>
  <path d="M16 11c1.656 0 3-1.343 3-3s-1.344-3-3-3c-1.655 0-3 1.343-3 3s1.345 3 3 3zm-8 0c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 2c-2.67 0-8 1.336-8 4v3h10v-3c0-1.105.896-2 2-2h8c1.105 0 2 .895 2 2v3h-10v-3c0-2.664-5.33-4-8-4zm8 0c-.295 0-.617.015-.955.045.486.615.955 1.421.955 2.955v3h10v-3c0-2.664-5.33-4-8-4z"/>
</svg>
         
<span class="text-sm">{{ course.students.toLocaleString() }}</span></div>
         

           <!-- Course Price -->
           <div class="text-right">
          <p class="text-lg font-bold text-gray-800">{{ course.price }}</p>
          <p class="text-sm line-through text-gray-500">{{ course.oldPrice }}</p>
         
        </div>
        <button class="flex hidden md:block w-10 p-2 h-10 justify-center border-black border hover:bg-black/20 rounded-full items-center hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

          </button>
          </div>
          <div class="">
          
          <div class="md:flex items-center space-x-2 text-sm text-gray-500 mt-1">
            <span v-if="course.tag" :class="['px-2 font-medium py-0.5  ',course.tag==='Bestseller'?'bg-yellow-300 text-yellow-900':'',course.tag==='Hot & New'?'bg-pink-300 text-pink-900':'' ]">{{ course.tag }}</span>
            <span class=" font-medium text-teal-800">{{ course.hours }}</span>
            <span> <span class="text-teal-800">•</span> Updated {{ course.updated }}</span>
          </div>

        </div>
        </div>
        

       
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourses } from '~/composables/data/useCourses';



const { courses } = useCourses()
</script>

<style scoped>
/* Add custom styles if needed */
</style>
