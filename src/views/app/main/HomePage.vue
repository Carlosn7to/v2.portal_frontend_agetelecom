<script setup>

import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

const cards = ref([
  {
    module: 'b2b',
    title: 'Business to Business',
    subtitle: 'Remuneração variável',
    description: [
      {
        title: 'Dashboard de vendas',
        status: true
      },
      {
        title: 'Painel gerencial',
        status: true
      },
      {
        title: 'Relatórios',
        status: true
      },
      {
        title: 'Gerenciamento',
        status: true
      }
    ],
    icon: 'b2b',
    path: '/ageRv/b2b/inicio',
    status: true,
    blocked: false
  },
  {
    module: 'agereport',
    title: 'Age Report',
    subtitle: 'Utilitários',
    description: [
      {
        title: 'Relatórios personalizados',
        status: true
      },
      {
        title: 'Promotor de decisões inteligentes',
        status: true
      },
      {
        title: 'Planeje, execute e controle',
        status: true
      }
    ],
    icon: 'agereport',
    path: '/agereport/relatorios',
    status: true,
    blocked: false
  },
  {
    module: 'b2c',
    title: 'Business to Costumer',
    subtitle: 'Remuneração variável',
    description: [
      {
        title: 'Dashboard de vendas',
        status: true
      },
      {
        title: 'Painel gerencial',
        status: true
      },
      {
        title: 'Relatórios',
        status: false
      },
      {
        title: 'Gerenciamento',
        status: false
      }
    ],
    icon: 'b2c',
    path: '',
    status: false,
    blocked: true
  },
  {
    module: 'retention',
    title: 'Retenção',
    subtitle: 'Remuneração variável',
    description: [
      {
        title: 'Relacionamento',
        status: true
      },
      {
        title: 'Resgate de crédito',
        status: true
      },
      {
        title: 'Recompensa',
        status: false
      }
    ],
    icon: 'relationship',
    path: '',
    status: false,
    blocked: true
  },
  {
    module: 'invoices',
    title: 'Cobrança',
    subtitle: 'Remuneração variável',
    icon: 'invoice',
    description: [
      {
        title: 'Relacionamento',
        status: true
      },
      {
        title: 'Resgate de crédito',
        status: true
      },
      {
        title: 'Recompensa',
        status: false
      }
    ],
    path: '',
    status: false,
    blocked: true
  },
  {
    module: 'technical',
    title: 'Técnico',
    subtitle: 'Remuneração variável',
    description: [
      {
        title: 'Relacionamento',
        status: true
      },
      {
        title: 'Resgate de crédito',
        status: true
      },
      {
        title: 'Recompensa',
        status: false
      }
    ],
    icon: 'technical',
    path: '',
    status: false,
    blocked: true
  },

])

const moduleAccess = ref('Business to Business');


const requestAccess = (module) => {
  store.commit('activeModal', true)
  moduleAccess.value = module;
}


</script>

