<template>
  <section
    class="course-category-hero"
    aria-labelledby="course-category-hero-title"
  >
    <div class="course-category-hero-inner">
      <NuxtLink class="course-category-hero-back" to="/kursy">
        <Icon
          name="mdi:arrow-left"
          class="course-category-hero-back-icon"
          aria-hidden="true"
        />
        Wszystkie kategorie
      </NuxtLink>
      <h1 id="course-category-hero-title" class="course-category-hero-title">
        Kursy
        <span class="rainbow-text-auto">{{ titleHighlight }}</span>
      </h1>
      <p class="course-category-hero-lead">{{ lead }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  titleHighlight: string
  lead: string
}>()
</script>

<style lang="scss" scoped>
.course-category-hero {
  position: relative;
  z-index: 1;
  padding-bottom: clamp(1rem, 2.5vw, 1.75rem);

  &-inner {
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;
  }

  &-back {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    margin: 0 0 1rem;
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    color: hsl(var(--rainbow-hue) 62% 64%);

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.15em;
    }

    &:focus-visible {
      outline: 2px solid hsl(var(--rainbow-hue) 65% 70%);
      outline-offset: 3px;
      border-radius: 0.25rem;
    }

    &-icon {
      width: 1.1rem;
      height: 1.1rem;
    }
  }

  &-title {
    margin: 0 0 1rem;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  &-lead {
    margin: 0;
    max-width: 46rem;
    line-height: 1.65;
    color: color-mix(in srgb, #fff 78%, transparent);
  }
}
</style>
