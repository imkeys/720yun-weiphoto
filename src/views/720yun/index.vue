<template>
  <div>
    <wei-photo
      ref="weiPhoto"
      class="wei-photo"
      v-wei-photo:photo="options"
      :animationType="animationType"
      :panorama.sync="panorama"
      @ready="ready"
      @viewChange="viewClick">
      <template
        slot="loading"
        slot-scope="{loadNum}">
        <div style="opacity:0;">
          <span>加载中...{{loadNum}}</span>
        </div>
      </template>
      <wei-markers
        v-for="(item, index) in markers"
        @over="over"
        @leave="leave"
        :config="item"
        :key="index">
        <div style="height: 60px; width: 60px; background: aliceblue">
          {{ item.title }}
        </div>
      </wei-markers>
    </wei-photo>
    <div class="button">
      <button
        v-for="(item, index) in panoramas"
        :key="index"
        @click="methodsPanorama(item)"
        :title="'方法切换场景，带加载进度' + loadNum">
        <span>场景{{index + 1}}</span>
      </button>
      <button
        @click="panorama = panorama0"
        title="变量动态切换场景，无法监听加载进度">
        <span>场景</span>
      </button>
        <button
          @click="autoRota"
          title="切换自动旋转">
        <span>旋转</span>
      </button>
    </div>
  </div>
</template>

<script>
const cover = {
  thumb: require('@/assets/vr-mini.jpg'),
  imgurl: require('@/assets/vr.jpg')
}

export default {
  name: 'Home',
  data: () => ({
    loadNum: '',
    panorama: '',
    panorama0: require('@/assets/00.jpg'),
    panoramas: [
      require('@/assets/01.jpg'),
      require('@/assets/02.jpg'),
      require('@/assets/03.jpg'),
      require('@/assets/04.jpg'),
      require('@/assets/05.jpeg'),
      require('@/assets/06.jpeg'),
      require('@/assets/07.jpeg'),
      require('@/assets/08.jpeg'),
      require('@/assets/09.jpeg'),
      require('@/assets/10.jpg')
    ],
    animationType: true,
    options: {
      minZoom: 0,
      maxZoom: 80,
      moveSpeed: 1,
      mousemove: true,
      mousewheel: false,
      captureCursor: false,
      moveInertia: true
    },
    markers: [
      // {
      //   title: '息州大道1',
      //   latitude: -0.6951847265465538,
      //   longitude: 1.0576435302000715,
      //   borderColor: 'rgba(239, 168, 14, 1)'
      // },
      // {
      //   title: '息州大道2',
      //   latitude: -0.3853725556846837,
      //   longitude: 0.4663614356302664,
      //   borderColor: 'rgba(239, 168, 14, 1)'
      // },
      // {
      //   svgStyle: {
      //     fill: 'rgba(0, 255, 243, 0.52)'
      //   },
      //   polylineRad: [
      //     [5.717759501961227, -0.39914442457653276],
      //     [0.039110839732687204, -0.48748008799766396],
      //     [0.17079467717898614, -0.8985200857468225],
      //     [5.381000189795457, -0.6500682152093917]
      //   ]
      // }
    ]
  }),
  created () {
    this.panorama = cover.thumb
  },
  methods: {
    ready () {
      this.photo.setPanorama(this.panorama, (val) => {
        this.loadNum = val
      }).then(async () => {
        this.loadNum = 100
        const origin = await this.loadImg(cover.imgurl)
        setTimeout(() => {
          this.panorama = origin
        }, 1000)
      })
    },
    viewClick (data) {
      console.log(data)
    },
    over (item) {
      console.log('进入', item.title)
    },
    markerChange (item) {
      console.log(item, 'f.c')
    },
    leave (item) {
      console.log('离开', item.title)
    },
    autoRota () {
      this.photo.autoRota()
    },
    methodsPanorama (imgurl) {
      this.photo.setPanorama(imgurl, (val) => {
        this.loadNum = val
      }).then(() => {
        this.loadNum = 100
      })
    },
    loadImg (imgurl) {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = imgurl
        img.onload = function () {
          resolve(imgurl)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .wei-photo {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    opacity: 1;
    z-index: 0;
  }
  .button {
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding: 5px;
    button {
      border: 0;
      margin: 5px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #666666;
      font-size: 12px;
      cursor: pointer;
      &:hover {
        background: #f9f9f9;
      }
    }
  }
</style>
