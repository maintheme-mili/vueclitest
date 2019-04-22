<template>
    <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postcomment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comment" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
    data(){
      return {
        msg:{},
        pageIndex:1,
        comment:[] //评论数据
      }
    },
    created(){
      this.getcomment()
    },
    methods:{
      // 添加更多
      getMore(){
        this.pageIndex++;
        this.getcomment()
      },
      // 发表评论
      postcomment(){
        axios.post(`api/postcomment/${this.id}`,{content:this.msg.trim()}).then(result => {
          console.log(result.data)
          
        })
      }
      ,
      getcomment(){
        axios.get(`api/getcomments/${this.id}?pageindex=${this.pageIndex}`).then(result => {
          console.log(result.data)
          this.comment = this.comment.concat(result.data.message)
        })
      }
    },
    props:["id"]
}
</script>

<style lang = "scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
