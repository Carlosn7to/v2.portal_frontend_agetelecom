<script>
import CompanyLogoSvg from "@/components/svg/company/logo/CompanyLogoSvg.vue";
import ListItemsMenu from "@/components/app/structure/menu/ListItemsMenu.vue";

export default {
  name: "MenuComponent",
  components: {ListItemsMenu, CompanyLogoSvg}
}
</script>

<template>
  <div class="menu">
    <div class="header_logo">
      <div class="logo">
        <CompanyLogoSvg/>
      </div>
      <div class="text_logo">
        <span>Seu Hub de Facilidades</span>
      </div>

    </div>
    <div class="items_menu">
      <ListItemsMenu/>
    </div>
  </div>
</template>

<style scoped lang="scss">

.menu {
  width: 100%;
  height: 100vh;
  padding: 3vh 0;
  overflow: hidden;


  .header_logo {
    @include flex(column, flex-start, initial, 2vh);
    padding: 0 1vw;
    margin-bottom: 3vh;

    .logo {
      svg {
        width: 10vw !important;
        height: auto;
        display: block;
      }
    }

    .text_logo {
      span {
        display: block;
        font-weight: 500;
        font-size: 1.4rem;
        color: $text-description-color;
        text-align: left;
      }
    }
  }
}


</style>