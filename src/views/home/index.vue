<template>
  <div>
    <wei-photo
      class="weiPhoto"
      @ready="ready"
      v-wei-photo:photo720="options"
      :panorama.sync="panorama">
      <template
        slot="loading"
        slot-scope="{loadNum}">
        <div :data-loading="loadNum"></div>
      </template>
    </wei-photo>
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
    panorama: '',
    options: {
      minZoom: 0,
      maxZoom: 100
    }
  }),
  created () {
    this.panorama = cover.thumb
  },
  methods: {
    ready () {
      this.photo720.setPanorama(this.panorama, (val) => {
        console.log('val ==> ', val)
      }).then(res => {
        console.log('res ==> ', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .weiPhoto {
    width: 100vw;
    height: 100vh;
    opacity: .1;
  }
</style>
