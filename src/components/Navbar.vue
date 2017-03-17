<template>
  <div class="nav2">

  <mu-paper style="max-width: 420px; ">
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="today" title="历史今天" icon="ondemand_video" />
      <mu-bottom-nav-item value="news" title="新闻" icon="music_note"   />
      <mu-bottom-nav-item value="imgs" title="图片" icon="books"   />
      <mu-bottom-nav-item value="home" title="个人中心" icon="home"  />
    </mu-bottom-nav>
  </mu-paper>


  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'today',
      bottomNavColor: 'today'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
      this.$router.push('/'+val)
    }
  }
}
</script>

<style  lang="scss"> 

</style>
