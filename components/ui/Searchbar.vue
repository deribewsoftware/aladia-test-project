<template>
  <div class="rounded-full  w-full px-2 bg-gray-100/80 flex border border-gray-800 items-center gap-2">
    <div class="h-5 w-5 text-gray-500">
      <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
</svg>
    </div>
    <input
     type="text"
     class="w-full outline-none focus:outline-none px-3 py-3 bg-transparent"
     placeholder="Search for anything"
     />
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>