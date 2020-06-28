import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class TableDetailRow extends Component {
    onChangeAmount(e) {
        this.props.tableStore.setAmount(this.props.order, e.target.value)
    }

    onClickDelete() {
        this.props.tableStore.deleteOrder(this.props.order)
    }

    render() {
        return (
            
                <tr>
                <td>{this.props.index + 1}</td>
                <td onClick={() => this.onClickDelete()}><i className="fa fa-times" style={{color: '#F5365C', fontSize: 20}} />
                </td>
                    <td>{this.props.order.tenMonAn}</td>
                <td>
                    <input type="number" style={{width: '4em'}} 
                        value={this.props.order.soluong}
                        onChange={(e) => this.onChangeAmount(e)}/>
                </td>
                <td>{this.props.order.price}</td>
                <td>{this.props.order.price * this.props.order.soluong}</td>
                </tr>
            
        )
    }
}

export default inject("tableStore")(observer(TableDetailRow));
