<template>
  <div class="joke">
        <p></p>
        <div v-for="item in list.aaa" >

            <mu-paper class="demo-paper" :zDepth="2">

                <p>{{item.content}}</p>
            
            </mu-paper>
        </div>
    </div>
</template>

<script>
export default {
    created (){
        this.$parent.$children[0]._data.text = "笑话";
        this.$store.dispatch('getJoke')
    },
    computed:{
        list(){
            return {
                aaa: this.$store.state.joke.list
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
