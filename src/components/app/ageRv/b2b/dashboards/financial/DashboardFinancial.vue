<script setup>

import {useStore} from "vuex";
import CardsDashboardFinancial from "@/components/app/ageRv/b2b/dashboards/financial/CardsDashboardFinancial.vue";
import GraphTopSellersDashboardFinancial
  from "@/components/app/ageRv/b2b/dashboards/financial/GraphTopSellersDashboardFinancial.vue";
import NavigatePeriod from "@/components/app/ageRv/b2b/dashboards/financial/NavigatePeriod.vue";
import OptionsManagementDashboardFinancial
  from "@/components/app/ageRv/b2b/dashboards/financial/OptionsManagementDashboardFinancial.vue";
import {onMounted, ref} from "vue";
import AuditSalesDashboardFinancial
  from "@/components/app/ageRv/b2b/dashboards/financial/AuditSalesDashboardFinancial.vue";
import {AXIOS} from "../../../../../../../services/api.ts";
import Cookie from "js-cookie";

const store = useStore();



const alterTitlePage = () => {
  store.commit("setPageInfo",
      {title: "Dashboard de Comissões", subtitle: "Acompanhe o progresso e comissionamento da equipe, com uma análise profunda e eficiente."});
};

alterTitlePage();


const page = ref('dashboard_financial');

const navigate = (pageNav) => {
  page.value = pageNav
};

const data = ref({});
const loading = ref(true);

const getData = () => {
  AXIOS({
    method: 'get',
    url: '/agerv/b2b/commission/financial/builder',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookie.get('token')}`
    },
    params: {
      period: '2024-01-01'
    }
  })
      .then((response) => {
        data.value = response.data;
        loading.value = false
      })
      .catch((error) => {
        console.log(error);
      });
};

onMounted(() => {
  getData();
});


</script>

<template>

  <div class="dashboard_financial" v-if="page === 'dashboard_financial' && !loading">
    <CardsDashboardFinancial
      :data="data"
    />
    <GraphTopSellersDashboardFinancial />
    <NavigatePeriod />
    <OptionsManagementDashboardFinancial
      @navigate="navigate"
    />
    <div class="last_news">
      <div class="disable">
        <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
      </div>
      <h3>Últimas atualizações</h3>

      <div class="news">
        <div class="new">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/auditoria.png')" alt="">
          <div class="info">
            <span>Início da auditoria por <b>Financeiro</b></span>
            <span>Data: 14/03/2024</span>
          </div>
        </div>
        <div class="new">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/banco.png')" alt="">
          <div class="info">
            <span>Fim da inserção de dados por <b>Sistema</b></span>
            <span>Data: 13/03/2024</span>
          </div>
        </div>
        <div class="new">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/aprovado.png')" alt="">
          <div class="info">
            <span>Comissionamento do mês aprovado por <b>Marco Antônio Silva</b></span>
            <span>Data: 13/03/2024</span>
          </div>
        </div>
        <div class="new">
          <img :src="require('@/assets/img/portal/ageRv/b2b/financial/aprovado.png')" alt="">
          <div class="info">
            <span>Comissionamento do mês aprovado por <b>Leandro Sarkis</b></span>
            <span>Data: 12/03/2024</span>
          </div>
        </div>
      </div>
    </div>


  </div>

  <AuditSalesDashboardFinancial
      @navigate="navigate"
      :data="data"
      v-else-if="page === 'audit' && !loading" />

</template>

<style lang="scss">

.dashboard_financial {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 12vh 13vh 13vh 35vh;
  grid-template-columns: 28% 31% 35%;
  grid-template-areas: 'cards cards cards'
                        'graph_top_sellers graph_top_sellers navi_period'
                        'graph_top_sellers graph_top_sellers options_management'
                        'graph_top_sellers graph_top_sellers last_news'
  ;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    color: $text-title-color;
    margin-bottom: 1vh;
  }





  .last_news {
    grid-area: last_news;
    @include card();
    box-shadow: $highlight-shadow;
    position: relative;
    overflow-y: auto;

    .disable {
      @include disable();
    }

    .news {
      @include flex(column, flex-start, initial, 2vh);

      .new {
        @include flex(row, flex-start, center, .5vw);
        border-bottom: 1px solid $border-color;
        padding-bottom: 1vh;
        img {
          width: 1.5vw;
          height: auto;
        }

        .info {
          @include flex(column, flex-start, initial, .5vh);
          span {
            font-size: 1.2rem;
            color: $text-title-color;
            font-weight: 600;
          }

          span:nth-child(2) {
            font-size: 1rem;
            color: $text-description-color;
            font-weight: 600;
          }
        }
      }
    }
  }
  .null {
    grid-area: null;
    height: 100%;
  }

}

@media (max-width: 1400px) {
  .dashboard_financial {
    grid-template-rows: 16vh 15vh 15vh 25vh;
    grid-template-columns: 28% 31% 35%;
  }
}

</style>