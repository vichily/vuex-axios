import Vue from 'vue';
import Vuex from 'vuex';
import hello from './modules/hello';
import news from './modules/news';
import imgs from './modules/imgs'
import jokelist from './modules/jokelist'

Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{
        hello,
        news,
        imgs,
        jokelist
    }
})