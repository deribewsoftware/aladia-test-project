<template>
  <div>
    <div class="flex items-center gap-3 py-5">
      <svg class="h-6 w-6 text-yellow-700" fill="#9a3412" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title>Star</title>
        <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
      </svg>
      <h3 class="font-bold text-2xl">4.3 Course Rating • 5K Ratings</h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <CardReviewCard
        v-for="review in reviews"
        :key="review.name"
        :review="review"
      />
    </div>

    <div class="w-40 border border-black p-2 flex justify-center items-center hover:bg-black/20">
      <p class="font-bold text-base text-black">Show All Reviews</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserReviews } from '~/composables/data/UserReviews';

const { reviews } = useUserReviews();
</script>

<style>
/* Additional styling (if needed) */
</style>
