<template>
  <section id="scope" class="scope" aria-labelledby="scope-title">
    <div class="scope-inner">
      <header class="scope-header">
        <p class="scope-eyebrow rainbow-text-auto">Zakres</p>
        <h2 id="scope-title" class="scope-title">
          Czego dotyczy
          <span class="rainbow-text-auto">mentoring</span>
        </h2>
        <p class="scope-lead">
          Od warstwy widoku po API i infrastrukturę sensu - praktycznie, pod
          produkt i pod rekrutację, z naciskiem na to, co realnie przydaje się w
          pracy.
        </p>
      </header>

      <ul class="scope-grid">
        <li
          v-for="topic in scopeTopics"
          :key="topic.title"
          class="scope-grid-cell"
        >
          <article class="scope-card">
            <div class="scope-card-top-glow" aria-hidden="true" />
            <div class="scope-card-head">
              <Icon
                :name="topic.icon"
                class="scope-card-icon rainbow-text-auto"
                aria-hidden="true"
              />
              <h3 class="scope-card-title">{{ topic.title }}</h3>
              <p class="scope-card-lead">{{ topic.lead }}</p>
            </div>
            <ul class="scope-card-list">
              <li
                v-for="(line, i) in topic.points"
                :key="i"
                class="scope-card-list-item"
              >
                {{ line }}
              </li>
            </ul>
          </article>
        </li>
      </ul>

      <div
        class="scope-metrics"
        aria-labelledby="scope-metrics-title"
        role="region"
      >
        <div class="scope-metrics-top-glow" aria-hidden="true" />
        <h3 id="scope-metrics-title" class="scope-metrics-title">
          Uczymy się optymalizować pod
          <span class="rainbow-text-auto">Lighthouse</span>
          - z metodą, nie na skróty
        </h3>
        <p class="scope-metrics-lead">
          Każda kategoria to zestaw technik - na sesjach ustalamy kolejność: co
          podbija wynik, jak wdrożyć to w Twoim stacku i jak domknąć temat, żeby
          zbliżać się do ideału.
        </p>
        <ul class="scope-metrics-grid">
          <li
            v-for="metric in scopeMetrics"
            :key="metric.id"
            class="scope-metrics-cell"
          >
            <div
              class="scope-metric"
              :aria-label="`${metric.label}, wynik ${metric.score} z 100`"
            >
              <div class="scope-metric-gauge">
                <svg
                  class="scope-metric-svg"
                  viewBox="0 0 120 120"
                  aria-hidden="true"
                >
                  <circle
                    class="scope-metric-track"
                    cx="60"
                    cy="60"
                    r="46"
                    fill="none"
                    stroke-width="9"
                    pathLength="100"
                  />
                  <circle
                    class="scope-metric-progress"
                    cx="60"
                    cy="60"
                    r="46"
                    fill="none"
                    stroke-width="9"
                    stroke-linecap="round"
                    pathLength="100"
                    :stroke-dasharray="100"
                    :stroke-dashoffset="100 - metric.score"
                    transform="rotate(-90 60 60)"
                  />
                </svg>
                <span class="scope-metric-value" aria-hidden="true"
                  >{{ metric.score }}</span
                >
              </div>
              <span class="scope-metric-label">{{ metric.label }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ScopeTopic = {
  title: string
  lead: string
  icon: string
  points: readonly string[]
}

const scopeTopics: readonly ScopeTopic[] = [
  {
    title: 'Frontend',
    lead: 'Nowoczesne UI i architektura widoku - nie tylko „działa w dev”.',
    icon: 'mdi:monitor-dashboard',
    points: [
      'Vue / Nuxt, React - komponenty, stan, routing, SSR i granice z API.',
      'TypeScript w praktyce: typy, kontrakty z backendem, mniej regresji.',
      'Warstwa prezentacji pod skalowanie: moduły, dane z serwera, błędy i loading.',
    ],
  },
  {
    title: 'Backend',
    lead: 'API i logika po stronie serwera, tak jak w produktowym zespole.',
    icon: 'mdi:laravel',
    points: [
      'Laravel: routing, kontrolery, walidacja, Eloquent, kolejki, podstawy bezpieczeństwa.',
      'Projektowanie API (REST), wersjonowanie, błędy, spójne odpowiedzi JSON.',
      'Integracja z frontem: autoryzacja, CORS, uploady, realne scenariusze z życia.',
    ],
  },
  {
    title: 'SEO',
    lead: 'Widoczność w wyszukiwarce bez magicznych „triksów”.',
    icon: 'mdi:search-web',
    points: [
      'Meta, nagłówki, kanoniczne URL, podstawy indeksacji i crawl budget.',
      'Structured data (JSON-LD) tam, gdzie ma sens - np. pod oferty i profile.',
      'SSR / SSG w Nuxt i wpływ na pierwszy render oraz podgląd w narzędziach.',
    ],
  },
  {
    title: 'Performance',
    lead: 'Szybkość, która widać w metrykach i w odczuciu użytkownika.',
    icon: 'mdi:speedometer',
    points: [
      'LCP, CLS, INP - co mierzyć i co najpierw optymalizować.',
      'Code splitting, lazy loading, obrazy, fonty, cache i sieć.',
      'Profilowanie w devtools, typowe wąskie gardła w SPA i SSR.',
    ],
  },
  {
    title: 'Dostępność (WCAG)',
    lead: 'Aplikacje, z których da się korzystać klawiaturą i technologiami wspierającymi.',
    icon: 'mdi:human-wheelchair',
    points: [
      'Semantyka HTML, etykiety, focus, kolejność tabulacji, kontrast.',
      'ARIA tam, gdzie trzeba - bez przesady i „aria-soup”.',
      'Powiązanie z SEO i jakością: lepszy HTML często pomaga obu stronom.',
    ],
  },
  {
    title: 'Jakość i proces',
    lead: 'Tak, żeby kod dało się utrzymywać, gdy projekt rośnie.',
    icon: 'mdi:checkbox-marked-circle-outline',
    points: [
      'Testy tam, gdzie się zwracają: Vitest, PHPUnit, smoke pod krytyczne ścieżki.',
      'Code review, konwencje, PR-y - jak pisać zmiany, które inni chcą czytać.',
      'Architektura modułów, granice warstw, refaktor bez chaosu w repo.',
    ],
  },
] as const

type ScopeMetric = {
  id: string
  label: string
  score: number
}

const scopeMetrics: readonly ScopeMetric[] = [
  { id: 'performance', label: 'Wydajność', score: 100 },
  { id: 'accessibility', label: 'Dostępność', score: 100 },
  { id: 'best-practices', label: 'Dobre praktyki', score: 100 },
  { id: 'seo', label: 'SEO', score: 100 },
]
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.scope {
  position: relative;
  z-index: 1;
  padding: 0;
  color: #fff;

  &-inner {
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;

    @include bp-lg-up {
      width: min(1200px, calc(100% - 4rem));
    }
  }

  &-header {
    margin: 0 0 clamp(1.75rem, 4vw, 2.75rem);
    text-align: center;
    max-width: 46rem;
    margin-inline: auto;
  }

  &-eyebrow {
    margin: 0 0 0.65rem;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  &-title {
    margin: 0 0 0.85rem;
    font-size: clamp(1.5rem, 4vw, 2.35rem);
    line-height: 1.12;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &-lead {
    margin: 0;
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    line-height: 1.65;
    color: color-mix(in srgb, #fff 74%, transparent);
  }

  &-grid {
    display: grid;
    gap: clamp(1.15rem, 2.5vw, 1.5rem);
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    list-style: none;

    @include bp-md-up {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include bp-lg-up {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &-grid-cell {
    margin: 0;
    min-width: 0;
    display: flex;
  }

  &-card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    padding: 1.35rem 1.25rem 1.2rem;
    overflow: hidden;
    border-radius: 1.25rem;
    border: 1px solid hsl(var(--rainbow-hue) 58% 62%);
    background:
      linear-gradient(
        180deg,
        rgb(255 255 255 / 0.07) 0%,
        rgb(255 255 255 / 0.02) 45%,
        transparent 100%
      ),
      linear-gradient(165deg, rgb(8 12 11 / 0.94), rgb(3 6 6 / 0.92));
    backdrop-filter: blur(12px);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.05),
      0 10px 32px rgb(0 0 0 / 0.35);
  }

  &-card-top-glow,
  &-metrics-top-glow {
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

  &-card-head {
    text-align: center;
    margin-bottom: 1rem;
  }

  &-card-icon {
    width: 2.25rem;
    height: 2.25rem;
    margin: 0 auto 0.75rem;
    display: block;
  }

  &-card-title {
    margin: 0 0 0.45rem;
    font-size: 1.08rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &-card-lead {
    margin: 0;
    font-size: clamp(0.86rem, 1.15vw, 0.93rem);
    line-height: 1.55;
    color: color-mix(in srgb, #fff 76%, transparent);
  }

  &-card-list {
    margin: 0;
    padding: 0 0 0 1.05rem;
    list-style: disc;
    font-size: clamp(0.84rem, 1.1vw, 0.92rem);
    line-height: 1.6;
    color: color-mix(in srgb, #fff 80%, transparent);
  }

  &-card-list-item {
    margin: 0 0 0.4rem;
    padding-left: 0.15rem;

    &:last-child {
      margin-bottom: 0;
    }

    &::marker {
      color: color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 85%, #fff);
    }
  }

  &-metrics {
    position: relative;
    overflow: hidden;
    margin-top: clamp(2.25rem, 5vw, 3.25rem);
    padding: clamp(1.35rem, 3vw, 1.75rem) clamp(1.15rem, 3vw, 1.5rem);
    border-radius: 1.25rem;
    border: 1px solid hsl(var(--rainbow-hue) 58% 62%);
    background:
      linear-gradient(
        180deg,
        rgb(255 255 255 / 0.06) 0%,
        rgb(255 255 255 / 0.02) 50%,
        transparent 100%
      ),
      linear-gradient(165deg, rgb(8 12 11 / 0.94), rgb(3 6 6 / 0.92));
    backdrop-filter: blur(12px);
    box-shadow:
      inset 0 1px 0 rgb(255 255 255 / 0.05),
      0 10px 32px rgb(0 0 0 / 0.35);
    text-align: center;
  }

  &-metrics-title {
    margin: 0 0 0.65rem;
    font-size: clamp(1.1rem, 2.2vw, 1.35rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  &-metrics-lead {
    margin: 0 auto 1.35rem;
    max-width: 40rem;
    font-size: clamp(0.86rem, 1.35vw, 0.95rem);
    line-height: 1.6;
    color: color-mix(in srgb, #fff 72%, transparent);
  }

  &-metrics-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(1.1rem, 3vw, 1.65rem);
    align-items: start;
    justify-items: center;
    margin: 0;
    padding: 0;
    list-style: none;

    @include bp-md-up {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &-metrics-cell {
    margin: 0;
    width: 100%;
    max-width: 11rem;
    display: flex;
    justify-content: center;
  }

  &-metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.65rem;
    width: 100%;
  }

  &-metric-gauge {
    position: relative;
    width: min(100%, 6.75rem);
    aspect-ratio: 1;
  }

  &-metric-svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  &-metric-track {
    stroke: rgb(255 255 255 / 0.12);
  }

  &-metric-progress {
    stroke: hsl(145 72% 48%);
    filter: drop-shadow(0 0 6px hsl(145 80% 45% / 0.45));
    transition: stroke-dashoffset 0.9s cubic-bezier(0.33, 1, 0.68, 1);
  }

  &-metric-value {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font-family:
      ui-monospace,
      'Cascadia Code',
      'Source Code Pro',
      Menlo,
      Consolas,
      monospace;
    font-size: clamp(1.35rem, 3.8vw, 1.65rem);
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.03em;
    color: hsl(145 65% 62%);
    text-shadow: 0 0 18px hsl(145 80% 45% / 0.35);
  }

  &-metric-label {
    font-size: clamp(0.78rem, 1.35vw, 0.88rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: color-mix(in srgb, #fff 88%, transparent);
  }
}
</style>
