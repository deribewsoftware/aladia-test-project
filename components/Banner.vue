<template>
  <div class=" bg-black  w-full text-white ">
    <div v-if="scrolling" class="h-16 p-2 bg-black fixed top-0 w-full ">
      <h1 class="text-lg font-semibold">The Web Developer Bootcamp 2024</h1>
      <div class="flex items-center gap-1">
        <span class=" font-medium text-yellow-600">4.7</span>
        <svg v-for="star in 5" :key="star" class="h-4 w-4 text-yellow-600" fill="#ca8a04" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
        <span class="text-blue-200">(276,801 ratings)</span><span>924,058 students</span>
      </div>
    </div>
    <div v-if="!scrolling" class="space-y-5 p-10 container max-w-4xl pl-40">
      <h1 class="text-3xl font-bold">The Web Developer Bootcamp 2024</h1>
      <p class="text-lg font-semibold">10 Hours of React just added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!</p>

      <div class="flex items-center gap-1">
        <span class=" font-medium text-yellow-600">4.7</span>
        <svg v-for="star in 5" :key="star" class="h-4 w-4 text-yellow-600" fill="#ca8a04" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>star</title> <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path> </g></svg>
        <span class="text-blue-200">(276,801 ratings)</span><span>924,058 students</span>
      </div>

      <p>Created by <span class="text-blue-200 underline">Colt Steele</span></p>

      <div class="flex gap-3">
        <span>Last updated 10/2024
</span>

<span class=" flex gap-2">
 
    <svg class="w-6 h-6"   data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
</svg>
<span>English</span>
  </span>

  <span>
    English [Auto],
  </span>

  <span>
    Arabic [Auto],
  
  </span>

  <span class=" text-violet-300 underline">
    14 more
  </span>

      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>

// Scroll state
const scrolling = ref(false);

// Threshold for switching position
const threshold = 100;

// Handle scroll events to toggle position class
const handleScroll = () => {
  if (window.scrollY > threshold) {
    scrolling.value = true;
  } else {
    scrolling.value = false;
  }
};

// Set up the event listener on mount and clean up on unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>

<style>

</style>