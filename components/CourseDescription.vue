<template>
  <div class="p-6">
    <!-- Title -->
    <h2 class="text-2xl font-bold mb-4">Requirements</h2>

    <!-- Requirements List -->
    <ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">
      <li>Have a computer with Internet</li>
      <li>Be ready to learn an insane amount of awesome stuff</li>
      <li>Prepare to build real web apps!</li>
      <li>Brace yourself for stupid jokes about my dog Rusty</li>
    </ul>

    <!-- Description Section -->
    <h2 class="text-2xl font-bold mb-4">Description</h2>
    
    <!-- Short Description -->
    <p class="text-gray-700 mb-4">
      <strong>Now with over 10 hours of React content. Just updated on May 15th, 2023.</strong>
    </p>
    
    <!-- Long Description (Toggled) -->
    <p class="text-gray-700 mb-4" :class="{ 'line-clamp-4': !showMore }">
      Massive new React "expansion pack" covers: React basics, JSX, props, state, Vite, MaterialUI, hooks, useEffect, React design patterns, and more.
      Hi! Welcome to the brand new version of The Web Developer Bootcamp, Udemy's most popular web development course. This course was just completely
      overhauled to prepare students for the 2023 job market, with over 60 hours of brand new content. This is the only course you need to learn web
      development. There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective
      on the market. Here's why:
      
      <br />
      <strong>This is the only Udemy course taught by a professional bootcamp instructor with a track record of success.</strong>
      92% of my in-person bootcamp students go on to get full-time developer jobs. Most of them are complete beginners when I start working with them.
      The previous 2 bootcamp programs that I taught cost $14,000 and $21,000. This course is just as comprehensive but with brand new content for a fraction
      of the price. Everything I cover is up-to-date and relevant to 2022's developer job market. This course does not cut any corners. I just spent 8 months
      redoing this behemoth of a course!
      <span v-if="showMore">
        We build 13+ projects, including a gigantic production application called YelpCamp. No other course walks you through the creation of such a substantial application.
        <br /><br />
        <strong>Technologies Covered:</strong>
        <ul class="list-disc list-inside mt-2">
          <li>HTML5, CSS3, Flexbox, Responsive Design</li>
          <li>JavaScript (all 2022 modern syntax, ES6, ES2018, etc.)</li>
          <li>AJAX, ReactJS, NodeJS, MongoDB, and much more!</li>
        </ul>
        <br />
        When you're learning to program you often have to sacrifice learning the exciting and current technologies in favor of the "beginner friendly" classes.
        With this course, you get the best of both worlds. This is a course designed for the complete beginner, yet it covers some of the most exciting and relevant topics in the industry.
        
        <h3 class="text-xl font-bold mt-6">Course Includes:</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Lectures</li>
          <li>Code-Alongs</li>
          <li>Projects</li>
          <li>Exercises</li>
          <li>Research Assignments</li>
          <li>Slides</li>
          <li>Downloads</li>
          <li>Readings</li>
          <li>Too many pictures of my dog Rusty</li>
        </ul>
        
        <p class="mt-4">
          If you have any questions, please don't hesitate to contact me. I got into this industry because I love working with people and helping students learn. Sign up today and see how fun, exciting, and rewarding web development can be!
        </p>

        
    <!-- Who this course is for -->
    <h3 class="text-2xl font-bold mt-8">Who this course is for:</h3>
    <ul class="list-disc list-inside space-y-2 mt-2 text-gray-700">
      <li>This course is for anyone who wants to learn about web development, regardless of previous experience</li>
      <li>It's perfect for complete beginners with zero experience</li>
      <li>It's also great for anyone who does have some experience in a few of the technologies (like HTML and CSS) but not all</li>
      <li>If you want to take ONE COURSE to learn everything you need to know about web development, take this course</li>
    </ul>
      </span>
    </p>
    
    <!-- Show More / Show Less Button -->
     <!-- Show More/Less Button -->
    <button class="mt-4 text-violet-700 hover:text-violet-800 font-semibold hover:underline focus:outline-none" @click="toggleShowMore">
      <div v-if="showMore" class="flex items-center gap-2">
        <span>Show less</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      <div v-else class="flex items-center gap-2">
        <span>Show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </button>
    

  </div>
</template>

<script lang="ts" setup>

// Reactive variable to control the "Show More" toggle state
const showMore = ref(false)

// Function to toggle "Show More" state
const toggleShowMore = () => {
  showMore.value = !showMore.value
}
</script>

<style scoped>
/* Add Tailwind line-clamp if enabled in your project */
.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
