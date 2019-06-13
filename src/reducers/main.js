/**
 * Login reducer
 *
 *
 */

import moment from 'moment'

import {
    CHANNELS,
    CHANNELS_SUCCESS,
    CHANNELS_FAIL,
    TOKEN,
    LOGOUT_SUCCESS,
    LOGGED_IN_SUCCESS
} from 'actions/types'

const initialState = {
    token: null,
    userId: null,
    channels: null,
    loggedIn: [],
    loading: false
}

export const main = (state = initialState, action) => {
    switch (action.type) {
        case CHANNELS:
        case CHANNELS_FAIL:
            return {
                ...state,
                loading: true
            }

        case CHANNELS_SUCCESS:
            return {
                ...state,
                loading: false,
                channels: action.payload.data
            }

        case LOGGED_IN_SUCCESS:
            return {
                ...state,
                loggedIn: action.payload.data
            }

        case TOKEN:
            return {
                ...state,
                loading: false,
                token: action.access_token,
                userId: action.user_id
            }

        case LOGOUT_SUCCESS:
            return initialState

        default:
            return state
    }
}
