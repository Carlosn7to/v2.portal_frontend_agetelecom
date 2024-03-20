<script setup>

import {defineProps, ref} from 'vue'

const props = defineProps({
  data: Object
})

const dataDashboard = ref(props.data)

</script>

<template>
  <div class="cards">
    <div class="card">
      <h3>Total de clientes</h3>
      <div class="content">
        <span>{{ dataDashboard.clients.total.actual }}</span>
        <div class="info">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>

          <span><b>+0% </b>em relação ao último mês.</span>
        </div>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm6,13A6,6,0,0,0,6,23a1,1,0,0,0,2,0,4,4,0,0,1,8,0,1,1,0,0,0,2,0ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,18,2Zm6,13a6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2,4,4,0,0,1,4,4,1,1,0,0,0,2,0ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8ZM6,2A2,2,0,1,0,8,4,2,2,0,0,0,6,2ZM2,15a4,4,0,0,1,4-4A1,1,0,0,0,6,9a6.006,6.006,0,0,0-6,6,1,1,0,0,0,2,0Z"/></svg>
      </div>
    </div>
    <div class="card">
      <h3>Total em arrecadação</h3>
      <div class="content">
        <span>R$ {{ dataDashboard.raised.total.actual.toFixed(2).replace('.', ',') }}</span>
        <div class="info">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>

          <span><b>+0% </b>em relação ao último mês.</span>
        </div>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M8,3.62c0-1.45,1.18-2.62,2.62-2.62h.38c0-.55,.45-1,1-1s1,.45,1,1h.27c1.07,0,2.06,.57,2.6,1.5,.28,.48,.11,1.09-.36,1.37-.48,.28-1.09,.11-1.37-.36-.18-.31-.51-.5-.87-.5h-2.64c-.34,0-.62,.28-.62,.62,0,.31,.22,.57,.52,.62l3.28,.55c1.27,.21,2.19,1.3,2.19,2.59,0,1.45-1.18,2.62-2.62,2.62h-.38c0,.55-.45,1-1,1s-1-.45-1-1h-.27c-1.07,0-2.06-.57-2.6-1.5-.28-.48-.11-1.09,.36-1.37,.48-.28,1.09-.11,1.37,.36,.18,.31,.51,.5,.87,.5h2.64c.34,0,.62-.28,.62-.62,0-.31-.22-.57-.52-.62l-3.28-.55c-1.27-.21-2.19-1.3-2.19-2.59Zm12.4-.57c-1.42,.28-2.4,1.61-2.4,3.06v5.05c-.26-.09-.54-.15-.83-.17-.79-.04-1.57,.23-2.17,.77l-3,2.76c-.08-.08-.17-.17-.25-.25l-2.74-2.52c-.6-.54-1.38-.81-2.16-.76-.29,.02-.57,.07-.83,.17V6c0-1.85-1.68-3.31-3.6-2.94-1.42,.28-2.4,1.61-2.4,3.06v9.98c0,2.12,.84,4.16,2.34,5.66l1.95,1.95c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29c.39-.39,.39-1.02,0-1.41l-1.95-1.95c-1.13-1.13-1.76-2.65-1.76-4.24V6c0-.55,.45-1,1-1s1,.45,1,1c0,0,0,8.13,.02,8.19,.04,.63,.28,1.26,.73,1.78l2.62,2.72c.38,.4,1.01,.41,1.41,.03,.4-.38,.41-1.02,.03-1.41l-2.57-2.67c-.32-.38-.31-.94,.02-1.31,.18-.2,.42-.32,.69-.33,.27-.01,.52,.08,.71,.25l2.73,2.52c1.03,.95,1.61,2.28,1.61,3.68v3.56c0,.55,.45,1,1,1s1-.45,1-1v-3.56c0-1.15-.29-2.28-.82-3.28l3.07-2.87c.39-.36,.98-.36,1.38-.01,.43,.39,.45,1.05,.05,1.46l-2.4,2.48c-.38,.4-.37,1.03,.03,1.41,.19,.19,.44,.28,.69,.28,.26,0,.52-.1,.72-.31l2.58-2.68c.44-.52,.67-1.16,.69-1.8,0-.04,0-8.12,0-8.12,0-.55,.45-1,1-1s1,.45,1,1v10.1c0,1.59-.63,3.12-1.76,4.24l-1.95,1.95c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l1.95-1.95c1.5-1.5,2.34-3.53,2.34-5.66V6c0-1.85-1.68-3.31-3.6-2.94Z"/></svg>
      </div>
    </div>
    <div class="card">
      <div class="disable">
        <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
      </div>
      <h3>Total em comissionamento</h3>
      <div class="content">
        <span>R$ {{ dataDashboard.commission.total.actual.toFixed(2).replace('.', ',') }}</span>
        <div class="info">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>

          <span><b>+0% </b>em relação ao último mês.</span>
        </div>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.02,8.79c-.59-.54-1.36-.81-2.17-.78-.8,.04-1.54,.39-2.09,.98l-3.22,3.53c-.55-.91-1.55-1.52-2.69-1.52H4c-2.21,0-4,1.79-4,4v5c0,2.21,1.79,4,4,4h4.96c2.85,0,5.57-1.22,7.47-3.35l6.81-7.64c1.09-1.23,.99-3.12-.22-4.23Zm-1.27,2.9l-6.81,7.64c-1.52,1.7-3.69,2.68-5.97,2.68H4c-1.1,0-2-.9-2-2v-5c0-1.1,.9-2,2-2H12.86c.63,0,1.14,.51,1.14,1.14,0,.56-.42,1.05-.98,1.13l-5.16,.74c-.55,.08-.93,.58-.85,1.13,.08,.55,.59,.93,1.13,.85l5.16-.74c1.18-.17,2.13-.99,2.51-2.06l4.43-4.86c.18-.2,.43-.32,.7-.33,.27,0,.53,.08,.73,.26,.41,.37,.44,1.01,.07,1.42Z"/><path d="M9,10h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59l-3.28-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.64c.36,0,.69,.19,.87,.5,.27,.48,.88,.64,1.37,.36,.48-.28,.64-.89,.36-1.37-.53-.92-1.53-1.5-2.6-1.5h-.27c0-.55-.45-1-1-1s-1,.45-1,1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.28,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.64c-.36,0-.69-.19-.87-.5-.28-.48-.89-.64-1.37-.36-.48,.28-.64,.89-.36,1.37,.53,.92,1.53,1.5,2.6,1.5h.27c0,.55,.45,1,1,1s1-.45,1-1Z"/></svg>
      </div>
    </div>
    <div class="card">
      <div class="disable">
        <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
      </div>
      <h3>Total em benefícios</h3>
      <div class="content">
        <span>R$ {{ dataDashboard.profit.total.actual.toFixed(2).replace('.', ',') }}</span>
        <div class="info">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,6h-6c-.553,0-1,.447-1,1s.447,1,1,1h5.586l-6.562,6.562c-.564,.564-1.482,.564-2.047,0l-2.539-2.539c-1.344-1.344-3.531-1.344-4.875,0L.293,16.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l4.27-4.27c.547-.547,1.5-.547,2.047,0l2.539,2.539c1.344,1.344,3.531,1.344,4.875,0l6.563-6.562v5.586c0,.553,.447,1,1,1s1-.447,1-1v-6c0-1.654-1.346-3-3-3Z"/></svg>

          <span><b>+0% </b>em relação ao último mês.</span>
        </div>
      </div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M22,0H13V2h7.586L0,22.586,1.414,24,22,3.414V11h2V2A2,2,0,0,0,22,0Z"/><path d="M6,10A4,4,0,1,0,2,6,4,4,0,0,0,6,10ZM6,4A2,2,0,1,1,4,6,2,2,0,0,1,6,4Z"/><path d="M18,14a4,4,0,1,0,4,4A4,4,0,0,0,18,14Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,20Z"/></svg>
      </div>
    </div>


  </div>

