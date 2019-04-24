<template>
  <div class="home">
    <!-- 轮播 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imageList" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../assets/images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import { Toast } from "mint-ui";

  // axios.defaults.withCredentials = true
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
    created() {
      // 发起获取轮播图的数据请求
      this.getlunbo()
    },
    methods: {
      getlunbo() {
        axios.get('api/getlunbo').then(result => {
          console.log(result)
          if(result.data.status === 0){
            this.imageList = result.data.message
          }else{
            Toast("加载轮播图失败。。。");
          }
          
        })
      }
    }
  }

</script>
<style scoped>
  /* 轮播 */
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe .mint-swipe-item:nth-child(1) {
    background-color: skyblue;
  }

  .mint-swipe .mint-swipe-item:nth-child(2) {
    background-color: pink;
  }

  .mint-swipe .mint-swipe-item:nth-child(3) {
    background-color: cornflowerblue;
  }

  img {
    width: 100%;
    height: 100%;
  }



  /* 九宫格 */
  div {
    font-size: 14px;
    color: #333;
  }

  div b {
    font-size: 12px;
  }

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
  }

  .mui-grid-view.mui-grid-9 img {
    width: 60px;
    height: 60px;
  }

  .mui-grid-view.mui-grid-9 .mui-media-body {
    font-size: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }

</style>
