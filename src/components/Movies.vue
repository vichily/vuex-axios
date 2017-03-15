<template>
  <div class="movies">
    
    <div v-for="item in list.aaa" >

    <mu-paper class="demo-paper" :zDepth="2">

      <a :href="item.url" >
        <p>{{item.title}}</p>
        <img :src="item.thumbnail_pic_s" >
      </a>

    </mu-paper>
    </div>
    
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data () {
    return {
      msg: 'mous'
    }
  },
  created (){
    this.$store.dispatch('getJock')
  },
  computed:{
    list(){
      return {
        aaa: this.$store.state.hello.list
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
