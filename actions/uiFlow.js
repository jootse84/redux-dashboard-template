import { actionTypes } from '../actionTypes'

export function changePage(page) {
    return {
        type: actionTypes.CHANGE_PAGE,
        page
    }
}
