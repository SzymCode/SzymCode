<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <div class="faq-inner">
      <header class="faq-header">
        <p class="faq-eyebrow rainbow-text-auto">FAQ</p>
        <h2 id="faq-title" class="faq-title">
          Pytania, zanim
          <span class="rainbow-text-auto">umówisz</span>
          spotkanie
        </h2>
        <p class="faq-lead">
          Krótko o formie współpracy, pierwszym callu i tym, czego możesz się
          spodziewać - jeśli czegoś tu nie ma, zapytasz na bezpłatnym spotkaniu
          zapoznawczym.
        </p>
      </header>

      <div class="faq-list faq-list-stack">
        <div
          v-for="(item, itemIndex) in faqItems"
          :key="`faq-mobile-item-${itemIndex}`"
          class="faq-item"
          :class="{ 'faq-item-open': openFaqItemIndex === itemIndex }"
        >
          <button
            type="button"
            class="faq-summary"
            :id="`faq-mobile-question-${itemIndex}`"
            :aria-expanded="openFaqItemIndex === itemIndex"
            :aria-controls="`faq-mobile-answer-${itemIndex}`"
            @click="toggleFaqItem(itemIndex)"
          >
            <span class="faq-q">{{ item.q }}</span>
            <Icon
              name="mdi:chevron-down"
              class="faq-chevron"
              aria-hidden="true"
            />
          </button>
          <div
            :id="`faq-mobile-answer-${itemIndex}`"
            class="faq-a"
            role="region"
            :aria-labelledby="`faq-mobile-question-${itemIndex}`"
          >
            <div class="faq-a-inner" :inert="openFaqItemIndex !== itemIndex">
              <p
                v-for="(paragraph, paragraphIndex) in item.a"
                :key="`faq-mobile-item-${itemIndex}-paragraph-${paragraphIndex}`"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-list faq-list-cols">
        <div class="faq-column">
          <div
            v-for="(item, itemIndex) in faqItemsLeft"
            :key="`faq-left-column-item-${itemIndex}`"
            class="faq-item"
            :class="{
              'faq-item-open': openFaqItemIndex === leftColumnGlobalIndex(itemIndex),
            }"
          >
            <button
              type="button"
              class="faq-summary"
              :id="`faq-left-column-question-${itemIndex}`"
              :aria-expanded="
                openFaqItemIndex === leftColumnGlobalIndex(itemIndex)
              "
              :aria-controls="`faq-left-column-answer-${itemIndex}`"
              @click="toggleFaqItem(leftColumnGlobalIndex(itemIndex))"
            >
              <span class="faq-q">{{ item.q }}</span>
              <Icon
                name="mdi:chevron-down"
                class="faq-chevron"
                aria-hidden="true"
              />
            </button>
            <div
              :id="`faq-left-column-answer-${itemIndex}`"
              class="faq-a"
              role="region"
              :aria-labelledby="`faq-left-column-question-${itemIndex}`"
            >
              <div
                class="faq-a-inner"
                :inert="openFaqItemIndex !== leftColumnGlobalIndex(itemIndex)"
              >
                <p
                  v-for="(paragraph, paragraphIndex) in item.a"
                  :key="`faq-left-column-item-${itemIndex}-paragraph-${paragraphIndex}`"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="faq-column">
          <div
            v-for="(item, itemIndex) in faqItemsRight"
            :key="`faq-right-column-item-${itemIndex}`"
            class="faq-item"
            :class="{
              'faq-item-open': openFaqItemIndex === rightColumnGlobalIndex(itemIndex),
            }"
          >
            <button
              type="button"
              class="faq-summary"
              :id="`faq-right-column-question-${itemIndex}`"
              :aria-expanded="
                openFaqItemIndex === rightColumnGlobalIndex(itemIndex)
              "
              :aria-controls="`faq-right-column-answer-${itemIndex}`"
              @click="toggleFaqItem(rightColumnGlobalIndex(itemIndex))"
            >
              <span class="faq-q">{{ item.q }}</span>
              <Icon
                name="mdi:chevron-down"
                class="faq-chevron"
                aria-hidden="true"
              />
            </button>
            <div
              :id="`faq-right-column-answer-${itemIndex}`"
              class="faq-a"
              role="region"
              :aria-labelledby="`faq-right-column-question-${itemIndex}`"
            >
              <div
                class="faq-a-inner"
                :inert="openFaqItemIndex !== rightColumnGlobalIndex(itemIndex)"
              >
                <p
                  v-for="(paragraph, paragraphIndex) in item.a"
                  :key="`faq-right-column-item-${itemIndex}-paragraph-${paragraphIndex}`"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type FaqItem = { q: string; a: readonly string[] }

