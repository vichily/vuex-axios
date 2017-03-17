
const state = {
    user:[{
        username: '11',
        password: '11'
    },{
        username: '啊a',
        password: '啊啊'
    },{
        username: '啊b',
        password: '啊啊'
    },{
        username: '啊c',
        password: '啊啊'
    }],
    seccLogin: 0
};


const actions = {
    login ({commit},user) {
        commit('LOGIN',user)
    }
};

const mutations = {
    LOGIN(state,res){
        
        state.user.forEach(function(eee) {
            if(eee.username === res.username){
                if(eee.password === res.password){
                    state.seccLogin = 1
                }
            }
        }, this);
    }
}

export default {
    state,
    actions,
    mutations
}