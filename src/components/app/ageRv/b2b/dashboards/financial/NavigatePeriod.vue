<script setup>

import {onMounted, ref} from "vue";

const months = ref([
  {month: "JAN", year: 2024, fullName: "Janeiro", value: '2024-01-01', dataAvailable: true},
  {month: "FEV", year: 2024, fullName: "Fevereiro", value: '2024-02-01', dataAvailable: true},
  {month: "MAR", year: 2024, fullName: "Março", value: '2024-03-01', dataAvailable: false},
  {month: "ABR", year: 2024, fullName: "Abril", value: '2024-04-01', dataAvailable: false},
  {month: "MAI", year: 2024, fullName: "Maio", value: '2024-05-01', dataAvailable: false},
  {month: "JUN", year: 2024, fullName: "Junho", value: '2024-06-01', dataAvailable: false},
  {month: "JUL", year: 2024, fullName: "Julho", value: '2024-07-01', dataAvailable: false},
  {month: "AGO", year: 2024, fullName: "Agosto", value: '2024-08-01', dataAvailable: false},
  {month: "SET", year: 2024, fullName: "Setembro", value: '2024-09-01', dataAvailable: false},
  {month: "OUT", year: 2024, fullName: "Outubro", value: '2024-10-01', dataAvailable: false},
  {month: "NOV", year: 2024, fullName: "Novembro", value: '2024-11-01', dataAvailable: false},
  {month: "DEZ", year: 2024, fullName: "Dezembro", value: '2024-12-01', dataAvailable: false},
]);

const periodFiltered = ref();

onMounted(() => {
  periodFiltered.value = months.value[0].fullName + ' de ' + months.value[0].year;
});

const getData = (indexMonths) => {

  if(months.value[indexMonths].dataAvailable === false) {
    return;
  }

  const month = months.value[indexMonths];
  periodFiltered.value = month.fullName + ' de ' + month.year;

};



</script>

<template>
  <div class="navigate_period">
    <h3>
      Período filtrado: <b>{{ periodFiltered }}</b>
    </h3>

    <div class="periods">
      <div  @click="getData(index)"
            :class="{'active' : periodFiltered === month.fullName + ' de ' + month.year, 'disable' : month.dataAvailable === false }"
            class="period" v-for="(month, index) in months" :key="index">
        <span>{{ month.month }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.navigate_period {
  @include card();
  box-shadow: $highlight-shadow;
  grid-area: navi_period;
  position: relative;
  height: 100%;

  h3 {
    font-weight: 500;
  }
  .periods {
    padding: 0 1vw;
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    height: 80%;
    @include flex(row, flex-start, center, 1vw);


    .period {
      padding: 8px 20px;
      border-radius: 20px;
      background-color: #cccccc40;
      cursor: pointer;
      span {
        font-size: 1rem;
        color: $text-description-color;
        font-weight: 800;
      }

      &:hover {
        opacity: .9;
      }
    }

    .active {
      background-color: #2D9CDB;
      span {
        color: #ffffff;
      }
    }

    .disable {
      cursor: not-allowed;
      opacity: .5;
    }
  }
}

</style>