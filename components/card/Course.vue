<template>
  <div class="text-left max-w-56 space-y-1">
    <div class="">
      <img :src="course.image" alt="">
    </div>

    <h1 class="text-lg tracking-tight leading-6 font-semibold text-black">{{ course.title }}</h1>
    <p class="text-sm text-gray-500">{{ course.description }}</p>
    <div class="flex gap-1 items-center">
      <span class=" font-semibold text-black">{{ course.rate }}</span>
      <NuxtRating activeColor="#a16207" class="text-yellow-700" :read-only="true" :ratingValue="course.rate" />
      <span class="text-sm text-gray-500">({{ course.totalReviews }})</span>
    </div>

    <div class="flex text-gray-500 text-sm items-center gap-1">
      <span>{{ course.hours }} hours</span>
      <span> • </span>
      <span>{{ course.lectures}} lectures</span>
      <span> • </span>
      <span>{{ course.level }} </span>
    </div>
    <h6 class="text-lg font-bold text-black">{{ course.price }}</h6>
  </div>
</template>

<script lang="ts" setup>
interface Course {
  image:string;
  title: string;
  rate:number;
  totalReviews: number;
  hours: number;
  lectures: number;
  description: string;
  level: string;
  price:string;
}

const props = defineProps<{ course: Course }>();

</script>


<style>

</style>