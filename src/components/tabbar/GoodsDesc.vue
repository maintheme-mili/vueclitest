<template>
    <div class="desc-container">
        <div class="desc_title">{{info.title}}</div>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            id: this.$route.params.id,
            info:{}
        }
    },
    created(){
        this.getgoodslist()
    },
    methods:{
        getgoodslist(){
            axios.get(`api/goods/getdesc/${this.id}`).then(result => {
                console.log(result.data)
                this.info = result.data.message[0]
            })
        }
    },

}
</script>

<style lang="scss" scoped>
    .desc-container{
        // display: flex;
       width: 100%;
        .desc_title{
            text-align: center;
            font-size: 13px;
            color:red;
            padding: 5px;
        }
     /deep/   .dingwei {
         width: 100%;
        
            img{
                vertical-align: bottom;
                // float: left;
                 width: 100%;
            }
           
        }
        /deep/   img{
                vertical-align: bottom;
                // float: left;
                 width: 100%;
            }
        
    }
</style>
