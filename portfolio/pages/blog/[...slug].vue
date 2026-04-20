<template>
  <div id="blog-top" class="blog-page">
    <Navbar />
    <main class="blog-main">
      <GridBackground />
      <BlogPostArticle :post="post" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/footer.vue'
import GridBackground from '~/components/grid-background.vue'
import Navbar from '~/components/navbar.vue'
import { useHead, useRoute } from 'nuxt/app'
import BlogPostArticle from '~/sections/blog/post-article.vue'
import { useBlogPostBySlug } from '~/composables/useBlogPosts'

const route = useRoute()
const slugParam = route.params.slug as string | string[] | undefined
const slug = Array.isArray(slugParam) ? slugParam.join('/') : (slugParam ?? '')
const post = useBlogPostBySlug(slug)

useHead(() => ({
  title: post ? `${post.title} | Blog SzymCode` : 'Blog | SzymCode',
  meta: [
    {
      name: 'description',
      content: post?.description || '',
    },
  ],
}))
</script>

<style lang="scss">
.blog-page {
  position: relative;
  min-height: 100vh;
}

.blog-main {
  position: relative;
  min-height: 100vh;
}
</style>
