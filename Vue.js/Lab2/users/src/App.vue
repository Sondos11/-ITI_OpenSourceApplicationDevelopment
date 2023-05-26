<template>
<navbarApp v-if="!$route.meta.hideNavbar"/>
<router-view></router-view>
<!-- <parentApp/> -->
<!-- vuetify ==> vue  -->
<!-- primng / angular material ==> angular /// materialui ==> react  -->
</template>

<script>
import navbarApp from "./components/navbar.vue"
// import parentApp from './components/hooks/parent.vue'
export default {
  name: 'App',
  components: {
    // parentApp,
    navbarApp
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
  margin-top: 60px;
}
</style>
