import { observable, computed, action, decorate, toJS } from "mobx";
import * as GetChartService from "./../services/GetChartService";

export default class GetChartStore {
  listData = [];
  listTrendFood = [];
  fromDate = new Date().toISOString().slice(0, 10);
  toDate = new Date().toISOString().slice(0, 10);

  setFromDate = async (date) => {
    this.fromDate = date;
  };

  setToDate = async (date) => {
    this.toDate = date;
  };

  getDataCharts = async () => {
    const data = await GetChartService.getDataChart(this.fromDate, this.toDate);
    this.listData = data;
  };

  getFoodTrendChart = async () => {
    const data = await GetChartService.getTrendingFood(this.fromDate, this.toDate);
    this.listTrendFood = data;
  }
}

decorate(GetChartStore, {
  listData: observable,
  listTrendFood: observable,
  fromDate: observable,
  toDate: observable,

  getDataCharts: action,
  setFromDate: action,
  setToDate: action,
  getFoodTrendChart: action,
});
