<template>
  <!-- Main Wrapper (absolute positioning for the modal) -->
  <div 
  :class="scrolling ? 'fixed top-3' : 'absolute top-10'"
  class="  bg-white border-0.5 border-white p-[1px] shadow-lg w-[350px] right-40">
    <div v-if="!scrolling " class="w-full">
      <!-- Modal component -->
    <UiModal ref="modal">
      <!-- Trigger Button -->
      <template #trigger>
       <div class="w-full h-full">
        <img src="../public/thumbnail.png" alt="">
       </div>
      
      
      </template>

      <!-- Modal Content -->
      <template #content>
        <div class=" text-white">
          <p class="text-gray-300 mb-1">
            Course Preview
        </p>
          <h2 class="text-2xl font-bold mb-2 ">The Web Developer Bootcamp 2024</h2>


          <div class="bg-gray-800 w-full">
          <video
      ref="videoPlayer"
      class="w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      src="../public/tutor.mp4"
    ></video>

    <div class="bg-gray-800 mt-16 ">
      <h3 class=" text-lg font-semibold">Free Sample Videos:</h3>
      <div v-for="video in videos" :key="video.title" class="flex  py-5 justify-between w-full items-center">
        <div class="flex  items-center gap-3">
          <div class=" h-10 w-20">
            <img src="../public/courseTwo.jpg" alt="" class=" object-fill h-full w-full">
          </div>
          <p class=" font-semibold">{{ video.title }}</p>
        </div>

        <p class=" font-semibold">{{ video.duration }}</p>
      </div>
    </div>
  </div>
        </div>
        
      </template>
    </UiModal>
    </div>

    <!-- UiTabs Component -->
    <UiTabs :navbarTitles="tabTitles">
      <template #tab-0>
        <div class="px-6 pb-6 space-y-2 rounded-lg">
          <h2 class="text-xl font-semibold">Subscribe to Udemy’s top courses</h2>
          <p class="text-md tracking-tight">courses
            Get this course, plus 12,000+ of our top-rated courses, with Personal Plan. 
            <span class="text-violet-700 underline hover:text-violet-800">Learn more</span></p>

            <div class=" bg-violet-500 hover:bg-violet-600 w-full flex justify-center items-center p-3 text-white font-medium">
              <span>Try Personal Plan for Free</span>
            </div>

            <p class="text-gray-500 font-sans text-center text-xs">Starting at $10.00 per month after trial </p>
            <p class="text-gray-500 font-sans text-center text-xs">Cancel anytime</p>

            <div class="flex w-full gap-2 items-center">
              <hr class="w-full"/>
              <span class="mb-1 text-gray-500 text-sm  font-thin">or</span>
              <hr class="w-full"/>
            </div>


            <div class="w-full">
              <div class="flex gap-2">
              <span class="text-lg font-semibold">$13.99</span>
              <span class="text-gray-500  line-through">$74.99</span>
              <span>81% off</span>


            </div>

            <div class="flex gap-1 items-center  text-rose-700">
             <div class=""> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> </div>
<span class=" font-bold ">3 hours</span> left at this price!
</div>
            </div>


            <!-- Add Cart -->
             <div class=" border p-3 border-black flex justify-center items-center w-full font-bold">
              <span>Add to cart</span>
             </div>

 
             <p class="text-gray-500 font-sans text-center text-xs">30-Day Money-Back Guarantee </p>
             <p class="text-gray-500 font-sans text-center text-xs">Full Lifetime Access</p>


             <div class="flex  text-black w-full justify-evenly  font-semibold items-center">
              <span class="  border-b border-violet-500">Share</span>
              <span class="  border-b border-violet-500">Gift this course</span>
              <span class="  border-b border-violet-500">Apply Coupon</span>
             </div>

             <div class="pt-3 space-y-2 w-full">
              <div class="w-full border text-sm border-dotted items-center text-gray-500 p-2 flex justify-between">
              <p> <span class=" font-bold">ST2MT110724ANEW</span> is applied
                Udemy coupon</p>
                <button class="text-violet-800">X</button>
             </div>

             <div class="flex w-full justify-between border border-black">
              <input type="text" class="p-2 focus:outline-none bg-transparent" placeholder="Enter Coupon">
              <button class="bg-black px-4 text-white hover:bg-black/80">Apply</button>
             </div>
             </div>



        </div>
      </template>

      <template #tab-1>
        <div class="p-4  space-y-3">
          <div class="">
            <div class=" text-xl flex items-center gap-1">
              <UiLogo/> <p class="text-violet-600">Business</p>
            </div>
            <p class="text-sm text-gray-600">Subscribe to this course and 27,000+ top‑rated Udemy courses for your organization.</p>
          </div>
          <div class="w-full flex hover:bg-violet-600 justify-center items-center bg-violet-500 text-white p-3">
            <span>Try Udemy Business</span>
          </div>
          <div class=" space-y-3 mt-2">
            <div class=" flex gap-2 items-center">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p class="text-gray-700">For teams of 2 or more users</p>

            </div>
            <div class=" flex gap-2 items-center">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p class="text-gray-700">27,000+ fresh & in-demand courses</p>

            </div>
            <div class=" flex gap-2 items-center">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p class="text-gray-700">Learning Engagement tools</p>

            </div>
            <div class=" flex gap-2 items-center">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p class="text-gray-700">SSO and LMS Integrations</p>

            </div>
            
          </div>

        </div>
      </template>

     
    </UiTabs>
  </div>
</template>

<script setup lang="ts">
import { useUseRelatedVideos } from '~/composables/data/useRelatedVideos';


// State variables
const scrolling = ref(false)
const atFooter = ref(false)
const footerTop = ref(0)

// Tab titles
const tabTitles = ['Personal', 'Teams']
const {videos}=useUseRelatedVideos();
// Threshold for switching position
const threshold = 100

// Handle scroll events to toggle position class
const handleScroll = () => {
  const footer = document.querySelector('footer') as HTMLElement | null // Explicitly define footer type
  if (footer) {
    // Only calculate footerTop if footer exists
    footerTop.value = footer.getBoundingClientRect().top - window.innerHeight + 100 // Adjust the offset as needed
  }

  if (window.scrollY > threshold && !atFooter.value) {
    scrolling.value = true
  } else {
    scrolling.value = false
  }

  // Ensure atFooter is always a boolean by using `!!` to coerce the value to `boolean`
  atFooter.value = !!footer && (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - footer!.clientHeight)
}

// Set up the event listener on mount and clean up on unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Optional styles for smooth transition */
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
</style>
