<template>
  <div>
    <!-- 顶部滑动导航 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="(item,index) in cate" :key="index"
            @click="getAllPhoto(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>
    </div>
    <!-- 图片列表 -->
    <ul class="photo-list">
      <router-link v-for="(item,index) in list" :key="index" :to="`/home/photoinfo/${item.id}`" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
    


  </div>



</template>

<script>
  import mui from "../../assets/mui/js/mui.min.js";
  import axios from 'axios'
  export default {
    data() {
      return {
        cate: [],
        list: []
      }
    },
    created() {
      this.getALLCategory()
      this.getAllPhoto(0)
    },
    mounted() {
      // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
      mui(".mui-scroll-wrapper").scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods: {
      // 头部滑动导航
      getALLCategory() {
        axios.get(`api/getimgcategory`).then(result => {
          console.log(result)
          if (result.data.status === 0) {
            result.data.message.unshift({
              title: '全部新闻',
              id: 0
            })
            this.cate = result.data.message
          }
        })
      },
      //图片加载 
      getAllPhoto(cateId) {
        axios.get(`api/getimages/${cateId}`).then(result => {
          if (result.data.status === 0) {
            console.log(result.data)

            this.list = result.data.message
          }
        })
      }
    }

  }

</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }

  .photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;

    li {
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;

      img {
        width: 100%;
        vertical-align: middle;
      }

      /*图片懒加载样式 mint-ui提供*/
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;

        .info-title {
          font-size: 14px;
        }

        .info-body {
          font-size: 13px;
        }
      }
    }
  }

</style>
