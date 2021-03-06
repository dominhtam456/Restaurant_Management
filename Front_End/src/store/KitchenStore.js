import { observable, computed, action, decorate, toJS } from "mobx"
import * as TableService from './../services/TableService';
import * as FoodService from './../services/FoodService';
import * as InvoiceService from './../services/InvoiceService';
import * as UserService from './../services/UserService';
import * as NoticeService from './../services/NoticeService';
import CommonUtil from './../util';
import { STATUS_FOOD } from './../constants';

export default class Kitchen {
    listUncompledFood = [];
    currentFoodModal = {};

    getListUncompledFood = async () => {
        const data = await InvoiceService.getUncompletedInvoiceDetail();
        let arrayIndexReadyFood = [];
        for(let i = 0; i< data.length; i++){
            if(data[i].status === "ready"){
                arrayIndexReadyFood.push(i);
            }
        }
        for(let i =arrayIndexReadyFood.length-1; i>=0; i--){
            data.push(data.splice(arrayIndexReadyFood[i], 1)[0]);
        }
        this.listUncompledFood = data;
    }

    updateStatusFood = async (status, id) => {
        let index =  STATUS_FOOD.indexOf(status);
        if(status !== "completed") index++;
        await InvoiceService.updateInvoiceDetailStatus(STATUS_FOOD[index], id);
        this.getListUncompledFood()
    }

    setCurrentFoodModal = async(food) => {
        this.currentFoodModal = food;

    }

    pushNotice = async (desc) => {
        let notice = {
            "noticeId": {
                "hoadon_id": this.currentFoodModal.hoadon_id,
                "monan_id": this.currentFoodModal.monan_id
            },
            "description": desc,
            "status": "Unsolved"
        }
        await NoticeService.addNotice(notice);
        await InvoiceService.updateInvoiceDetailStatus("cancel", this.currentFoodModal.id);
        await this.getListUncompledFood();
    }

}
decorate(Kitchen, {
    listUncompledFood: observable,
    currentFoodModal: observable,

    getListUncompledFood: action,
    updateStatusFood: action,
    setCurrentFoodModal: action,
    pushNotice: action
})