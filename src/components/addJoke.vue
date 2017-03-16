<template>
  <div class="addJoke">

  <mu-text-field v-model="newdata.title" hintText="标题" type="text" icon="home" /><br/>
  <mu-text-field v-model="newdata.content"  hintText="详细内容" multiLine :rows="3"  icon="comment" /><br/>
  
  <div class="add" style="text-align:right">
    <mu-raised-button label="提交" class="demo-raised-button" primary @click="sub"/>
  </div>

  </div>
</template>

<script>
import { MessageBox,Toast } from 'mint-ui';
export default {
    data(){
        return{
            newdata:{
                id:'',
                title:'',
                content:''
            }
        }
    },
    methods:{
        sub(){
            if(this.newdata.title && this.newdata.content){
                this.$store.dispatch('addJoke',this.newdata);
                Toast({
                    message: '发布成功！在已发布中可以查看！',
                    iconClass: 'icon icon-success'
                });
                this.newdata = {
                    id:'',
                    title:'',
                    content:''
                }
            }
        }
    },
    created (){
        this.$parent.$children[0]._data.text = "发表";
    },
    components:{
        MessageBox,
        Toast
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss"> 

</style>
