import { combineReducers } from 'redux'
import { actionTypes } from '../actionTypes'

function updateUser (state = { email: '', username: '', name: '', isLogin: false }, action) {
    const { payload, type } = action
    switch (type) {
        default:
            return state
    }
}

function changePage (state = {page: 'login'}, action) {
    switch (action.type) {
        case actionTypes.CHANGE_PAGE:
            return Object.assign({}, state, {
                page: action.page
            })
        default:
            return Object.assign({}, state)
    }
}

function displayModal (state = {type: null, data: {}}, action) {
    switch (action.type) {
        case actionTypes.SHOW_SPINNER:
            return Object.assign({}, state, {
                type: 'spinner'
            })

        case actionTypes.STOP_SPINNER:
            return Object.assign({}, state, {
                type: ''
            })

        case actionTypes.CHANGE_MODAL:
            return Object.assign({}, state, Object.assign({back: null}, action.modal))

        case actionTypes.CLOSE_MODAL:
            return Object.assign({}, state, {
                type: '',
                data: {}
            })

        case actionTypes.FLUSH_MODAL:
            return {
                type: '',
                data: {}
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    changePage,
    displayModal,
    updateUser
})

export default rootReducer
