<template>
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="about-inner">
      <div class="about-grid">
        <div class="about-copy">
          <h2 id="about-title" class="about-title">
            Od lat w <span class="rainbow-text-auto">IT</span> między kodem,
            produktem i ludźmi
          </h2>

          <div class="about-body">
            <p>
              Nazywam się <strong>Szymon Radomski</strong>. Jestem
              <strong>Full-stack Developerem</strong>
              i mentorem: pomagam wejść do branży albo zrobić kolejny krok bez
              chaosu - od planu nauki, poprawy CV i portfolio, po rozmowy i
              realne projekty.
            </p>

            <p>
              W <strong>Atomic IT</strong> rozwijam ekosystem
              <strong>Nucleify</strong>
              - modularny framework dla
              <strong>Laravela</strong>
              i <strong>Nuxt (Vue)</strong> oraz
              <strong>React (Next.js)</strong>, z naciskiem na skalowalną
              architekturę, jakość i sensowną współpracę z backendem.
            </p>

            <p>
              Prowadzę <strong>mentoring i konsultacje</strong>.<br /><br />
              Więcej o mnie:
              <NuxtLink
                class="about-link rainbow-text-auto"
                to="https://www.linkedin.com/in/szymon-radomski/"
                target="_blank"
                rel="noopener noreferrer"
                text="LinkedIn"
                >LinkedIn</NuxtLink
              >
              <br />
              Repozytoria:
              <NuxtLink
                class="about-link rainbow-text-auto"
                to="https://github.com/SzymCode"
                target="_blank"
                rel="noopener noreferrer"
                >SzymCode</NuxtLink
              >
              ·
              <NuxtLink
                class="about-link rainbow-text-auto"
                to="https://github.com/Nucleify/Nucleify"
                target="_blank"
                rel="noopener noreferrer"
                >Nucleify</NuxtLink
              >
            </p>
          </div>
        </div>

        <div class="about-aside">
          <NuxtLink
            class="about-photo-block"
            to="https://github.com/SzymCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="about-photo-glow rainbow-bg-auto" aria-hidden="true" />
            <img
              class="about-photo"
              src="/logo-sc.png"
              alt="Szymon Radomski"
              width="280"
              height="280"
              loading="lazy"
              decoding="async"
            />
          </NuxtLink>

          <SocialLinks :items="socialLinksItems" />
        </div>
      </div>

      <HighlightTags :items="highlightTagItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
import HighlightTags, {
  type HighlightTagItem,
} from '~/components/highlight-tags.vue'
import SocialLinks, { type SocialLinkItem } from '~/components/social-links.vue'

const socialLinksItems: SocialLinkItem[] = [
  {
    href: 'https://calendly.com/szymcode/it-mentoring-consultation',
    icon: 'mdi:calendar-clock',
    label: 'Umów konsultację mentoringową',
  },
  {
    href: 'https://www.linkedin.com/in/szymon-radomski/',
    icon: 'mdi:linkedin',
    label: 'Profil LinkedIn',
  },
  {
    href: 'https://github.com/SzymCode',
    icon: 'mdi:github',
    label: 'GitHub SzymCode',
  },
  {
    href: 'https://discord.gg/9Y2Fusxuc4',
    icon: 'mdi:discord',
    label: 'Serwer Discord Nucleify',
  },
]

const highlightTagItems: HighlightTagItem[] = [
  {
    label: '150+ gwiazdek Nucleify na GitHubie',
    href: 'https://github.com/Nucleify/Nucleify',
    title: 'Repozytorium Nucleify na GitHubie',
  },
  {
    label: 'Full-stack: Laravel, Nuxt, React, TypeScript',
    href: 'https://github.com/SzymCode',
    title: 'Profil GitHub SzymCode',
  },
  {
    label: 'Mentoring 1:1 i konsultacje',
    href: 'https://calendly.com/szymcode/it-mentoring-consultation',
    title: 'Umów konsultację mentoringową',
  },
  {
    label: 'Code review, Scrum i wzorce projektowe',
    href: '#start',
    title: 'Sekcja start',
  },
  {
    label: 'Opinie od stażystów i współpracowników',
    href: 'https://www.linkedin.com/in/szymon-radomski/details/recommendations/?detailScreenTabIndex=0',
    title: 'Rekomendacje na LinkedIn',
  },
  {
    label: 'Społeczność na Discordzie Nucleify',
    href: 'https://discord.gg/9Y2Fusxuc4',
    title: 'Discord Nucleify',
  },
]
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

.about {
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

  &-grid {
    display: grid;
    gap: clamp(2rem, 5vw, 3.5rem);
    align-items: center;
    margin-bottom: clamp(2rem, 5vw, 3rem);

    @include bp-lg-up {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
      gap: clamp(2rem, 4vw, 3.5rem);
    }
  }

  &-title {
    max-width: 40rem;
    margin: 0 0 clamp(1.25rem, 3vw, 1.75rem);
    font-size: clamp(1.65rem, 4.2vw, 2.65rem);
    line-height: 1.12;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  &-body {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 40rem;
    font-size: clamp(0.95rem, 1.35vw, 1.05rem);
    line-height: 1.75;
    color: color-mix(in srgb, #fff 78%, transparent);

    p {
      margin: 0;
    }

    strong {
      color: color-mix(in srgb, #fff 92%, transparent);
      font-weight: 600;
    }
  }

  &-link {
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.14em;
    text-decoration-thickness: 1px;
  }

  &-aside {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: clamp(1rem, 3vw, 1.5rem);

    @include bp-lg-up {
      justify-content: flex-end;
    }
  }

  &-photo-block {
    background-color: hsl(var(--rainbow-hue) 58% 58%);
    position: relative;
    flex: none;
    width: min(14rem, 72vw);
    aspect-ratio: 1;
    border-radius: 50%;
  }

  &-photo-glow {
    position: absolute;
    inset: 18% 8% 8% 8%;
    border-radius: 50%;
    filter: blur(36px);
    opacity: 0.55;
    transform: scale(1.05);
    pointer-events: none;
  }

  &-photo {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid hsl(var(--rainbow-hue) 58% 58%);
    box-shadow:
      0 0 60px hsl(var(--rainbow-hue) 55% 52% / 0.35);
    filter: contrast(1.5);
    opacity: 0.8;
    transition: box-shadow 0.2s ease;

    &:hover {
      box-shadow: 0 0 60px hsl(var(--rainbow-hue) 55% 52% / 0.8);  
    }
  }

}
</style>
