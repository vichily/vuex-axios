import data2 from '../../data/index'


const state = {
    list:[]
};


const actions = {
    getJock ({commit}) {
        data2.getdata(function(res){
            commit('GETDATA',{res})
        })
    }
};

const mutations = {
    GETDATA(state,{res}){
        state.list = res
    }
}

export default {
    state,
    actions,
    mutations
}