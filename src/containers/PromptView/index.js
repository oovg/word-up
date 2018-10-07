import React, { Component } from 'react'

// import './styles.scss'

class PromptView extends Component {
    render() {
        console.log(this.props.match.params)
        return <p>hi</p>
    }
}

export default PromptView