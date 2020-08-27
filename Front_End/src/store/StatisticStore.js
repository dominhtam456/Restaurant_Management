import { observable, computed, action, decorate, toJS } from "mobx"
import * as StatisticalService from './../services/StatisticalService';
import CommonUtil from './../util';

export default class Statistical {
    currentContent = "listBill";
    listTrendingFood = [];
    listInvoiceByDate = [];
    fromDate = (new Date()).toISOString().slice(0,10);
    toDate = (new Date()).toISOString().slice(0,10);
    sum = 0;

    setFromDate = async(date) => {
        this.fromDate = date;
    }

    setToDate = async(date) => {
        this.toDate = date;
    }

    getListInvoiceByDate = async () => {
        const data = await StatisticalService.getInvoiceByDate(this.fromDate, this.toDate);
        this.listInvoiceByDate = data;
        // console.log(toJS(this.fromDate), toJS(this.toDate))
    }

    getListTrendingFood = async () => {
        const data = await StatisticalService.getTrendingFood(this.fromDate, this.toDate);
        this.listTrendingFood = data;
    }

    getSum = async () => {
        let sum = 0;
        await this.getListInvoiceByDate();
        this.listInvoiceByDate.forEach(invoice => {
            sum += invoice.tongTien
        });
        this.sum = sum; 
    }

    setCurrentContent = async (value) => {
        this.currentContent = value;
    }

}
decorate(Statistical, {
    currentContent: observable,
    listTrendingFood: observable,
    fromDate: observable,
    toDate: observable,
    listInvoiceByDate: observable,
    sum: observable,

    setCurrentContent: action,
    setFromDate: action,
    setToDate: action,
    getListTrendingFood: action,
    getListInvoiceByDate: action,
    getSum: action
})