<script setup>
import 'animate.css';

import MenuComponent from "@/components/app/structure/menu/MenuComponent.vue";
import HeaderComponent from "@/components/app/structure/header/HeaderComponent.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';
import LoadingComponent from "@/components/fragments/loading/LoadingComponent.vue";
import {useRoute} from "vue-router";

const route = useRoute();
const store = useStore();
const system = computed(() => store.state.system);

const rootStyle = computed(() => {
  const theme = system.value.theme.dark ? system.value.theme.darkTheme : system.value.theme.lightTheme;
  return {
    '--bg-color': theme.structureColors.background,
    '--bg-secondary-color': theme.structureColors.backgroundSecondary,
    '--border-color': theme.structureColors.border,
    '--highlight-bg': theme.structureColors.highlight,
    '--highlight-bg-hover': theme.structureColors.highlightHover,
    '--highlight-border': theme.structureColors.highlightBorder,
    '--highlight-svg': theme.structureColors.highlightSvg,
    '--highlight-shadow': theme.structureColors.shadow,
    '--text-title-color': theme.structureColors.text.title,
    '--text-subtitle-color': theme.structureColors.text.subtitle,
    '--text-description-color': theme.structureColors.text.description,
    '--alert-warning-border': theme.structureColors.alert.warning.border,
    '--alert-warning-bg': theme.structureColors.alert.warning.background,
    '--alert-warning-label': theme.structureColors.alert.warning.label,
    '--alert-warning-text': theme.structureColors.alert.warning.text,
    '--menu-group-color': theme.structureColors.menu.groupColor,
    '--menu-group-icon-color': theme.structureColors.menu.groupIconColor,
    '--menu-icon-color': theme.structureColors.menu.icon,
    '--menu-item-icon-active-bg': theme.structureColors.menu.iconBackgroundActive,
    '--menu-icon-hover-color': theme.structureColors.menu.iconHover,
    '--menu-text-color': theme.structureColors.menu.text,
    '--menu-text-hover-color': theme.structureColors.menu.textHover,
    '--menu-item-bg': theme.structureColors.menu.itemBackground,
    '--menu-item-hover-bg': theme.structureColors.menu.itemBackgroundHover,
    '--menu-item-active-bg': theme.structureColors.menu.itemBackgroundActive,
    '--menu-item-active-text': theme.structureColors.menu.itemTextActive,
    '--menu-item-active-icon': theme.structureColors.menu.itemIconActive,
    '--menu-item-active-icon-border': theme.structureColors.menu.itemIconBorderActive,
    '--header-item-bg': theme.structureColors.header.itemBackground,
    '--header-item-hover-bg': theme.structureColors.header.itemBackgroundHover,
    '--header-icon-color': theme.structureColors.header.icon,
    '--header-icon-hover-color': theme.structureColors.header.iconHover,
    '--header-text-color': theme.structureColors.header.text,
    '--header-text-hover-color': theme.structureColors.header.textHover,
    '--button-bg': theme.structureColors.button.backgroundColor,
    '--button-text': theme.structureColors.button.text,
    '--button-border': theme.structureColors.button.border,


  };
});




</script>


<template >
  <div v-if="system.security.authenticated" :style="rootStyle">
    <div class="container_app">
      <div class="menu_container">
        <MenuComponent/>
      </div>
      <div class="header_container">
        <HeaderComponent/>
      </div>
      <div class="app_container">
        <div class="header_app animate__animated animate__fadeIn">
          <h1>{{ system.page.title }}</h1>
          <p>{{ system.page.subtitle }}</p>
        </div>
        <div class="content_app">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
  <div v-if="! system.security.authenticated && route.path === '/'">
    <div class="public_page" :style="rootStyle">
      <router-view></router-view>
    </div>
  </div>

  <div class="modal" id="modal" v-if="system.state.modal" :style="rootStyle">
    <div class="card_modal">
      <div class="close_button">
          <img @click="store.commit('activeModal', false)" src="@/assets/img/cross.png" alt="">
      </div>
      <div class="content_card" id="content_card">

      </div>
    </div>
  </div>

  <LoadingComponent :style="rootStyle" v-if="system.state.loading"/>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Comfortaa', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  font-optical-sizing: auto;

}


html {
  font-size: 62.5%;
}
/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;

  #modal {
    width: 100vw;
    height: 100vh;
    background: #33333330;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    @include flex(row, center, center, 0);

    .card_modal {
      @include card;
      background: #fff;
      padding: 4vh 4vw;
      animation: modal-appears 0.3s ease-in-out forwards;
      position: relative;
      .close_button {
        position: absolute;
        top: 10px;
        right: 10px;
        @include flex(row, flex-end, center, 0);
        img {
          width: 20px;
          height: 20px;
          cursor: pointer;

          &:hover {
            opacity: .8;
          }
        }
      }

      .content_card {
      }
    }
  }
  .container_app {
    z-index: 1;
    display: grid;
    grid-template-columns: 13% 87%;
    grid-template-rows: 10% 90%;
    grid-template-areas: 'menu header' 'menu app';
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    max-height: 100vh;

    .menu_container {
      grid-area: menu;
      background-color: $bg-secondary-color;
      border-right: 1px solid $border-color;
    }

    .header_container {
      grid-area: header;
      background-color: $bg-color;
      padding: 0 2vw;

    }

    .app_container {
      grid-area: app;
      background-color: $bg-color;
      .header_app {
        padding: 0 3vw;
        height: 10%;
        h1 {
          font-size: 2.2rem;
          margin-bottom: .5rem;
          color: $text-title-color;
        }
        p {
          font-size: 1.6rem;
          color: $text-subtitle-color;
        }
      }

      .content_app {
        height: 90%;
        overflow-y: auto;
      }
    }

  }



}

@keyframes modal-appears {
  from {
    opacity: 0;
    transform: scale(.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 1400px) {
  html {
    font-size: 60%;
  }

  #app {
    .container_app {
      grid-template-columns: 15% 85%;
      grid-template-rows: 10% 90%;
    }
  }
}

</style>
