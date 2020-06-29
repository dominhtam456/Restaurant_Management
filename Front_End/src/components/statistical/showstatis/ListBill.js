import React, { Component } from "react";
import BillDetail from "../detailstatis/BillDetail";

class ListBill extends Component {
  render() {
    return (
      <div>
        <table
          class="table align-items-center table-flush accordion"
          id="accordionRow"
        >
          <thead  class="list-group-item-info">
            <th style={{ textAlign:"center", width:"10%"}}>STT</th>
            <th style={{ textAlign:"center", width:"30%"}}>Mã Hóa Đơn</th>
            <th style={{ textAlign:"center", width:"30%"}}>Ngày Hóa Đơn</th>
            <th style={{ textAlign:"center", width:"30%"}}>Thành Tiền</th>
          </thead>
          <BillDetail/>
          <BillDetail/>
          <BillDetail/>
        </table>
      </div>
    );
  }
}

export default ListBill;
