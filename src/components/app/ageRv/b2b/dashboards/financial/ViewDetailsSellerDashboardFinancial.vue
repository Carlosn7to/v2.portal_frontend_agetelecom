<script setup>
import {defineEmits, ref, defineProps, onBeforeMount} from 'vue';
import { useStore } from "vuex";

const props = defineProps({
  data: Object
});

const store = useStore();

const alterTitlePage = () => {
  store.commit("setPageInfo",
      {title: "Auditoria de vendas - " + props.data['seller'], subtitle: "Análise detalhada das vendas realizadas pelo vendedor."});
};

onBeforeMount(() => {
  alterTitlePage();
});

const emits = defineEmits(['navigate']);

const backPage = () => {
  emits('navigate', 'list');
};

const filterSelected = ref({
  dedicated: true,
  business: false
});

const filter = (type) => {
  if (type === 'dedicated') {
    filterSelected.value.dedicated = true;
    filterSelected.value.business = false;

  } else {
    filterSelected.value.dedicated = false;
    filterSelected.value.business = true;
  }
};

const dataSalesFiltered = () => {
  if (filterSelected.value.dedicated) {
    return props.data.sales.dedicated;
  } else {
    return props.data.sales.interprise;
  }
}

const dataInvoicesFiltered = () => {
  if (filterSelected.value.dedicated) {
    return props.data.invoices.dedicated;
  } else {
    return props.data.invoices.interprise;
  }
}

</script>

