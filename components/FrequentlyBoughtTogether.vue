<script setup lang="ts">

// Define the structure of an item
interface Item {
  title: string;
  price: number;
  rating: number;
  ratingCount: number;
  imageUrl: string;
  description: string;
}

// Define props to accept an array of items
const props = defineProps<{
  items: Item[];
  total: number;
}>();
</script>

<template>
  <div class="border border-gray-300  p-6  ">
    <h2 class="text-2xl font-bold mb-4">Frequently Bought Together</h2>

    <div v-for="(item, index) in props.items" :key="index" class="md:flex  gap-2  mb-4">
     <div class=" w-full h-32 md:w-48">
      <img :src="item.imageUrl" alt="Product image" class="w-full h-full object-fit " />
     </div>

      <div class="md:flex-1">
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-gray-600 text-sm">{{ item.description }}</p>

        <div class="md:flex items-center   text-sm mt-1">
          <p class=" font-medium text-gray-900 mr-2">{{item.rating}}</p>
          <NuxtRating activeColor="#a16207" class="text-yellow-700" :read-only="true" :ratingValue="item.rating" />

          <span class="text-gray-800 font-thin text-sm">({{ item.ratingCount }})</span>
        </div>
      </div>

      <div class="text-lg font-bold text-gray-800">${{ item.price.toFixed(2) }}</div>
    </div>

    <div class="flex justify-between items-center  pt-4 mt-4">
      <span class="text-lg ">Total: <span class="font-bold"> ${{ props.total.toFixed(2) }}</span> </span>
      <button class="bg-purple-600 text-white py-3 px-4  font-bold hover:bg-purple-700 transition">Add all to cart</button>
    </div>
  </div>
</template>

<style scoped>
/* Optional custom styles for icons, layout tweaks, etc. */
</style>
