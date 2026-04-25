<template>
  <div class="course-category-view">
    <Navbar />
    <main class="course-category-view-main">
      <GridBackground />
      <CourseCategoryHero
        title-highlight="bez opłat"
        lead="Wstępy i warsztaty — zanim wejdziesz w pełny program, możesz sprawdzić formę i tempo pracy."
      />
      <CourseListGrid
        :courses="freeCourses"
        aria-label="Lista kursów bezpłatnych"
      />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/footer.vue'
import GridBackground from '~/components/grid-background.vue'
import Navbar from '~/components/navbar.vue'
import { freeCourses } from '~/composables/courseCatalog'
import { useHead } from 'nuxt/app'

useHead({
  title: 'Kursy bezpłatne | SzymCode',
  meta: [
    {
      name: 'description',
      content:
        'Bezpłatne kursy SzymCode: Vue, React, SCSS — materiały startowe i warsztaty.',
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
