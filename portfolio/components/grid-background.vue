<template>
  <div class="nuc-grid-background">
    <div class="nuc-grid-background-grid rainbow-grid-lines-auto"></div>
    <div class="nuc-grid-background-glow rainbow-grid-glow-auto"></div>
  </div>
</template>

<style lang="scss">
.nuc-grid-background {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  max-height: 100vh;

  &-grid {
    position: absolute;
    inset: 0;
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%);
  }

  &-glow {
    position: absolute;
    width: 650px;
    height: 650px;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
