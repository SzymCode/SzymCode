<template>
  <div id="index">
    <Navbar />
    <main>
      <GridBackground />
      <Start />
      <Spacing />
      <About />
      <Spacing />
      <Reviews />
      <Spacing />
      <Offers />
      <Spacing />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/navbar.vue'
import GridBackground from '~/components/grid-background.vue'
import Spacing from '~/components/spacing.vue'
import About from '~/sections/about.vue'
import Offers from '~/sections/offers.vue'
import Start from '~/sections/start.vue'
import Reviews from '~/sections/reviews.vue'
</script>

<style lang="scss">
main {
  position: relative;
  min-height: 100vh;
}
</style>
