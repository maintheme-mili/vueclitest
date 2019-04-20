<template>
  <div class="hello">
    <!-- <mt-actionsheet :actions="actions" v-model="sheetVisible">
    </mt-actionsheet> -->
    <button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-search">搜索</button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Actionsheet } from 'mint-ui'
Vue.component(Actionsheet.name, Actionsheet)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
