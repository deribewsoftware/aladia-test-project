<template>
  <div class="p-6">
   
    <!-- Requirements Section -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-2">Requirements</h2>
      <ul class="list-disc pl-5">
        <li>Software or Information Technology or Infrastructure understanding</li>
      </ul>
    </div>

    <!-- Description Section -->
    <div class="mb-8 tracking-tight">
      <h2 class="text-2xl font-bold mb-4">
       Description
      </h2>
      <p class="mb-5 font-semibold text-black"> Welcome to the Course on Professional Cloud Architect by Google Cloud</p>
      <p class="mb-1 font-semibold text-black">More than 30280+ Students responded they have passed certifications because of this course!</p>
     
      <p class="text-gray-800 my-2">
        Successful <strong>407,000+ Subscriptions</strong> and <strong>305,000+ </strong>  Unique Students <strong>only for Google Cloud Platform Certification Courses.</strong>
      </p>


      <div v-if="showMore" class=" text-base w-full">
      <h3 class="text-sm text-black font-bold mt-4">Course Updated - May 2024</h3>
      <ul class="list-decimal  pl-5">
        <li>Updates services that have changed</li>
        <li>New theme and Animation for critical services</li>
      </ul>
      <p class=" font-medium py-4">
        We will continue to update with a new design for all our lectures. Stay Tuned.
      </p>

      <div class="mt-4  pb-10 space-y-3">
<p class=" font-medium">
  Here is some recent feedback after passing the exam.  </p>
<p>
  "Passed Google Cloud Architect Exam - Thank you Dhanaji for your course!" ·Ramu a day ago</p>

<p class=" italic">"Yesterday i passed the exam, its not that hard if you understand concepts good and did some work/lab in GCP. The material and the architect course is so helpful.."</p>


<p class=" italic">
  I have cleared my GCP Cloud Architect exam and would like to thank you for the detailed course, which was good to get subject knowledge.</p>

<p class=" italic">Thanks and Regards,</p>

<div class="mt-10">

 <p> Major Updates for this Courses! </p>
 <ul class=" font-semibold space-y-1  italic list-decimal">
  <li class="mt-2"> Updates: Added 300 Practice Questions have already been added... I am still working on the additional questions for some questions </li>
  <li>
    Updates: Added Code Samples for demos.</li>
    <li>Updates:  Added More demos got Google Cloud Platform Services - VPC, Sub-networks, VPN, Bastion Host etc</li>
    <li class=" font-normal">Updates: Added 4 Case studies which appear in the exam 
    </li>
    <li></li>
    <li></li>

 </ul>


 







</div>
<div class="py-2 w-full space-y-2">
  
<p class=" italic font-semibold">Google is developer-friendly and has provided almost all code examples to GitHub  link ->  GitHub Slash GoogleCloudPlatform/</p>
<p class=" italic font-semibold">Google provides $300 credit to try/learn the GCP platform besides the free tier, so you can even learn paid services that do not have a free tier. </p>
</div>


 <!-- GCP Highlights Section -->
 <div class="mt-8">
      <h3 class=" italic font-semibold mb-4">GCP Highlights</h3>
      <ul class="list-disc text-sm space-y-2 text-gray-800 pl-5">
        <li>Google Cloud Platform - GCP is the fastest-growing public Cloud Platform Service in the world.</li>
        <li>Last year Google recorded a 65% growth rate for Cloud Business.</li>
        <li>Google has committed many more data centers, points of presence, or edge locations worldwide in 2023.</li>
        <li>
          GCP is prominent in Data Analytics and Machine Learning, with services in Storage, Compute, Database, Security, and many more cloud solutions.
        </li>
      </ul>
    </div>
    <div class="mt-8 w-full italic font-semibold">
      <h3>Certifications Content </h3>
      <ul class=" space-y-2 pl-5 list-disc">
        <li class="mt-2">Design and plan a cloud solution architecture</li>
        <li>Manage and provision the cloud solution infrastructure</li>
        <li>Design for security and compliance</li>
        <li>Analyze and optimize technical and business processes</li>
        <li>Manage implementations of cloud architecture</li>
        <li>Ensure solution and operations reliability</li>
      </ul>
    </div>


    <div class="mt-8">
      <h3 class="font-semibold">GCP Agenda</h3>
      <ul class=" pl-5  text-sm  tracking-wide italic list-disc space-y-2">
        <li> Compute, Storage & Database, Networking, Autoscaling/HA – Core Platform and Infrastructure Services –<strong> In-Depth</strong></li>

<li>IAM and Security, Management - Logging and Monitoring, Developer and Management Tools  - Supporting Services   - <strong>In-Depth</strong></li>


<li>BigData, Machine Learning, IoT  - <strong> Other GCP  Services</strong> </li>
      </ul>
    </div>

    <div class=" space-y-2 text-sm tracking-wide text-gray-800">
      <p>Happy Learning</p>
      <p>GCP Gurus,</p>
      <p>Seattle.</p>
    </div>
      </div>
   

    <!-- Who This Course is For Section -->
    <div class="pb-8">
      <h3 class="text-2xl font-bold mb-4">Who this course is for:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>Anyone wanting to enhance skills with Cloud Architecture Certifications</li>
        <li>Anyone wanting to gain an understanding of Google Cloud Platform - GCP</li>
        <li>Anyone preparing for the Cloud Architect Exam from Google</li>
        <li>Anyone wanting to understand Public Cloud, Private Cloud, or Hybrid Cloud Deployment</li>
        <li>Anyone looking to understand the services offered by Google Cloud Platform</li>
        <li>Customers of Google Cloud Platform who want a deeper understanding of its services</li>
        <li>Current customers of Amazon, Azure, or other public clouds who want to learn about GCP services</li>
        <li>AWS Solution Architects or Microsoft Azure Architects who want to understand Google Cloud Platform</li>
        <li>Developers, Lead Developers, and other tech professionals using Google Cloud Platform or other public cloud services</li>
      </ul>
    </div>

  
    

   
  </div>
</div>
    
 
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
