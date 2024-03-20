<script setup>
import {ref} from 'vue';
// import {useStore} from "vuex";
//
// const store = useStore();
//
// const collorTheme = store.getters['system'].theme.lightTheme.structureColors.background;

const options = {
  chart: {
    type: 'line'
  },
  colors: ["#7FC8E8", "#6BA9C6", "#7FC8E8"],
  xaxis: {
    categories: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5'],
  },
  grid: {
    yaxis: {
      lines: {
        show: false
      }
    },
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  stroke: {
    show: true,
    curve: 'smooth',
    width: 1,
  },
  tooltip: {
    x: {
      show: false,
      formatter: function (val) {
        return `Semana ${val}`; // Customiza o tooltip para mostrar "Dia [valor]"
      }
    },
    y: {
      formatter: function (val) {
        return val; // Retorna o valor da série sem modificação
      }
    }
  }
};


const series = ref([
  {
    name: 'Link Dedicado',
    data: Array.from({length: 5}, () => Math.floor(Math.random() * 5) + 1),
  },
  {
    name: 'PME',
    data: Array.from({length: 5}, () => Math.floor(Math.random() * 20) + 1),
  },
  {
    name: 'Residencial',
    data: Array.from({length: 5}, () => Math.floor(Math.random() * 10) + 1),
  },
]);
</script>


<template>
  <div class="graph_daily_sales">
    <h3>Vendas por semana</h3>
    <apexchart width="100%" height="90%" :options="options" :series="series"></apexchart>
  </div>
</template>

<style scoped lang="scss">
.graph_daily_sales {
  grid-area: graph_daily;
  @include card();
  padding: 2vh 1vw;
  box-shadow: $highlight-shadow;


}
</style>