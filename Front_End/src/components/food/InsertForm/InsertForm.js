import React, { Component } from 'react'
import Info from './Info'
import Image from './Image'

export default class InsertForm extends Component {
    render() {
        return (
        <form name="formAddMaterial">
            <div className="container">
                <div className="row">
                <Info />
                <Image />
                </div>
            </div>
            </form>
        )
    }
}
