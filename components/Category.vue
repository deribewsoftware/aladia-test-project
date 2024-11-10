<template>
  <UiDropdown>
    <!-- Trigger Button for the Dropdown -->
    <template #trigger>
      <span>Category</span>
    </template>

    <!-- Dropdown Content -->
    <template #dropdown>
      <div class="w-full p-3 space-y-3">
        <!-- Loop through each main category -->
        <UiHorizontalDropdown
          v-for="mainCategory in categories"
          :key="mainCategory.name"
          :title="mainCategory.name"
        >
          <template #content>
            <div class="space-y-3">
              <!-- Loop through each subcategory in the main category -->
              <UiHorizontalDropdown
                v-for="subcategory in mainCategory.subcategories"
                :key="subcategory.name"
                :title="subcategory.name"
              >
                <template #content>
                  <!-- Display sub-subcategories if they exist -->
                  <div
                    v-if="subcategory.subcategories"
                    class="ml-2 space-y-3 w-64"
                  >
                    <p
                      v-for="subSubCategory in subcategory.subcategories"
                      :key="subSubCategory.name"
                      class="text-gray-600 hover:text-violet-500"
                    >
                      {{ subSubCategory.name }}
                    </p>
                  </div>
                </template>
              </UiHorizontalDropdown>
            </div>
          </template>
        </UiHorizontalDropdown>
      </div>
    </template>
  </UiDropdown>
</template>

<script lang="ts" setup>
import { useUseCategories } from '~/composables/data/useCategories';

const { categories } = useUseCategories();
</script>

<style scoped>
/* Scoped styles for custom dropdown component */
</style>
