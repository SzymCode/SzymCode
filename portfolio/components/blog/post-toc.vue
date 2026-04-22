<template>
  <aside v-if="headings.length" class="blog-toc" aria-label="Spis treści">
    <p class="blog-toc-title">On this page</p>
    <ul class="blog-toc-list">
      <li
        v-for="heading in headings"
        :key="heading.id"
        class="blog-toc-item"
        :class="{
          'blog-toc-item--active': heading.id === activeId,
          'blog-toc-item--h3': heading.level === 3,
        }"
      >
        <a
          class="blog-toc-link"
          :href="`#${heading.id}`"
          @click.prevent="onTocClick(heading.id)"
        >
          {{ heading.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

type TocHeading = {
  id: string
  text: string
  level: 2 | 3
}

const props = withDefaults(
  defineProps<{
    targetSelector?: string
  }>(),
  {
    targetSelector: '.blog-md',
  }
)

const headings = ref<TocHeading[]>([])
const activeId = ref('')
let headingElements: HTMLElement[] = []
let rafId = 0
let lockedHeadingId = ''
let lockUntilMs = 0
const ACTIVATION_OFFSET = 72

function slugify(text: string) {
  const polishMap: Record<string, string> = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  }

  return text
    .toLowerCase()
    .trim()
    .replace(/[ąćęłńóśźż]/g, (char) => polishMap[char] ?? char)
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function buildToc() {
  const target = document.querySelector(props.targetSelector)
  if (!target) {
    headings.value = []
    headingElements = []
    return
  }

  const nodes = Array.from(target.querySelectorAll<HTMLElement>('h2, h3'))

  const used = new Set<string>()
  headings.value = nodes
    .map((el) => {
      const text = el.textContent?.trim() || ''
      if (!text) return null

      const level = Number(el.tagName.slice(1)) as 2 | 3
      let id = el.id || slugify(text)
      if (!id) return null

      let suffix = 2
      const base = id
      while (
        used.has(id) ||
        document.querySelectorAll(`#${CSS.escape(id)}`).length > 1
      ) {
        id = `${base}-${suffix++}`
      }
      used.add(id)
      el.id = id

      return { id, text, level }
    })
    .filter((item): item is TocHeading => item !== null)

  if (!headings.value.length) {
    activeId.value = ''
    return
  }

  headingElements = headings.value
    .map((heading) => document.getElementById(heading.id))
    .filter((el): el is HTMLElement => el !== null)

  activeId.value = headings.value[0].id
}

function updateActiveHeading() {
  if (!headingElements.length) return

  const activationLine = ACTIVATION_OFFSET

  if (lockedHeadingId) {
    const target = document.getElementById(lockedHeadingId)
    if (target) {
      const top = target.getBoundingClientRect().top
      const isNearActivationLine = Math.abs(top - activationLine) <= 24
      const lockExpired = Date.now() > lockUntilMs
      activeId.value = lockedHeadingId
      if (isNearActivationLine || lockExpired) {
        lockedHeadingId = ''
        lockUntilMs = 0
      } else {
        return
      }
    } else {
      lockedHeadingId = ''
      lockUntilMs = 0
    }
  }

  let candidateId = headingElements[0].id

  for (const el of headingElements) {
    const top = el.getBoundingClientRect().top
    if (top <= activationLine) {
      candidateId = el.id
    } else {
      break
    }
  }

  activeId.value = candidateId
}

function onTocClick(id: string) {
  const target = document.getElementById(id)
  if (!target) return
  lockedHeadingId = id
  lockUntilMs = Date.now() + 1500
  activeId.value = id
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}

function scheduleUpdateActiveHeading() {
  if (rafId) return
  rafId = window.requestAnimationFrame(() => {
    rafId = 0
    updateActiveHeading()
  })
}

onMounted(async () => {
  await nextTick()
  requestAnimationFrame(() => {
    buildToc()
    updateActiveHeading()
  })
  window.addEventListener('scroll', scheduleUpdateActiveHeading, {
    passive: true,
  })
  window.addEventListener('resize', scheduleUpdateActiveHeading)
})

onBeforeUnmount(() => {
  if (rafId) {
    cancelAnimationFrame(rafId)
    rafId = 0
  }
  window.removeEventListener('scroll', scheduleUpdateActiveHeading)
  window.removeEventListener('resize', scheduleUpdateActiveHeading)
})
</script>

<style lang="scss">
.blog-toc {
  position: sticky;
  top: 6rem;
  align-self: start;
  padding: 0.95rem 1rem;
  border: 1px solid rgb(255 255 255 / 0.1);
  border-radius: 0.65rem;
  background: rgb(0 0 0 / 0.35);

  &-title {
    margin: 0 0 0.7rem;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: color-mix(in srgb, #fff 60%, transparent);
  }

  &-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.42rem;
  }

  &-item {
    &--h3 .blog-toc-link {
      padding-left: 0.9rem;
      font-size: 0.85rem;
    }

    &--active .blog-toc-link {
      color: #fff;
      border-color: hsl(var(--rainbow-hue) 58% 62% / 0.55);
      background: hsl(var(--rainbow-hue) 55% 52% / 0.12);
    }
  }

  &-link {
    display: block;
    padding: 0.34rem 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.4rem;
    color: color-mix(in srgb, #fff 72%, transparent);
    text-decoration: none;
    font-size: 0.88rem;
    line-height: 1.35;
    transition:
      color 0.15s ease,
      border-color 0.15s ease,
      background-color 0.15s ease;
  }
}
</style>
