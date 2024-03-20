<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderComponent",
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<template>
  <div class="header">
    <div class="search_header">

    </div>
    <div class="items_header">
      <div class="icons_notifications">
        <div class="icon">
          <div class="unit_alert">
            <span>0</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"/></svg>
        </div>
        <div class="icon">
          <div class="unit_alert">
            <span>0</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"/><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"/></svg>
        </div>
        <div class="icon">
          <div class="unit_alert">
            <span>0</span>
          </div>
          <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m17 0a1 1 0 0 0 -1 1c0 2.949-2.583 4-5 4h-7a4 4 0 0 0 -4 4v2a3.979 3.979 0 0 0 1.514 3.109l3.572 7.972a3.233 3.233 0 0 0 2.953 1.919 2.982 2.982 0 0 0 2.72-4.2l-2.2-4.8h2.441c2.417 0 5 1.051 5 4a1 1 0 0 0 2 0v-18a1 1 0 0 0 -1-1zm-8.063 20.619a.983.983 0 0 1 -.898 1.381 1.232 1.232 0 0 1 -1.126-.734l-2.808-6.266h2.254zm7.063-6.019a7.723 7.723 0 0 0 -5-1.6h-7a2 2 0 0 1 -2-2v-2a2 2 0 0 1 2-2h7a7.723 7.723 0 0 0 5-1.595zm7.9.852a1 1 0 0 1 -1.342.448l-2-1a1 1 0 0 1 .894-1.79l2 1a1 1 0 0 1 .448 1.337zm-3.79-9a1 1 0 0 1 .448-1.342l2-1a1 1 0 1 1 .894 1.79l-2 1a1 1 0 0 1 -1.342-.448zm-.11 3.548a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 -1-1z"/></svg>
        </div>
        <div class="icon">
          <div class="unit_alert">
            <span>0</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/><path d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/></svg>
        </div>
      </div>
      <div class="person">
        <span>Olá, <b>{{ user.name }}</b></span>
        <img src="https://www.citrix.com/blogs/wp-content/uploads/2018/03/slack_compressed-e1521621363404-360x360.jpg" alt="user">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.header {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid transparent;

  @include flex(row, space-between, center, 0);

  .items_header {
    @include flex(row, flex-end, center, 0);

    .icons_notifications {
      @include flex(row, flex-end, center, 0);
      padding: 10px 30px 10px 10px;
      .icon {
        width: 3rem;
        height: 3rem;
        border-radius: 10px;
        background: $header-icon-color;
        margin-left: 1.6rem;
        @include flex(row, center, center, 0);
        position: relative;
        opacity: .8;
        cursor: pointer;
        transition: all ease-in-out .1s;

        &:hover {
          opacity: 1;
        }

        svg {
          width: 1.6rem;
          z-index: 2;
          height: 2rem;
          fill: $header-icon-color;
        }

        .unit_alert {
          z-index: 3;
          position: absolute;
          top: -7px;
          right: -5px;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: $header-item-bg;
          border: 2px solid #fff;
          @include flex(row, center, center, 0);
          span {
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
          }
        }
      }

      .icon:nth-child(1), .icon:nth-child(2), .icon:nth-child(3), .icon:nth-child(4) {
        background: $header-item-bg;

        svg {
          fill: $header-icon-color;
        }

        .unit_alert {
          background: $header-icon-color;
        }
      }

    }


    .person {
      @include flex(row, flex-end, center, 0);
      border-left: 2px solid #cccccc80;
      padding: 10px 10px 10px 30px;
      span {
        font-size: 1.6rem;
        font-weight: 400;
        color: $header-text-color;
      }

      img {
        width: 3rem;
        height: auto;
        border-radius: 50%;
        margin-left: 1rem;
      }
    }

  }
}


</style>