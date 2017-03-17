<template>
  <div class="today">
        <div v-for="item in list.aaa" >
            <mu-paper class="demo-paper" :zDepth="2">
                <h3>{{item.title}}</h3>
                <p>{{item.des}}</p>
                <div class="imgbox">
                    <img :src="item.pic" >
                </div>
            </mu-paper>
        </div>
    </div>
</template>

<script>
export default {
    created (){
        this.$parent.$children[0]._data.text = "历史上的今天";
        this.$store.dispatch('getDay')
    },
    computed:{
        list(){
            return {
                aaa: this.$store.state.today.list
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
