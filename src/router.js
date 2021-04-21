import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Favorites from './views/Favorites.vue';
import Search from './views/Search.vue';
import Management from './views/Management.vue';
import Stock from './views/Stock.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/favoritos",
      component: Favorites
    },
    {
      path: "/sobre",
      component: About
    },
    {
      path: "/configuracoes",
      component: Management
    },
    {
      path: "/buscainserirqueryaqui",
      component: Search
    },
    {
      path: "/:stock",
      component: Stock,
      props: true
    }
  ]
})
