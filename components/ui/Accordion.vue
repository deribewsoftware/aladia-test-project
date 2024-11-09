<template>
  <div>
    <button
      @click="toggle"
      class="flex justify-between gap-4 items-center w-full px-4 py-3 text-lg font-semibold text-left text-gray-700 transition-all"
    >

    <div class="h-5 w-5">
      <svg
        :class="{'rotate-180': isOpen}"
        class="w-5 h-5 transition-transform duration-300 transform"
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
      <slot name="trigger"></slot>
      
    </button>

    <transition name="accordion">
      <div v-if="isOpen" class="bg-white p-4">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.1s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
