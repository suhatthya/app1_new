import React, {Component} from 'react'

export default class Calendar extends Component {
    constructor() {
        super()
        this.onClickButtonOK = this.onClickButtonOK.bind(this)
    }

    showAlert(msg) {
        alert(msg)
    }

    onClickButtonOK = () => {
        this.showAlert('Hello')
    }

    render() {
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}