<template>
  <div id="header">
    <div class="header">
      <div class="wrap">
        <div class="logo">
          <a href="/">
            <img
              :src="logo"
              alt="长沙市烟草专卖局" />
          </a>
        </div>
        <div id="search">
          <div class="search">
            <el-input
              class="key"
              type="text"
              v-model="search.key"
              :placeholder="search.placeholder"
              :maxlength="search.max"
              style="width: 160px;">
            </el-input>
            <el-button
              class="submit"
              @click="handleSearch()">
              <i class="el-icon-search"></i>
            </el-button>
          </div>
        </div>
        <div id="nav">
          <div class="nav">
            <dl class="list">
              <dd
                v-for="(item, index) in list"
                :key="index"
                class="item">
                <router-link
                  class="link"
                  :to="item.path">
                  <img
                    class="ori"
                    :src="item.icon" />
                  <img
                    class="hov"
                    :src="item.icon2" />
                </router-link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  components: {},
  data () {
    return {
      logo: require('@/assets/logo.png'),
      list: [
        {
          name: '首页',
          path: '/index',
          icon: require('@/assets/nav-01.png'),
          icon2: require('@/assets/nav-01x.png')
        },
        {
          name: '监督执纪',
          path: '/zhiji',
          icon: require('@/assets/nav-02.png'),
          icon2: require('@/assets/nav-02x.png')
        },
        {
          name: '修身齐家',
          path: '/xiushen',
          icon: require('@/assets/nav-04.png'),
          icon2: require('@/assets/nav-04x.png')
        },
        {
          name: '清风文苑',
          path: '/qingfeng',
          icon: require('@/assets/nav-03.png'),
          icon2: require('@/assets/nav-03x.png')
        },
        {
          name: '法规选编',
          path: '/fagui',
          icon: require('@/assets/nav-05.png'),
          icon2: require('@/assets/nav-05x.png')
        }
      ],
      search: {
        key: '',
        max: 10,
        placeholder: '请输入内容'
      }
    }
  },
  methods: {
    handleSearch () {
      this.$router.push({
        path: '/search',
        query: {
          key: this.search.key
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #header {
    height: 100px;
    .header {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 100;
      background: #860909;
    }
    .wrap {
      width: 1500px;
    }
    .logo {
      float: left;
      margin: 20px 0;
      a {
        display: block;
      }
      img {
        display: block;
        height: 60px;
      }
    }
  }

  #nav {
    float: right;
    .list {
      float: left;
      .item {
        float: left;
        position: relative;
      }
      .link {
        display: block;
        padding: 22px 5px;
        &.router-link-active {
          .ori {
            display: none;
          }
          .hov {
            display: block;
          }
        }
      }
      img {
        display: block;
        width: 164px;
        height: 56px;
        &.hov {
          display: none;
        }
      }
    }
  }

  #search {
    float: right;
    margin: 35px 0 0 30px;
    .search {
      position: relative;
      .key {
        background: none;
      }
      .submit {
        position: absolute;
        right: 0;
        top: 0;
        border: 0;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
</style>
