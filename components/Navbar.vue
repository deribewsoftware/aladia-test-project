<template>
  <div class="w-full px-6 gap-6 flex justify-evenly h-16 items-center">

    <!-- udemy Logo -->
      <UiLogo/>

      <!-- Category -->
       <Category/>

       <!-- Searchbar -->
        <div class=" flex-grow">
          <UiSearchbar/>
        </div>
        
          
       

        <!-- Udemy Business -->
        <UiDropdown   >
          <template #trigger>
       <span>Udemy Business</span>
          </template>
      <template #dropdown>
        <div class="w-full p-3">
          <h3 class="text-center text-black font-semibold leading-6 tracking-tight text-lg">Get your team access to over 27,000 top Udemy courses, anytime, anywhere.</h3>
          <div class="mt-5  hover:bg-black/80 text-white font-semibold w-full p-3 flex justify-center bg-black items-center">
            <span>Try Udemy Business</span>
          </div>
        </div>
      </template>
    </UiDropdown>


         <!-- Tech on Udemy -->
          
         <UiDropdown   >
          <template #trigger>
       <span>Tech on Udemy</span>
          </template>
      <template #dropdown>
        <div class="w-full p-3">
          <h3 class="text-center text-black font-semibold leading-6 tracking-tight text-lg">Turn what you know into an opportunity and reach millions around the world.</h3>
          <div class="mt-5  hover:bg-black/80 text-white font-semibold w-full p-3 flex justify-center bg-black items-center">
            <span>Learn more</span>
          </div>
        </div>
      </template>
    </UiDropdown>



    <!-- Cart -->
    <UiDropdown >

<template #trigger>
  <div class="w-10 h-10 p-1.5">
    <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
</svg>
  </div>
</template>


<template #dropdown>
  <div class=" flex flex-col p-4 space-y-5 justify-center items-center">
    <p class="text-gray-500">Your cart is empty.</p>
    <p class="text-violet-800 font-semibold hover:text-violet-900">Keep shopping</p>
  </div>
</template>
</UiDropdown>



    <!-- Log in -->
     <button class="border border-black py-2 px-4 flex items-center hover:bg-gray-400/20 ">
      <span class=" font-medium">Log in</span>
     </button>

    <!-- Signup -->
    <button class="border border-black py-2 px-4 flex text-white items-center bg-black hover:bg-gray-900/70 ">
      <span class=" font-medium">Sign up</span>
     </button>


     <!-- Languages -->
     <button class="border w-10 h-10  border-black p-2 flex items-center hover:bg-gray-400/20 ">
      <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"></path>
</svg>
     </button>


  </div>
</template>