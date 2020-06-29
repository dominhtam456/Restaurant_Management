import React, { Component } from "react"
import TrendFoodDetail from "../detailstatis/TrendFoodDetail"

class TrendFood extends Component {
  render() {
    return (
      <div>
        <table
          class="table align-items-center table-flush accordion"
          id="accordionRow"
        >
          <thead class="list-group-item-info">
            <th style={{ textAlign:"center", width:"20%"}}>STT</th>
            <th style={{ textAlign:"center", width:"60%"}}>Tên Món Ăn</th>
            <th style={{ textAlign:"center", width:"20%"}}>Số Lượng Bán</th>
          </thead>
          <TrendFoodDetail/>
          <TrendFoodDetail/>
          <TrendFoodDetail/>
        </table>
      </div>
    );
  }
}

export default TrendFood;
