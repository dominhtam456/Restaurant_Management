import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'

class ReadyFoodRow extends Component {
    async onClickComplete() {
        await this.props.kitchenStore.updateStatusFood("completed", this.props.food.hoadon_id,this.props.food.monan_id);
        await this.props.tableStore.getListOrder(this.props.tableStore.currentTable)
        await this.props.tableStore.getListReadyFood();
    }

    render() {
        return (
            <tr>
                <td className="col-9">{this.props.food.tenMonAn}</td>
                <td className="col-3">
                    <button type="button" className="btn btn-primary" onClick={() => this.onClickComplete()}>Complete</button>
                </td>
            </tr>
        )
    }
}

export default inject("tableStore", "kitchenStore")(observer(ReadyFoodRow));
