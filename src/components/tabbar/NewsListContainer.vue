<template>
  <div id="news">
    <ul class="mui-table-view">


      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
        <router-link :to="'newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间:{{item.c_time | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
              <span>点击:{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>



    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        //   静态资源
        newsList: []
      }
    },
    created() {
      this.getnews()
    },
    methods: {
      getnews() {
        axios.get('api/getnewslist').then(reslut => {
          console.log(reslut.data)
          if(reslut.status === 200){
              
              
              this.newsList = reslut.data.message
          }
        })
      }
    }
  }

</script>

<style>
  .mui-table-view li h1 {
    font-size: 14px;
  }

  .mui-table-view li .mui-ellipsis {
    font-size: 12px;
    color: #0094ff;
    display: flex;
    justify-content: space-between;
  }

</style>
