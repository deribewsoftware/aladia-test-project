<template>
  <div>
    <div class="flex items-center gap-3">
      <div class="flex ">
            
            <svg  class="h-6 w-6 text-yellow-700" fill="#9a3412" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
           
          </div>
      <h3 class="py-5 font-bold text-2xl">4.3 course rating
        • 5K ratings</h3>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <CardReviewCard v-for="review in reviews" :key="review.name" :review="review"/>
    </div>
    <div class="">
      <div class="border p-2 border-black flex hover:bg-black/20  w-40 justify-center items-center">
        <p class=" font-bold text-black text-base">Show all reviews</p>
      </div>
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import { useUserReviews } from '~/composables/data/UserReviews';

const {reviews}=useUserReviews()

</script>

<style>

</style>