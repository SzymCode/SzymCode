<template>
  <nav id="navbar" aria-label="Nawigacja główna">
    <div class="navbar-container">
      <NuxtLink class="navbar-logo" to="/" @click="closeMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="48"
          height="48"
          class="navbar-logo-mark"
          aria-hidden="true"
        >
          <path
            class="rainbow-fill-auto"
            d="M197.625 69.813q2.822.022 5.645.04c4.577.03 9.153.09 13.73.147v19l-6.648.113q-3.238.071-6.475.15-2.225.048-4.45.083c-12.894.205-24.442 1.339-34.337 10.404-7.96 8.382-10.2 17.876-10.09 29.25.73 9.995 4.049 16.45 11.313 23.25 11.191 9.419 23.091 10.024 37.312 10.375l3.91.117c3.155.094 6.31.177 9.465.258v19c-4.802.046-9.603.086-14.404.11q-2.445.015-4.888.04c-18.774.197-34.507-2.735-49.27-15.338-11.36-13.107-17.195-26.426-16.68-44.03C132.809 110.708 135.363 101.273 142 91l1.215-1.89C148.725 81.658 158.558 76.423 167 73l1.814-.8c9.195-3.45 19.154-2.522 28.811-2.388M104.875 69.75q2.94.03 5.879.055c4.75.04 9.496.118 14.246.195v19c-2.982 1.49-5.636 1.036-8.957.957q-2.157-.034-4.314-.064c-2.254-.037-4.506-.08-6.759-.14-12.224-.311-24.434.285-34.26 8.556-8.96 8.858-10.944 17.479-11.5 29.847C59 131 59 131 58 132c-6.95 1.117-14.144 1.946-21 0-.692-17.123 1.436-32.937 13.5-46.187 15.745-14.578 33.945-16.43 54.375-16.063M104 121h21c.41 19.311-3.755 32.58-16.906 47.105-14.232 13.66-33.38 14.343-51.844 14.083q-2.808-.024-5.617-.042c-4.545-.032-9.089-.084-13.633-.146-.683-5.12-1.15-9.9-.562-15.062l.308-2.848L37 162l3.361-.044c4.146-.058 8.29-.136 12.435-.218q2.682-.051 5.365-.084c2.582-.034 5.164-.087 7.745-.142l2.394-.02C79.128 161.21 87.05 156.137 95 149c5.245-5.98 5.834-13.003 6.543-20.645C102 125 102 125 104 121"
          />
          <path
            class="rainbow-fill-auto"
            d="M60 110c1.112 3.335.846 3.777 0 7-.301 3.658-.507 7.316-.719 10.98C59 131 59 131 58 132c-6.95 1.117-14.144 1.946-21 0v-2h21l-.125-6.625c-.093-4.95.318-8.751 2.125-13.375M58 80l2 1c-2.59 5.179-6.632 9.263-11 13h-2l-2 5h-2c1.288-4.743 3.031-7.605 6.375-11.187.77-.84 1.542-1.679 2.336-2.543 2-1.984 3.987-3.656 6.289-5.27M162 175h5v2l21 2v2l4 1c-10.975.42-19.96-1.6-30-6zM155 79l2 1c-2 3-2 3-5 4a141 141 0 0 0-5 5l-1.52 1.402c-1.677 1.81-2.61 3.562-3.667 5.785l-1.043 2.168L140 100h-2c2.17-9.407 9.232-15.855 17-21M113 159c0 4.274-1.994 5.84-4.785 8.922-3.6 3.378-7.685 6.099-12.215 8.078l-2-1 1-2h4l1-3c2.499-1.909 5.112-3.572 7.75-5.281 2.52-1.591 2.52-1.591 3.25-4.719zM144 160l4 2v3l1.672.285c2.952.907 5.055 2.378 7.578 4.153l2.703 1.87L162 173v2c-7.274-1.679-13.946-6.746-18-13zM159 146l2.875 2.563c4.459 3.836 9.266 7.133 14.125 10.437-3 1-3 1-5.086-.004-4.767-3.246-8.58-6.263-11.914-10.996zM97 146l1 2c-4.002 5.387-8.882 10.102-15 13-2.312-.312-2.312-.312-4-1l2.938-1.562C87.59 155.208 93.363 151.456 97 146M167 95l2 1-1.355 1.215c-4.722 4.44-7.79 8.984-10.645 14.785-1-3-1-3 .04-5.34 5.262-8.62 5.262-8.62 9.96-11.66M137 100c1.135 3.345.866 5.26-.312 8.563l-.801 2.316C135 113 135 113 133 116c.392-5.955 1.371-10.628 4-16"
          />
          <path
            class="rainbow-fill-auto"
            d="m58 80 2 1c-3.77 3.927-7.885 7.444-12 11 0-3 0-3 1.426-4.754l1.886-1.808 1.864-1.817C55 82 55 82 58 80M177 179h11v2l4 1h-10v-2h-5zM133 134l1 4h2c1.176 3.674 1.074 7.17 1 11-3.102-4.653-4.338-9.415-4-15M152 169c3.941.563 6.75 1.68 10 4v2c-4.43-1.208-6.981-2.517-10-6M121 144c1 3 1 3 .223 5.043l-1.16 2.144-1.153 2.168L118 155c-1.136-3.717-.667-5.47 1-9h2zM155 79l2 1c-2 3-2 3-5 4-1.667 1.5-1.667 1.5-3 3 0-3 0-3 1.313-4.387zM69 97l2 1-7 8-1-2c3.75-5.875 3.75-5.875 6-7"
          />
        </svg>
        <span class="navbar-logo-text rainbow-text-auto">SzymCode</span>
      </NuxtLink>

      <button
        type="button"
        class="navbar-menu-toggle"
        :aria-expanded="menuOpen"
        :aria-controls="MOBILE_PANEL_ID"
        :aria-label="menuOpen ? 'Zamknij menu' : 'Otwórz menu'"
        @click="toggleMenu"
      >
        <span class="navbar-menu-toggle-bar" aria-hidden="true" />
        <span class="navbar-menu-toggle-bar" aria-hidden="true" />
        <span class="navbar-menu-toggle-bar" aria-hidden="true" />
      </button>

      <div class="navbar-links">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          class="navbar-link"
          :to="link.to"
        >
          <span class="navbar-link-stack">
            <span class="navbar-link rainbow-text-auto" aria-hidden="true">
              {{ link.label }}
            </span>
            <span class="navbar-link-idle">{{ link.label }}</span>
          </span>
        </NuxtLink>
        <CTAButton
          text="Umów konsultację"
          href="https://calendly.com/szymcode/it-mentoring-consultation"
          target="_blank"
        />
      </div>
    </div>

    <Teleport to="body">
      <Transition
        name="navbar-overlay"
        :duration="{ enter: overlayEnterMs, leave: 300 }"
      >
        <div
          v-show="menuOpen"
          :id="MOBILE_PANEL_ID"
          class="navbar-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu nawigacji"
        >
          <div
            class="navbar-overlay-scrim"
            aria-hidden="true"
            @click="closeMenu"
          />
          <button
            type="button"
            class="navbar-overlay-close"
            aria-label="Zamknij menu"
            @click="closeMenu"
          >
            <Icon name="mdi:close" class="navbar-overlay-close-icon" />
          </button>
          <div class="navbar-overlay-content">
            <ul class="navbar-overlay-list">
              <li
                v-for="link in navLinks"
                :key="link.to"
                class="navbar-overlay-item"
              >
                <NuxtLink
                  class="navbar-overlay-link"
                  :to="link.to"
                  @click="closeMenu"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
            <div
              class="navbar-overlay-cta-wrap"
              :style="{
                '--navbar-cta-delay': `${90 + (navLinks.length - 1) * 55 + 200}ms`,
              }"
            >
              <CTAButton
                text="Umów konsultację"
                href="https://calendly.com/szymcode/it-mentoring-consultation"
                target="_blank"
                @click="closeMenu"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import CTAButton from './cta-button.vue'

