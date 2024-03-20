<script>
export default {
  name: "LoadingComponent"
}
</script>

<template>
  <div class="loading">
    <img src="/img/logo/age_logo_completa.png" alt="">
    <div class="line-wobble"></div>
  </div>
</template>

<style scoped lang="scss">

.loading {
  width: 100vw;
  height: 100vh;
  background: $bg-color;
  @include flex(column, center, center, 4vh);
  opacity: 0;
  animation: appears forwards ease-in-out .5s;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;

  img {
    width: 20vw;
    height: auto;
    shape-rendering: auto;
    image-rendering: auto;
  }

  .line-wobble {
    --uib-size: 15vw;
    --uib-speed: 2s;
    --uib-color: #0F297DFF;
    --uib-line-weight: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--uib-line-weight);
    width: var(--uib-size);
    border-radius: calc(var(--uib-line-weight) / 2);
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .line-wobble::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: 0.1;
  }

  .line-wobble::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-line-weight) / 2);
    animation: wobble var(--uib-speed) ease-in-out infinite;
    transform: translateX(-90%);
    background-color: var(--uib-color);
  }

  @keyframes wobble {
    0%,
    100% {
      transform: translateX(-90%);
    }

    50% {
      transform: translateX(90%);
    }
  }

}

@keyframes appears {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>