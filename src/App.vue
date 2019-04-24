<template>
  <div id="app">
    <div class="app-container">
      <mt-header fixed title='IU'></mt-header>
    </div>


      <!-- 中间部分 -->
    <transition>
      <router-view></router-view>
    </transition>




   
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-sz" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-sz" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item-sz" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            <span class="mui-badge" id="badge">0</span>
          </span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item-sz" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
      
    
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Header} from 'mint-ui'
  Vue.component(Header.name, Header)
  export default {
    name: 'App'
  }

</script>

<style scoped>
/* router-view{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0,auto;
} */
#app{
  overflow: hidden;
  padding-bottom: 55px;
}
  .app-container {
    padding-top: 40px;
    overflow-x: hidden;
  }
  
  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active{
    transition: transform 0.5s ease;
  }
  
  
  .mui-bar-tab .mui-tab-item-sz.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-sz {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-sz .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-sz .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
