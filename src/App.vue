<template>
  <div id="app">
    <!-- <HomeViewVue/> -->
    <Home/>
  </div>
</template>
<script>
//import HomeViewVue from './views/HomeView.vue';
import Home from './views/Home.vue';
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
</style>
