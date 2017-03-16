<template>
  <div class="pictures">

      <mu-list>
        <mu-list-item title="个人中心" @click="linkto">
          <mu-icon slot="left" value="perm_identity" />
        </mu-list-item>
        <mu-list-item title="已发表" @click="JokeList">
          <mu-icon slot="left" value="grade"  />
        </mu-list-item>
        <mu-list-item title="发表" @click="addJoke" >
          <mu-icon slot="left" value="send"/>
        </mu-list-item>
        <mu-list-item title="邮件">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>
      </mu-list>
      <mu-divider />

  </div>
</template>

<script>
export default {
  created(){
    this.$parent.$children[0]._data.text = "个人中心";
  },
  methods:{
    linkto(){
      this.$router.push('/home')
    },
    addJoke(){
      this.$router.push('/addJoke')      
    },
    JokeList(){
      this.$router.push('/JokeList')  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
