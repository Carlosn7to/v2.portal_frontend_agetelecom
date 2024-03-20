<script setup>
import {ref} from "vue";

const options = {
  chart: {
    stacked: true,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4361ee", '#4895ef', "#EDF1FA"],
  xaxis: {
    categories: ['Lucas', 'Pedro', 'Maycon', 'Diego', 'João', 'Rafael', 'Jonathas', 'Fausto', 'Carlos', 'Victor'],
  },
  yaxis: {
    max: 61
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
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '40%',
      barWidth: '100%',
      dataLabels: {
        enabled: false, // desabilita os rótulos de dados
      },
      borderRadiusApplication: 'round',
      borderRadiusWhenStacked: 'last',
    },
  },
  dataLabels: {
    enabled: false
  }
};


const series = ref([
  {
    name: 'Vendas Banda Larga',
    type: 'bar',
    data: [30, 25, 20, 20, 17, 15, 14, 13, 12, 11]
  },
  {
    name: 'Vendas Link Dedicado',
    type: 'bar',
    data: [20, 15, 14, 13, 12, 11, 10, 10, 9, 8]
  },
  {
    name: ' ',
    type: 'bar',
    data: [10, 20, 26, 27, 31, 34, 36, 38, 40, 41]
  }
]);

</script>

<template>
  <div class="graph_top_sellers">
    <div class="disable">
      <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
    </div>
    <h3>Top 10 Executivos</h3>
    <div id="graphRankingSales">
      <apexchart width="100%" height="100%" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>

<style scoped lang="scss">

.graph_top_sellers {
  grid-area: graph_top_sellers;
  height: 100%;
  @include card();
  box-shadow: $highlight-shadow;
  padding: 2vh 1vw;
  position: relative;
  .disable {
    @include disable();
  }

  h3 {
    font-size: 2rem;
  }

  #graphRankingSales {
    height: 90%;
  }
}

</style>