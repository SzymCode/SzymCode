<template>
  <div class="nuc-grid-background">
    <div class="nuc-grid-background-grid rainbow-grid-lines-auto"></div>
  </div>
</template>

<style lang="scss">
.nuc-grid-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  max-height: 100vh;

  &-grid {
    position: absolute;
    inset: 0;
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 100%);
    filter: brightness(1.5)
  }
}

@media (width < 56rem) {
  .nuc-grid-background {
    &-grid {
      height: 250vh;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 10%, transparent 100%);
    }
  }
}
</style>
