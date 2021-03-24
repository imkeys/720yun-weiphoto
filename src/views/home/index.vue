<template>
  <div>
    <wei-photo
      v-if="isFresh"
      class="weiPhoto"
      @ready="ready"
      v-wei-photo:photo720="options"
      :panorama.sync="panorama">
      <template v-for="(item, index) in marker">
        <wei-markers
          v-if="isPin"
          :key="index"
          :config="item"
          @click="markerClick(item)">
          <a
            v-if="item.mode == 'url'"
            href="javascript:;"
            :title="item.title"
            class="pointer">
            <img :src="item.icon" />
          </a>
          <a
            v-if="item.mode == 'next'"
            href="javascript:;"
            :title="item.title"
            class="pointer">
            <span>{{item.title}}</span>
            <img :src="item.icon" />
          </a>
        </wei-markers>
      </template>
    </wei-photo>
    <div class="screen">
      <dl class="list">
        <dd
          v-for="item in screens"
          :key="item.id"
          :class="item.id == screenId ? 'item active' : 'item'"
          @click="changeScreen(item)">
          <img
            :src="item.icon"
            :alt="item.label" />
          <h3>{{item.label}}</h3>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { screenList } from './conf.js'

export default {
  name: 'Home',
  components: {},
  data: () => ({
    isFresh: true,
    isPin: false,
    screens: JSON.parse(JSON.stringify(screenList)),
    screenId: 0,
    panorama: '',
    options: {},
    config: {
      positionX: 'start',
      positionY: 'start'
    },
    marker: []
  }),
  created () {
    this.changeScreen(this.screens[this.screenId])
  },
  mounted () {
    // console.log(this.photo720)
  },
  methods: {
    ready () {
      this.photo720.setPanorama(this.panorama, (val) => {
      }).then(res => {
        setTimeout(() => {
          this.isPin = true
        }, 2000)
      })
    },
    changeScreen (obj) {
      this.screenId = obj.id
      this.panorama = obj.imgurl
      this.marker = obj.marker
      // this.photo720.setPanorama(this.panorama, (val) => {
      // }).then(res => {
      //   setTimeout(() => {
      //     this.isPin = true
      //   }, 2000)
      // })
    },
    markerClick (obj) {
      if (obj.mode === 'url') {
        this.$router.push({
          path: obj.url
        })
      } else if (obj.mode === 'next') {
        this.changeScreen(this.screens[obj.sid])
      }
    },
    viewChange (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.homepage {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .weiPhoto {
    width: 100vw;
    height: 100vh;
  }
  .more {
    position: fixed;
    top: 50%;
    left: 50%;
    display: block;
    width: 50px;
    height: 50px;
    background: pink;
    z-index: 12;
  }
  .pointer {
    position: relative;
    opacity: 1;
    display: block;
    span {
      position: relative;
      display: block;
      white-space: nowrap;
      background: rgba(0, 0, 0, .4);
      color: #ffffff;
      padding: 8px 10px;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  .screen {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    .item {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      border: 3px solid #ffffff;
      margin: 0 10px 10px;
      cursor: pointer;
      &:hover {
        border-color: fade(#ff0000, 50%);
      }
      &.active {
        border-color: #ff0000;
      }
      img {
        width: 120px;
        height: 80px;
      }
      h3 {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 30px;
        background: fade(#000000, 50%);
        color: #dddddd;
        font-weight: normal;
        font-size: 12px;
        text-align: center;
      }
    }
  }
</style>