const navLinks = [
  { to: '/#offer', label: 'Oferta' },
  { to: '/#reviews', label: 'Opinie' },
  { to: '/#faq', label: 'FAQ' },
  { to: '/#scope', label: 'Zakres' },
  { to: '/#contact', label: 'Kontakt' },
  { to: '/kursy', label: 'Kursy' },
  { to: '/blog', label: 'Blog' },
] as const

const MOBILE_PANEL_ID = 'navbar-mobile-panel'

const overlayEnterMs = computed(() => {
  const n = navLinks.length
  const stagger = 55
  const riseMs = 480
  const firstDelay = 90
  const tail = 60
  const lastLinkDone = firstDelay + Math.max(0, n - 1) * stagger + riseMs
  return Math.min(1800, Math.max(920, lastLinkDone + riseMs + tail))
})

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function syncOverlayRainbowPhase() {
  if (!import.meta.client) {
    return
  }
  const panel = document.getElementById(MOBILE_PANEL_ID)
  if (!panel) {
    return
  }
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--rainbow-cycle-duration')
    .trim()
  const parsed = Number.parseFloat(raw)
  let ms = 60_000
  if (!Number.isNaN(parsed) && parsed > 0) {
    ms = raw.endsWith('ms') ? parsed : parsed * 1000
  }
  const delaySec = -((performance.now() % ms) / 1000)
  panel.style.setProperty('--rainbow-overlay-phase', `${delaySec}s`)
}

watch(
  menuOpen,
  (open: boolean) => {
    if (!import.meta.client) {
      return
    }
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      syncOverlayRainbowPhase()
    }
  },
  { flush: 'sync' }
)

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  if (!import.meta.client) {
    return
  }
  const onEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeMenu()
    }
  }
  const minWidthDesktop = window.matchMedia('(min-width: 56rem)')

  const onDesktop = () => {
    if (minWidthDesktop.matches) {
      closeMenu()
    }
  }

  window.addEventListener('keydown', onEscape)
  minWidthDesktop.addEventListener('change', onDesktop)

  onUnmounted(() => {
    window.removeEventListener('keydown', onEscape)
    minWidthDesktop.removeEventListener('change', onDesktop)
  })
})
</script>

