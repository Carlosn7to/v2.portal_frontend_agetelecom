import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/web/LoginPage.vue";
import {useStore} from "vuex";
import TestPage from "@/views/web/TestPage.vue";
import Cookie from "js-cookie";

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/inicio',
    name: 'HomePage',
    component: () => import('../views/app/main/HomePage.vue'),
    beforeEnter: (to, from, next) => {
      useStore().commit('setPageInfo', {title: 'Página inicial', subtitle: 'Navegue pelas categorias e explore o conteúdo do portal.'});
      next();
    }
  },
  {
    path: '/ageRv/b2b/inicio',
    name: 'HomePageB2b',
    component: () => import('../views/app/ageRv/b2b/HomePageB2b.vue'),
    beforeEnter: (to, from, next) => {
      useStore().commit('setPageInfo', {title: 'Remuneração Variável - B2B', subtitle: 'Acompanhe o desempenho de sua equipe e a evolução de suas vendas.'});
      next();
    }
  },
  {
    path: '/agereport/relatorios',
    name: 'ReportHomePage',
    component: () => import('../views/app/ageReport/ReportHomePage.vue'),
    beforeEnter: (to, from, next) => {
      useStore().commit('setPageInfo', {title: 'Relatórios Estratégicos', subtitle: 'Feitos sob medida para decisões inteligentes.'});
      next();
    }
  },
  {
    path: '/:catchAll(.*)', // Captura qualquer rota não definida
    redirect: '/' // Redireciona para a página inicial se tentar acessar qualquer outra rota
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = Cookie.get('token');
  const auth = useStore().getters['system'].security.authenticated;

  if (token) {
    try {
      await useStore().dispatch('validateToken', { token });
    } catch (error) {
      console.error('Erro ao validar o token:', error);
    }
  } else {
    useStore().commit('setAuthenticated', false);
  }

  if(to.path != '/' && !auth) {
    next('/');
  } else if(to.path == '/' && auth) {
    next('/inicio');
  } else {
    next();
  }


});

export default router
