<template>
  <div id="location">
    <div class="location">
      <div class="wrap clearfix">
        <dl class="links">
          <dd>所在位置：</dd>
          <dd>
            <a href="/">首页</a>
          </dd>
          <dd
            v-for="(item, index) in location"
            :key="index">
            <span v-if="index == location.length - 1">{{item.name}}</span>
            <router-link
              v-else
              :to="item.path">{{item.name}}</router-link>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Location',
  components: {},
  props: {
    location: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  #location {
    position: relative;
    z-index: 10;
    .location {
      padding: 15px 0;
      background: #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, .05);
      .links {
        position: relative;
        line-height: 30px;
        white-space: nowrap;
        dd {
          display: inline-block;
          vertical-align: middle;
          &:nth-child(n+3) {
            &::before {
              content: '>';
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
</style>
