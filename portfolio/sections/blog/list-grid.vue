<template>
  <section class="blog-list-wrap" aria-label="Lista wpisów">
    <div class="blog-list-head">
      <h2 class="blog-list-title">Wszystkie materiały</h2>
    </div>
    <ul v-if="posts.length" class="blog-list">
      <li v-for="post in posts" :key="post.slug" class="blog-list-item">
        <BlogPostCard :post="post" />
      </li>
    </ul>
    <p v-else class="blog-empty">
      Brak wpisów — dodaj pliki <code>.md</code> w <code>public/blog</code>.
    </p>
  </section>
</template>

<script setup lang="ts">
import BlogPostCard from '~/components/blog/post-card.vue'

type BlogPostListItem = {
  slug: string
  title: string
  date: string
  description: string
}

defineProps<{
  posts: BlogPostListItem[]
}>()
</script>

<style lang="scss">
@use '../../styles/breakpoints' as *;

.blog-list-wrap {
  position: relative;
  z-index: 1;
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
  padding-bottom: clamp(3rem, 8vw, 5rem);
}

.blog-list-head {
  margin-bottom: 1.1rem;
}

.blog-list-title {
  margin: 0;
  color: #fff;
  font-size: clamp(1.35rem, 2.8vw, 1.85rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

.blog-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.9rem;

  @include bp-md-up {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @include bp-lg-up {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.blog-list-item {
  min-width: 0;
}

.blog-empty {
  margin: 0;
  padding: 2rem 0;
  text-align: center;
  color: color-mix(in srgb, #fff 58%, transparent);
}
</style>
