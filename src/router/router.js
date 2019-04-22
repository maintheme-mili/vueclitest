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
Vue.use(Router)
Vue.use(MintUI)
export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/', redirect: HomeContainer },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: NewsListContainer },
    { path: '/home/newsinfo/:id', component: NewsInfoContainer }

  ]
})
