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

    },
    getnews:function(cb){
        var tmp = Date.parse( new Date() ).toString();
        tmp = tmp.substr(0,10);
        var url = 'http://japi.juhe.cn/joke/content/list.from?sort=&page=&pagesize=20&time='+ tmp +'&key=4938e9af16277c6209ca00a683d96849';
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

    },
    getimgs:function(cb){
        axios.get('https://bird.ioliu.cn/joke/rand',{
            params:{
                pagesize:20
            }
        })
        .then(function(data){
            console.log(data.data.data[0])
            cb(data.data.data)
        })


    }
}