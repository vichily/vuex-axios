<template>
    <div class="login">
        <h3>用户登陆</h3>
        <el-input v-model="newuser.username" placeholder="用户名"></el-input>
        <el-input v-model="newuser.password" placeholder="密码"></el-input>

        <el-button type="primary" @click="userlogin">登陆</el-button>
    </div>
</template>

<script>
import { MessageBox,Toast } from 'mint-ui';
export default {
    data(){
        return {
            newuser :{
                username:'',
                password:''
            }
        }
    },
    methods:{
        userlogin(){
            const the = this;
            this.$store.dispatch('login',this.newuser).then(function(){
                if(the.$store.state.user.seccLogin){
                    Toast('登录成功！');
                    the.$router.push('/main')
                    the.$store.state.user.seccLogin = 0
                }else{
                    Toast('登录失败！')
                }
            })

        }
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
