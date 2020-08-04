import React, { Component } from "react";
import BillDetail from "../detailstatis/BillDetail";
import { inject , observer } from 'mobx-react'
import CommonUtil from './../../../util'

class ListBill extends Component {
  render() {

    const element = this.props.statisticStore.listInvoiceByDate.map((invoice, index) => {
      return <BillDetail key={index} index={index} invoice={invoice}/>
    })
    return (
      <div>
        <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>Tổng tiền: {CommonUtil.formatVND(this.props.statisticStore.sum)}</p>
        <table
          className="table align-items-center table-flush accordion"
          id="accordionRow"
        >
          <thead  className="list-group-item-info">
            <tr><th style={{ textAlign:"center", width:"10%"}}>STT</th>
            <th style={{ textAlign:"center", width:"30%"}}>Mã Hóa Đơn</th>
            <th style={{ textAlign:"center", width:"30%"}}>Ngày Hóa Đơn</th>
            <th style={{ textAlign:"center", width:"30%"}}>Thành Tiền</th></tr>
          </thead>
            {element}
        </table>
      </div>
    );
  }
}

export default inject("statisticStore")(observer(ListBill));
