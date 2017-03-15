import axios from 'axios';

export default {
    getdata:function(cb){
        axios.get('https://bird.ioliu.cn/joke/rand',{
            params:{
                pagesize:20
            }
        })
        .then(function(data){
            cb(data.data.data)
        })
    }
}