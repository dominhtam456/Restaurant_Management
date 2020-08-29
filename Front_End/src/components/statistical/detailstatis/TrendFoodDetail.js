import React, { Component } from "react";

export default class TrendFoodDetail extends Component {
  render() {
    return (
        <tbody className="tbody-light">
          <tr>
            <td style={{ textAlign:"center", width:"20%"}}>{this.props.index + 1}</td>
            <td style={{ textAlign:"left-center", width:"50%"}}>{this.props.food.tenMonAn} </td>
            <td style={{ textAlign:"center", width:"30%"}}> {this.props.food.soluong} </td>
          </tr>
        </tbody>
    );
  }
}

