import React, { Component } from 'react'
import TableDetailRow from './TableDetailRow'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class TableDetail extends Component {
    componentDidMount() {
        this.props.tableStore.getListOrder();
    }

    //componentDidUpdate(prevProps) {
    //    if(prevProps.update != this.props.update && this.props.tableStore.currentListOrder.length > 0)
    //        if(this.props.tableStore.currentListOrder[0].hoadonchitiet_id.hoadon_id != null)
    //        this.props.tableStore.();
    //}

    render() {
        let element;
        if(this.props.tableStore.currentListOrder.length > 0){
            let val = this.props.tableStore.currentListOrder[0];
            //console.log(toJS(val))
            element = val.map((order,index) => {
                return <TableDetailRow order={order} key={index} index={index} isPayment={this.props.isPayment}/>
            })
        }
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
                <th scope="col">Ghi chú</th>
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
