<template>
  <div>
    <div class="photoinfo-container">
      <h3>{{ photoinfo.title }}</h3>
      <p class="subtitle">
        <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
        <span>点击：{{ photoinfo.click }}次</span>
      </p>
      <hr>
      <!-- 缩略图区域 -->
      <div class="thumbs">
  <vue-preview :slides="list" @close="handleClose"></vue-preview>
</div>


      <!-- 图片内容区域 -->
      <div class="content" v-html="photoinfo.content"></div>
      <!-- 放置一个现成的 评论子组件 -->
      <comt-box :id="id"></comt-box>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import comment from './comment.vue'

  export default {
    

      data(){
          return{
              id:this.$route.params.id,
              photoinfo: [],
              list:[]
          };
      },
      created(){
          this.getPhotoInfo(),
          this.getthumImg()
      },
      methods:{
          handleClose(){

          },
          getPhotoInfo(){
              axios.get(`api/getimageInfo/${this.id}`).then(result => {
                //   console.log(result.data)
                  this.photoinfo = result.data.message[0]
              })
          },
          getthumImg(){
              axios.get(`api/getthumimages/${this.id}`).then(result => {
                  console.log(result.data)
                //   处理数据
                
              this.list =   result.data.message.map((element,index) => {
                    return   {
                    src: element.src,
                    msrc: element.src,
                    alr: `picture${index}`,
                    title: 'Image Caption 1',
                    w:600,
                    h:400
                  }
                });
              })
          }
      },
      components:{
          'comt-box' :  comment
      }
  }

</script>

<style lang="scss" scoped>
    .photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}

.thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
