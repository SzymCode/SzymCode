<template>
  <footer class="footer" aria-label="Stopka serwisu">
    <div class="footer-glow" aria-hidden="true" />
    <div class="footer-inner">
      <div class="footer-main">
        <div class="footer-brand">
          <NuxtLink to="#start" class="footer-logo">
            <span class="footer-logo-text rainbow-text-auto">SzymCode</span>
          </NuxtLink>
          <p class="footer-tagline">
            Mentoring IT, portfolio i przygotowanie do rozmów - z planem, bez
            chaosu.
          </p>
          <p class="footer-proof">
            Autor
            <NuxtLink
              class="footer-proof-link rainbow-text-auto"
              to="https://github.com/Nucleify/Nucleify"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nucleify
            </NuxtLink>
          </p>
        </div>

        <div class="footer-col">
          <p id="footer-nav-label" class="footer-col-title">Na stronie</p>
          <nav class="footer-nav" aria-labelledby="footer-nav-label">
            <ul class="footer-list">
              <li v-for="link in navLinks" :key="link.to">
                <NuxtLink class="footer-link" :to="link.to">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer-actions">
          <div class="footer-col">
            <p id="footer-contact-label" class="footer-col-title">Kontakt</p>
            <div class="footer-contact" aria-labelledby="footer-contact-label">
              <CtaButton
                class="footer-cta"
                text="Umów konsultację"
                href="https://calendly.com/szymcode/it-mentoring-consultation"
                target="_blank"
              />
              <NuxtLink to="#contact" class="footer-sublink">
                Wszystkie kanały
                <Icon
                  name="mdi:arrow-right"
                  class="footer-sublink-icon"
                  aria-hidden="true"
                />
              </NuxtLink>
            </div>
          </div>

          <div class="footer-col">
            <p id="footer-social-label" class="footer-col-title">Sieć</p>
            <div aria-labelledby="footer-social-label">
              <SocialLinks variant="inline" :items="socialItems" />
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">
          © {{ year }} Szymon Radomski ·
          <span class="rainbow-text-auto">SzymCode</span>
        </p>
        <NuxtLink to="#start" class="footer-back-top">
          <span class="footer-back-top-text">Wróć na górę</span>
          <Icon
            name="mdi:arrow-up"
            class="footer-back-top-icon"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CtaButton from '~/components/cta-button.vue'
import SocialLinks, { type SocialLinkItem } from '~/components/social-links.vue'

const year = new Date().getFullYear()

const navLinks = [
  { to: '#start', label: 'Start' },
  { to: '#about', label: 'O mnie' },
  { to: '#offer', label: 'Oferta' },
  { to: '#reviews', label: 'Opinie' },
  { to: '#faq', label: 'FAQ' },
  { to: '#scope', label: 'Zakres' },
  { to: '#contact', label: 'Kontakt' },
] as const

