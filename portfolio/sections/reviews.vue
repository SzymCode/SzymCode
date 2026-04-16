<template>
  <section id="reviews" class="reviews" aria-labelledby="reviews-title">
    <div class="reviews-inner">
      <div class="reviews-header">
        <p class="reviews-eyebrow rainbow-text-auto">Opinie</p>
        <h2 id="reviews-title" class="reviews-title">
          Mentoring, który daje konkretne efekty
        </h2>
        <p class="reviews-lead">
          Kilka słów od osób, które ze mną pracowały albo którym pomagałem w
          ramach mentoringu.
        </p>
      </div>

      <div class="reviews-slider-wrap">
        <Swiper
          class="reviews-slider"
          :modules="[Autoplay]"
          :slides-per-view="1"
          :space-between="16"
          :loop="true"
          :speed="500"
          :watch-overflow="true"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            460: {
              slidesPerView: 'auto',
              autoplay: {
                delay: 3000,
              },
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
              :href="linkedInRecommendationUrl"
              icon="mdi:linkedin"
              title="Otwórz rekomendacje na LinkedIn"
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
  {
    quote:
      'Pracowaliśmy razem ponad 8 miesięcy przy ekosystemie Nucleify w Atomic IT. Szymon prowadził prace konkretnie, dbając o kierunek produktu oraz jakość. Poznałem też jego bardziej osobistą stronę i to, jak radzi sobie z trudnościami.',
    author: 'Mscibor Srebrny',
    role: 'Programista Pythona',
  },
  {
    quote:
      'W trakcie stażu Szymon wykazał się wysokim zaangażowaniem i determinacją, wspierając realizację celów zespołu, w tym przygotowanie systemu CRM. Pracował sumiennie i skutecznie wdrażał feedback z testów oraz code review.',
    author: 'Anna Wilk',
    role: 'Scrum Master',
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
    width: 100%;
    margin-inline: auto;

  }

  &-header {
    margin: 0 auto clamp(1rem, 4vw, 2.5rem);
    padding-inline: 1rem;

    @include bp-lg-up {
      max-width: 1200px;
      padding-inline: 0;
    }
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
    padding: .125rem 1rem;
    
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
      padding-inline: 0;

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
    overflow: visible;

    :deep(.swiper-wrapper) {
      align-items: stretch;
      will-change: transform;
    }
  }

  &-slide {
    width: auto;
    height: auto;
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
