<template>
  <div class="border p-4">
    <h1 class="text-3xl font-semibold mb-6">What you'll learn</h1>

    <!-- Topics List with Dynamic Show/Hide -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative text-sm">
      <transition-group name="fade" tag="div">
        <div
          v-for="(topic, index) in displayedTopics"
          :key="index"
          class="grid grid-cols-12 items-start space-x-3"
        >
          <div class="col-span-1 h-4 w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p class="text-gray-700 col-span-11">{{ topic }}</p>
        </div>
      </transition-group>
      <div v-if="!showMore" class="h-20 w-full absolute bottom-0 opacity-10 bg-gradient-to-t from-white"></div>
    </div>

    <!-- Show More/Less Button -->
    <button
      class="mt-4 text-violet-700 hover:text-violet-800 font-semibold hover:underline focus:outline-none"
      @click="toggleShowMore"
    >
      <div class="flex items-center gap-2">
        <span>{{ showMore ? 'Show less' : 'Show more' }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            :d="showMore ? 'M19.5 8.25l-7.5 7.5-7.5-7.5' : 'M4.5 15.75l7.5-7.5 7.5 7.5'"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLearningTopics } from '~/composables/data/useLearningTopics';
import { ref, computed } from 'vue';

// Get topics from the composable
const { topics } = useLearningTopics();

// State to control showing more or less topics
const showMore = ref(false);

// Number of topics to show initially
const initialCount = 10;

// Displayed topics based on the showMore state
const displayedTopics = computed(() =>
  showMore.value ? topics : topics.slice(0, initialCount)
);

// Toggle showMore state
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
