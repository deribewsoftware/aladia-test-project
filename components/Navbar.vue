<template>
  <div class="w-full h-16 px-6 flex gap-6 items-center justify-evenly">
    <!-- Mobile Menu Button -->
    <button class="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    <!-- Logo -->
    <UiLogo />

    <!-- Category (Visible on md screens and above) -->
    <div class="hidden md:block">
      <Category />
    </div>

    <!-- Searchbar (Visible on lg screens and above) -->
    <div class="hidden lg:flex flex-grow">
      <UiSearchbar />
    </div>

    <!-- Udemy Business Dropdown (Visible on lg screens and above) -->
    <div class="hidden lg:block">
      <UiDropdown>
        <template #trigger>
          <span>Udemy Business</span>
        </template>
        <template #dropdown>
          <div class="w-full p-3 text-center">
            <h3 class="text-lg font-semibold tracking-tight leading-6 text-black">
              Get your team access to over 27,000 top Udemy courses, anytime, anywhere.
            </h3>
            <div class="mt-5 w-full p-3 flex justify-center items-center font-semibold text-white bg-black hover:bg-black/80">
              Try Udemy Business
            </div>
          </div>
        </template>
      </UiDropdown>
    </div>

    <!-- Tech on Udemy Dropdown (Visible on lg screens and above) -->
    <div class="hidden lg:block">
      <UiDropdown>
        <template #trigger>
          <span>Tech on Udemy</span>
        </template>
        <template #dropdown>
          <div class="w-full p-3 text-center">
            <h3 class="text-lg font-semibold tracking-tight leading-6 text-black">
              Turn what you know into an opportunity and reach millions around the world.
            </h3>
            <div class="mt-5 w-full p-3 flex justify-center items-center font-semibold text-white bg-black hover:bg-black/80">
              Learn more
            </div>
          </div>
        </template>
      </UiDropdown>
    </div>

    <!-- Cart Dropdown -->
    <UiDropdown>
      <template #trigger>
        <div class="w-10 h-10 p-1.5">
          <svg fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
      </template>
      <template #dropdown>
        <div class="flex flex-col p-4 space-y-5 items-center">
          <p class="text-gray-500">Your cart is empty.</p>
          <p class="font-semibold text-violet-800 hover:text-violet-900">Keep shopping</p>
        </div>
      </template>
    </UiDropdown>

    <!-- Log In Button (Visible on lg screens and above) -->
    <button class="hidden lg:flex items-center border border-black py-2 px-4 hover:bg-gray-400/20">
      <span class="font-medium">Log in</span>
    </button>

    <!-- Sign Up Button (Visible on lg screens and above) -->
    <button class="hidden lg:flex items-center text-white bg-black border border-black py-2 px-4 hover:bg-gray-900/70">
      <span class="font-medium">Sign up</span>
    </button>

    <!-- Language Selector -->
    <button class="w-10 h-10 p-2 flex items-center border border-black hover:bg-gray-400/20">
      <svg fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    </button>
  </div>
</template>
