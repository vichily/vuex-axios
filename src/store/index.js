import Vue from 'vue';
import Vuex from 'vuex';
import hello from './modules/hello';
import news from './modules/news';
import imgs from './modules/imgs'

Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{
        hello,
        news,
        imgs
    }
})