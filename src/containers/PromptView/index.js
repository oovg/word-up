import React, { Component, Fragment } from 'react'
import AppBar from '../../components/AppBar'
import Prompt from '../../components/Prompt'
// import './styles.scss'

class PromptView extends Component {
    componentDidMount() {

    }

    render() {
        console.log(this.props.match.params)
        return (
            <Fragment>
                <AppBar />
                <Prompt />
            </Fragment>
        )
    }
}

export default PromptView