<template>
  <div>
    <div class="news jokelist">
        
        <div v-for="item in this.JokeList" >
            <transition name="slide-fade">
                <mu-paper class="demo-paper" :zDepth="2">
                    <mu-icon value="delete" @click="deletejoke(item.id)" color="#7d8188"/>
                    <p>{{item.title}}</p>
                    <p>{{item.content}}</p>
                
                </mu-paper>
            </transition>
        </div>
       
    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    computed:{
        JokeList(){
            return this.$store.state.jokelist.JokeList
        }
    },
    methods:{
        deletejoke(index){
            this.$store.dispatch('delJoke',index);
            Toast({
                message: '成功删除！',
                iconClass: 'icon icon-success'
            });
        }
    },
    data(){
        return{
            
        }
    },
    components:{
        Toast
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style > 

</style>
