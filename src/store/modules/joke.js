import data2 from '../../data/index'


const state = {
    list:[]
};


const actions = {
    getJoke ({commit}) {
        data2.getjoke(function(res){
            commit('GETJOKE',{res})
        })
    }
};

const mutations = {
    GETJOKE(state,{res}){
        state.list = res
    }
}

export default {
    state,
    actions,
    mutations
}