import React, { useState, useEffect, Component } from "react";
import { Bar } from "react-chartjs-2";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

class TrendFoodChart extends Component {
  async componentDidMount() {
    await this.props.getChartStore.getFoodTrendChart();
  }

  render() {
    let labels = [];
    let values = [];
    if (this.props.getChartStore.listTrendFood.length === 0) return null;
    for (let i = 0; i < this.props.getChartStore.listTrendFood.length; i++) {
      labels[i] = this.props.getChartStore.listTrendFood[i].tenMonAn;
    }
    for(let j = 0; j < this.props.getChartStore.listTrendFood.length; j++){
        if (this.props.getChartStore.listTrendFood[j].tenMonAn === labels[j]) {
          values[j] = this.props.getChartStore.listTrendFood[j].soluong;
        }
      }
    
    // for (let i = 0; i < labels.length; i++) {
    //   let flag = false;
    //   for(let j = 0; j < this.props.getChartStore.listData.length; j++){
    //   if (this.props.getChartStore.listData[j].date === labels[i]) {
    //     values[i] = this.props.getChartStore.listData[j].sum;
    //     flag = true;
    //     break;
    //   } 
    // }
    // if(!flag) values[i] = 0;
    // }
    // console.log(values);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Món ăn bán chạy theo ngày (số lượng)",
          data: values,
          fill: true,
          backgroundColor: "rgba(75,192,192, 0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
    const options = {
      scales: {
          yAxes: [{
              ticks: {
                beginAtZero: true
              }
          }]
      }
    };
    
    return <Bar data={data} options={options} width={800} height={300} />;
  }
}

export default inject(
  "getChartStore",
  "statisticStore"
)(observer(TrendFoodChart));
