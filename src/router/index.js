import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Goods from '@/components/goods'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		},
		{
			path: '/Goods',
			name: 'Goods',
			component: Goods
		},
		{
			path: '/shop/:product_id',
			name: 'ProductPage',
			component: ProductPage
		}

	]
})
