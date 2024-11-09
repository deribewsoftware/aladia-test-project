<script setup lang="ts">



const showDropdown = ref(false)
</script>

<template>
  <div class="relative inline-block text-left" @mouseleave="showDropdown = false">
    <!-- Dropdown button -->
    <button
      @mouseover="showDropdown = true"
      class="  text-gray-800 hover:text-violet-600"
       >
      <slot name="trigger"></slot>
    </button>

    <!-- Dropdown menu with fade transition -->
    <transition name="fade" mode="out-in">
      <div
        v-if="showDropdown"
        class="absolute z-30 left-0 "
      >
        <div class="py-1 mt-6 w-64 shadow-lg bg-white ring-1 ring-black ring-opacity-5 text-gray-700">
          <slot name="dropdown"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
