/**
 * Token component
 *
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getChannels, saveToken } from 'actions/discord'

import { Loading } from './Utils'

class Token extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const { access_token, user_id } = this.props.match.params

        this.props.dispatch(saveToken(access_token, user_id))

        try {
            await this.props.dispatch(getChannels())
            this.props.history.replace('/')
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return <Loading />
    }
}

export default connect()(Token)
