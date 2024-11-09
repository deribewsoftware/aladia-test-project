<template>
  <div class="container mx-auto p-4">
    <!-- Explore Related Topics -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Explore related topics</h2>
      <div class="flex  text-black font-bold space-x-4">
        <button class="border  border-black rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100">
          Web Development
        </button>
        <button class="border border-black rounded-full px-4 py-2 text-gray-700 hover:bg-gray-100">
          Development
        </button>
      </div>
    </section>

    <!-- Course Includes Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">This course includes:</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
            <path d="M5 3v18"/>
          </svg>
          <p>73.5 hours on-demand video</p>
        </div>

        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <p>62 coding exercises</p>
        </div>

        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M7 7h10M7 12h10M7 17h10M7 21h10" />
          </svg>
          <p>65 articles</p>
        </div>

        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M16 3H8a2 2 0 00-2 2v16l6-3 6 3V5a2 2 0 00-2-2z" />
          </svg>
          <p>133 downloadable resources</p>
        </div>

        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          <p>Access on mobile and TV</p>
        </div>

        <div class="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <p>Certificate of completion</p>
        </div>
      </div>
    </section>

    <!-- Companies Section -->
    <section class="border p-4">
      <h3 class="text-lg font-medium mb-2">Top companies offer this course to their employees</h3>
      <p class="text-gray-500 mb-4">
        This course was selected for our collection of top-rated courses trusted by businesses worldwide. 
        <a href="#" class="text-blue-500 hover:underline">Learn more</a>
      </p>
      <div class="flex items-center justify-between space-x-6">
        <img src="../public/nasdaq-logo.svg" alt="Nasdaq" class="h-8">
        <img src="../public/vw-logo.svg" alt="VW" class="h-8">
        <img src="../public/box-logo.svg" alt="Box" class="h-8">
        <img src="../public/netapp-logo.svg" alt="NetApp" class="h-8">
        <img src="../public/eventbrite-logo.svg" alt="Eventbrite" class="h-8">
      </div>
    </section>


    <div class="container bg-gray-200/50  mt-5 mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
    
    <!-- Left Section: Coding Exercise Description -->
    <div class="space-y-8 h-full ">
      <h2 class="text-3xl font-bold">Coding Exercises</h2>
      <p class="text-gray-600">This course includes our updated coding exercises so you can practice your skills as you learn.</p>
      <div class="mt-20">
        <a href="#" class="text-blue-500 hover:underline">See a demo</a>
      </div>
    </div>

    <!-- Right Section: Code Editor & Result Interface -->
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
     
    <img src="../public/coding-exercises.png" alt="">

     
    </div>

  </div>
  </div>
</template>
