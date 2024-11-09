<template>
  <div class="w-full">
    <!-- Navbar with Tab Titles -->
    <div class="flex justify-evenly space-x-4 border-b">
      <button
        v-for="(title, index) in navbarTitles"
        :key="index"
        class="px-4 py-2 text-lg font-medium   focus:outline-none"
        :class="{
          'border-b-2  border-gray-900 hover:text-gray-800 ': activeTab === index,
          'text-gray-500 hover:text-gray-600':activeTab != index
        }"
        @click="activeTab = index"
      >
        {{ title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div v-if="navbarTitles.length" class="mt-4">
      <slot :name="`tab-${activeTab}`"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">


// Define Props interface for TypeScript
interface TabsProps {
  navbarTitles: string[]
}

// Define component props
const props = defineProps<TabsProps>()

// Ref for the active tab
const activeTab = ref<number>(0)
</script>

<style scoped>
/* Optional: Style for the active tab */
button.active {
  border-bottom: 2px solid #3b82f6;
}
</style>
