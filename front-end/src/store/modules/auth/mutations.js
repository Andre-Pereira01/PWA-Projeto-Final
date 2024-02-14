import { SET_USER_TOKEN_DATA_MUTATION, SET_AUTO_LOGOUT_MUTATION } from "../../storeconstants";

export default {
    [SET_USER_TOKEN_DATA_MUTATION](state, payload) {
        state._id = payload._id
        state.firstname = payload.firstname
        state.lastname = payload.lastname
        state.level = payload.level
        state.token = payload.token
        state.autoLogout = false
    },

    [SET_AUTO_LOGOUT_MUTATION](state) {
        state.autoLogout = true
    }
}