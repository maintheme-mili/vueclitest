import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
// import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopCarContainer from '../components/tabbar/ShopCarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import NewsListContainer from '../components/tabbar/NewsListContainer.vue'
import NewsInfoContainer from '../components/tabbar/NewsInfoContainer.vue'
import PhotoListContainer from '../components/tabbar/PhotoListContainer.vue'
import PhotoInfoContainer from '../components/tabbar/PhotoInfoContainer.vue'
import GoodsList from '../components/tabbar/GoodsList.vue'
Vue.use(Router)
Vue.use(MintUI)
export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsListContainer },
    { path: '/home/newsinfo/:id', component: NewsInfoContainer },
    { path: '/home/photolist', component: PhotoListContainer },
    { path: '/home/photoinfo/:id', component: PhotoInfoContainer },
    { path: '/home/goodslist', component: GoodsList }
  ]
})
