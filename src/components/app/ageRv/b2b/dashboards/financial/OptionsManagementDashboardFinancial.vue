<script setup>

import { defineEmits } from 'vue';

const emits = defineEmits(['navigate']);


const navigate = (page) => {
  emits('navigate', page)
};

</script>

<template>

    <div class="options_management">
      <h3>Opções administrativas</h3>

      <div class="options">
        <div class="option" @click="navigate('audit')">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/auditoria.png')" alt="">
          <div class="tool_tip">
            <p>Auditar venda</p>
          </div>
        </div>
        <div class="divisor">
          <div></div>
        </div>
        <div class="option">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/banco.png')" alt="">
          <div class="tool_tip">
            <p>Concluir entrada de dados</p>
          </div>
        </div>
        <div class="divisor">
          <div></div>
        </div>
        <div class="option">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/aprovado.png')" alt="">
          <div class="tool_tip">
            <p>Aprovar dados do comissionamento</p>
          </div>
        </div>
      </div>
    </div>

</template>

<style scoped lang="scss">

.options_management {
  grid-area: options_management;
  @include card();
  box-shadow: $highlight-shadow;
  position: relative;
  .options {
    @include flex(row, flex-start, center, 1.5vw);
    height: 70%;
    padding: 1vh .5vw;

    .option {
      position: relative;

      img {
        width: 2vw;
        height: auto;
        cursor: pointer;

      }

      &:hover {
        .tool_tip {
          display: block;
        }
      }

      .tool_tip {
        display: none;
        position: absolute;
        background-color: #333333;
        padding: 1vh 1vw;
        border-radius: 5px;
        top: -70%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        opacity: 0;
        animation: appear .3s forwards;
        width: auto;

        p {
          text-align: center;
          color: #ffffff;
          font-weight: 500;
          font-size: 1.2rem;
          white-space: nowrap;
        }
      }
    }

    .divisor {
      @include flex(column, center, center, 0);
      height: 100%;
      width: 2px;

      div {
        height: 90%;
        width: 100%;
        background-color: #cccccc40;

      }
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

</style>