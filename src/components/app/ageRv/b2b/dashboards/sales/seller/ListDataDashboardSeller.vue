<script setup>

import {ref, defineEmits} from "vue";


const data = ref(
  [
      {
        id: 1,
        name: 'ALIANCA MATERIAIS PARA CONSTRUCAO LTDA',
        typeContract: 'B2B Link Dedicado Empresarial Fidelizado',
        amount: '849,00',
        receiptTitle: '849,00',
        status: 'Ativo',
        durationContract: 36,
        commissionValue: 80.49
      },
    {
      id: 1,
      name: 'Client Name ',
      typeContract: 'Link Dedicado',
      amount: '99,90',
      receiptTitle: '99,90',
      status: 'Ativo',
      durationContract: 36,
      commissionValue: 102.21
    },
    {
      id: 1,
      name: 'Client Name ',
      typeContract: 'Link Dedicado',
      amount: '99,90',
      receiptTitle: '99,90',
      status: 'Ativo',
      durationContract: 36,
      commissionValue: 102.21
    },
    ]
);

const emit = defineEmits(['backPage']);


const backPage = () => {
  emit('backPage', '');
};

</script>

<template>
  <div class="back animate__animated animate__fadeIn">
    <button @click="backPage">Voltar</button>
  </div>
  <div class="table animate__animated animate__fadeIn">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th style="text-align: left">Cliente</th>
          <th>Tipo de contrato</th>
          <th>Valor do contrato</th>
          <th>Valor pago</th>
          <th>Status</th>
          <th>Fidelidade</th>
          <th>Comissão</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in data" :key="item.id">
          <td># {{item.id}}</td>
          <td style="text-align: left">{{item.name}}</td>
          <td>{{item.typeContract}}</td>
          <td>R$ {{item.receiptTitle}}</td>
          <td>R$ {{item.amount}}</td>
          <td>
            <span :class="{'active' : item.status === 'Ativo'}">
              {{item.status}}
            </span>
          </td>
          <td>{{item.durationContract}} meses</td>
          <td>
            R$ {{item.commissionValue}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">

.back{
  padding: 1vh 0;
  button {
    @include button-primary();
    border-radius: 20px;
  }

}

$table-padding: 2vh 1vw;
$border-radius: 5px;
.table {
  @include card();
  box-shadow: $highlight-shadow;
  max-height: 85%;
  overflow-y: auto;
  table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    thead {
      width: 100%;
    }

    thead th {
      padding: $table-padding;
      background-color: $bg-color;
      color: $text-description-color;
      font-size: 1.4rem;
      font-weight: 500;

      &:first-child {
        border-radius: $border-radius 0 0 0;
      }

      &:last-child {
        border-radius: 0 $border-radius 0 0;
      }
    }

    tbody {
      max-height: 80%;
      width: 100%;
      tr {
        td {
          padding: $table-padding;
          font-size: 1.2rem;
          color: $text-subtitle-color;
          user-select: text;
        }
      }

      tr:nth-child(even) {
        background-color: #cccccc40;
      }

      tr:last-child td {
        border-bottom: 2px solid $border-color;
      }
    }
  }

  .active {
    padding: 6px 15px;
    background-color: #D1E3F4;
    border-radius: $border-radius;
    color: #2D9CDB;
  }
}
</style>