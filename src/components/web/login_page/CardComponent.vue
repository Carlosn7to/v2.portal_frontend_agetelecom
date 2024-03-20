<script setup>

import FormLogin from "@/components/web/login_page/FormLogin.vue";
</script>

<template>
  <div class="card">

    <div class="header">
      <div class="logo">
        <img src="/img/logo/age_logo_completa.png" alt="">
      </div>
      <div class="text">
        <h1>Bem-vindo(a),</h1>
        <p>conecte-se com sua conta.</p>
      </div>
    </div>
    <FormLogin/>
  </div>
</template>

<style scoped lang="scss">

.card {
  @include card();
  @include flex(column, flex-start, center, 0);
  width: 60%;
  padding: 4vh 2vw 7vh 2vw;

  .header {
    width: 100%;
    @include flex(column, center, center, 2vh);
    .logo {
      img {
        width: 80%;
        height: auto;
        display: block;
        margin: 0 auto;
      }
    }

    .text{
      text-align: center;
      margin: 2vh 0;

      h1 {
        font-size: 2rem;
        font-weight: 400;
        color: $text-title-color;
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
        color: $text-subtitle-color;
      }
    }
  }
}
</style>