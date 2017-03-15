<template>
  <div class="news">
 
    <div v-for="item in list.aaa" >

    <mu-paper class="demo-paper" :zDepth="2">

        <p>{{item.content}}</p>
        <img :src="item.url" class="imgs">
    
    </mu-paper>
    </div>

  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      msg: '新闻'
    }
  },
  created (){
    this.$store.dispatch('getImgs')
  },
  computed:{
    list(){
      return {
        aaa: this.$store.state.imgs.imgs
      }
    }
  },
  component:{
    Swipe,
    SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
