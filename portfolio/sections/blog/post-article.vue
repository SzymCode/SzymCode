<template>
  <article v-if="post" class="blog-article" aria-labelledby="post-title">
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
  </article>
</template>

<script setup lang="ts">
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
.blog-article {
  position: relative;
  z-index: 1;
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
  padding: clamp(5.5rem, 14vw, 8rem) 0 clamp(3rem, 8vw, 5rem);
  color: color-mix(in srgb, #fff 88%, transparent);
}

.blog-article-head {
  margin-bottom: clamp(1.75rem, 4vw, 2.5rem);
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

.blog-article-date {
  margin: 0 0 0.35rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: color-mix(in srgb, #fff 48%, transparent);
}

.blog-article-title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.65rem, 4vw, 2.15rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: #fff;
}

.blog-article-desc {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: color-mix(in srgb, #fff 72%, transparent);
}

.blog-md {
  font-size: 1.02rem;
  line-height: 1.7;

  :deep(h1),
  :deep(h2),
  :deep(h3) {
    margin: 1.5em 0 0.5em;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #fff;
  }

  :deep(h1) {
    font-size: 1.45rem;
  }

  :deep(h2) {
    font-size: 1.25rem;
  }

  :deep(h3) {
    font-size: 1.1rem;
  }

  :deep(p) {
    margin: 0 0 1em;
  }

  :deep(ul),
  :deep(ol) {
    margin: 0 0 1em;
    padding-left: 0;
    list-style-position: inside;
  }

  :deep(li) {
    margin-bottom: 0.35em;
  }

  :deep(a) {
    color: hsl(var(--rainbow-hue) 58% 62%);
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.15em;
  }

  :deep(code) {
    font-size: 0.88em;
    padding: 0.12em 0.35em;
    border-radius: 0.3em;
    background: rgb(255 255 255 / 0.08);
  }

  :deep(pre) {
    margin: 1em 0;
    padding: 1rem;
    overflow: auto;
    border-radius: 0.5rem;
    background: rgb(0 0 0 / 0.45);
    border: 1px solid rgb(255 255 255 / 0.08);
  }

  :deep(pre code) {
    padding: 0;
    background: none;
  }

  :deep(strong) {
    color: #fff;
  }
}
</style>
