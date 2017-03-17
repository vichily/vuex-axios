import data2 from '../../data/index'


const state = {
    list:[]
};


const actions = {
    getDay ({commit}) {
        data2.getday(function(res){
            commit('GETDAY',{res})
        })
    }
};

const mutations = {
    GETDAY(state,{res}){
        state.list = res
    }
}

export default {
    state,
    actions,
    mutations
}