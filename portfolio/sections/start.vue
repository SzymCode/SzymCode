<template>
  <section id="start" class="start" aria-labelledby="start-title">
    <div class="start-inner">
      <div class="start-copy">
        <h1 id="start-title" class="start-title">
          <span class="start-title-line"
            >Pierwszy krok w <span class="rainbow-text-auto">IT</span></span
          >
          <span class="start-title-line">albo kolejny poziom -</span>
          <span class="start-title-line">z planem, bez chaosu</span>
        </h1>

        <div class="start-accent rainbow-bg-auto" aria-hidden="true" />

        <div class="start-leads">
          <p class="start-lead">
            Ułożymy <strong>konkretną ścieżkę nauki</strong>, dopracujemy
            <strong>portfolio</strong>
            i uporządkujemy Twoje umiejętności, żeby przejść od chaosu do
            realnych efektów.
          </p>

          <p class="start-lead">
            <strong>Przygotuję Cię na rozmowy</strong>
            (techniczne, HR, live coding), pomogę opowiadać o projektach i
            <strong>poprawię Twoje CV</strong>. Skupimy się na technologiach,
            które realnie pojawiają się w ofertach:
            <strong>
              Laravel, Nuxt (Vue), React (Next.js), TypeScript, PHP, Python, SQL
            </strong>
            czy nawet <strong>PrestaShop</strong>.
          </p>
        </div>

        <CtaButton
          class="start-cta"
          text="Wybierz plan"
          icon="mdi:arrow-right"
          href="#offer"
        />
      </div>

      <NuxtLink
        class="start-visual"
        to="https://github.com/Nucleify/Nucleify"
        target="_blank"
        rel="noopener noreferrer"
        title="Zobacz repozytorium Nucleify na GitHubie"
      >
        <HoloCube class="start-cube" />
        <p class="start-proof">
          <span class="start-proof-line">
            Twórca frameworka
            <strong class="rainbow-text-auto">Nucleify</strong>
          </span>
          <span class="start-proof-line">
            <span class="start-proof-sep" aria-hidden="true">•</span>
            150+ gwiazdek na GitHubie
          </span>
        </p>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import CtaButton from '~/components/cta-button.vue'
import HoloCube from '~/components/holo_cube/index.vue'
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.start {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  padding-block: clamp(6rem, 20vw, 14rem) 0;
  padding-inline: clamp(1.25rem, 5vw, 3.5rem);
  color: #fff;
  overflow: hidden;

  @include bp-sm-up {
    padding-inline: 1.5rem;
  }

  @include bp-md-up {
    padding-inline: 2rem;
  }

  @include bp-lg-up {
    align-items: center;
    padding-inline: 2rem;
  }

  &-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;

    @include bp-lg-up {
      grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
      gap: 3rem;
    }
  }

  &-copy {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: clamp(27rem, 71svh, 39rem);

    @include bp-lg-up {
      min-height: clamp(26rem, 46vh, 36rem);
    }
  }

  &-title {
    margin: 0 0 1rem;
    font-size: 1.62rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;

    &-line {
      display: block;
    }

    @include bp-xxs-up {
      font-size: 1.85rem;
      line-height: 1.14;
    }

    @include bp-xs-up {
      font-size: 1.95rem;
    }

    @include bp-sm-up {
      font-size: 2.15rem;
    }

    @include bp-md-up {
      font-size: 2.65rem;
    }

    @include bp-lg-up {
      max-width: 100%;
      font-size: 3.15rem;

      .start-title-line {
        white-space: nowrap;
      }
    }
  }

  &-accent {
    width: 100%;
    height: 0.2rem;
    margin: 0 0 1.35rem;
    box-shadow: 0 0 1.25rem color-mix(in srgb, var(--rainbow-current) 55%, transparent);
  }

  &-leads {
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
    margin-bottom: 1.6rem;
  }

  &-lead {
    margin: 0;
    font-size: 1.0625rem;
    line-height: 1.68;
    color: color-mix(in srgb, #fff 86%, transparent);

    @include bp-lg-up {
      font-size: 1.125rem;
    }

    strong {
      color: #fff;
      font-weight: 600;
    }
  }

  &-cta {
    margin-top: 0;
  }

  &-proof {
    margin: 1.15rem 0 0;
    color: color-mix(in srgb, #fff 72%, transparent);
    font-size: 0.82rem;
    line-height: 1.4;
    text-decoration: none;
    letter-spacing: 0.005em;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.25rem;
    max-width: min(15rem, 100%);
    margin-inline: auto;
    border-left: 0;
    padding-left: 0;

    &-line {
      display: block;
    }

    .start-proof-sep {
      display: none;
      opacity: 0.9;
    }

    strong {
      font-weight: 600;
    }

    @include bp-lg-up {
      margin: 2rem 0 0;
      display: inline-flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-start;
      text-align: start;
      gap: 0.4rem;
      font-size: 0.86rem;
      max-width: none;
      margin-inline: 0;
      border-left: 2px solid
        color-mix(in srgb, var(--rainbow-border-current) 42%, transparent);
      padding-left: 0.65rem;

      .start-proof-sep {
        display: inline;
      }
    }
  }

  &-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    text-decoration: none;
  }

  &-cube {
    width: min(16rem, 100%);
    flex: none;
    margin-inline: auto;
    margin-top: 1rem;

    @include bp-lg-up {
      width: min(18rem, 100%);
      margin-top: 0;
    }
  }

  &-visual:hover &-cube .nuc-holo-cube-spin {
    animation-play-state: paused;
  }
}
</style>
