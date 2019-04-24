<template>
  <div class="home">
    <!-- 轮播 -->
   <swiper :lunboList="imageList" isfull="true"></swiper>

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
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../assets/images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
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
  
  import { Toast } from "mint-ui";
  import swiper from '../tabbar/swiper.vue'

  // axios.defaults.withCredentials = true
  export default {
    data(){
      return {
        imageList:[]
      }
    },
    created(){
      this.getlunbo()
    },
    methods:{
            getlunbo() {
        this.axios.get('api/getlunbo').then(result => {
          console.log(result)
          if(result.data.status === 0){
            this.imageList = result.data.message
          }else{
            Toast("加载轮播图失败。。。");
          }
          
        })
      }

    },
    components:{
      swiper
    }
  }

</script>
<style scoped>
  /* 轮播 */
 


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
