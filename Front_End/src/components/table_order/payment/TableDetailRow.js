import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import CommonUtil from './../../../util'

class TableDetailRow extends Component {

    render() {
        return (
            
                <tr>
                <td>{this.props.index + 1}</td>
                    <td>{this.props.order.tenMonAn}</td>
                <td>
                    <input type="number" style={{width: '4em'}} 
                        value={this.props.order.soluong} disabled={true}/>
                </td>
                <td>{CommonUtil.formatVND(this.props.order.price)}</td>
                <td>{CommonUtil.formatVND(this.props.order.price * this.props.order.soluong)}</td>
                </tr>
            
        )
    }
}

export default inject("tableStore")(observer(TableDetailRow));
