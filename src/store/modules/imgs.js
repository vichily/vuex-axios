import data2 from '../../data/index'


const state = {
    imgs:[]
};


const actions = {
    getImgs ({commit}) {
        data2.getimgs(function(res){
            commit('GETIMGS',{res})
        })
    }
};

const mutations = {
    GETIMGS(state,{res}){
        state.imgs = res
    }
}

export default {
    state,
    actions,
    mutations
}