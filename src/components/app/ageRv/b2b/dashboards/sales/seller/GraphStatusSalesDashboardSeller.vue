<script setup>

import {ref} from 'vue';

import {useStore} from "vuex";

const store = useStore();

const colorTheme = store.getters['system'].theme.lightTheme.structureColors;

const optionsFirst = {
  chart: {
    type: 'donut'
  },
  labels: ['Aprovados', 'Em aprovação', 'Cancelados'],
  colors: ["#45D996", "#49A7E5", "#CDD1D8"],
  dataLabels: {
    style: {
      colors: [colorTheme.text.description],
    },
    dropShadow: {
      enabled: false
    }
  },
  plotOptions: {
    pie: {
      donut: {
        size: '80%',

      }
    }
  }
};

const seriesFirst = ref([65, 30, 5]);

</script>

<template>
  <div class="graph_status_sales">
    <h3>Status dos contratos</h3>
    <apexchart width="100%" height="90%" :options="optionsFirst" :series="seriesFirst"></apexchart>
  </div>
</template>

<style scoped lang="scss">

.graph_status_sales {
  @include card();
  box-shadow: $highlight-shadow;
  grid-area: graph_status;
  height: 100%;
  width: 100%;
  padding: 2vh 1vw;
}

</style>