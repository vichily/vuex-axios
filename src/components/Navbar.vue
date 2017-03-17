<template>
  <div class="nav2">

  <mu-paper style="max-width: 420px; ">
    <mu-bottom-nav :value="bottomNav"   @change="handleChange">
      <mu-bottom-nav-item value="movies" title="笑话" icon="ondemand_video"  />
      <mu-bottom-nav-item value="music" title="新闻" icon="music_note"   />
      <mu-bottom-nav-item value="books" title="图片" icon="books"   />
      <mu-bottom-nav-item value="pictures" title="个人中心" icon="photo"  />
    </mu-bottom-nav>
  </mu-paper>


  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
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
