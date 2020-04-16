import React, { Component } from 'react'
import TableDetailRow from './TableDetailRow'

export default class TableDetail extends Component {
    render() {
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
                <TableDetailRow />
                <TableDetailRow />
                <TableDetailRow />
                <TableDetailRow />
                <TableDetailRow />
                <TableDetailRow />
                
            </tbody>
            </table>

        )
    }
}
