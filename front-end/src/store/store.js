
import { createStore } from "vuex"
import auth from './modules/auth/index'
import { LOADING_SPINNER_SHOW_MUTATION } from './storeconstants';

const store = createStore({
    modules: {
        auth,
    },
    state() {
        return {
            showLoader: false
        }
    },
    mutations: { 
        [LOADING_SPINNER_SHOW_MUTATION](state,payload) {
            state.showLoader = payload
    }

    }
})

export default store