import { observable, computed, action, decorate, toJS } from "mobx"
import * as TableService from './../services/TableService';
import * as FoodService from './../services/FoodService';
import * as InvoiceService from './../services/InvoiceService';
import * as UserService from './../services/UserService';
import CommonUtil from './../util'

export default class Kitchen {
    listUncompledFood = [];

    getListUncompledFood = async () => {
        const data = await InvoiceService.getUncompletedInvoiceDetail();
        this.listUncompledFood = data;
    }
}
decorate(Kitchen, {
    listUncompledFood: observable,

    getListUncompledFood: action
})