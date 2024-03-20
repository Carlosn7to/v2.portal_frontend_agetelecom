import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "@/views/web/LoginPage.vue";
import {useStore} from "vuex";
import TestPage from "@/views/web/TestPage.vue";

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

// router.beforeEach((to, from, next) => {
//   const requiredGroups = to.meta.group || []; // Handle cases without `group` meta
//   const system = useStore().getters['system'];
//   const user = useStore().getters['user'];
//
//   if (!system.security.authenticated) {
//     // Se o usuário não estiver autenticado
//     if (to.path !== '/') {
//       next('/inicio'); // Redireciona para a página inicial se tentar acessar qualquer outra rota
//     } else {
//       next(); // Permite acesso à página inicial se não estiver autenticado
//     }
//   } else {
//
//     if(to.path === '/') {
//       next('/inicio');
//     }
//     // Se o usuário estiver autenticado
//     if (requiredGroups.length && !requiredGroups.every(group => user.groups.includes(group))) {
//       next('/inicio'); // Redireciona para a página inicial se não tiver os grupos necessários
//     } else {
//       next(); // Permite acesso se estiver autenticado e tiver os grupos necessários, ou se não forem necessários grupos para acessar a rota
//     }
//   }
//
// });

export default router
