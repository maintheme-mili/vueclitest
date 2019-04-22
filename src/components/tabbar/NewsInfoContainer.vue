<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import axios from 'axios'

  import comment from './comment.vue'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        newsinfo: {}
      }
    },
    created() {
      this.getNewsInfo()
    },
    methods: {
      getNewsInfo() {
        axios.get("api/getnew/" + this.id).then(result => {
          console.log(result.data.message)
          this.newsinfo = result.data.message[0]
          // this.newsinfo = result.data
        })
      }

    },
    components: {
      "comment-box":comment
    }
  }

</script>

<style scoped>
  .newsinfo-container {
    padding: 0 4px;
  }

  .newsinfo-container .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }

  .newsinfo-container .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }

.content >>> img {
    width: 100%;
  }

</style>
