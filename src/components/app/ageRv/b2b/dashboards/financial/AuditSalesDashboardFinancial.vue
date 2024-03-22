<script setup>

import {defineEmits, onMounted, ref, defineProps} from 'vue';
import {useStore} from "vuex";
import ViewDetailsSellerDashboardFinancial
  from "@/components/app/ageRv/b2b/dashboards/financial/ViewDetailsSellerDashboardFinancial.vue";

const props = defineProps({
  data: Object
});

const dataList = ref(props.data);

console.log(dataList)

const store = useStore();

const emits = defineEmits(['navigate']);

const navigate = (page) => {
  emits('navigate', page)
};

onMounted(() => {
  store.commit("setPageInfo",
      {
        title: "Auditoria de Vendas - B2B",
        subtitle: "Examine cada transação, garantindo precisão e integridade nas vendas."
      });
});

const page = ref('list');
const dataSeller = ref({});


const dataViewDetails = (data, commissionDedicated, commissionInterprise, percentInvoiceDedicated, percentInvoiceInterprise) => {
  dataSeller.value = data
  dataSeller.value.commissionDedicated = commissionDedicated
  dataSeller.value.commissionInterprise = commissionInterprise
  dataSeller.value.percentInvoiceDedicated = percentInvoiceDedicated
  dataSeller.value.percentInvoiceInterprise = percentInvoiceInterprise
  page.value = 'view_details'
}

const navigatePage = (pageNav) => {
  page.value = pageNav
}

const commissionPercent = (type, salesCount, meta) => {

  let percent = 0;

  if (type === 'dedicated') {
    if (salesCount === 1 || salesCount === 2) {
      percent = 40;
    } else if (salesCount === 3 || salesCount === 4) {
      percent = 50;
    } else if (salesCount >= 5 && salesCount <= 9) {
      percent = 60;
    } else if (salesCount > 10) {
      percent = 70;
    }

    if (salesCount >= meta) {
      percent += 5;
    }
  }

  if (type === 'interprise') {

    if (salesCount >= 10 && salesCount < 15) {
      percent = 30;
    } else if (salesCount >= 15 && salesCount < 25) {
      percent = 50;
    } else if (salesCount >= 25) {
      percent = 60;
    }


  }

  return percent;

}

const commission = (type, salesCount, meta, sumInvoices) => {
  let percent = commissionPercent(type, salesCount, meta);


  return (percent / 100) * sumInvoices;
}



const metaSpecific = (seller, meta) => {
  if(seller === 'SUELEN CARVALHO DOS SANTOS' || seller === 'Milena Lopes de Lima' || seller === 'Julia de Sousa Rosa') {
    return 25
  }

  return meta
}

const convertToTitleCase = (str) => {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
    return match.toUpperCase();
  });
}


</script>