<template>

  <div class="container_views_details">
    <div class="options">
      <button @click="backPage">
        Voltar
      </button>

      <div class="filters">
        <button :class="{'selected' : filterSelected.dedicated}" @click="filter('dedicated')">Dedicado</button>
        <button :class="{'selected' : filterSelected.business}" @click="filter('business')">Empresarial</button>
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <h3>Vendas</h3>
        <div class="content">
          <span>
            {{
              dataSalesFiltered().total
            }}
          </span>
        </div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23,15h-.667c-.25,0-.498,.019-.745,.057l-7.046-5.284,1.688-1.616c.399-.382,.413-1.016,.031-1.414-.383-.399-1.017-.412-1.414-.031l-4.173,3.995c-.208,.208-.491,.315-.788,.29-.298-.024-.56-.175-.739-.425-.274-.38-.19-.975,.168-1.334l4.703-4.429c.891-.837,2.284-1.042,3.374-.495l2.316,1.158c.69,.345,1.464,.527,2.235,.527h1.056c.553,0,1-.447,1-1s-.447-1-1-1h-1.056c-.463,0-.928-.109-1.342-.316l-2.314-1.158c-1.824-.913-4.153-.574-5.641,.828l-.618,.582-.7-.638c-.919-.837-2.109-1.298-3.39-1.298-.771,0-1.54,.182-2.227,.525l-2.314,1.158c-.415,.207-.88,.316-1.343,.316H1c-.553,0-1,.447-1,1s.447,1,1,1h1.056c.771,0,1.545-.183,2.236-.527l2.316-1.158c1.022-.514,2.458-.375,3.374,.462l.587,.535-2.646,2.492c-1.073,1.072-1.244,2.767-.398,3.938,.52,.723,1.553,1.259,2.444,1.259,.793,0,1.554-.312,2.104-.863l1.006-.963,6.346,4.759c-.031,.022-6.198,4.646-6.198,4.646-.723,.562-1.732,.562-2.47-.011l-6.091-4.568c-.859-.645-1.925-1-3-1h-.667c-.553,0-1,.447-1,1s.447,1,1,1h.667c.645,0,1.284,.213,1.8,.6l6.077,4.558c.725,.564,1.594,.846,2.461,.846,.862,0,1.723-.279,2.437-.835l6.093-4.568c.515-.387,1.154-.6,1.799-.6h.667c.553,0,1-.447,1-1s-.447-1-1-1Z"/></svg>
        </div>
      </div>
      <div class="card">
        <h3>Meta</h3>
        <div class="content">
          <span>
            {{
              dataSalesFiltered().meta
            }}
          </span>
        </div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M7,14c2.21,0,4-1.79,4-4s-1.79-4-4-4-4,1.79-4,4,1.79,4,4,4Zm0-6c1.1,0,2,.9,2,2s-.9,2-2,2-2-.9-2-2,.9-2,2-2Zm7,15c0,.55-.45,1-1,1s-1-.45-1-1c0-2.76-2.24-5-5-5s-5,2.24-5,5c0,.55-.45,1-1,1s-1-.45-1-1c0-3.86,3.14-7,7-7s7,3.14,7,7ZM24,5V13c0,2.76-2.24,5-5,5h-4c-.55,0-1-.45-1-1s.45-1,1-1h4c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3H9.46c-1.07,0-2.06,.58-2.6,1.5-.28,.48-.89,.64-1.37,.37-.48-.28-.64-.89-.36-1.37C6.03,.96,7.69,0,9.46,0h9.54c2.76,0,5,2.24,5,5Zm-10.33,5.92l2.92-2.92h-1.59c-.55,0-1-.45-1-1s.45-1,1-1h3c1.1,0,2,.9,2,2v3c0,.55-.45,1-1,1s-1-.45-1-1v-1.59l-2.92,2.92c-.46,.46-1.08,.71-1.71,.71-.22,0-.44-.03-.66-.09-.53-.15-.84-.7-.69-1.23,.15-.53,.7-.84,1.24-.69,.12,.03,.28,.02,.41-.11Z"/></svg>
        </div>
      </div>
      <div class="card">
        <h3>Meta atingida</h3>
        <div class="content">
          <span>
            {{
              ((dataSalesFiltered().total / dataSalesFiltered().meta) * 100).toFixed(2)
            }}%
          </span>
        </div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M24,23c0,.552-.448,1-1,1H3c-1.654,0-3-1.346-3-3V1C0,.448,.448,0,1,0s1,.448,1,1V21c0,.551,.449,1,1,1H23c.552,0,1,.448,1,1Zm-3-18h-4c-.552,0-1,.448-1,1s.448,1,1,1h3.563l-4.857,4.707c-.377,.378-1.036,.378-1.413,0-.041-.04-1.239-.893-1.239-.893-1.138-1.073-3.077-1.033-4.162,.051l-4.586,4.414c-.398,.383-.41,1.016-.027,1.414,.197,.204,.458,.307,.721,.307,.25,0,.5-.093,.693-.279l4.6-4.428c.377-.378,1.036-.378,1.413,0,.041,.04,1.239,.893,1.239,.893,1.139,1.074,3.076,1.036,4.164-.054l4.89-4.74v3.607c0,.552,.448,1,1,1s1-.448,1-1v-4c0-1.654-1.346-3-3-3Z"/></svg>
        </div>
      </div>
      <div class="card">
        <h3>Comissão</h3>
        <div class="content">
          <span>R$ {{
              filterSelected.dedicated ? props.data.commissionDedicated : props.data.commissionInterprise
            }}
          </span>
        </div>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M23.02,8.79c-.59-.54-1.36-.81-2.17-.78-.8,.04-1.54,.39-2.09,.98l-3.22,3.53c-.55-.91-1.55-1.52-2.69-1.52H4c-2.21,0-4,1.79-4,4v5c0,2.21,1.79,4,4,4h4.96c2.85,0,5.57-1.22,7.47-3.35l6.81-7.64c1.09-1.23,.99-3.12-.22-4.23Zm-1.27,2.9l-6.81,7.64c-1.52,1.7-3.69,2.68-5.97,2.68H4c-1.1,0-2-.9-2-2v-5c0-1.1,.9-2,2-2H12.86c.63,0,1.14,.51,1.14,1.14,0,.56-.42,1.05-.98,1.13l-5.16,.74c-.55,.08-.93,.58-.85,1.13,.08,.55,.59,.93,1.13,.85l5.16-.74c1.18-.17,2.13-.99,2.51-2.06l4.43-4.86c.18-.2,.43-.32,.7-.33,.27,0,.53,.08,.73,.26,.41,.37,.44,1.01,.07,1.42Z"/><path d="M9,10h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59l-3.28-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.64c.36,0,.69,.19,.87,.5,.27,.48,.88,.64,1.37,.36,.48-.28,.64-.89,.36-1.37-.53-.92-1.53-1.5-2.6-1.5h-.27c0-.55-.45-1-1-1s-1,.45-1,1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.28,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.64c-.36,0-.69-.19-.87-.5-.28-.48-.89-.64-1.37-.36-.48,.28-.64,.89-.36,1.37,.53,.92,1.53,1.5,2.6,1.5h.27c0,.55,.45,1,1,1s1-.45,1-1Z"/></svg>
        </div>
      </div>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Nº contrato</th>
            <th>Fatura vínculada</th>
            <th>Fatura Competencia</th>
            <th>Fatura Valor</th>
            <th>Percentual sobre a Fatura</th>
            <th>Comissão</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in dataInvoicesFiltered().extract" :key="idx">
              <td># {{item.contract_id}}</td>
              <template v-for="(inv, idxInv) in item.invoices" :key="idxInv">
                <td>{{ inv.title }}</td>
                <td>{{ inv.competence }}</td>
                <td>R$ {{ inv.total_amount }}</td>
                <td style="text-align: center">
                  {{ filterSelected.dedicated ? props.data.percentInvoiceDedicated : props.data.percentInvoiceInterprise }}%
                </td>
                <td>R$ {{ ((inv.total_amount * (filterSelected.dedicated ? props.data.percentInvoiceDedicated : props.data.percentInvoiceInterprise) / 100)).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}</td>
              </template>
            </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<style scoped lang="scss">

.container_views_details {
  width: 100%;
  height: 100%;
  @include flex(column, flex-start, initial, 2vh);

  .options {
    @include flex(row, space-between, center, 2vh);
    button {
      @include button-primary();
      border-radius: 20px;
    }

    .filters {


      button {
        @include button-primary();
        border-radius: 20px;
        margin-left: 1vw;
        background-color: #D1E3F4;
        color: #2D9CDB;
        font-weight: 700;
      }

      .selected {
        background-color: #2D9CDB;
        color: #fff;
      }

    }
  }

  .cards {
    @include flex(row, space-between, initial, 0);
    height: 10vh;
    .card {
      @include card();
      width: calc((100% / 4) - 1vw);
      height: 100%;
      @include flex(column, flex-start, initial, 2vh);
      padding: 1vh 1vw;
      position: relative;
      box-shadow: $highlight-shadow;


      h3 {
        font-size: 1.4rem;
        font-weight: 500;
        color: $text-subtitle-color;
      }

      .content {
        @include flex(column, flex-start, initial, 1.5vh);
        span {
          font-size: 2rem;
          color: $text-title-color;
          font-weight: 800;
        }



      }
      .icon {
        position: absolute;
        top: 1vh;
        right: 1vw;
        background-color: #D1E3F4;
        padding: 8px 20px;
        border-radius: 20px;

        svg {
          width: 2rem;
          height: 2rem;
          fill: #2D9CDB;
        }
      }


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

      td:nth-child(1), th:nth-child(1), td:nth-child(4), th:nth-child(4){
        text-align: left;
      }

      thead {
        tr {
          background-color: #F6F6F6;
          th {

            padding: 2vh 1vw;
            font-size: 1.4rem;
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
          transition: background-color ease-in-out .2s;

          &:hover {
            background-color: #F1F1F180;
          }

          td {
            padding: 2vh 1vw;
            font-size: 1.2rem;
            font-weight: 700;
            color: #333333;
            user-select: text;
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