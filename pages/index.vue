<template>
  <div>
    <AppLayout>
      <!-- Navbar -->
      <Navbar />

      <div class="relative">
        <!-- Banner and Preview Card -->
        <Banner />
        <PreviewCard />

        <!-- Main Content Section -->
        <div class="w-full lg:w-8/12 p-2 md:p-10 lg:pl-10 xl:pl-40">
          <div class="space-y-10 lg:container">
            <PrepareCertificate />
            <LearningHighlights />
            <CourseIncludes />
            <CourseContent />
            <CourseDescription />
            <FeaturedReview />
            <StudentBoughtCourses />
            <FrequentlyBoughtTogether :items="items" :total="total" />

            <!-- Instructors Section -->
            <div class="mt-10">
              <h1 class="text-2xl font-bold">Instructors</h1>
              <div v-for="instructor in instructors" :key="instructor.name">
                <InstructorDetails :instructor="instructor" />
              </div>
            </div>

            <CourseRating />
            <CommonCourses />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </AppLayout>
  </div>
</template>

<script lang="ts" setup>
import { useUseFrequentlyBoughtTogether } from '~/composables/data/useFrequentlyBoughtTogether';
import { useInstructorsDetail } from '~/composables/data/useInstructorsDetail';

const { items, total } = useUseFrequentlyBoughtTogether();
const { instructors } = useInstructorsDetail();
</script>

<style scoped>
/* Add specific styles if necessary */
</style>
