import data2 from '../../data/index'


const state = {
    news:[]
};


const actions = {
    getNews ({commit}) {
        data2.getnews(function(res){
            commit('GETNEWS',{res})
        })
    }
};

const mutations = {
    GETNEWS(state,{res}){
        state.news = res
    }
}

export default {
    state,
    actions,
    mutations
}