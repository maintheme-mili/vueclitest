<template>
  <div class="goodsinfo-container">
<!-- 小球 -->
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter">
<div class="ball" v-show="ballFlag" ref="ball" ></div>

</transition>
<!-- 轮播 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunboList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsinfo.sell_price}}}</span>
          </p>
          <p>购买数量：<numbox></numbox>
          </p>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存情况：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="getComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import swiper from './swiper.vue'
  import numbox from './goodsinfo_numbox.vue'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        lunbotu: [],
        goodsinfo:{},
        ballFlag:false,
        isfull:true
      }
    },
    created() {
      this.getLunbo(),
      this.getGoodsInfo()
    },
    methods: {

      getLunbo() {
        axios.get(`/api/getthumimages/${this.id}`).then(result => {
          console.log(result, 99999)
          result.data.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.data.message;
        })
      },
      getGoodsInfo(){
          axios.get(`api/goods/getinfo/${this.id}`).then(result => {
              
                  console.log( result.data.message[0])
                  this.goodsinfo = result.data.message[0]
                  
              
          })
      },

    //   跳转
    goDesc(id){
        this.$router.push({name:"goodsdesc" ,params:{id} })
    },
    getComment(id){
        this.$router.push({name:"goodscomment" , params:{id}})
    },


    // 小球逻辑
    addToShopCar(){
        this.ballFlag = !this.ballFlag;
    },
    // 动画函数
    beforeEnter(el){
        el.style.transform = "translate(0,  0)";
    },
    enter(el, done){
        el.offsetWidth;
        // 获取小球在页面中的位置 ref定义的代表整个dom对象
        const ballmap = this.$refs.ball.getBoundingClientRect();
        // 获取终点在页面中的位置
        const targetmap = document.getElementById("badge").getBoundingClientRect();

        // 差值
       
      const ball_x = targetmap.left - ballmap.left;
      const ball_y = targetmap.top - ballmap.top;





        el.style.transform = `translate(${ball_x}px,${ball_y}px)`
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
        done()
    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag
    }



    },
    components: {
      swiper,
      numbox
    }
  }

</script>

<style lang="scss" scoped>





  .goodsinfo-container {


  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
// 小球样式

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
}

</style>
