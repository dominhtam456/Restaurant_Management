import React, { Component } from 'react';
import { inject , observer } from 'mobx-react'

class Footer extends Component {

    onCreate() {
        this.props.tableManageStore.pushTable(this.name.current.value);
    }
    render() {
        return (
            <div></div>
        );
    }
}

export default inject("tableManageStore")(observer(Footer))