<template>
  <div class="audit_sales_container" v-if="page === 'list'">
    <div class="options">
      <button @click="navigate('dashboard_financial')">
        Voltar
      </button>
    </div>
    <div class="table">
      <table>
        <thead>
        <tr>
          <th>Executivo</th>
          <th>Tipo de Plano</th>
          <th>Vendas</th>
          <th style="text-align: left">Meta</th>
          <th>Meta atingida</th>
          <th style="text-align: center">% sob a comissão</th>
          <th>Comissão</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
        <tr
            @click="dataViewDetails(item,
            commission('dedicated', item.sales.dedicated.total, item.sales.dedicated.meta, item.invoices.dedicated.sumTotal),
            commission('interprise', item.sales.interprise.total, item.sales.interprise.meta, item.invoices.interprise.sumTotal),
            commissionPercent('dedicated', item.sales.dedicated.total, item.sales.dedicated.meta),
            commissionPercent('interprise', item.sales.interprise.total, item.sales.interprise.meta)
            )"
            v-for="(item, index) in dataList.sellers"
            :key="index" :style="{animationDelay : index * .1 + 's'}">
          <td>{{ convertToTitleCase(item.seller) }}</td>
          <td>
            <p>
              Dedicado
            </p>
            <p>
              Empresarial
            </p>
          </td>
          <td>
            <p>
              {{ item.sales.dedicated.total }}
            </p>
            <p>
              {{ item.sales.interprise.total }}
            </p>
          </td>
          <td class="meta">
            <p>
              {{ item.sales.dedicated.meta }}
            </p>
            <p>
              {{ metaSpecific(item.seller, item.sales.interprise.meta) }}
            </p>
          </td>
          <td class="progress" style="min-width: 10vw">
            <div class="progress-1">
              <progress :value="item.sales.dedicated.total > 0 ?
                      ((item.sales.dedicated.total / item.sales.dedicated.meta) * 100) :
                      0" max="100"></progress>
              <span>
                {{
                  item.sales.dedicated.total > 0 ?
                      ((item.sales.dedicated.total / item.sales.dedicated.meta) * 100).toFixed(1) :
                      '0.0'
                }}%
              </span>
            </div>
            <div class="progress-1">
              <progress :value="item.sales.interprise.total > 0 ?
                      ((item.sales.interprise.total / metaSpecific(item.seller, item.sales.interprise.meta)) * 100) :
                      0" max="100"></progress>
              <span>
                {{
                  item.sales.interprise.total > 0 ?
                      ((item.sales.interprise.total / metaSpecific(item.seller, item.sales.interprise.meta)) * 100).toFixed(1) :
                      '0.0'

                }}%
              </span>
            </div>
          </td>
          <td style="text-align: center">
            <p>
              {{ commissionPercent('dedicated', item.sales.dedicated.total, item.sales.dedicated.meta) }}%
            </p>
            <p>
              {{ commissionPercent('interprise', item.sales.interprise.total, item.sales.interprise.meta) }}%
            </p>
          </td>
          <td>
            <p>R$ {{ item.invoices.dedicated.sumTotal ? commission('dedicated', item.sales.dedicated.total, item.sales.dedicated.meta, item.invoices.dedicated.sumTotal).toFixed(2) : 0 }}</p>
            <p>R$ {{ item.invoices.interprise.sumTotal ? commission('interprise', item.sales.interprise.total, item.sales.interprise.meta, item.invoices.interprise.sumTotal).toFixed(2) : 0 }}</p>
          </td>
          <td>
            R$ {{
              ((item.invoices.dedicated.sumTotal ? commission('dedicated', item.sales.dedicated.total, item.sales.dedicated.meta, item.invoices.dedicated.sumTotal) : 0) +
                  (item.invoices.interprise.sumTotal ? commission('interprise', item.sales.interprise.total, item.sales.interprise.meta, item.invoices.interprise.sumTotal) : 0)).toFixed(2)
            }}
          </td>
          <td>
            <span class="status pending">
              Pendente
            </span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <ViewDetailsSellerDashboardFinancial
      :data="dataSeller"
      v-else-if="page === 'view_details'"
      @navigate="navigatePage"
  />
</template>

<style scoped lang="scss">

.audit_sales_container {
  @include flex(column, flex-start, initial, 2vh);
  width: 100%;
  height: 95%;

  .options {
    button {
      @include button-primary();
      border-radius: 20px;
    }
  }

  .table {
    width: 100%;
    overflow-y: auto;
    max-height: 100%;
    border-radius: 10px;
    background-color: #fff;

    table {
      border-collapse: collapse;
      width: 100%;
      text-align: left;

      td:nth-child(1), th:nth-child(1), td:nth-child(4), th:nth-child(4) {
        text-align: left;
      }

      thead {
        tr {
          background-color: #F6F6F6;

          th {

            padding: 2vh 1vw;
            font-size: 1.5rem;
            font-weight: 700;
            color: #333333;
          }
        }
      }

      tbody {
        tr {
          background-color: #ffffff;
          border-bottom: 1px solid #f4f4f4;
          -webkit-animation: up .3s ease-in-out forwards;
          -o-animation: up .3s ease-in-out forwards;
          animation: up .3s ease-in-out forwards;
          opacity: 0;
          cursor: pointer;
          transition: background-color ease-in-out .2s;

          &:hover {
            background-color: #F1F1F180;
          }

          td {
            padding: 2vh 1vw;
            font-size: 1.2rem;
            font-weight: 500;
            color: #333333;

            p {
              padding-bottom: .2vh;
              margin-bottom: .2vh;
            }
          }

          .meta {
            text-align: left;

            p {
              color: $text-description-color;

              b {
                margin-left: auto;
                color: $text-title-color;
              }
            }
          }


          .progress {
            @include flex(column, flex-start, initial, 1vh);

            .low-progress {
              progress::-webkit-progress-value {
                background-color: #60b3e3 !important;
              }
            }

            .progress-1 {
              @include flex(row, space-between, center, 1vw);

              span {
                color: $text-description-color;
              }
            }


            progress {
              width: 90%;
              height: 1vh;
              border-radius: 5px;
            }

            progress::-webkit-progress-bar {
              background-color: #D6E6F5;
              border-radius: 10px;
            }

            progress::-webkit-progress-value {
              background-color: #2D9CDB;
              border-radius: 10px;
            }

          }

          .status {
            padding: 1vh 1vw;
            font-size: 1.2rem;
            font-weight: 800;
            border-radius: 20px;

          }

          .audited {
            background-color: #EDFAEC;
            color: #267825;
          }

          .working {
            background-color: #2D9CDB30;
            color: #2D9CDB;
          }

          .pending {
            background-color: #D9D8DE;
            color: #333333;
          }

        }


        @keyframes up {
          from {
            transform: translateY(10px);
            opacity: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }
    }

  }
}

</style>