<script setup>
import {useStore} from "vuex";
import CardsDashboardSeller from "@/components/app/ageRv/b2b/dashboards/sales/seller/CardsDashboardSeller.vue";
import GraphDailySalesDashboardSeller from "@/components/app/ageRv/b2b/dashboards/sales/seller/GraphDailySalesDashboardSeller.vue";
import GraphStatusSalesDashboardSeller
  from "@/components/app/ageRv/b2b/dashboards/sales/seller/GraphStatusSalesDashboardSeller.vue";
import TopPlansSeller from "@/components/app/ageRv/b2b/dashboards/sales/seller/TopPlansSeller.vue";
import RankingSellersDashbordSeller
  from "@/components/app/ageRv/b2b/dashboards/sales/seller/RankingSellersDashbordSeller.vue";
import {ref} from "vue";
import ListDataDashboardSeller from "@/components/app/ageRv/b2b/dashboards/sales/seller/ListDataDashboardSeller.vue";

const store = useStore();

const page = ref('dashboard');


const alterTitlePage = () => {
  store.commit("setPageInfo",
      {title: "Dashboard", subtitle: "Acompanhe seu Sucesso e desbloqueie todo o Potencial das suas Vendas"});
};


alterTitlePage();

</script>

<template>
    <div class="dashboard_seller_b2b" v-if="page === 'dashboard'">
      <CardsDashboardSeller
        @showSales="page = 'list_data'"
      />
      <GraphDailySalesDashboardSeller/>
      <RankingSellersDashbordSeller/>
      <GraphStatusSalesDashboardSeller/>
      <TopPlansSeller/>
      <div class="graph3">
        <div class="disable">
          <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
        </div>
      </div>
      <div class="null">
      </div>
    </div>
    <ListDataDashboardSeller
        @backPage="page = 'dashboard'"
        v-else-if="page === 'list_data'"/>

</template>

<style lang="scss">

.dashboard_seller_b2b {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 12vh 38vh 25vh 25vh 1vh;
  grid-template-columns: 28% 31% 35%;
  grid-template-areas: 'cards cards cards'
                        'graph_daily graph_daily top_plans'
                        'graph_status rank_sellers rank_sellers'
                        'graph3 rank_sellers rank_sellers'
                          'null null null';
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    color: $text-title-color;
    margin-bottom: 1vh;
  }


  .graph3 {
    @include card();
    box-shadow: $highlight-shadow;
    grid-area: graph3;
    position: relative;

    .disable {
      @include disable();
    }
  }

  .null {
    grid-area: null;
    height: 100%;
  }


}

</style>