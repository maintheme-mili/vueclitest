<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunboList" :key="index">
        <img :src="item.img" alt="" :class="{'full': isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import axios from 'axios'
     export default {
    data() {
      return {
        imageList: [
          // {id:1, src:'../../assets/1.jpg'}
          // {id:2,src:'../../assets/2.jpg'},
          // {id:3,src:'../../assets/3.jpg'}
          // https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555786640468&di=8b80047cc6e9307881d5e3126514e5cb&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2360178978%2C3443173288%26fm%3D214%26gp%3D0.jpg
        ]
      }
    },
    props:['lunboList','isfull']    
  }

</script>

<style lang="scss" scoped>
     .mint-swipe {
       text-align:center;
    height: 200px;
  }

 

  img {
    
    height: 100%;
  }
  .full{
    width: 100%;
  }

</style>


