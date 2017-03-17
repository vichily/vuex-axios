<template>
  <div class="news">
    <div v-for="item in list.aaa" >

    <mu-paper class="demo-paper" :zDepth="2">

      <a :href="item.url" >
        <img :src="item.thumbnail_pic_s" >
        <p>{{item.title}}</p>
      </a>

    </mu-paper>
    </div>
  </div>
</template>

<script>
export default {
    created (){
        this.$parent.$children[0]._data.text = "新闻";
        this.$store.dispatch('getNews')
    },
    computed:{
        list(){
        return {
            aaa: this.$store.state.news.list
        }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