const socialItems: readonly SocialLinkItem[] = [
  {
    href: 'https://calendly.com/szymcode/it-mentoring-consultation',
    icon: 'mdi:calendar-clock',
    label: 'Umów konsultację mentoringową',
  },
  {
    href: 'https://wa.me/+48798733368',
    icon: 'mdi:whatsapp',
    label: 'WhatsApp',
  },
  {
    href: 'https://www.linkedin.com/in/szymon-radomski/',
    icon: 'mdi:linkedin',
    label: 'Profil LinkedIn',
  },
  {
    href: 'https://discord.gg/9Y2Fusxuc4',
    icon: 'mdi:discord',
    label: 'Serwer Discord Nucleify',
  },
  {
    href: 'https://github.com/SzymCode',
    icon: 'mdi:github',
    label: 'GitHub SzymCode',
  },
]
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.footer {
  position: relative;
  z-index: 2;
  width: 100%;
  margin-top: clamp(2.5rem, 6vw, 4rem);
  padding-bottom: clamp(1.75rem, 4vw, 2.75rem);
  border-top: 1px solid hsl(var(--rainbow-hue) 58% 62% / 0.35);
  background:
    radial-gradient(
      120% 80% at 50% 0%,
      color-mix(in srgb, hsl(var(--rainbow-hue) 55% 52%) 12%, transparent),
      transparent 55%
    ),
    linear-gradient(180deg, rgb(255 255 255 / 0.045) 0%, transparent 38%),
    linear-gradient(165deg, rgb(4 9 9 / 0.99), rgb(1 3 4 / 1));
  box-shadow:
    inset 0 1px 0 rgb(255 255 255 / 0.06),
    0 -24px 64px rgb(0 0 0 / 0.35);

  &-glow {
    pointer-events: none;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent 5%,
      hsl(var(--rainbow-hue) 55% 56%),
      transparent 95%
    );
    box-shadow:
      0 0 28px hsl(var(--rainbow-hue) 55% 52% / 0.4),
      0 6px 32px hsl(var(--rainbow-hue) 55% 48% / 0.12);
    opacity: 0.9;
  }

  &-inner {
    position: relative;
    z-index: 1;
    width: min(1200px, calc(100% - 2rem));
    margin-inline: auto;
    padding: clamp(2rem, 5vw, 3rem) 0 0;

    @include bp-lg-up {
      width: min(1200px, calc(100% - 4rem));
    }
  }

  &-main {
    display: grid;
    gap: clamp(1.5rem, 3.5vw, 2rem);
    align-items: start;

    @include bp-md-up {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
      column-gap: clamp(1.5rem, 4vw, 3rem);
    }

    @include bp-lg-up {
      grid-template-columns:
        minmax(0, 1.15fr) minmax(0, 0.95fr) minmax(14rem, 17.5rem);
    }
  }

  &-brand {
    max-width: 26rem;
  }

  &-actions {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2.2vw, 1.35rem);
    min-width: 0;

    @include bp-md-up {
      grid-column: 1 / -1;
    }

    @include bp-lg-up {
      grid-column: auto;
    }

    > .footer-col:last-child {
      padding-top: clamp(0.85rem, 2vw, 1.1rem);
      border-top: 1px solid rgb(255 255 255 / 0.07);
    }
  }

  &-logo {
    display: inline-flex;
    margin-bottom: 0.65rem;
    font-size: clamp(1.15rem, 2.2vw, 1.35rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.18s ease;

    &:hover {
      opacity: 0.92;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &-tagline {
    margin: 0 0 0.5rem;
    font-size: clamp(0.86rem, 1.4vw, 0.93rem);
    line-height: 1.6;
    color: color-mix(in srgb, #fff 72%, transparent);
  }

  &-proof {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.5;
    color: color-mix(in srgb, #fff 58%, transparent);
  }

  &-proof-link {
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.15em;
    }
  }

  &-col {
    min-width: 0;
  }

  &-col-title {
    margin: 0 0 0.65rem;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: color-mix(in srgb, #fff 55%, transparent);
  }

  &-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.15rem clamp(0.85rem, 4vw, 2.75rem);
  }

  &-link {
    display: inline-flex;
    align-items: center;
    min-height: 2.35rem;
    padding: 0.2rem 0;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    color: color-mix(in srgb, #fff 88%, transparent);
    border-radius: 0.35rem;
    transition:
      color 0.15s ease,
      transform 0.15s ease;

    &:hover {
      color: hsl(var(--rainbow-hue) 58% 62%);
    }

    &:focus-visible {
      outline: 2px solid hsl(var(--rainbow-hue) 58% 62%);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &-contact {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  &-cta {
    width: 100%;
    justify-content: center;
  }

  &-sublink {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.86rem;
    font-weight: 600;
    text-decoration: none;
    color: hsl(var(--rainbow-hue) 55% 58%);
    border-radius: 0.35rem;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 0.15em;
    }

    &:focus-visible {
      outline: 2px solid hsl(var(--rainbow-hue) 58% 62%);
      outline-offset: 3px;
    }
  }

  &-sublink-icon {
    font-size: 1rem;
    opacity: 0.9;
  }

  &-bottom {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-top: clamp(1.85rem, 4vw, 2.5rem);
    padding-top: clamp(1.25rem, 3vw, 1.65rem);
    border-top: 1px solid rgb(255 255 255 / 0.09);

    @include bp-sm-up {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
  }

  &-copy {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.5;
    color: color-mix(in srgb, #fff 52%, transparent);
  }

  &-back-top {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 0.85rem;
    font-size: 0.84rem;
    font-weight: 700;
    text-decoration: none;
    color: color-mix(in srgb, #fff 88%, transparent);
    border-radius: 999px;
    border: 1px solid hsl(var(--rainbow-hue) 58% 62% / 0.55);
    background: rgb(0 0 0 / 0.2);
    transition:
      box-shadow 0.2s ease,
      border-color 0.2s ease,
      color 0.15s ease;

    &:hover {
      color: hsl(var(--rainbow-hue) 58% 68%);
      border-color: hsl(var(--rainbow-hue) 58% 62%);
      box-shadow: 0 0 18px hsl(var(--rainbow-hue) 55% 52% / 0.35);
    }

    &:focus-visible {
      outline: 2px solid hsl(var(--rainbow-hue) 58% 62%);
      outline-offset: 3px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &-back-top-icon {
    font-size: 1.05rem;
  }
}
</style>
