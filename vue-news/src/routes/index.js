import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import PhotoView from '../views/PhotoView.vue'
import GameView from '../views/Game.vue'
import MapView from '../views/MapView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/blog',
    },
    {
      path: '/news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
    {
      path: '/blog',
      component: BlogView,
    },
    {
      path: '/blog/:id',
      component: PostView,
    },
    {
      path: '/photo',
      component: PhotoView,
    },
    {
      path: '/game',
      component: GameView,
    },
    {
      path: '/map',
      component: MapView,
    },
  ]
});