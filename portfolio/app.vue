<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead(() => ({
  htmlAttrs: {
    class: 'nui-rainbow',
  },
  meta: [
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:logo', content: '/logo-sc.svg' },
    {
      name: 'author',
      content: 'Szymon Radomski (SzymCode)',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://szymco.de' + '/' + route.path.replace(/\//g, ''),
    },
  ],
}))

let cleanupRainbow: (() => void) | undefined

onMounted(async () => {
  const { applyRainbow } = await import('nui-rainbow')
  cleanupRainbow = applyRainbow(document.documentElement, {
    duration: 12,
    cycle: 'branded',
    fps: 'auto',
    autoPause: true,
  })
})

onUnmounted(() => {
  cleanupRainbow?.()
})
</script>

<style lang="scss">
@use 'styles';
</style>
