import axios from 'axios';

export default {
    getdata:function(cb){
        var url = 'http://v.juhe.cn/toutiao/index?type=&key=fd3f7fc7f0aa529f06cfd38fb46c1f15';
        // axios.get('https://bird.ioliu.cn/joke/rand',{
        //     params:{
        //         pagesize:20
        //     }
        // })
        // .then(function(data){
        //     cb(data.data.data)
        // })
        axios.get('https://bird.ioliu.cn/v1/?url=' + url)
        .then(function(data){
            cb(data.data.result.data)
        })

    }
}