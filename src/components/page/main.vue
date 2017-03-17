<template>
  <div>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './../Navbar'
import Topbar from './../Topbar'
export default {
  components:{
    Navbar,
    Topbar
  }
}
</script>

<style  lang="scss"> 
</style>
