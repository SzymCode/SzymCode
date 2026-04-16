<template>
  <ul
    class="social-links"
    :class="{ 'social-links-inline': variant === 'inline' }"
    aria-label="Profile w mediach społecznościowych"
  >
    <li v-for="item in items" :key="item.href">
      <NuxtLink
        class="social-links-link rainbow-border-auto"
        :to="item.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="item.label"
        :title="item.label"
      >
        <Icon :name="item.icon" class="social-links-icon rainbow-text-auto" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
export interface SocialLinkItem {
  href: string
  icon: string
  label: string
}

withDefaults(
  defineProps<{
    items: readonly SocialLinkItem[]
    variant?: 'stack' | 'inline'
  }>(),
  { variant: 'stack' }
)
</script>

<style lang="scss">
.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;

  &-link {
    display: grid;
    place-items: center;
    width: 2.65rem;
    height: 2.65rem;
    border-radius: 999px;
    text-decoration: none;
    color: inherit;
    background: rgb(0 0 0 / 0.25);
    transition: box-shadow 0.2s ease;

    &:hover,
    &:focus-visible {
      box-shadow: 0 0 20px hsl(var(--rainbow-hue) 55% 52% / 0.7);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &-icon {
    font-size: 1.2rem;
  }

  &-inline {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
