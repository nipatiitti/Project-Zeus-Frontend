import { TOKEN, CHANNELS, LOGOUT, LOGGED_IN } from './types'

import INFO from 'constants'

export const getChannels = () => ({
    type: CHANNELS,
    payload: {
        request: {
            method: 'GET',
            url: `/api/`
        }
    }
})

export const getLoggedIn = () => ({
    type: LOGGED_IN,
    payload: {
        request: {
            method: 'GET',
            url: `/api/loggedin/`
        }
    }
})

export const logout = () => (dispatch, getState) => {
    const { token } = getState().main
    return dispatch({
        type: LOGOUT,
        payload: {
            request: {
                method: 'POST',
                url: '/api/logout/',
                data: {
                    token
                }
            }
        }
    })
}

export const saveToken = (access_token, user_id) => ({
    type: TOKEN,
    access_token,
    user_id
})
