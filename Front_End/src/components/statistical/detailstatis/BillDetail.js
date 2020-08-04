import React, { Component } from "react";
import CommonUtil from './../../../util'

class BillDetail extends Component {
  render() {
    return (
      <tbody className="tbody-light">
        <tr data-toggle="collapse">
          <td style={{ textAlign: "center", width: "10%" }}>{this.props.index + 1}</td>
          <td style={{ textAlign: "center", width: "30%" }}>{this.props.invoice.no}</td>
          <td style={{ textAlign: "center", width: "30%" }}>{this.props.invoice.date}</td>
          <td style={{ textAlign: "center", width: "30%" }}>{CommonUtil.formatVND(this.props.invoice.tongTien)}</td>
        </tr>
      </tbody>
    );
  }
}

export default BillDetail;
