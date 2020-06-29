import React, { Component } from "react";
import TotalBillDetail from "../detailstatis/TotalBillDetail"

class TotalBill extends Component {
  render() {
    return (
      <div>
        <table class="table align-items-center table-flush accordion">
          <thead  class="list-group-item-info">
            <th style={{ textAlign: "center", width: "30%" }}>Ngày bắt đầu</th>
            <th style={{ textAlign: "center", width: "30%" }}>Ngày kết thúc</th>
            <th style={{ textAlign: "center", width: "40%" }}>Tổng tiền</th>
          </thead>
          <TotalBillDetail/>
          <TotalBillDetail/>
          <TotalBillDetail/>
        </table>
      </div>
    );
  }
}

export default TotalBill;
