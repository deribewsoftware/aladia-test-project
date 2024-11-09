<template>
  <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <!-- Trigger with Dynamic Title -->
    <div class="w-64 px-5 hover:text-violet-500 flex justify-between items-center">
      <p>{{ title }}</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Dropdown Content -->
    <div
      v-if="isOpen"
      class="absolute border-l text-start left-60  z-10 -top-4  w-64 bg-white  p-4 transition-transform duration-300"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

// Define props to accept a dynamic title
const props = defineProps<{ title: string }>();

const isOpen = ref(false);
</script>

<style scoped>
/* Additional styling for smooth hover effects */
.relative:hover > .absolute {
  transform: translateY(0);
}
</style>