<style lang="scss">
@use '../styles/breakpoints' as *;

$nav-ease: cubic-bezier(0.22, 1, 0.36, 1);

@mixin nav-focus-ring {
  &:focus-visible {
    outline: 2px solid color-mix(in srgb, var(--rainbow-0) 70%, transparent);
    outline-offset: 2px;
  }
}

@keyframes navbar-overlay-rise {
  from {
    opacity: 0;
    transform: translateY(1.35rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#navbar {
  position: fixed;
  inset: 0 0 auto;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: clamp(0.75rem, 0.25rem + 1.25vw, 1rem);
  padding-inline: clamp(1rem, 4vw, 1.5rem);
  background: #000;
  border-bottom: 1px solid color-mix(in srgb, #fff 6%, transparent);

  @include bp-lg-up {
    backdrop-filter: blur(0.5rem);
    background: rgb(0 0 0 / 50%);
    border-bottom: none;
  }

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    max-width: 1200px;
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
    color: #fff;
    font-size: clamp(1.125rem, 4vw, 1.5rem);
    font-weight: 700;
    text-decoration: none;

    &-mark {
      flex-shrink: 0;
      display: block;
      width: clamp(2.25rem, 8vw, 3rem);
      height: clamp(2.25rem, 8vw, 3rem);
    }
  }

  .navbar-menu-toggle {
    @include nav-focus-ring;

    display: grid;
    place-content: center;
    gap: 0.35rem;
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    color: #fff;
    cursor: pointer;

    @include bp-lg-up {
      display: none;
    }

    &-bar {
      width: 1.5rem;
      height: 2px;
      border-radius: 1px;
      background: currentcolor;
    }
  }

  .navbar-links {
    display: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    gap: clamp(1rem, 2vw, 3rem);

    @include bp-lg-up {
      display: flex;
    }

    .navbar-link {
      font-size: 1.125rem;
      font-weight: 300;
      text-decoration: none;

      &:hover .navbar-link-idle,
      &:focus-visible .navbar-link-idle {
        opacity: 0;
      }

      &-stack {
        display: inline-grid;
        align-items: center;

        & > * {
          grid-area: 1 / 1;
        }
      }

      &-idle {
        position: relative;
        z-index: 1;
        color: #fff;
        transition: opacity 0.2s ease;
      }
    }
  }
}

.navbar-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.5rem 1.5rem 2rem;

  @include bp-lg-up {
    display: none;
  }

  &.navbar-overlay-leave-active {
    transition: opacity 0.3s ease;
  }

  &.navbar-overlay-leave-to {
    opacity: 0;
  }

  &-scrim {
    position: absolute;
    inset: 0;
    background: rgb(0 0 0 / 72%);
    backdrop-filter: blur(10px);
  }

  &-close {
    @include nav-focus-ring;

    position: absolute;
    top: 0.9rem;
    right: 1rem;
    z-index: 2;
    display: grid;
    place-content: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    color: #fff;
    cursor: pointer;

    &-icon {
      width: 1.75rem;
      height: 1.75rem;
    }
  }

  &-content {
    position: relative;
    top: -2rem;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 24rem;
    text-align: center;
  }

  &-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &-link {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: clamp(1.25rem, 4.5vw, 1.5rem);
    font-weight: 500;
    letter-spacing: 0.02em;
    color: #fff;
    text-decoration: none;
  }

  &-cta-wrap {
    margin-top: 2rem;

    .cta-button {
      &.rainbow-bg-border-glow-hover-auto {
        animation-delay: var(--rainbow-overlay-phase, 0s);

        &::after {
          animation-delay: var(--rainbow-overlay-phase, 0s);
        }
      }
    }
  }

  &.navbar-overlay-enter-active {
    $rise: navbar-overlay-rise 0.48s $nav-ease both;

    .navbar-overlay-close {
      animation: navbar-overlay-rise 0.4s $nav-ease both;
      animation-delay: 0.05s;
    }

    .navbar-overlay-item {
      animation: $rise;

      @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
          animation-delay: #{0.09 + ($i - 1) * 0.055}s;
        }
      }
    }

    .navbar-overlay-cta-wrap {
      animation: $rise;
      animation-delay: var(--navbar-cta-delay, 0.45s);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &.navbar-overlay-leave-active {
      transition-duration: 0.01ms !important;
    }

    &.navbar-overlay-enter-active .navbar-overlay-close,
    &.navbar-overlay-enter-active .navbar-overlay-item,
    &.navbar-overlay-enter-active .navbar-overlay-cta-wrap {
      animation: none !important;
      animation-delay: 0s !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
}
</style>
