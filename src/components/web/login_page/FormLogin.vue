<script setup>
import {reactive, ref} from "vue";
import {AXIOS} from "../../../../services/api.ts";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import Cookie from "js-cookie";

const store = useStore();
const Router = useRouter();

const payload = reactive({
  username: "",
  pass: "",
  keepConnected: false
});

const validateForm = reactive({
  username: {
    required: true,
    minLength: 3,
    maxLength: 20,
    errors: []
  },
  pass: {
    required: true,
    minLength: 8,
    maxLength: 100,
    errors: []
  },
  form: {
    errors: [],
    responseMsg: '',
    step: 0
  }
})

const validateUserName = () => {

  const username = payload.username;

  if(! validateForm.username.required) {
    return false;
  }

  if (username.length === 0 && validateForm.username.required) {
    validateForm.username.errors.push("Por favor, preencha seu nome de usuário.");
  } else if (username.length < validateForm.username.minLength) {
    validateForm.username.errors.push("Seu nome de usuário precisa ter pelo menos 3 caracteres");
  } else if (username.length > validateForm.username.maxLength) {
    validateForm.username.errors.push("Seu nome de usuário pode ter no máximo 20 caracteres. Tente abreviar um pouco.");
  } else {
    validateForm.username.errors = [];
  }
};

const validatePassword = () => {

  const pass = payload.pass;

  if(! validateForm.pass.required) {
    return false;
  }

  if (pass.length === 0 && validateForm.pass.required) {
    validateForm.pass.errors.push("Para sua segurança, precisamos da sua senha.");
  } else if (pass.length < validateForm.pass.minLength) {
    validateForm.pass.errors.push("Sua senha precisa ter pelo menos 8 caracteres.");
  } else if (pass.length > validateForm.pass.maxLength) {
    validateForm.pass.errors.push("Número de caracteres excedido. Tente uma senha mais curta.");
  } else {
    validateForm.pass.errors = [];
  }
};


const statusSubmit = ref(false);
const submit = () => {

    const validate = () => {
      validateUserName();
      validatePassword();
      return !(validateForm.username.errors.length > 0 || validateForm.pass.errors.length > 0);
    }

    const validated = validate();


    if(! validated) {
      return false;
    }


    statusSubmit.value = true
    validateForm.form.errors = 0;
    validateForm.form.responseMsg = '';

    setTimeout(() => {
      AXIOS({
        method: 'post',
        url: 'auth/login',
        data: {
          user: payload.username,
          password: payload.pass,
          keepConnected: payload.keepConnected
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {

        store.commit('setUserName', response.data.user.name);
        store.commit('setCookieKeepConnected', payload.keepConnected);
        store.commit('activeLoading', true);
        Cookie.set('token', response.data.access_token, {expires: payload.keepConnected ? 30 : 1});


        setTimeout(() => {
          store.commit('setAuthenticated', true);
          Router.replace('/inicio')
          statusSubmit.value = false

          store.commit('activeLoading', false);
        }, 2000)

      }).catch((error) => {

        if(error.response.status === 401) {
          validateForm.form.errors = 1;
          validateForm.form.responseMsg = "Usuário ou senha inválidos.";
        } else {
          validateForm.form.errors = 1;
          validateForm.form.responseMsg = "Erro ao tentar se conectar. Tente novamente mais tarde.";
        }

      }).finally(() => {
        validateForm.form.step++



      })
    }, 1000)



};

</script>

<template>
  <form action="#" @submit.prevent="submit">
    <div class="wrapper response-data" :class="{'warning' : validateForm.form.errors > 0}">
      <span v-if="validateForm.form.errors > 0">
        {{ validateForm.form.responseMsg }}
      </span>
    </div>
    <div class="input" :class="{'warning' : validateForm.username.errors.length > 0 }">
      <label for="username">Usuário</label>
      <input type="text" id="username" name="username"
             @focusout="validateUserName()"
             v-model="payload.username"
             spellcheck="false" autocomplete="off">
      <div class="wrapper">
        <span>
        {{ validateForm.username.errors.length > 0 ? validateForm.username.errors[validateForm.username.errors.length - 1] : ''}}
      </span>
      </div>
    </div>
    <div class="input" :class="{'warning' : validateForm.pass.errors.length > 0 }">
      <label for="password">Senha</label>
      <input type="password" id="password" name="password"
             v-model="payload.pass" spellcheck="false"
             autocomplete="off"
             @focusout="validatePassword()"

      >

      <div class="wrapper">
        <span v-if="validateForm.pass.errors.length > 0">
          {{ validateForm.pass.errors[validateForm.pass.errors.length - 1] }}
        </span>
      </div>


    </div>
    <div class="input-checkbox">
      <div class="container">
        <input type="checkbox" id="cbx" style="display: none;"
               v-model="payload.keepConnected">

        <label for="cbx" class="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
      </div>
      <label for="cbx">Manter-se conectado</label>

    </div>
    <div class="input">
      <div class="loading" v-if="statusSubmit">
        <svg viewBox="25 25 50 50">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
      </div>
      <button type="submit" v-else>
        Entrar
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">

form {
  @include form();
}

</style>