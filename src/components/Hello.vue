<template>
  <div class="hello">
    <div v-for="item in list.aaa" >
      <p>{{item.content}}</p>
      <img :src="item.url" >
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
