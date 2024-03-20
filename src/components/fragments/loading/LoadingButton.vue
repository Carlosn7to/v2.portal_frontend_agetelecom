<script>
export default {
  name: "LoadingButton"
}
</script>

<template>
  <div class="dot-wave">
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
    <div class="dot-wave__dot"></div>
  </div>
</template>

<style scoped lang="scss">
.dot-wave {
  --uib-size: 30px;
  --uib-speed: 1s;
  --uib-color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.17);
  padding-top: calc(var(--uib-size) * 0.34);
  opacity: 0;
  animation: appears ease-in-out 0.2s forwards;
}

.dot-wave__dot {
  flex-shrink: 0;
  width: calc(var(--uib-size) * 0.17);
  height: calc(var(--uib-size) * 0.17);
  border-radius: 50%;
  background-color: var(--uib-color);
  will-change: transform;
}

.dot-wave__dot:nth-child(1) {
  animation: jump824 var(--uib-speed) ease-in-out
  calc(var(--uib-speed) * -0.45) infinite;
}

.dot-wave__dot:nth-child(2) {
  animation: jump824 var(--uib-speed) ease-in-out
  calc(var(--uib-speed) * -0.3) infinite;
}

.dot-wave__dot:nth-child(3) {
  animation: jump824 var(--uib-speed) ease-in-out
  calc(var(--uib-speed) * -0.15) infinite;
}

.dot-wave__dot:nth-child(4) {
  animation: jump824 var(--uib-speed) ease-in-out infinite;
}

@keyframes jump824 {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-200%);
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