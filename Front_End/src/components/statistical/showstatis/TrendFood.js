import React, { Component } from "react"
import TrendFoodDetail from "../detailstatis/TrendFoodDetail"
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'
import TrendFoodChart from "../Chart/TrendFoodChart"

class TrendFood extends Component {
  render() {
    const element = this.props.statisticStore.listTrendingFood.map((food,index) => {
        return <TrendFoodDetail food={food} key={index} index={index}/>
    })
    console.log(toJS(this.props.statisticStore.listTrendingFood));
    return (
      <div>
        <TrendFoodChart/>
        <table
          className="table align-items-center table-flush accordion"
          id="accordionRow"
        >
          <thead className="list-group-item-info">
            <tr><th style={{ textAlign:"center", width:"20%"}}>STT</th>
            <th style={{ textAlign:"center", width:"60%"}}>Tên Món Ăn</th>
            <th style={{ textAlign:"center", width:"20%"}}>Số Lượng Bán</th></tr>
          </thead>
            {element}
        </table>
      </div>
    );
  }
}

export default inject("statisticStore")(observer(TrendFood));
