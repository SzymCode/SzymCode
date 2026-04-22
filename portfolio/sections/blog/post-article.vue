<template>
  <article v-if="post" class="blog-article" aria-labelledby="post-title">
    <div class="blog-layout">
      <div class="blog-content">
        <header class="blog-article-head">
          <NuxtLink class="blog-back" to="/blog">← Wszystkie wpisy</NuxtLink>
          <p v-if="post.date" class="blog-article-date">
            {{ formatDate(post.date) }}
          </p>
          <h1 id="post-title" class="blog-article-title">{{ post.title }}</h1>
          <p v-if="post.description" class="blog-article-desc">
            {{ post.description }}
          </p>
        </header>
        <div class="blog-md" v-html="post.html" />
      </div>
      <BlogPostToc class="blog-toc-wrap" />
    </div>
  </article>
</template>

<script setup lang="ts">
import BlogPostToc from '~/components/blog/post-toc.vue'

type BlogPostContent = {
  title: string
  date: string
  description: string
  html: string
}

defineProps<{
  post: BlogPostContent | null
}>()

function formatDate(iso: string) {
  if (!iso) return ''
  const d = new Date(`${iso}T12:00:00`)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style lang="scss">
@use '../../styles/rainbow' as *;

.blog-article {
  position: relative;
  z-index: 1;
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
  padding: clamp(5.5rem, 14vw, 8rem) 0 clamp(3rem, 8vw, 5rem);
  color: color-mix(in srgb, #fff 88%, transparent);

  &-head {
    margin-bottom: clamp(1.75rem, 4vw, 2.5rem);
  }

  &-date {
    margin: 0 0 0.35rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: color-mix(in srgb, #fff 48%, transparent);
  }

  &-title {
    margin: 0 0 0.5rem;
    font-size: clamp(1.65rem, 4vw, 2.15rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: #fff;
  }

  &-desc {
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    color: color-mix(in srgb, #fff 72%, transparent);
  }
}

.blog-back {
  display: inline-flex;
  margin-bottom: 1rem;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  color: hsl(var(--rainbow-hue) 58% 62%);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }
}

.blog-layout {
  display: grid;
  gap: 1.25rem;

  @media (min-width: 72rem) {
    grid-template-columns: minmax(0, 1fr) minmax(13.5rem, 15rem);
    align-items: start;
  }
}

.blog-content {
  min-width: 0;
}

.blog-toc-wrap {
  display: none;

  @media (min-width: 72rem) {
    display: block;
    width: 100%;
    margin-top: 0;
  }
}

.blog-md {
  font-size: 1.02rem;
  line-height: 1.7;

  h1,
  h2,
  h3 {
    margin: 1.5em 0 0.5em;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #fff;
    scroll-margin-top: -6rem;
  }

  h1 {
    font-size: 1.45rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    margin: 0 0 1em;
  }

  ul,
  ol {
    margin: 0 0 1em;
    padding-left: 0;
    list-style-position: inside;
  }

  li {
    margin-bottom: 0.35em;
  }

  a {
    color: hsl(var(--rainbow-hue) 58% 62%);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  pre {
    margin: 1em 0;
    padding: 0.5rem 1rem;
    overflow: auto;
    border-radius: 0.5rem;
    gap: 0;
    line-height: 1.5;
    background: black;
    border: 1px solid hsl(var(--rainbow-hue) 58% 62%);

    code {
      font-size: 0.9rem;
    }
  }

  strong {
    color: #fff;
  }
}
</style>