<template>
  <div class="home_page">
    <div class="cards">
      <div class="card" v-for="(card, index) in cards" :style="{animationDelay: index * .2 + 's'}" :key="index">
        <div class="blocked" @click="requestAccess(card.title)" v-if="card.blocked" :style="{animationDelay: index * .3 + 's'}">
          <img :src="require('@/assets/img/padlock.png')" alt="">
        </div>
        <div class="header">
          <div class="icon">
            <div class="svg">
              <img :src="require(`@/assets/img/${card.icon}.png`)" alt="">
            </div>
          </div>
          <div class="text">
            <h1>
              {{ card.title }}
            </h1>
            <p>
              {{ card.subtitle }}
            </p>
          </div>

        </div>
        <div class="divide">
          <div></div>
        </div>
        <div class="description">
          <div class="div_checked_description" :style="{animationDelay: ((index * card.description.length) + idx) * .08 + 's'}" v-for="(desc, idx) in card.description" :key="idx">
            <svg xmlns="http://www.w3.org/2000/svg" :style="{ fill: desc.status ? '' : '#ccc' }" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="m16.298,8.288l1.404,1.425-5.793,5.707c-.387.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.393-1.437,2.793,2.707,5.809-5.701Zm7.702,3.712c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/></svg>
            <span>
              {{desc.title}}
            </span>
          </div>
        </div>
        <router-link :to="card.path" :class="{'disable' : ! card.status}">
          <span>
            {{ card.status ? 'Comece agora!' : 'Em breve... ' }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
  <teleport to="#content_card" v-if=" store.state.system.state.modal">
    <div class="request_access">
      <h2>
        Solicitar acesso ao módulo
      </h2>
      <h1>
        {{ moduleAccess }}
      </h1>
      <div class="form">
        <form action="#">
          <div class="input">
            <label for="sector">Setor</label>
            <select name="sector">

              <option>Selecione o seu setor</option>
              <option value="1">Comercial</option>
              <option value="2">Financeiro</option>
              <option value="3">Técnico</option>
              <option value="4">Administrativo</option>

            </select>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<style scoped lang="scss">

.home_page {
  height: 100%;
  padding: 2vh 3vw;

  .category {
    @include flex(row, flex-end, center, 20px);
    margin-bottom: 2vh;
    margin-right: 20px;
    height: 10%;

    select {
      padding: 10px 15px;
      box-shadow: $highlight-shadow;
      border: none;
      border-radius: 5px;
      background-color: $bg-secondary-color;
      color: $text-subtitle-color;
      font-size: 1.2rem;
      outline: none;
      font-weight: 600;
    }

  }


  .cards {
    @include flex(row, flex-start, stretch, 20px);
    flex-wrap: wrap;
    padding-bottom: 4vh;

    .card {
      width: calc((100% / 4) - 20px);
      box-shadow: $highlight-shadow;
      min-height: 30vh;
      @include card;
      padding: 2.5rem;
      @include flex(column, flex-start, initial, 1vh);
      transition: all 0.3s ease-in-out;
      opacity: 0;
      animation: appears 0.3s ease-in-out forwards;
      position: relative;

      .blocked {
        position: absolute;
        top: 0;
        border-radius: 8px;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00000040;
        @include flex(row, center, center, 0);
        z-index: 1;
        opacity: 0;
        cursor: pointer;

        img {
          width: 5rem;
          height: 5rem;
        }
        animation: scale 0.3s ease-in-out forwards;
      }
      
      @keyframes scale {
        from {
          transform: scale(.8);
          opacity: 0;
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }

      .header {
        @include flex(row, flex-start, center, 1vw);

        .icon {
          padding: 12px 15px;
          border: 1px solid $border-color;
          border-radius: 10px;


          img {
            width: 3.5rem;
            height: 3.5rem;
          }
        }

        .text {
          h1 {
            margin-bottom: 5px;
            font-size: 1.4rem;
            color: $text-title-color;
          }
          p {
            font-size: 1.2rem;
            color: $text-subtitle-color;
          }

        }
      }

      .divide {
        @include flex(row, center, center, 0);

        div {
          width: 100%;
          height: 1px;
          background: $border-color;
        }
      }

      .description {

        margin-bottom: 2vh;

        .div_checked_description {
          @include flex(row, flex-start, center, .5vw);
          margin-top: 10px;
          animation: appears 0.3s ease-in-out forwards;
          opacity: 0;

          svg {
            width: 1.8rem;
            height: 1.8rem;
            fill: #4CAF50;
          }

          span {
            font-size: 1.2rem;
            color: $text-description-color;
          }
        }

      }


      a {
        margin-top: auto;
        text-decoration: none;
        padding: 7px 10px;
        background: $highlight-bg;
        text-align: center;
        border-radius: 5px;
        animation: appears 0.5s ease-in-out forwards;
        border: 1px solid $highlight-border;
        transition: all ease-in-out .3s;

        span {
          transition: all ease-in-out .3s;
          font-weight: 800;
          font-size: 1.4rem;
          color: #ffffff;

        }

        &:hover {
          background: #fff;
          border-color: $highlight-border;

          span {
            background: $highlight-bg;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      .disable {
        background: #cccccc60;
        color: #666;
        cursor: default;
        border: 1px solid #cccccc;

        &:hover {
          opacity: 1;
        }
      }



    }

    @keyframes appears {
      from {
        opacity: 0;
        transform: translateY(0px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }


    @keyframes appears-right {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}

.request_access {
  h2 {
    font-size: 2rem;
    color: $text-description-color !important;
    text-align: center;
  }
  h1 {
    font-size: 2.5rem;
    color: $text-title-color;
    text-align: center;
  }


  .form {
    width: 80%;
    form {
      @include form;
    }
  }


}

@media (max-width: 1400px) {
  .home_page {
    .cards {
      .card {
        width: calc((100% / 3) - 20px);
      }
    }
  }
}

</style>