<script setup>

</script>

<template>

  <div class="top_plans_seller">
    <div class="title">
      <h3>Recompensas do mês</h3>
      <span>Meus pontos</span>
    </div>

    <div class="data">

      <div class="item">
        <div class="icon">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/award.png')" alt="">
        </div>
        <div class="plan">
          <span>Você vendeu o plano <b>740 Mb Empresarial</b> 18 vezes.</span>
          <h3>Troféu: Esse é top!</h3>
        </div>
        <div class="points">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
          <span>38 pontos</span>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/trophy.png')" alt="">
        </div>
        <div class="plan">
          <span>Você atingiu a meta com maestria.</span>
          <h3>Troféu: Superando expectativas!</h3>
        </div>
        <div class="points">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/money.png')" alt="">
          <span>+5% comissão</span>
        </div>
      </div>

      <div class="item">
        <div class="icon">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/diamond.png')" alt="">
        </div>
        <div class="plan">
          <span>Você vendeu o plano com maior receita <b>1Gb Empresarial</b>.</span>
          <h3>Troféu: Pra poucos!</h3>
        </div>
        <div class="points">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
          <span>27 pontos</span>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/region.png')" alt="">
        </div>
        <div class="plan">
          <span>Você vendeu mais planos que a maioria nessa região.</span>
          <h3>Troféu: Explorador</h3>
        </div>
        <div class="points">
          <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
          <span>17 pontos</span>
        </div>
      </div>

    </div>

    <div class="disable">
      <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
    </div>

  </div>

</template>

<style scoped lang="scss">


.top_plans_seller {
  @include card();
  box-shadow: $highlight-shadow;
  grid-area: top_plans;
  padding: 2vh 1vw;
  height: 100%;
  //overflow-y: auto;
  position: relative;

  .disable {
    @include disable();
  }

  .title {
    @include flex(row, space-between, center, 0);

    span {
      font-size: 1rem;
      color: $text-description-color;
      font-weight: 800;
      cursor: pointer;


      &:hover {
        color: $text-title-color;
      }
    }
  }

  .data {
    @include flex(column, space-between, initial, 1vh);
    max-height: 90%;

    .item {
      @include flex(row, flex-start, center, 1vw);
      border-bottom: 2px solid $border-color;
      border-radius: 10px;
      padding: .5vh 1vw;

      position: relative;
      .icon {
        img {
          width: 2.5vw;
          height: auto;
        }
      }
      .plan {
        span {
          font-size: 1.2rem;
          font-weight: 500;
          color: $text-description-color;

          b {
            color: $text-title-color;
            font-weight: 800;
          }
        }
        h3 {
          margin-top: 1vh;
          font-size: 1.2rem;
          font-weight: 800;
          color: $text-description-color;
        }
      }

      .points {
        position: absolute;
        right: .3vw;
        bottom: .3vh;
        @include flex(row, flex-start, center, .1vw);
        img {
          width: .8vw;
          height: auto;
        }
        span {
          font-size: 1rem;
          font-weight: 400;
          color: $text-description-color;
        }

      }
    }
  }
}


@media (max-width: 1400px) {
  .top_plans_seller {
    .data {
      .item {
        .icon {
          img {
            width: 2vw;
          }
        }
        .plan {
          span {
            font-size: 1rem;
          }
          h3 {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

</style>