import { actionTypes } from '../actionTypes'

export function closeModal (modal) {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export function changeModal (modal) {
    return {
        type: actionTypes.CHANGE_MODAL,
        modal
    }
}

export function stopSpinner () {
    return {
        type: actionTypes.STOP_SPINNER
    }
}

export function showSpinner () {
    return {
        type: actionTypes.SHOW_SPINNER
    }
}

export function flushModal () {
    return {
        type: actionTypes.FLUSH_MODAL
    }
}
