<template>
  <!-- Main Wrapper (absolute positioning for the modal) -->
  <div 
  :class="scrolling ? 'lg:fixed lg:top-3' : 'lg:absolute top-3'"
  class="  bg-white m-4 lg:z-20 border-0.5 border-white p-[1px] w-full lg:shadow-lg lg:w-[350px] lg:right-10 xl:right-20 2xl:right-40">
    <div v-if="!scrolling " class="w-full">
      <!-- Modal component -->
    <UiModal ref="modal">
      <!-- Trigger Button -->
      <template #trigger>
       <div class=" h-full">
        <img src="../public/thumbnail.png" alt="" class="w-full w-full">
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












    <div class="px-6 mt-5  pb-6 space-y-4 rounded-lg">

      <!-- Price -->
          <h2 class="text-4xl text-gray-900 leading-10   font-bold">$19.99</h2>
          
          

            <div class=" bg-violet-500 font-bold hover:bg-violet-600 w-full flex justify-center items-center p-3 text-white ">
              <span>Add to Cart</span>
            </div>

            <div class=" border border-black font-bold hover:bg-black/20 w-full flex justify-center items-center p-3 text-black ">
              <span>Buy now</span>
            </div>




            <p class="text-gray-500 font-sans text-center text-xs">30-Day Money-Back Guarantee </p>
           


            <div class="w-full">
    <h2 class="text-sm font-bold mb-2 text-gray-900">This course includes:</h2>
    <ul class="space-y-2 text-sm">
      <li v-for="(feature, index) in features" :key="index" class="flex items-center space-x-3">
        <div v-html="feature.icon" class="w-5 h-5 text-gray-900"></div>
        <span class="text-gray-700 ">{{ feature.text }}</span>
      </li>
    </ul>
  </div>

            




             <div class="flex  text-black w-full justify-evenly  font-semibold items-center">
              <span class="  border-b border-violet-500">Share</span>
              <span class="  border-b border-violet-500">Gift this course</span>
              <span class="  border-b border-violet-500">Apply Coupon</span>
             </div>

             <div class=" space-y-2 w-full">
              <div class="w-full border text-sm border-dotted items-center text-gray-500 p-2 flex justify-between">
              <p> <span class=" font-bold">ST2MT110724ANEW</span> is applied
                Udemy coupon</p>
                <button class="text-violet-800"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
             </div>

             <div class="flex w-full justify-between border border-black">
              <input type="text" class="p-2 focus:outline-none bg-transparent" placeholder="Enter Coupon">
              <button class="bg-black px-4 text-white hover:bg-black/80">Apply</button>
             </div>

             <div class="pt-2 ">
              <hr class="w-full ">
             </div>
             <div class=" w-full">
              <p class="text-lg text-black font-bold">Training 5 or more people?</p>
             </div>
            </div>



        </div>



<!--      -->
  </div>
</template>

<script setup lang="ts">
import { useUseRelatedVideos } from '~/composables/data/useRelatedVideos';


// State variables
const scrolling = ref(false)
const atFooter = ref(false)
const footerTop = ref(0)

interface Feature {
  icon: string;
  text: string;
}

const features = ref<Feature[]>([
  { icon: `<svg  class="size-5" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 491.52 491.52" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,0v327.68h491.52V0H0z M471.04,307.2H20.48V20.48h450.56V307.2z"></path> </g> </g> <g> <g> <path d="M194.56,87.77v141.9l122.88-70.95L194.56,87.77z M215.04,123.25l61.44,35.47l-61.44,35.47V123.25z"></path> </g> </g> <g> <g> <path d="M183.285,430.08c-4.758-23.34-25.441-40.96-50.165-40.96s-45.407,17.62-50.165,40.96H0v20.48h82.955 c4.758,23.34,25.441,40.96,50.165,40.96s45.407-17.62,50.165-40.96H491.52v-20.48H183.285z M133.12,471.04 c-16.94,0-30.72-13.78-30.72-30.72s13.78-30.72,30.72-30.72s30.72,13.78,30.72,30.72S150.06,471.04,133.12,471.04z"></path> </g> </g> </g></svg>`, text: '29.5 hours on-demand video' },
  { icon: `<svg  class="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
`, text: '2 practice tests' },
  { icon: `<svg class="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
`, text: '18 articles' },
  { icon: `<svg  class="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>
`, text: '37 downloadable resources' },
  { icon: `<svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
`, text: 'Access on mobile and TV' },
  { icon: `<svg  class="size-5" fill="#000000" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1.5" stroke="currentColor"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M244,128a52,52,0,0,1-88.76953,36.76953q-.0857-.0857-.166-.17676L95.02832,96.80371a44,44,0,1,0,0,62.39258l8.60449-9.71533a4,4,0,1,1,5.98926,5.30371l-8.68652,9.8081q-.08057.09083-.166.17676a52,52,0,1,1,0-73.53906q.0857.0857.166.17676l60.03613,67.78906a44,44,0,1,0,0-62.39258l-8.60449,9.71533a4,4,0,1,1-5.98926-5.30371l8.68652-9.8081q.08057-.09082.166-.17676A52,52,0,0,1,244,128Z"></path> </g></svg>
`, text: 'Full lifetime access' },
  { icon: `<svg class="size-5" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier"stroke-width="1.5" stroke="currentColor"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1{fill:none;stroke:#2b2b2b;stroke-linecap:round;stroke-linejoin:round;stroke-width:13px;}</style></defs><title></title><path class="cls-1" d="M170.67,128.37H341.33a0,0,0,0,1,0,0v41.18A85.33,85.33,0,0,1,256,254.89h0a85.33,85.33,0,0,1-85.33-85.33V128.37a0,0,0,0,1,0,0Z"></path><path class="cls-1" d="M320,383.63a64,64,0,0,0-128,0Z"></path><line class="cls-1" x1="256" x2="256" y1="254.89" y2="319.63"></line><path class="cls-1" d="M311.59,234.3h28.85A43.56,43.56,0,0,0,384,190.74V170.3H341.33"></path><path class="cls-1" d="M200.41,234.3H171.56A43.56,43.56,0,0,1,128,190.74V170.3h42.67"></path></g></svg>`, text: 'Certificate of completion' },
]);
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
