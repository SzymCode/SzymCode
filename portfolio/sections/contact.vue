<template>
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="contact-inner">
      <header class="contact-header">
        <p class="contact-eyebrow rainbow-text-auto">Kontakt</p>
        <h2 id="contact-title" class="contact-title">
          <span class="rainbow-text-auto">Napisz</span>
          albo umów się na rozmowę
        </h2>
        <p class="contact-lead">
          Najprościej przez Calendly - możesz też napisać na LinkedIn, WhatsApp
          albo Messengerze.
        </p>
      </header>

      <ul class="contact-grid">
        <li
          v-for="channel in contactChannels"
          :key="channel.title"
          class="contact-grid-cell"
        >
          <NuxtLink
            class="contact-card"
            :to="channel.href"
            :target="channel.external ? '_blank' : undefined"
            :rel="channel.external ? 'noopener noreferrer' : undefined"
          >
            <div class="contact-card-top-glow" aria-hidden="true" />
            <div class="contact-card-icon-wrap">
              <Icon
                :name="channel.icon"
                class="contact-card-icon rainbow-text-auto"
              />
            </div>
            <h3 class="contact-card-title">{{ channel.title }}</h3>
            <p class="contact-card-desc">{{ channel.description }}</p>
            <span class="contact-card-cta rainbow-text-auto"
              >{{ channel.ctaLabel }}</span
            >
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
const contactChannels = [
  {
    title: 'Calendly',
    description:
      'Bezpłatne 30 min albo płatna konsultacja - wybierz termin, który Ci pasuje.',
    href: 'https://calendly.com/szymcode/it-mentoring-consultation',
    icon: 'mdi:calendar-clock',
    ctaLabel: 'Otwórz kalendarz',
    external: true,
  },
  {
    title: 'WhatsApp',
    description:
      'Krótka wiadomość lub ustalenie terminu - odpowiem, gdy będę przy telefonie.',
    href: 'https://wa.me/+48798733368',
    icon: 'mdi:whatsapp',
    ctaLabel: 'Napisz na WhatsApp',
    external: true,
  },
  {
    title: 'Messenger',
    description:
      'Jeśli wolisz Facebooka - czat bez dzwonienia, wszystko w jednym wątku.',
    href: 'https://m.me/s.radomski19',
    icon: 'mdi:facebook-messenger',
    ctaLabel: 'Otwórz Messenger',
    external: true,
  },
  {
    title: 'LinkedIn',
    description: 'Profil, rekomendacje i wiadomości - jeśli wolisz ten kanał.',
    href: 'https://www.linkedin.com/in/szymon-radomski/',
    icon: 'mdi:linkedin',
    ctaLabel: 'Profil LinkedIn',
    external: true,
  },
] as const
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.contact {
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

    @include bp-sm-up {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include bp-lg-up {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &-grid-cell {
    margin: 0;
    min-width: 0;
  }

  &-card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    padding: 1.35rem 1.25rem 1.25rem;
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
    color: inherit;
    text-decoration: none;
    transition: box-shadow 0.2s ease;

    &:hover {
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.06),
        0 14px 36px rgb(0 0 0 / 0.4);
    }
  }

  &-card-top-glow {
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

  &-card-icon-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 0.85rem;
  }

  &-card-icon {
    width: 2rem;
    height: 2rem;
  }

  &-card-title {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.02em;
  }

  &-card-desc {
    margin: 0 0 1rem;
    flex: 1;
    font-size: clamp(0.88rem, 1.2vw, 0.95rem);
    line-height: 1.6;
    text-align: center;
    color: color-mix(in srgb, #fff 76%, transparent);
  }

  &-card-cta {
    margin-top: auto;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    &-card {
      transition: none;

      &:hover {
        transform: none;
      }
    }
  }
}
</style>
