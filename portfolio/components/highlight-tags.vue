<template>
  <ul class="highlight-tags" aria-label="Skrót doświadczenia — linki">
    <li v-for="item in items" :key="item.label" class="highlight-tags-item">
      <NuxtLink
        class="highlight-tags-tag"
        :to="item.href"
        :target="isExternal(item.href) ? '_blank' : undefined"
        :rel="isExternal(item.href) ? 'noopener noreferrer' : undefined"
        :title="item.title ?? item.label"
      >
        <span class="highlight-tags-mark rainbow-text-auto" aria-hidden="true">
          ~
        </span>
        <span class="highlight-tags-text">{{ item.label }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
export interface HighlightTagItem {
  label: string
  href: string
  title?: string
}

defineProps<{
  items: readonly HighlightTagItem[]
}>()

function isExternal(href: string) {
  return href.startsWith('http')
}
</script>

<style lang="scss">
.highlight-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 0;
  padding: 0.125rem 0;
  list-style: none;

  &-item {
    margin: 0;
  }

  &-tag {
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    margin: 0;
    padding: 0.5rem 0.95rem 0.52rem;
    font-size: clamp(0.78rem, 1.85vw, 0.88rem);
    line-height: 1.35;
    letter-spacing: -0.01em;
    color: color-mix(in srgb, #fff 88%, transparent);
    text-decoration: none;
    border-radius: 1.5rem;
    border: 1px solid hsl(var(--rainbow-hue) 58% 62%);
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.07) 0%, rgb(255 255 255 / 0.02) 100%),
      linear-gradient(165deg, rgb(10 14 13 / 0.72), rgb(4 7 7 / 0.78));
    box-shadow: 0 0 20px #000;
    backdrop-filter: blur(10px);
    transition:
      background 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      background:
        linear-gradient(
          180deg,
          color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 10%, rgb(255 255 255 / 0.06)),
          color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 4%, rgb(255 255 255 / 0.02))
        ),
        linear-gradient(165deg, rgb(11 15 14 / 0.82), rgb(5 8 8 / 0.85));
      box-shadow: 0 0 20px hsl(var(--rainbow-hue) 55% 52% / 0.7);
    }

    &:focus-visible {
      outline: 2px solid hsl(var(--rainbow-hue) 58% 62%);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &-mark {
    position: relative;
    top: -0.075rem;
    flex: none;
    font-weight: 700;
    font-size: 0.95em;
    opacity: 0.92;
  }

  &-text {
    min-width: 0;
    text-wrap: balance;
  }
}
</style>
