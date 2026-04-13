<template>
  <div id="index">
    <Navbar />
    <main>
      <GridBackground />
      <Start />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '~/components/navbar.vue'
import GridBackground from '~/components/grid-background.vue'
import Start from '~/sections/start.vue'
</script>

<style lang="scss">
main {
  position: relative;
  min-height: 100vh;
}
</style>
