<template>
  <div class="course-category-view">
    <Navbar />
    <main class="course-category-view-main">
      <GridBackground />
      <CourseCategoryHero
        title-highlight="premium"
        lead="Pełne programy z modułami, zadaniami i konsultacjami — pod realne wdrożenia i pracę w zespole."
      />
      <CourseListGrid
        :courses="paidCourses"
        aria-label="Lista kursów płatnych"
      />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/footer.vue'
import GridBackground from '~/components/grid-background.vue'
import Navbar from '~/components/navbar.vue'
import { paidCourses } from '~/composables/courseCatalog'
import { useHead } from 'nuxt/app'

useHead({
  title: 'Kursy płatne | SzymCode',
  meta: [
    {
      name: 'description',
      content:
        'Płatne kursy SzymCode: Laravel, Nuxt, Next.js — programy z praktyką pod produkcję.',
    },
  ],
})
</script>

<style lang="scss">
.course-category-view {
  position: relative;
  min-height: 100vh;

  .course-category-view-main {
    position: relative;
    min-height: 100vh;
    padding-top: clamp(6rem, 9vw, 8rem);
    color: #fff;
  }
}
</style>
