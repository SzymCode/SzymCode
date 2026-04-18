<template>
  <div><NuxtPage /></div>
</template>

<script setup lang="ts">
const route = useRoute()

useHead(() => ({
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
</script>

<style lang="scss">
@use 'styles';
</style>
