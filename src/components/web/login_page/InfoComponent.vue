<script setup>

import { ref, computed } from "vue";


import { defineAsyncComponent } from "vue";



const info = ref([
  {
    title: "Explore o Portal Age Telecom ",
    focus: 'Sua Central de Recursos e Facilidades!',
    description: "Descubra nossas ferramentas e soluções sob medida para impulsionar sua produtividade e bem-estar no trabalho.",
    svgId: 1,
  },
  {
    title: "Painel de Comissionamento Age Telecom",
    focus: 'Conquiste seus objetivos e simplifique suas operações!',
    description: "Tenha uma visão geral completa, tome decisões mais assertivas e alcance seus resultados mais rapidamente.",
    svgId: 2,
  },
  {
    title: "Relatórios Personalizados",
    focus: 'Insights a um Clique de Distância!',
    description: "Experimente a conveniência e a facilidade com um único clique. Os insights que você precisa diretamente para suas mãos com rapidez e precisão!",
    svgId: 3,
  },
]);

const step = ref(0);
const prevStep = ref(-1);
const animating = ref(false);

const changeStep = (index) => {
  if (animating.value) return;
  prevStep.value = step.value;
  animating.value = true;
  setTimeout(() => {
    step.value = index;
    animating.value = false;
  }, 100);
};

const textClass = computed(() => ({
  'left_animation': step.value > prevStep.value && !animating.value,
  'right_animation': step.value < prevStep.value && !animating.value,
}));

const imageClass = computed(() => ({
  'left_animation': step.value > prevStep.value && !animating.value,
  'right_animation': step.value < prevStep.value && !animating.value,
}));

</script>

<template>
  <div class="container_info">
    <div class="text_info bigText" :class="textClass">
      <h1 v-html="info[step].title"></h1>
      <h1 v-html="info[step].focus"></h1>
      <p>{{info[step].description}}</p>
    </div>
    <div class="image" :class="imageClass">
      <component :is="defineAsyncComponent(() => import('@/components/svg/web/login/Screen' + info[step].svgId + 'Svg.vue'))" />
    </div>

    <div class="steps_buttons">
      <button v-for="(item, index) in info" :key="index" @click="changeStep(index)" :class="{ 'selected': step === index }"></button>
    </div>
  </div>
</template>


<style scoped lang="scss">

.container_info {
  height: 100%;
  padding: 5vh 0;
  @include flex(column, space-between, center, 4vh);
  overflow: hidden;
  .text_info {
    width: 100%;
    @include flex(column, flex-start, center, 1vh);
    padding: 1vh 5vw;
    height: min(12vh, 30vh);
    opacity: 0;

    h1 {
      background: $highlight-bg;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 2rem;

    }

    h1:nth-child(2) {
      font-size: 2.2rem;
      background: $highlight-bg-hover;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      font-size: 1.4rem;
      color: $text-description-color;
      text-align: center;

    }
  }

  .image {
    opacity: 0;

    svg {
      width: 20vw;
      height: auto;
    }
  }

  .steps_buttons {
    width: 100%;
    @include flex(row, center, center, 1vh);
    button {
      outline: none;
      border: none;
      width: 1vw;
      height: 1vw;
      border-radius: 50%;
      background: #ccc;
      color: white;
      margin: 0 .5vw;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: $highlight-bg;
      }
    }

    .selected {
      background: $highlight-bg;
    }
  }

  .left_animation {
    animation: left-animation .3s ease-in-out forwards;
  }

  .right_animation {
    animation: right-animation .3s ease-in-out forwards;
  }

  @keyframes left-animation {
    0% {
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes right-animation {
    0% {
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

</style>