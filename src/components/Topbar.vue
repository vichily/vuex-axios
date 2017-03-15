<template>
  <div class="topbar">
    <mu-appbar title = "" >
        <mu-icon-button icon='keyboard_arrow_left' @click="back"  slot="left"/>
        <mu-icon-button icon='loop' @click="f5" slot="right"/>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  data(){
      return{
          text:'笑话'
      }
  },
  methods:{
      back(){
        this.$router.go(-1)
      },
      f5(){
          location.reload()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
