<template>
  <div class=" space-y-5">
    <h1 class="text-3xl font-bold text-black mt-10">Course content</h1>
    <div class="flex  text-sm text-gray-800 items-center justify-between">
      <div class="flex gap-2">
        <span>75 sections </span>
        <span>• 731 lectures</span>
        <span> • 74h 13m total length</span>
      </div>
      <p class=" font-bold text-violet-800 hover:text-violet-900">Expand all sections</p>
    </div>
    <div class="w-full  bg-gray-100/40 divide-y divide-y-gray-400 border border-gray-300 mx-auto mt-8">
    <UiAccordion v-for="(course, index) in courses" :key="index">
      <template #trigger >
        <div class="flex  w-full justify-between">
        <div class="flex items-center">
          <span class=" text-gray-900 text-base font-bold">{{ course.section }}</span>
          
        </div>
        <div class="flex items-center  font-normal">
          <span class="mr-2 text-sm text-gray-500">{{ course.lectures.length }} lectures</span>
          <span class="ml-2 text-sm text-gray-500">• {{ course.duration }}</span>
        </div>
      </div>
      </template>

      <template #content>
        <ul>
          <li
            v-for="(lecture, idx) in course.lectures"
            :key="idx"
            class="flex w-full justify-between text-sm  py-2 text-gray-600 border-b last:border-none"
            
          >
          <div class="flex gap-5">
            <div class="h-5 mt-2  w-5">
            <svg fill="#000000" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.52 491.52" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,0v327.68h491.52V0H0z M471.04,307.2H20.48V20.48h450.56V307.2z"></path> </g> </g> <g> <g> <path d="M194.56,87.77v141.9l122.88-70.95L194.56,87.77z M215.04,123.25l61.44,35.47l-61.44,35.47V123.25z"></path> </g> </g> <g> <g> <path d="M183.285,430.08c-4.758-23.34-25.441-40.96-50.165-40.96s-45.407,17.62-50.165,40.96H0v20.48h82.955 c4.758,23.34,25.441,40.96,50.165,40.96s45.407-17.62,50.165-40.96H491.52v-20.48H183.285z M133.12,471.04 c-16.94,0-30.72-13.78-30.72-30.72s13.78-30.72,30.72-30.72s30.72,13.78,30.72,30.72S150.06,471.04,133.12,471.04z"></path> </g> </g> </g></svg>
          </div>
            <span :class=" lecture.isPreview?'underline text-violet-700':''">{{ lecture.title }}</span>
          </div>
           <div class="flex gap-5">
            <span v-if="lecture.isPreview" class=" underline text-violet-700">Preview</span>
            <span>{{ lecture.duration }}</span>
           </div>
          </li>
        </ul>
      </template>
    </UiAccordion>
  </div>
  <div class="w-full border border-black hover:bg-black/20 p-3 flex justify-center items-center">
    <span class="font-medium">65 more sections</span>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { useUseCourseContent } from '~/composables/data/useCourseContent';


const { courses } = useUseCourseContent();
</script>
