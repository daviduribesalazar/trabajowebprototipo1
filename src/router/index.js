import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    //component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/home',
    name: 'Home',
    //component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AddPersonas',
    name: 'AddPersonas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "AddPersonas" */ '../views/AddPersonas.vue')
}, //{
    //path: '/Tabla',
    //name: 'Tabla',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //    import ( /* webpackChunkName: "Tabla" */ '../views/Tabla.vue')
// },
 {
    path: '/OtraPagina',
    name: 'OtraPagina',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "Contacto" */ '../views/OtraPagina.vue')
},  {
    path: '/listaproyectos',
    name: 'ListaProyectos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import ( /* webpackChunkName: "ListaProyectos" */ '../views/ListaProyectos.vue')
}, {
  path: '/Tabla',
  name: 'Tabla',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
      import ( /* webpackChunkName: "ListaProyectos" */ '../views/Tabla.vue')
}, {
  path: '/recetas',
  name: 'recetas',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
      import ( /* webpackChunkName: "ListaProyectos" */ '../views/recetas.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
