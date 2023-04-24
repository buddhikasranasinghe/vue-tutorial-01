import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ReadBooksView from '../views/ReadView.vue'
import AddBookView from '../views/AddBookView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
	  component: AboutView
  },
  {
    path: '/shop',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/read',
    name: 'readbooks',
    component: ReadBooksView
  },
  {
    path: '/add-book',
    name: 'add-book',
    component: AddBookView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
