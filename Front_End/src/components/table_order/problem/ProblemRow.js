import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'

class ProblemRow extends Component {
    async onClickSolved() {
        await this.props.tableStore.solvedNotice(this.props.notice)
        this.props.tableStore.setUpdateCount();
    }

    render() {
        return (
            <tr >
                <td style={{width:"35%"}}>{this.props.notice.tenMonAn}</td>
                <td style={{width:"40%"}}>{this.props.notice.description}</td>
                <td>
                    <button onClick={() => this.onClickSolved()} type="button" className="btn btn-primary" >Solved</button>
                </td>
            </tr>
        )
    }
}

export default inject("tableStore")(observer(ProblemRow));
