import { observable, computed, action, decorate, toJS } from "mobx"
import * as TableService from './../services/TableService';
import * as FoodService from './../services/FoodService';
import * as InvoiceService from './../services/InvoiceService';
import * as UserService from './../services/UserService';
import CommonUtil from './../util';
import { STATUS_FOOD } from './../constants';

export default class Kitchen {
    listUncompledFood = [];

    getListUncompledFood = async () => {
        const data = await InvoiceService.getUncompletedInvoiceDetail();
        let arrayIndexReadyFood = [];
        for(let i = 0; i< data.length; i++){
            if(data[i].status === "ready"){
                arrayIndexReadyFood.push(i);
            }
        }
        //console.log(arrayIndexReadyFood)

        for(let i =arrayIndexReadyFood.length-1; i>=0; i--){
            data.push(data.splice(arrayIndexReadyFood[i], 1)[0]);
        }
        this.listUncompledFood = data;
    }

    updateStatusFood = async (status, invoiceId, foodId) => {
        let index =  STATUS_FOOD.indexOf(status);
        if(status !== "completed") index++;
        await InvoiceService.updateInvoiceDetailStatus(STATUS_FOOD[index], invoiceId, foodId);
        this.getListUncompledFood()
    }


}
decorate(Kitchen, {
    listUncompledFood: observable,

    getListUncompledFood: action,
    updateStatusFood: action
})