const faqItems: readonly FaqItem[] = [
  {
    q: 'Czy pierwsze spotkanie naprawdę jest bezpłatne?',
    a: [
      'Tak - ok. 30 minut online, bez zobowiązań. Rozmawiamy o Twoim celu, dopasowaniu i ewentualnych kolejnych krokach; Ty decydujesz, czy chcesz iść dalej.',
    ],
  },
  {
    q: 'Jak umówić konsultację albo mock interview?',
    a: [
      'Rezerwacja jest przez Calendly (link przy każdej usłudze na stronie). Wybierasz termin, dostajesz potwierdzenie - bez zbędnej wymiany maili.',
    ],
  },
  {
    q: 'Czy pracujesz tylko z Laravel, Nuxt i React?',
    a: [
      'To mój główny stack i najwięcej wartości daję właśnie tam - ale omawiamy też TypeScript, PHP, SQL, architekturę API, testy i tematy „okołokodowe”, jeśli pasują do Twojego celu.',
    ],
  },
  {
    q: 'Czy sesje są tylko online?',
    a: [
      'Tak, spotykamy się online (np. Google Meet). Dzięki temu działa to niezależnie od miasta i łatwiej dopasować termin.',
    ],
  },
  {
    q: 'Jak wygląda rozliczenie i VAT?',
    a: [
      'Ceny przy usługach są podane netto (+ VAT). Formę rozliczenia ustalamy przed pierwszą płatną sesją - bez niespodzianek po fakcie.',
    ],
  },
  {
    q: 'Co jeśli okaże się, że nie możesz mi pomóc?',
    a: [
      'Przy konsultacji 1h: jeśli na miejscu stwierdzę, że realnie nie wniosę wartości w Twoim temacie - nie pobieram opłaty. Zależy mi na uczciwej współpracy, nie na „odbiciu godziny”.',
    ],
  },
  {
    q: 'Czy mogę przesunąć lub odwołać termin?',
    a: [
      'Tak - zasady odwołania i zmiany ustalamy wprost przy rezerwacji i na starcie współpracy, żeby każdy wiedział, na czym stoi.',
    ],
  },
  {
    q: 'Dla jakiego poziomu jest mentoring?',
    a: [
      'Od osób wchodzących do IT po mid i seniora - ważniejsze jest konkretne pytanie lub cel niż etykieta „junior / mid”. Na bezpłatnym callu szybko sprawdzimy, czy to ma sens.',
    ],
  },
] as const

const faqItemsLeft = computed(() => faqItems.filter((_, i) => i % 2 === 0))
const faqItemsRight = computed(() => faqItems.filter((_, i) => i % 2 === 1))

/** Jedno otwarte pytanie w całym FAQ (indeks w `faqItems`, 0..n-1). */
const openFaqItemIndex = ref<number | null>(null)

function leftColumnGlobalIndex(columnIndex: number) {
  return columnIndex * 2
}

function rightColumnGlobalIndex(columnIndex: number) {
  return columnIndex * 2 + 1
}

function toggleFaqItem(globalIndex: number) {
  openFaqItemIndex.value =
    openFaqItemIndex.value === globalIndex ? null : globalIndex
}
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.faq {
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

  &-list {
    width: 100%;
    padding: 0;
  }

  &-list-stack {
    display: flex;
    flex-direction: column;
    gap: clamp(0.85rem, 2vw, 1.1rem);

    @include bp-md-up {
      display: none;
    }
  }

  &-list-cols {
    display: none;

    @include bp-md-up {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: clamp(0.85rem, 2vw, 1.1rem);
    }
  }

  &-column {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: clamp(0.85rem, 2vw, 1.1rem);
  }

  &-item {
    position: relative;
    min-height: 0;
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

    &::before {
      content: '';
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
  }

  &-summary {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    margin: 0;
    padding: 1.15rem 1.25rem;
    border: none;
    background: none;
    font: inherit;
    font-weight: 600;
    font-size: clamp(0.98rem, 1.35vw, 1.05rem);
    line-height: 1.45;
    color: #fff;
    text-align: left;
    cursor: pointer;

    &:focus-visible {
      outline: 2px solid hsl(var(--rainbow-hue) 65% 62%);
      outline-offset: 2px;
      border-radius: 0.35rem;
    }
  }

  &-q {
    flex: 1;
    min-width: 0;
    text-align: left;
  }

  &-chevron {
    flex-shrink: 0;
    width: 1.35rem;
    height: 1.35rem;
    margin-top: 0.1rem;
    color: hsl(var(--rainbow-hue) 62% 68%);
    transition: transform 0.36s cubic-bezier(0.33, 1, 0.68, 1);
  }

  &-item-open &-chevron {
    transform: rotate(180deg);
  }

  &-a {
    display: grid;
    grid-template-rows: 0fr;
    align-content: start;
    min-height: 0;
    transition: grid-template-rows 0.36s cubic-bezier(0.33, 1, 0.68, 1);
  }

  &-item-open &-a {
    grid-template-rows: 1fr;
  }

  &-a-inner {
    min-height: 0;
    overflow: hidden;
    padding: 0 1.25rem 1.2rem;
    transition: padding-bottom 0.36s cubic-bezier(0.33, 1, 0.68, 1);
    font-size: clamp(0.92rem, 1.25vw, 1rem);
    line-height: 1.65;
    color: color-mix(in srgb, #fff 78%, transparent);

    p {
      margin: 0 0 0.65rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-item:not(.faq-item-open) &-a-inner {
    padding-bottom: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    &-a {
      transition: none;
    }

    &-a-inner {
      transition: none;
    }

    &-chevron {
      transition: none;
    }
  }
}
</style>
