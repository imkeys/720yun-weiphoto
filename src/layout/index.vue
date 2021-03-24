<template>
  <div>
    <ui-header></ui-header>
    <transition
      name="fade"
      mode="out-in">
      <router-view />
    </transition>
    <ui-footer></ui-footer>
  </div>
</template>

<script>
import { uiHeader, uiFooter } from './components/'

export default {
  name: 'Layout',
  components: {
    uiHeader,
    uiFooter
  },
  computed: {},
  methods: {}
}
</script>

<style lang="less" scoped>
</style>
