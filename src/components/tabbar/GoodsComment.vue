<template>
    <div>
        <comt-box :id="id"></comt-box>
    </div>
</template>

<script>
import comment from './comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        'comt-box':comment
    }
}
</script>

<style lang="scss" scoped>

</style>