</template>

<style scoped lang="scss">
.cards {
  @include flex(row, space-between, center, 1rem);
  grid-area: cards;

  .card {
    @include card();
    width: calc((100% / 3) - 1rem);
    height: 100%;
    @include flex(column, space-between, initial, 1vh);
    padding: 1vh 1vw;
    position: relative;
    box-shadow: $highlight-shadow;

    .disable {
      @include disable();
    }


    h3 {
      font-size: 1.4rem;
      font-weight: 500;
      color: $text-subtitle-color;
    }

    .content {
      @include flex(column, flex-start, initial, 1.5vh);
      span {
        font-size: 2.4rem;
        color: $text-title-color;
        font-weight: 800;
      }

      .info {

        $colorText: #4CAF50;

        @include flex(row, flex-start, center, .3vw);
        svg {
          width: 1.3rem;
          height: 1.3rem;
          fill: $colorText;
        }

        span {
          font-size: 1.2rem;
          color: $text-description-color;
          margin: 0;

          b {
            color: $colorText;
          }
        }
      }

      .down {

        $colorText: #F44336;

        svg {
          fill: $colorText;
        }

        span {
          b {
            color: $colorText;
          }
        }
      }

    }
    .icon {
      position: absolute;
      top: 1vh;
      right: 1vw;
      background-color: #D1E3F4;
      padding: 8px 20px;
      border-radius: 20px;

      svg {
        width: 2rem;
        height: 2rem;
        fill: #2D9CDB;
      }
    }


  }
}


@media (max-width: 1400px) {
  .cards {
    .card {
      h3 {
        font-size: 1.2rem;
      }

      span {
        font-size: 1.8rem;
      }

      .info {
        span {
          font-size: 1rem;
        }
      }

      .icon {
        top: .5vh;
        right: .5vw;
        padding: 5px 15px;
        border-radius: 20px;

        svg {
          width: 1.3rem;
          height: 1.3rem;
        }
      }
    }
  }
}

</style>