<template>
  <section id="blog-latest" class="blog-latest">
    <div class="blog-latest-inner">
      <div class="blog-latest-head">
        <h2 class="blog-latest-title">Materiały</h2>
        <NuxtLink class="blog-latest-all" to="/blog"
          >Wszystkie materiały</NuxtLink
        >
      </div>

      <ul class="blog-latest-list">
        <li
          v-for="post in latestPosts"
          :key="post.slug"
          class="blog-latest-item"
        >
          <NuxtLink class="blog-latest-card" :to="`/blog/${post.slug}`">
            <h3 class="blog-latest-card-title">{{ post.title }}</h3>
            <p v-if="post.description" class="blog-latest-card-desc">
              {{ post.description }}
            </p>
            <span class="blog-latest-card-date"
              >{{ formatDate(post.date) }}</span
            >
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBlogPosts } from '~/composables/useBlogPosts'

const latestPosts = useBlogPosts().slice(0, 6)

function formatDate(iso: string) {
  if (!iso) return 'BLOG'
  const d = new Date(`${iso}T12:00:00`)
  if (Number.isNaN(d.getTime())) return 'BLOG'
  return d.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style lang="scss">
@use '../../styles/breakpoints' as *;

.blog-latest {
  position: relative;
  z-index: 1;
  padding: clamp(1.2rem, 3vw, 2rem) 0;

  &-inner {
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;
  }

  &-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 1.15rem;
  }

  &-title {
    margin: 0;
    font-size: clamp(1.65rem, 3.1vw, 2.15rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #fff;
  }

  &-list {
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

  &-item {
    min-width: 0;
  }

  &-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    min-height: 10.5rem;
    padding: 1.2rem 1.25rem;
    border-radius: 0.7rem;
    border: 1px solid hsl(var(--rainbow-hue) 58% 62%);
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.015)),
      linear-gradient(180deg, rgb(7 12 11 / 0.95), rgb(4 7 7 / 0.92));
    backdrop-filter: blur(1rem);
    overflow: hidden;
    text-decoration: none;
    color: #fff;
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
  }

  &-card-title {
    margin: 0;
    position: relative;
    z-index: 1;
    font-size: 1.03rem;
    line-height: 1.28;
    letter-spacing: -0.01em;
  }

  &-card-desc {
    margin: 0;
    position: relative;
    z-index: 1;
    color: color-mix(in srgb, #fff 70%, transparent);
    font-size: 0.93rem;
    line-height: 1.45;
  }

  &-card-date {
    margin-top: auto;
    position: relative;
    z-index: 1;
    font-size: 0.86rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: color-mix(in srgb, #fff 82%, transparent);
  }

  &-all {
    font-size: 0.9rem;
    color: color-mix(in srgb, #fff 78%, transparent);
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
}
</style>
