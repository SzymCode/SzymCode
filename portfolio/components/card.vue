<template>
  <NuxtLink
    v-if="href && href !== '#'"
    class="card rainbow-border-auto"
    :to="href"
    target="_blank"
    rel="noopener noreferrer"
    :title="title"
  >
    <Icon
      name="mdi:format-quote-open"
      class="card-quote-mark rainbow-text-auto"
    />

    <p class="card-quote">"{{ quote }}"</p>

    <div class="card-footer">
      <div class="card-icon" aria-hidden="true">
        <Icon :name="icon" class="card-icon-symbol rainbow-text-auto" />
      </div>

      <div class="card-meta">
        <strong class="card-author rainbow-text-auto">{{ author }}</strong>
        <span v-if="role" class="card-role">{{ role }}</span>
      </div>
    </div>
  </NuxtLink>

  <article v-else class="card rainbow-border-auto">
    <Icon
      name="mdi:format-quote-open"
      class="card-quote-mark rainbow-text-auto"
    />

    <p class="card-quote">"{{ quote }}"</p>

    <div class="card-footer">
      <div class="card-icon" aria-hidden="true">
        <Icon :name="icon" class="card-icon-symbol rainbow-text-auto" />
      </div>

      <div class="card-meta">
        <strong class="card-author rainbow-text-auto">{{ author }}</strong>
        <span v-if="role" class="card-role">{{ role }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    quote: string
    author: string
    role?: string
    icon?: string
    href?: string
    title?: string
  }>(),
  {
    icon: 'mdi:account-circle-outline',
    href: '#',
    title: 'Otwórz link',
  }
)
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.15rem;
  min-width: min(22rem, calc(100vw - 3rem));
  max-width: 24rem;
  min-height: 100%;
  padding: 1.25rem 1.25rem 1.15rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid hsl(var(--rainbow-hue) 58% 62%);
  border-radius: 1.25rem;
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.015)),
    linear-gradient(180deg, rgb(7 12 11 / 0.95), rgb(4 7 7 / 0.92));
  backdrop-filter: blur(1rem);
  color: #fff;

  &:hover,
  &:focus-visible {
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 12%, rgb(255 255 255 / 0.06)),
        color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 6%, rgb(255 255 255 / 0.015))
      ),
      linear-gradient(180deg, rgb(8 13 12 / 0.96), rgb(5 8 8 / 0.94));
  }

  &-quote-mark {
    position: absolute;
    top: 1.15rem;
    right: 1.15rem;
    z-index: 1;
    font-size: 1.25rem;
  }

  &-quote {
    margin: 0;
    padding-right: 2rem;
    font-size: 0.9rem;
    line-height: 1.75;
    letter-spacing: -0.01em;
    color: color-mix(in srgb, #fff 86%, transparent);
    overflow-wrap: break-word;
  }

  &-meta {
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
    min-width: 0;
  }

  &-footer {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 0.15rem;
  }

  &-icon {
    display: grid;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    flex: none;
    border: 1px solid color-mix(in srgb, #fff 10%, transparent);
    border-radius: 999px;
    font-size: 1.2rem;
    background:
      linear-gradient(180deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.02)),
      rgb(255 255 255 / 0.02);
    box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04);
  }

  &-icon-symbol {
    color: hsl(var(--rainbow-hue) 55% 52%);
  }

  &-author {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  &-role {
    font-size: 0.8rem;
    line-height: 1.3;
    color: color-mix(in srgb, #fff 52%, transparent);
    text-wrap: pretty;
    overflow-wrap: break-word;
  }
}
</style>
