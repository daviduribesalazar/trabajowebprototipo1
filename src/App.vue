<template>
  <div id="app">
    <div class="container-fluid">
      <Menu /> <!-- se añade el menú -->
      <b-breadcrumb :items="items"></b-breadcrumb>
      <router-view/>
      <Footer />
    </div>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<script>

import Menu from './components/Menu'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  },
  data() {
      return {
        items: [
          {
            text: 'Home',
            href: '/home',
            to:"/home"
          },
          {
            text: 'Página actual',
            active: true
          }
        ]
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
