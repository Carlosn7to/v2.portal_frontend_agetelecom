<script setup>

import { defineEmits } from 'vue';

const emits = defineEmits(['showSales']);

const showSales = () => {
  emits('showSales');
};

</script>

<template>
  <div class="cards">
    <div class="card" @click="showSales()" style="cursor: pointer">
      <div class="icon">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/parcerias.png')" alt="">
      </div>
      <div class="info">
        <span>38</span>
        <h3>Vendas realizadas</h3>
      </div>
      <div class="percent">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/arrow_up.png')" alt="">
        <span>35%</span>
      </div>
      <div class="more_info">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm1-2c0-.561,.408-1.225,.928-1.512,1.5-.827,2.307-2.523,2.009-4.222-.283-1.614-1.608-2.938-3.221-3.22-1.178-.205-2.379,.11-3.287,.873-.908,.763-1.429,1.879-1.429,3.064,0,.552,.448,1,1,1s1-.448,1-1c0-.592,.261-1.151,.715-1.533,.461-.388,1.049-.542,1.656-.435,.787,.138,1.458,.809,1.596,1.596,.153,.87-.241,1.704-1.004,2.125-1.156,.637-1.963,1.979-1.963,3.264,0,.553,.448,1,1,1s1-.447,1-1Zm11,5V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"/></svg>
        <span class="animate__animated animate__fadeIn">
            Total de contratos instalados e válidos para comissionamento.
          </span>
      </div>
    </div>
    <div class="card">
      <div class="icon">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/finance.png')" alt="">
      </div>
      <div class="info">
        <span>R$ 3.294,19</span>
        <h3>Total em comissões e atingimento</h3>
      </div>
      <div class="percent">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/arrow_up.png')" alt="">
        <span>85%</span>
      </div>
      <div class="more_info">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm1-2c0-.561,.408-1.225,.928-1.512,1.5-.827,2.307-2.523,2.009-4.222-.283-1.614-1.608-2.938-3.221-3.22-1.178-.205-2.379,.11-3.287,.873-.908,.763-1.429,1.879-1.429,3.064,0,.552,.448,1,1,1s1-.448,1-1c0-.592,.261-1.151,.715-1.533,.461-.388,1.049-.542,1.656-.435,.787,.138,1.458,.809,1.596,1.596,.153,.87-.241,1.704-1.004,2.125-1.156,.637-1.963,1.979-1.963,3.264,0,.553,.448,1,1,1s1-.447,1-1Zm11,5V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"/></svg>
        <span class="animate__animated animate__fadeIn">
            Total de comissão somando todos os atingimento e comissionamentos.
          </span>
      </div>
    </div>

    <div class="card">
      <div class="icon">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/rules.png')" alt="">
      </div>
      <div class="info">
        <span>R$ 804,22</span>
        <h3>Total em atingimento</h3>
      </div>
      <div class="percent">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/arrow_up.png')" alt="">
        <span>22%</span>
      </div>
      <div class="more_info">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm1-2c0-.561,.408-1.225,.928-1.512,1.5-.827,2.307-2.523,2.009-4.222-.283-1.614-1.608-2.938-3.221-3.22-1.178-.205-2.379,.11-3.287,.873-.908,.763-1.429,1.879-1.429,3.064,0,.552,.448,1,1,1s1-.448,1-1c0-.592,.261-1.151,.715-1.533,.461-.388,1.049-.542,1.656-.435,.787,.138,1.458,.809,1.596,1.596,.153,.87-.241,1.704-1.004,2.125-1.156,.637-1.963,1.979-1.963,3.264,0,.553,.448,1,1,1s1-.447,1-1Zm11,5V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"/></svg>
        <span class="animate__animated animate__fadeIn">
            Total somando todos os atingimento das regras vigentes.
          </span>
      </div>
    </div>
    <div class="card">
      <div class="icon">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/profit.png')" alt="">
      </div>
      <div class="info">
        <span>102% | 33</span>
        <h3>Meta atingida | Meta</h3>
      </div>
      <div class="percent">
        <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/arrow_up.png')" alt="">
        <span>103%</span>
      </div>
      <div class="more_info">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,16c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm1-2c0-.561,.408-1.225,.928-1.512,1.5-.827,2.307-2.523,2.009-4.222-.283-1.614-1.608-2.938-3.221-3.22-1.178-.205-2.379,.11-3.287,.873-.908,.763-1.429,1.879-1.429,3.064,0,.552,.448,1,1,1s1-.448,1-1c0-.592,.261-1.151,.715-1.533,.461-.388,1.049-.542,1.656-.435,.787,.138,1.458,.809,1.596,1.596,.153,.87-.241,1.704-1.004,2.125-1.156,.637-1.963,1.979-1.963,3.264,0,.553,.448,1,1,1s1-.447,1-1Zm11,5V5c0-2.757-2.243-5-5-5H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5ZM19,2c1.654,0,3,1.346,3,3v14c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14Z"/></svg>
        <span class="animate__animated animate__fadeIn" style="right: -3vw">
            Meta atingida em relação a quantidade de vendas e meta total.
          </span>
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
    box-shadow: $highlight-shadow;
    @include flex(row, flex-start, center, 1vw);
    padding: 1vh 1vw;
    position: relative;

    .icon {
      box-shadow: $highlight-shadow;
      border-radius: 7px;
      padding: 5px 10px;
      background-color: $bg-color;
      img {
        width: 2.5vw;
        height: auto;
      }
    }

    .info {
      @include flex(column, space-between, initial, 0);
      h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-top: .5vh;
        color: $text-description-color;
      }
      span {
        font-size: 1.4rem;
        font-weight: 800;
        color: $text-title-color;
        user-select: text;

      }

    }

    .percent {
      position: absolute;
      bottom: .5vh;
      right: .3vw;
      @include flex(row, flex-start, center, 0);

      span {
        font-size: 1.2rem;
        font-weight: 800;
        color: darkseagreen;
      }

      img {
        width: .9vw;
        height: auto;
      }
    }

    .more_info {
      position: absolute;
      top: .8vh;
      right: .5vw;
      cursor: pointer;

      &:hover {
        span {
          display: block;
        }
      }
      svg {
        width: 1.6rem;
        height: auto;
        fill: $text-description-color;
        cursor: pointer;
        transition: fill .2s ease-in-out;

        &:hover {
          fill: $text-title-color;

        }
      }

      span {
        display: none;
        position: absolute;
        top: 4vh;
        right: -7vw;
        width: 15vw;
        padding: 1vh 1vw;
        background-color: #333;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 5px;
        z-index: 100;

        animation-duration: .5s;
      }
    }

  }
}

</style>