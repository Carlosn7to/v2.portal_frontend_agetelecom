<script setup>

</script>

<template>
  <div class="ranking_sellers">
    <div class="disable">
      <img :src="require('@/assets/img/portal/widget/work-in-progress.png')" alt="">
    </div>

    <h3>Ranking de pontos</h3>

    <div class="data">
      <table>
        <thead>
        <tr>
          <th>Posição</th>
          <th>Vendedor</th>
          <th>Pontos</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/first.png')" alt="">
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar3.png')" alt="">
            <span>Maria Clara</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>984</span>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/second.png')" alt="">
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar2.png')" alt="">
            <span>João da Silva Junior</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>875</span>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/third.png')" alt="">
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar1.png')" alt="">
            <span>Eduardo Ribeiro</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>654</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>4º</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar4.png')" alt="">
            <span>Joana Beserra Sousa</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>631</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>5º</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar5.png')" alt="">
            <span>Eliana Santos</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>476</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>6º</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar6.png')" alt="">
            <span>Juliana Oliveira</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>391</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>7º</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/avatar7.png')" alt="">
            <span>Walter Soares</span>
          </td>
          <td>
            <img :src="require('@/assets/img/portal/ageRv/b2b/dashboard/star.png')" alt="">
            <span>320</span>
          </td>
        </tr>

        </tbody>
      </table>

    </div>
  </div>
</template>

<style scoped lang="scss">



.ranking_sellers {
  @include card();
  box-shadow: $highlight-shadow;
  grid-area: rank_sellers;
  padding: 2vh 1vw;
  position: relative;
  width: 100%;
  height: 100%;

  .disable {
    @include disable();
  }

  max-height: 100%;
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      text-align: left;
      th {
        font-size: 1.2rem;
        font-weight: 500;
        padding: 2vh 0;
      }

      th:nth-child(1) {
        text-align: center;
        width: 7%;
      }

      th:nth-child(2) {
        padding-left: 1vw;
      }
    }

    tbody {
      tr {
        border-bottom: 2px solid $border-color;

        td {
          padding: 1vh 0;

        }

        td:nth-child(1) {
          text-align: center;

          img {
            width: 2vw;
            height: auto;

          }

          span {
            font-size: 1.2rem;
            font-weight: 800;
            color: $text-description-color;
          }
        }

        td:nth-child(2) {
          @include flex(row, flex-start, center, 1vw);
          padding-left: 1vw;

          img {
            width: 2vw;
            height: auto;

          }

          span {
            font-size: 1.2rem;
            font-weight: 500;
            color: $text-description-color;
          }
        }

        td:nth-child(3) {

          img {
            width: 1vw;
            height: auto;
          }

          span {
            font-size: 1.2rem;
            font-weight: 500;

            color: $text-description-color;
          }
        }
      }
    }

  }

}

</style>