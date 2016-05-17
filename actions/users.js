import { actionTypes } from '../actionTypes'
import { changePage } from './uiFlow'
import { showSpinner, stopSpinner } from './modals'

export function loginUser(payload) {
    return (dispatch, getState) => {
        dispatch(showSpinner())

        // TO_DO this is not a timeout, must be your ajax call to login
        setTimeout(() => {
            dispatch(stopSpinner())
            dispatch(changePage('dashboard'))
            return {
                type: actionTypes.CHANGE_USER,
                payload
            }
        }, 5000)
    }
}
