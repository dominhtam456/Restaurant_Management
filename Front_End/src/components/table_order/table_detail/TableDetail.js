import React, { Component } from 'react'
import TableDetailRow from './TableDetailRow'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class TableDetail extends Component {
    componentDidMount() {
        this.props.tableStore.getListOrder();
    }
    render() {
        const element = this.props.tableStore.currentListOrder.map((order,index) => {
            return <TableDetailRow order={order} key={index} index={index}/>
        })
        return (
            <table className="table  align-items-center table-flush accordion table-hover table-striped " id="accordionRow">
            <thead className="thead-light">
                <tr>
                <th scope="col">Stt</th>
                <th scope="col" />
                <th scope="col">Tên Món Ăn</th>
                <th scope="col">Số Lượng</th>
                <th scope="col">Đơn Giá</th>
                <th scope="col">Thành Tiền</th>
                </tr>
            </thead>
            <tbody>
                {element}
                
            </tbody>
            </table>

        )
    }
}

export default inject("tableStore")(observer(TableDetail));
