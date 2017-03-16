

const state = {
    
    JokeList:[{
        id: 1,
        title: "和i好啊",
        content: "内容内容内容内容内容内容内容内容内容"
    },
    {
        id: 2,
        title: "和i好22啊",
        content: "内容内333容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容"
    }
    ]
};


const actions = {
    addJoke ({commit},newdata) {
        commit('ADDJOKE',newdata)
    },
    delJoke ({commit},delid) {
        commit('DELJOKE',delid)
    }
};

const mutations = {
    ADDJOKE(state,res){
        res.id = state.JokeList.length>0 ? ++state.JokeList[state.JokeList.length-1].id : 1
        state.JokeList.push(res)
    },
    DELJOKE(state,res){
        for (var index in state.JokeList) {
	        if(state.JokeList[index].id === res)state.JokeList.splice(index,1)
	    }
    }
}

export default {
    state,
    actions,
    mutations
}