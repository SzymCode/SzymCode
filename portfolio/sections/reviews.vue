<template>
  <section id="reviews" class="reviews" aria-labelledby="reviews-title">
    <div class="reviews-inner">
      <div class="reviews-header">
        <p class="reviews-eyebrow rainbow-text-auto">Opinie</p>
        <h2 id="reviews-title" class="reviews-title">
          Mentoring, który daje konkretne efekty
        </h2>
        <p class="reviews-lead">
          Kilka słów od osób, które uporządkowały naukę, portfolio i
          przygotowanie do rekrutacji.
        </p>
      </div>

      <div class="reviews-slider-wrap">
        <Swiper
          class="reviews-slider"
          :modules="[Autoplay]"
          :slides-per-view="'auto'"
          :space-between="16"
          :loop="true"
          :speed="10000"
          :allow-touch-move="true"
          :grab-cursor="true"
          :autoplay="{
            delay: 0,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            896: {
              spaceBetween: 20,
            },
          }"
        >
          <SwiperSlide
            v-for="review in reviews"
            :key="review.author"
            class="reviews-slide"
          >
            <Card
              :quote="review.quote"
              :author="review.author"
              :role="review.role"
              icon="mdi:linkedin"
              :href="linkedInRecommendationUrl"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Card from '~/components/card.vue'

const linkedInRecommendationUrl =
  'https://www.linkedin.com/in/szymon-radomski/details/recommendations/?detailScreenTabIndex=0'

const reviews = [
  {
    quote:
      'Podczas stażu w Atomic IT Szymon świetnie tłumaczył nawet trudne zagadnienia, wspierał mnie w problemach i pomógł mi lepiej zrozumieć budowę skalowalnego frontendu oraz współpracę z backendem.',
    author: 'Denys Tyndyk',
    role: 'Full-stack Developer',
  },
  {
    quote:
      'Współpraca z Szymonem to czysta przyjemność. Podczas praktyk pomagał mi w trudniejszych kwestiach, pokazał pracę z modułami w Nucleify i dał wskazówki, które realnie pomogły rozwinąć portfolio.',
    author: 'Mateusz Szymański',
    role: 'Full-stack Developer',
  },
  {
    quote:
      'Polecam współpracę z Szymonem. W czasie stażu zawsze znajdował czas, żeby wytłumaczyć trudniejsze rzeczy i dzięki temu w krótkim czasie dużo lepiej poznałem backend w Laravelu i frontend w Vue/Nuxt.',
    author: 'Marcin Fuks',
    role: 'Full-stack Developer',
  },
  {
    quote:
      'Szymon zawsze miał czas, żeby pomóc i wytłumaczyć problem. Dzięki jego wsparciu lepiej zrozumiałem wydajność, dostępność, SEO oraz pracę z backendem Laravel i frontendem Vue/Nuxt.',
    author: 'Kacper Bujak',
    role: 'Test Specialist',
  },
  {
    quote:
      'Podczas stażu Szymon dawał mi dużo wsparcia, jasno tłumaczył zagadnienia web developmentu i podsuwał materiały do nauki. Dostałam też cenne wskazówki do dalszego rozwoju i portfolio.',
    author: 'Katarzyna Smierzchalska',
    role: 'Programistka',
  },
] as const
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.reviews {
  position: relative;
  z-index: 1;
  padding: clamp(2rem, 5vw, 3rem) 0 clamp(4rem, 8vw, 6rem);
  color: #fff;
  overflow: hidden;

  &-inner {
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;

    @include bp-lg-up {
      width: min(1200px, calc(100% - 4rem));
    }
  }

  &-header {
    margin: 0 0 clamp(1.75rem, 4vw, 2.5rem);
  }

  &-eyebrow {
    margin: 0 0 0.75rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  &-title {
    margin: 0 0 0.85rem;
    font-size: clamp(1.75rem, 5vw, 2.8rem);
    line-height: 1.1;
  }

  &-lead {
    margin: 0;
    max-width: 48rem;
    font-size: clamp(1rem, 1.6vw, 1.1rem);
    line-height: 1.7;
    color: color-mix(in srgb, #fff 74%, transparent);
  }

  &-slider-wrap {
    position: relative;
    overflow: hidden;
    padding-inline: 0.25rem;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset-block: 0;
      z-index: 2;
      width: 0;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: none;
    }

    &::after {
      right: 0;
      background: none;
    }

    @include bp-lg-up {
      &::before,
      &::after {
        width: clamp(1.75rem, 4.5vw, 4rem);
      }

      &::before {
        background: linear-gradient(90deg, #000 0%, rgb(0 0 0 / 0.72) 35%, transparent 100%);
      }

      &::after {
        background: linear-gradient(270deg, #000 0%, rgb(0 0 0 / 0.72) 35%, transparent 100%);
      }
    }
  }

  &-slider {
    width: 100%;
    overflow: hidden;

    :deep(.swiper-wrapper) {
      transition-timing-function: linear !important;
      align-items: stretch;
    }
  }

  &-slide {
    width: min(22rem, calc(100vw - 3rem));
    height: auto;
  }

  @include bp-lg-up {
    &-slide {
      width: 24rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &-slider {
      :deep(.swiper-wrapper) {
        transition-duration: 0.01ms !important;
      }
    }
  }
}
</style>
