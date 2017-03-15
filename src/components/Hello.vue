<template>
  <div class="hello">
    <div v-for="item in list.aaa" >
      <a :href="item.url" >
        <p>{{item.title}}</p>
        <img :src="item.thumbnail_pic_s" >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
