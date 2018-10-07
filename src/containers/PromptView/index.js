import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AppBar from '../../components/AppBar'
import Prompt from '../../components/Prompt'

import './styles.scss'

class PromptView extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <Fragment>
                <AppBar />
                <Prompt data={this.props.prompt} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    prompt: state.prompts.prompts.find(prompt => prompt.id == ownProps.match.params.id)
})

export default connect(mapStateToProps)(PromptView)