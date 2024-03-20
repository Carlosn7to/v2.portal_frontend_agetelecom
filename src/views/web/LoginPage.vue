<script setup>

import CardComponent from "@/components/web/login_page/CardComponent.vue";
import InfoComponent from "@/components/web/login_page/InfoComponent.vue";
</script>

<template>
  <div class="login_page">

    <div class="container_login">

      <div class="info">
        <InfoComponent/>
      </div>

      <div class="login">

        <CardComponent/>

      </div>

    </div>

  </div>
</template>

<style lang="scss">


.login_page {
  width: 100vw;
  height: 100vh;
  background-color: $bg-color;
  @include flex(row, center, center, 0);

  .container_login {
    width: 95%;
    height: 90%;
    border-radius: 15px;
    background-color: $bg-secondary-color;
    box-shadow: $highlight-shadow;
    @include flex(row, space-between, center, 0);
    overflow: hidden;

    .info {
      width: 60%;
      height: 100%;
    }

    .login {
      width: 40%;
      height: 100%;
      background: $highlight-bg;
      @include flex(column, center, center, 0);

    }
  }
}

</style>