<template>
  <div>
    <!-- Trigger Button Slot -->
    <button @click="openModal">
      <slot name="trigger"></slot>
    </button>

    <!-- Modal Background and Content -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300"
      @click="closeModal"
    >
      <div
        @click.stop
        class="bg-black text-white w-full max-w-2xl p-6 relative shadow-lg transform transition-all overflow-y-auto max-h-screen"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-2 right-2 text-4xl text-gray-200 hover:text-gray-200"
        >
          &times;
        </button>

        <!-- Modal Content Slot -->
        <div class="">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'Modal',
  setup() {
    const isOpen = ref(false);

    const openModal = () => {
      isOpen.value = true;
    };

    const closeModal = () => {
      isOpen.value = false;
    };

    return { isOpen, openModal, closeModal };
  },
};
</script>

<style scoped>
/* Additional styles for smooth transitions */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}

/* Scroll behavior for modal content */
.modal-content {
  max-height: 80vh; /* Ensures the modal doesn't get too tall */
  overflow-y: auto; /* Adds vertical scrolling if content overflows */
}

/* Make sure modal background stays fixed */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
