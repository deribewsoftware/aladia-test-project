<template>
  <div class="p-6 border border-gray-300">
    <!-- Header -->
    <h1 class="text-black font-bold text-2xl py-3">Featured review</h1>

    <div class="flex items-center mb-4">
      <img
        :src="review.avatar"
        alt="User avatar"
        class="w-16 h-16 rounded-full mr-3 object-cover"
      />
      <div>
        <h2 class="text-lg font-semibold">{{ review.name }}</h2>
        <p class="text-sm text-gray-500">{{ review.courses }} courses</p>
        <p class="text-sm text-gray-500">{{ review.reviews }} reviews</p>
      </div>
    </div>

    <!-- Star Rating -->
    <div class="flex items-center mb-2">
      <NuxtRating
        ratingSize="20px"
        activeColor="#a16207"
        class="text-yellow-700"
        :read-only="true"
        :ratingValue="4.3"
      />
      <p class="text-sm mt-1 text-gray-500 ml-2">{{ review.timeAgo }}</p>
    </div>

    <!-- Review Text -->
    <p class="text-gray-700 text-sm mb-4">
      {{ review.comment }}
    </p>

    <!-- Footer -->
    <div>
      <p class="text-sm text-gray-500">Was this review helpful?</p>
      <div class="flex text-black items-center mt-3 space-x-4">
        <button
          class="flex w-10 h-10 justify-center items-center border border-black hover:bg-black/20 rounded-full hover:text-gray-700"
          aria-label="Like"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
          </svg>
        </button>

        <button
          class="flex w-10 h-10 justify-center items-center border border-black hover:bg-black/20 rounded-full hover:text-gray-700"
          aria-label="Dislike"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
          </svg>
        </button>

        <button class="text-gray-800 underline hover:text-gray-700">Report</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Review {
  avatar: string;
  name: string;
  courses: number;
  reviews: number;
  timeAgo: string;
  comment: string;
}

// Sample review data
const review = ref<Review>({
  avatar: '/avatar.jpg', // Adjusted path for the avatar image
  name: 'Gaurav S.',
  courses: 21,
  reviews: 7,
  timeAgo: '4 years ago',
  comment:
    'It was so challenging and full of knowledge! I have learned a lot from this course. Colt is the best instructor, respect! He explains everything that way so you get it instantly. Unfortunately, at the end of the course a new instructor explained a bit in a different way where I did not most of the things, perhaps because of the advanced topics. Anyway, it was awesome to be a part of this course, thanks to each of you, especially Ian for helping students throughout the course.',
});
</script>

<style scoped>
/* Optional: Custom styles can be added here if needed */
</style>
