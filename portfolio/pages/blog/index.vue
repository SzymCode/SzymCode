<template>
  <div id="blog-top" class="blog-page">
    <Navbar />
    <main class="blog-main">
      <GridBackground />
      <BlogListHero />
      <BlogListGrid :posts="posts" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/footer.vue'
import GridBackground from '~/components/grid-background.vue'
import Navbar from '~/components/navbar.vue'
import { useHead } from 'nuxt/app'
import BlogListGrid from '~/sections/blog/list-grid.vue'
import BlogListHero from '~/sections/blog/list-hero.vue'
import { useBlogPosts } from '~/composables/useBlogPosts'

const posts = useBlogPosts()

useHead({
  title: 'Blog | SzymCode',
  meta: [
    {
      name: 'description',
      content: 'Wpisy bloga SzymCode — mentoring IT, development i kariera.',
    },
  ],
})
</script>

<style lang="scss">
.blog-page {
  position: relative;
  min-height: 100vh;

  .blog-main {
    position: relative;
    min-height: 100vh;
  }
}
</style>
