import {
    GET_USER_TOKEN_GETTER,
    IS_USER_AUTHENTICATED_GETTER,
    GET_USER_LEVEL_GETTER,
    GET_USER_ID_GETTER,
    GET_USER_NAME_GETTER
} from "../../storeconstants";

export default {
    [GET_USER_TOKEN_GETTER]: state => {
        return state.token
    },
    [IS_USER_AUTHENTICATED_GETTER]: state => {
        return !!state.token
    },
    [GET_USER_LEVEL_GETTER]: state => {
        return state.level
    },

    [GET_USER_ID_GETTER]: state => {
        return state._id
    },
    [GET_USER_NAME_GETTER]: state => {
        let name = state.firstname + ' ' + state.lastname
        return name
    }
}