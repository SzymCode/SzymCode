<template>
  <div class="kursy-hub-page">
    <Navbar />
    <main class="kursy-hub-main">
      <GridBackground />
      <section class="kursy-hub-hero" aria-labelledby="kursy-hub-title">
        <div class="kursy-hub-inner">
          <p class="kursy-hub-eyebrow rainbow-text-auto">Kursy</p>
          <h1 id="kursy-hub-title" class="kursy-hub-title">
            Wybierz
            <span class="rainbow-text-auto">ścieżkę</span>
          </h1>
          <p class="kursy-hub-lead">
            Bezpłatne materiały startowe albo pełne kursy płatne z modułami i
            wsparciem - obie opcje prowadzą do konkretnych terminów i tematów.
          </p>
        </div>
      </section>

      <section class="kursy-hub-cats" aria-label="Kategorie kursów">
        <div class="kursy-hub-inner kursy-hub-cats-grid">
          <NuxtLink class="kursy-hub-card" to="/kursy/bezplatne">
            <Icon
              name="mdi:gift-outline"
              class="kursy-hub-card-icon"
              aria-hidden="true"
            />
            <h2 class="kursy-hub-card-title">Bezpłatne</h2>
            <p class="kursy-hub-card-desc">
              Wstępy i warsztaty: Vue, React, SCSS - dobry start bez kosztów.
            </p>
            <span class="kursy-hub-card-meta"
              >{{ pluralKursy(freeCourses.length) }}</span
            >
            <span class="kursy-hub-card-cta">
              Zobacz listę
              <Icon
                name="mdi:arrow-right"
                class="kursy-hub-card-cta-icon"
                aria-hidden="true"
              />
            </span>
          </NuxtLink>

          <NuxtLink class="kursy-hub-card" to="/kursy/platne">
            <Icon
              name="mdi:school-outline"
              class="kursy-hub-card-icon"
              aria-hidden="true"
            />
            <h2 class="kursy-hub-card-title">Płatne</h2>
            <p class="kursy-hub-card-desc">
              Pełne programy: Laravel, Nuxt, Next.js - z planem i praktyką pod
              produkcję.
            </p>
            <span class="kursy-hub-card-meta"
              >{{ pluralKursy(paidCourses.length) }}</span
            >
            <span class="kursy-hub-card-cta">
              Zobacz listę
              <Icon
                name="mdi:arrow-right"
                class="kursy-hub-card-cta-icon"
                aria-hidden="true"
              />
            </span>
          </NuxtLink>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/footer.vue'
import GridBackground from '~/components/grid-background.vue'
import Navbar from '~/components/navbar.vue'
import { freeCourses, paidCourses } from '~/composables/courseCatalog'
import { useHead } from 'nuxt/app'

function pluralKursy(n: number) {
  const mod10 = n % 10
  const mod100 = n % 100
  if (n === 1) {
    return '1 kurs'
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return `${n} kursy`
  }
  return `${n} kursów`
}

useHead({
  title: 'Kursy | SzymCode',
  meta: [
    {
      name: 'description',
      content:
        'Kursy SzymCode: bezpłatne wstępy (Vue, React, SCSS) i płatne programy (Laravel, Nuxt, Next.js).',
    },
  ],
})
</script>

<style lang="scss">
@use '../../styles/breakpoints' as *;

$hub-ease: cubic-bezier(0.22, 1, 0.36, 1);

.kursy-hub-page {
  position: relative;
  min-height: 100vh;
}

.kursy-hub-main {
  position: relative;
  min-height: 100vh;
  padding-top: clamp(6rem, 9vw, 8rem);
  color: #fff;
}

.kursy-hub-inner {
  width: min(1200px, calc(100% - 2rem));
  margin-inline: auto;
}

.kursy-hub-hero {
  position: relative;
  z-index: 1;
  padding-bottom: clamp(1.25rem, 3vw, 2rem);
}

.kursy-hub-eyebrow {
  margin: 0 0 0.7rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.kursy-hub-title {
  margin: 0 0 1rem;
  font-size: clamp(1.7rem, 5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.kursy-hub-lead {
  margin: 0;
  max-width: 46rem;
  line-height: 1.65;
  color: color-mix(in srgb, #fff 78%, transparent);
}

.kursy-hub-cats {
  position: relative;
  z-index: 1;
  padding-bottom: clamp(2.5rem, 7vw, 4rem);
}

.kursy-hub-cats-grid {
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.35rem);
  grid-template-columns: 1fr;

  @include bp-md-up {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.kursy-hub-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  min-height: 12.5rem;
  padding: 1.25rem 1.3rem 1.15rem;
  text-decoration: none;
  color: inherit;
  border-radius: 0.85rem;
  border: 1px solid hsl(var(--rainbow-hue) 58% 62% / 0.55);
  background:
    linear-gradient(180deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.02)),
    linear-gradient(165deg, rgb(8 12 11 / 0.96), rgb(4 7 7 / 0.94));
  backdrop-filter: blur(1rem);
  overflow: hidden;
  isolation: isolate;
  transition:
    border-color 0.22s $hub-ease,
    box-shadow 0.22s $hub-ease,
    background 0.22s $hub-ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      hsl(var(--rainbow-hue) 58% 58%),
      transparent
    );
    opacity: 0.85;
    pointer-events: none;
  }

  &:hover {
    border-color: hsl(var(--rainbow-hue) 58% 62%);
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 14%, rgb(255 255 255 / 0.07)),
        color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 6%, rgb(255 255 255 / 0.02))
      ),
      linear-gradient(165deg, rgb(9 14 13 / 0.98), rgb(5 8 8 / 0.96));
    box-shadow:
      0 0 0 1px hsl(var(--rainbow-hue) 58% 62% / 0.25),
      0 18px 48px rgb(0 0 0 / 0.35);
  }

  &:focus-visible {
    outline: 2px solid hsl(var(--rainbow-hue) 65% 70%);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}

.kursy-hub-card-icon {
  width: 2.25rem;
  height: 2.25rem;
  color: hsl(var(--rainbow-hue) 62% 64%);
}

.kursy-hub-card-title {
  margin: 0;
  font-size: clamp(1.2rem, 2.5vw, 1.45rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
}

.kursy-hub-card-desc {
  margin: 0;
  flex: 1;
  font-size: 0.92rem;
  line-height: 1.5;
  color: color-mix(in srgb, #fff 72%, transparent);
}

.kursy-hub-card-meta {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: color-mix(in srgb, #fff 55%, transparent);
}

.kursy-hub-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: hsl(var(--rainbow-hue) 62% 64%);
}

.kursy-hub-card-cta-icon {
  width: 1.05rem;
  height: 1.05rem;
  transition: transform 0.2s $hub-ease;
}

.kursy-hub-card:hover .kursy-hub-card-cta-icon {
  transform: translateX(3px);
}

@media (prefers-reduced-motion: reduce) {
  .kursy-hub-card:hover .kursy-hub-card-cta-icon {
    transform: none;
  }
}
</style>
