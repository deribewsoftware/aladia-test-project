<template>
  <div class="border p-4">
    <h1 class="text-3xl font-semibold mb-6">What you'll learn</h1>
    
    <!-- Topics List with Dynamic Show/Hide -->
    <div class="grid grid-cols-1 space-x-4 space-y-4 md:grid-cols-2 relative gap-1 text-sm">
      <transition-group name="fade" tag="div" v-for="(topic, index) in displayedTopics"
      :key="index">
        <div
          
          class=" grid grid-cols-12  items-start space-x-3"
        >
         <div class="  col-span-1 h-4 w-4">
          <svg
         
         xmlns="http://www.w3.org/2000/svg"
         class=" text-gray-600"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         stroke-width="2"
       >
         <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
       </svg>
         </div>
          <p class="text-gray-700 col-span-11">{{ topic }}</p>
          <div v-if="!showMore" class="h-20 w-full bottom-0 opacity-10  absolute"></div>
        </div>
      </transition-group>
    </div>

    <!-- Show More/Less Button -->
    <!-- Show More/Less Button -->
    <button class="mt-4 text-violet-700 hover:text-violet-800 font-semibold hover:underline focus:outline-none" @click="toggleShowMore">
      <div v-if="showMore" class="flex items-center gap-2">
        <span>Show less</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      <div v-else class="flex items-center gap-2">
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLearningTopics } from '~/composables/data/useLearningTopics';

// Get topics from the composable
const { topics } = useLearningTopics();

// Define the state for showing more/less topics
const showMore = ref(false);

// Number of topics to show initially
const initialCount = 10;

// Computed property to dynamically update the displayed topics based on showMore
const displayedTopics = computed(() =>
  showMore.value ? topics : topics.slice(0, initialCount)
);

// Toggle between showing more or less topics
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<style scoped>
/* Add fade-in animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
