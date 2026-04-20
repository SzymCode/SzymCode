<template>
  <NuxtLink class="blog-card" :to="`/blog/${post.slug}`">
    <h3 class="blog-card-title">{{ post.title }}</h3>
    <p v-if="post.description" class="blog-card-desc">{{ post.description }}</p>
    <span class="blog-card-date">{{ formatDate(post.date) }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
type BlogCardPost = {
  slug: string
  title: string
  date: string
  description: string
}

defineProps<{
  post: BlogCardPost
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
.blog-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  min-height: 10.5rem;
  padding: 1.2rem 1.25rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0.7rem;
  border: 1px solid hsl(var(--rainbow-hue) 58% 62%);
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.015)),
    linear-gradient(180deg, rgb(7 12 11 / 0.95), rgb(4 7 7 / 0.92));
  backdrop-filter: blur(1rem);
  overflow: hidden;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 12%, rgb(255 255 255 / 0.06)),
        color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 6%, rgb(255 255 255 / 0.015))
      ),
      linear-gradient(180deg, rgb(8 13 12 / 0.96), rgb(5 8 8 / 0.94));
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  &-date {
    margin-top: auto;
    font-size: 0.86rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: color-mix(in srgb, #fff 82%, transparent);
    position: relative;
    z-index: 1;
  }

  &-title {
    margin: 0;
    position: relative;
    z-index: 1;
    font-size: 1.03rem;
    font-weight: 700;
    line-height: 1.28;
    letter-spacing: -0.01em;
    color: #fff;
  }

  &-desc {
    margin: 0;
    position: relative;
    z-index: 1;
    font-size: 0.93rem;
    line-height: 1.45;
    color: color-mix(in srgb, #fff 70%, transparent);
  }
}
</style>
