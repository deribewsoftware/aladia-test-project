<script setup lang="ts">
interface Instructor {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  students: number;
  courses: number;
  imageUrl: string;
  description: string;
  fullDescription: string;
}

const props = defineProps<{ instructor: Instructor }>();

// State for toggling "Show more / Show less"
const showMore = ref(false);
const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>

<template>
  <div class="p-6 mb-6">
    <h2 class="text-xl font-bold text-violet-800 underline mb-2">{{ instructor.name }}</h2>
    <p class="text-gray-600 mb-4">{{ instructor.title }}</p>

    <div class="flex items-center mb-4">
      <img :src="instructor.imageUrl" alt="Instructor image" class="w-28 h-28 rounded-full mr-4" />

      <div class="text-sm text-gray-900">
        <!-- Rating -->
        <div class="flex items-center mb-1">
          <span class="text-gray-700 text-lg mr-1">★</span>
          <span>{{ instructor.rating }} Instructor Rating</span>
        </div>

        <!-- Reviews -->
        <div class="flex items-center mb-1">
          <svg class="h-5 w-5 text-gray-700 mr-1" fill="currentColor" viewBox="0 0 23 23">
            <path d="M14.58 15.18c.44-.73 1.08-1.11 1.94-1.12s1.28-.44 1.3-1.3c.01-.85.38-1.5 1.12-1.93.73-.44.9-1.03.48-1.77-.42-.74-.42-1.49 0-2.23.42-.75.26-1.33-.48-1.77-.73-.44-1.1-1.08-1.12-1.93-.01-.85-.44-1.29-1.3-1.3-.85-.01-1.5-.39-1.94-1.12-.44-.73-1.03-.9-1.77-.48-.75.42-1.49.42-2.23 0-.74-.42-1.33-.26-1.77.48-.44.73-1.08 1.11-1.93 1.12-.85.01-1.29.44-1.3 1.3-.01.85-.38 1.49-1.12 1.93-.73.44-.9 1.03-.48 1.77.42.74.42 1.49 0 2.23-.42.75-.26 1.33.48 1.77.73.44 1.1 1.08 1.12 1.93.01.85.44 1.29 1.3 1.3.85.01 1.5.39 1.94 1.12.44.73 1.03.9 1.77.48.75-.42 1.49-.42 2.23 0 .74.42 1.33.26 1.77-.48zM11.7 12.61c-2.58 0-4.67-2.09-4.67-4.67 0-2.58 2.09-4.67 4.67-4.67 2.58 0 4.67 2.09 4.67 4.67 0 2.58-2.09 4.67-4.67 4.67z"/>
          </svg>
          <span>{{ instructor.reviews.toLocaleString() }} Reviews</span>
        </div>

        <!-- Students -->
        <div class="flex items-center mb-1">
          <svg class="h-5 w-5 text-gray-700 mr-1" fill="currentColor" viewBox="0 0 30 30">
            <path d="M18.85 8.58c-1.15 0-2.23.57-2.89 1.52.25.62.39 1.29.39 2 0 .69-.18 1.33-.44 1.93.65.99 1.75 1.59 2.94 1.59 1.94 0 3.52-1.57 3.52-3.52 0-1.94-1.58-3.52-3.52-3.52z"/>
          </svg>
          <span>{{ instructor.students.toLocaleString() }} Students</span>
        </div>

        <!-- Courses -->
        <div class="flex items-center">
          <svg class="h-5 w-5 text-gray-700 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L3 5v6c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V5l-9-3zm0 18c-4.97-1.19-8-6.25-8-11V6.6l8-2.67 8 2.67V9c0 4.75-3.03 9.81-8 11z"/>
          </svg>
          <span>{{ instructor.courses.toLocaleString() }} Courses</span>
        </div>
      </div>
    </div>

    <!-- Description with toggle -->
    <p class="text-gray-700" v-if="showMore">{{ instructor.fullDescription }}</p>
    <p class="text-gray-700" v-else>{{ instructor.description }}</p>
    <button @click="toggleShowMore" class="text-violet-700 mt-2">
      {{ showMore ? 'Show less' : 'Show more' }}
    </button>
  </div>
</template>
