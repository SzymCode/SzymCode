<template>
  <article class="cta-card rainbow-border-auto">
    <div class="cta-card-top-glow" aria-hidden="true" />

    <div class="cta-card-head">
      <div class="cta-card-icon-wrap">
        <Icon :name="icon" class="cta-card-icon rainbow-text-auto" />
      </div>
      <h3 class="cta-card-title">{{ title }}</h3>
      <p class="cta-card-subtitle">{{ subtitle }}</p>
    </div>

    <ul class="cta-card-features">
      <li v-for="(line, i) in features" :key="i" class="cta-card-feature">
        {{ line }}
      </li>
    </ul>

    <div class="cta-card-footer">
      <p class="cta-card-price">{{ price }}</p>
      <NuxtLink
        v-if="howItWorksHref"
        class="cta-card-how rainbow-text-auto"
        :to="howItWorksHref"
      >
        Jak to działa?
      </NuxtLink>
      <CtaButton
        class="cta-card-cta"
        :text="buttonText"
        :href="buttonHref"
        :target="buttonTarget"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import CtaButton from '~/components/cta-button.vue'

withDefaults(
  defineProps<{
    title: string
    subtitle: string
    icon: string
    features: readonly string[]
    price: string
    buttonText: string
    buttonHref: string
    howItWorksHref?: string
    buttonTarget?: string
  }>(),
  {
    howItWorksHref: '#faq',
    buttonTarget: '_blank',
  }
)
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.cta-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 1.35rem 1.25rem 1.25rem;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid hsl(var(--rainbow-hue) 58% 58%);
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.07) 0%, rgb(255 255 255 / 0.02) 45%, transparent 100%),
    linear-gradient(165deg, rgb(8 12 11 / 0.94), rgb(3 6 6 / 0.92));
  backdrop-filter: blur(12px);
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.05),
    0 10px 32px rgb(0 0 0 / 0.35);
  color: #fff;

  &-top-glow {
    position: absolute;
    top: 0;
    left: 12%;
    right: 12%;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(
      90deg,
      transparent,
      hsl(var(--rainbow-hue) 55% 52%),
      transparent
    );
    opacity: 0.85;
    pointer-events: none;
  }

  &-head {
    text-align: center;
    margin-bottom: 1.1rem;
  }

  &-icon-wrap {
    display: grid;
    place-items: center;
    width: 3.35rem;
    height: 3.35rem;
    margin: 0 auto 0.85rem;
    border-radius: 50%;
    background: linear-gradient(180deg, rgb(255 255 255 / 0.08), rgb(255 255 255 / 0.02));
    box-shadow:
      0 0 28px color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 38%, transparent),
      inset 0 1px 0 rgb(255 255 255 / 0.06);
  }

  &-icon {
    font-size: 1.65rem;
  }

  &-title {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.05rem);
    font-weight: 800;
    line-height: 1.25;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  &-subtitle {
    margin: 0;
    font-size: clamp(0.8rem, 1.5vw, 0.88rem);
    line-height: 1.45;
    color: color-mix(in srgb, #fff 68%, transparent);
  }

  &-features {
    flex: 1 1 auto;
    margin: 0;
    padding: 0 0 0 1.05rem;
    list-style: disc;
    font-size: clamp(0.78rem, 1.45vw, 0.86rem);
    line-height: 1.5;
    color: color-mix(in srgb, #fff 80%, transparent);
  }

  &-feature {
    margin: 0 0 0.4rem;
    padding-left: 0.15rem;

    &::marker {
      color: color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 85%, #fff);
    }
  }

  &-footer {
    margin-top: auto;
    padding-top: 1.15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    text-align: center;
  }

  &-price {
    margin: 0;
    font-size: clamp(1.15rem, 2.5vw, 1.35rem);
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  &-how {
    font-size: 0.82rem;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.12em;
  }

  &-cta {
    width: 100%;
    max-width: 18rem;
    margin-top: 0.35rem;
    justify-content: center;
  }
}
</style>
