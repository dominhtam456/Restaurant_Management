import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import { inject, observer } from "mobx-react";

class TotalMoneyChart extends Component {
    getDates = function (startDate, endDate) {
        var dates = [],
          currentDate = startDate,
          addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
          };
        while (currentDate <= endDate) {
          dates.push(currentDate.toISOString().slice(0,10));
          currentDate = addDays.call(currentDate, 1);
        }
        return dates;
      };
    
      async componentDidMount() {
        await this.props.getChartStore.getDataCharts();
      }
    
      render() {
        var dates = this.getDates(
          new Date(this.props.getChartStore.fromDate),
          new Date(this.props.getChartStore.toDate)
        );
        dates.forEach(function (date) {
          console.log(date);
        });
        let labels = dates;
        let values = [];
        if (this.props.getChartStore.listData.length === 0) return null;
        // for (let i = 0; i < dates.length; i++) {
        //   labels[i] = this.props.getChartStore.listData[i].date;
        // }
        
        for (let i = 0; i < labels.length; i++) {
          let flag = false;
          for(let j = 0; j < this.props.getChartStore.listData.length; j++){
          if (this.props.getChartStore.listData[j].date === labels[i]) {
            values[i] = this.props.getChartStore.listData[j].sum;
            flag = true;
            break;
          } 
        }
        if(!flag) values[i] = 0;
        }
        console.log(values);
    
        const data = {
          labels: labels,
          datasets: [
            {
              label: "Doanh thu theo ngày (đồng/ngày)",
              data: values,
              fill: true,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        };
        return <Line data={data} width={800} height={300} />;
      }
}

export default inject(
    "getChartStore",
    "statisticStore"
  )(observer(TotalMoneyChart));