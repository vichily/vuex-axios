<template>
  <div id="app">
    <Topbar></Topbar>
    <Navbar></Navbar>
    <div class="main">
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
export default {
  components:{
    Navbar,
    Topbar
  }
}
</script>

<style  lang="scss"> 
@import './assets/css/main.scss'
</style>
