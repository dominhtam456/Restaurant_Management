import { observable, computed, action, decorate, toJS } from "mobx"
import * as TableService from './../services/TableService';
import * as FoodService from './../services/FoodService';
import * as InvoiceService from './../services/InvoiceService';
import * as UserService from './../services/UserService';
import CommonUtil from './../util'
import { STATUS_FOOD } from './../constants'

export default class Kitchen {
    listUncompledFood = [];

    getListUncompledFood = async () => {
        const data = await InvoiceService.getUncompletedInvoiceDetail();
        this.listUncompledFood = data;
    }

    updateStatusFood = async (status, invoiceId, foodId) => {
        let index =  STATUS_FOOD.indexOf(status) + 1;
        await InvoiceService.updateInvoiceDetailStatus(STATUS_FOOD[index], invoiceId, foodId);
        this.getListUncompledFood()
    }
}
decorate(Kitchen, {
    listUncompledFood: observable,

    getListUncompledFood: action,
    updateStatusFood: action
})