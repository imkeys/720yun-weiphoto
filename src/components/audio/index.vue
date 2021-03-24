<template>
  <div>
    <audio
      autoplay
      refs="audio">
      <source
        :src="url"
        type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Audio',
  props: {
    url: {
      type: String,
      require: true
    }
  }
}
</script>
