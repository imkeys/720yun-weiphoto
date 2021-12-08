<template>
  <div>
    <wei-photo
      ref="weiPhoto"
      class="wei-photo"
      v-wei-photo:photo="options"
      animationType="1"
      :panorama.sync="panorama"
      @ready="ready"
      @viewChange="viewClick">
      <template slot="loading" slot-scope="{loadNum}">
          <div style="width:100%;height:100%;background:#0000002e">
          加载中。。。{{loadNum}}
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
    <div style="position">
        <button @click="methodsPanorama">
          方法切换场景，带加载进度{{ loadNum }}
        </button>
        <button @click="panorama = panorama1">
          变量动态切换场景，无法监听加载进度
        </button>
         <button @click="autoRota">
          自动旋转
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
    panorama1: require('@/assets/vr3.jpeg'),
    panorama2: require('@/assets/vr4.jpeg'),
    options: {
      minZoom: 0,
      maxZoom: 100,
      // 拖动
      mousemove: true,
      // 视角跟随
      captureCursor: false,
      // 滑动速度
      moveSpeed: 1,
      // 缓动
      moveInertia: true
    },
    markers: [
      {
        title: '息州大道1',
        latitude: -0.6951847265465538,
        longitude: 1.0576435302000715,
        borderColor: 'rgba(239, 168, 14, 1)'
      },
      {
        title: '息州大道2',
        latitude: -0.3853725556846837,
        longitude: 0.4663614356302664,
        borderColor: 'rgba(239, 168, 14, 1)'
      },
      {
        svgStyle: {
          fill: 'rgba(0, 255, 243, 0.52)'
        },
        polylineRad: [
          [5.717759501961227, -0.39914442457653276],
          [0.039110839732687204, -0.48748008799766396],
          [0.17079467717898614, -0.8985200857468225],
          [5.381000189795457, -0.6500682152093917]
        ]
      }
    ]
  }),
  created () {
    this.panorama = cover.thumb
  },
  methods: {
    ready () {
      this.photo.setPanorama(this.panorama, (val) => {
        this.loadNum = val
      }).then(res => {
        this.loadNum = 100
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
    methodsPanorama () {
      this.photo.setPanorama(this.panorama2, (val) => {
        this.loadNum = val
      }).then(res => {
        this.loadNum = 100
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .wei-photo {
    width: 100vw;
    height: 80vh;
    opacity: 1;
  }
</style>
