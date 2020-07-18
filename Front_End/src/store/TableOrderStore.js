import { observable, computed, action, decorate, toJS } from "mobx"
import * as TableService from './../services/TableService';
import * as FoodService from './../services/FoodService';
import * as InvoiceService from './../services/InvoiceService';
import * as UserService from './../services/UserService';
import * as NoticeService from './../services/NoticeService';
import CommonUtil from './../util'

export default class Table {
    listTable = [];
    listFood = [];
    listOrder = [];
    currentTable = {};
    currentListOrder = [];
    updateCount = 0;
    totalMoney = 0;
    listReadyFood = [];
    listNotice = [];
    currentListNotice = [];

    solvedNotice = async(notice) => {
        await InvoiceService.updateInvoiceDetailStatus("queue", notice.hoadon_id, notice.monan_id);
        let noticeData = {
            "noticeId": {
                "hoadon_id": notice.hoadon_id,
                "monan_id": notice.monan_id
            },
            "description": notice.description,
            "status": "Solved"
        }
        await NoticeService.addNotice(noticeData);
        this.getCurrentListNotice();
        this.getCurrentListOrder(this.currentTable);
    }

    getCurrentListNotice = async() => {
        let data = await NoticeService.getNoticeByStatus("Unsolved");
        const list = []
        await this.getCurrentListOrder(this.currentTable);
        if(this.currentListOrder.length !=0 ){
            for(let i=0;i<data.length; i++){
                if(data[i].hoadon_id === this.currentListOrder[0].hoadonchitiet_id.hoadon_id){
                    data[i].tenMonAn = this.currentListOrder[0].tenMonAn
                    list.push(data[i])
                }
            }
        }
        this.currentListNotice = list;   
    }

    getListReadyFood = async () => {
        const data = await InvoiceService.getInvoiceDetailByStatus("ready");
        const list = []
        await this.getCurrentListOrder(this.currentTable);
        if(this.currentListOrder.length !=0 ){
            for(let i=0;i<data.length; i++){
                if(data[i].hoadon_id === this.currentListOrder[0].hoadonchitiet_id.hoadon_id)
                    list.push(data[i])
            }
        }
        this.listReadyFood = list;
    }

    payment = async () => {
        await InvoiceService.updateInvoiceStatus(1, this.currentListOrder[0].hoadonchitiet_id.hoadon_id);
        await TableService.updateTableStatus("Trong", this.currentTable.id);
        await this.getTable();
        await this.getListOrder();
    }

    calTotalMoney = () => {
        let totalMoney = 0;
        for(let i=0; i<this.currentListOrder.length; i++){
            totalMoney+= (this.currentListOrder[i].price * this.currentListOrder[i].soluong);
        }
        return totalMoney;
    }

    setUpdateCount = () => {
        this.updateCount++;
    }

    deleteOrder = (order) => {
        for(let i=0; i<this.currentListOrder.length; i++){
            if(order.hoadonchitiet_id.monan_id == this.currentListOrder[i].hoadonchitiet_id.monan_id){
                this.currentListOrder.splice(i, 1);
                this.totalMoney = this.calTotalMoney();
                return;
            }
        }
    }

    getListOrder = async () => {
        //console.log("wtf")
        const data = await InvoiceService.getInvoiceByStatus(0);
        this.listOrder = data;
        if(this.currentTable.id){
            for(let i = 0; i < this.listOrder.length; i++){
                for(let j = 0; j < this.listOrder[i].ban.length; j++){
                    //console.log(this.listOrder[i].ban[j].ban.id)
                    if(this.listOrder[i].ban[j].ban.id == this.currentTable.id){
                        const data = await InvoiceService.getInvoiceDetailByInvoiceId(this.listOrder[i].id);
                        this.currentListOrder = data; 
                        this.totalMoney = this.calTotalMoney();
                        //console.log(toJS(this.currentListOrder));
                        return;
                    }
                }
            }
        }
        this.totalMoney = 0;
        this.currentListOrder = [];
    }

    getCurrentListOrder = async (table) => {
        this.getListOrder();
        for(let i = 0; i < this.listOrder.length; i++){
            for(let j = 0; j < this.listOrder[i].ban.length; j++){
                if(this.listOrder[i].ban[j].ban.id == table.id){
                    const data = await InvoiceService.getInvoiceDetailByInvoiceId(this.listOrder[i].id);
                    this.currentListOrder = data; 
                    //console.log(toJS(this.currentListOrder));
                    return;
                }
            }
        }
        this.currentListOrder = [];
    }

    setCurrentListOrder = (food) => {
        if(!this.currentTable.id) return;
        for(let i=0; i<this.currentListOrder.length; i++){
            if(food.id == this.currentListOrder[i].hoadonchitiet_id.monan_id){
                this.currentListOrder[i].soluong++;
                return;
            }
        }
        let order = {
            "hoadonchitiet_id": {
                "hoadon_id": null,
                "monan_id": food.id
            },
            "price": food.price,
            "soluong": 1,
            "status": "queue",
            "tenMonAn": food.name
        }
        this.currentListOrder.push(order);
        this.totalMoney = this.calTotalMoney();
    }

    setAmount = (order, amount) => {
        if(amount < 1) amount = 1;
        for(let i=0; i<this.currentListOrder.length; i++){
            if(order.hoadonchitiet_id.monan_id == this.currentListOrder[i].hoadonchitiet_id.monan_id){
                this.currentListOrder[i].soluong = amount;
                this.totalMoney = this.calTotalMoney();
                return;
            }
        }
    }
    

    setCurrentTable = (table) => {
        this.currentTable = table;
    }

    getTable = async () => {
        const data = await TableService.getTables();
        this.listTable = data;
    }

    getFoods = async () => {
        const data = await FoodService.getFoods();
        this.listFood = data;
    }

    update = async () => {
        await InvoiceService.updateHDCT(this.currentListOrder);
    }

    confirm = async () => {
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let invoiceNo = "HD" + currentTimestamp;
        let date = CommonUtil.epochToDateTime(currentTimestamp, 'yyyy-MM-dd');

        console.log(date);
        let invoice =  {
            "no": invoiceNo,
            "date": date,
            "status": false,
            "tax": null
        }
        const InvoiceData = await InvoiceService.addinvoice(invoice);
        let listOrder = this.currentListOrder;

        for(let i=0; i<listOrder.length; i++){
            listOrder[i].hoadonchitiet_id.hoadon_id = InvoiceData.id;
            InvoiceService.addinvoiceDetail(listOrder[i]);
        }
        
        let userEmail = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).sub;
        const user = await UserService.getUserByEmail(userEmail);

        let invoiceStaff = {
            "id":{
                "hoadonId": InvoiceData.id,
                "nhanvienId": user.id
            }
        }
        await InvoiceService.addinvoiceStaff(invoiceStaff);

        let invoiceTable = {
                "id":{
                    "hoadonId": InvoiceData.id,
                    "banId": this.currentTable.id
                }
            }
        await InvoiceService.addinvoiceTable(invoiceTable);

        await TableService.updateTableStatus("Có", this.currentTable.id);
        this.getTable();
        //console.log(toJS(this.listTable))
    }
}
decorate(Table, {
    listTable: observable,
    listFood: observable,
    listOrder: observable,
    currentListOrder: observable,
    currentTable: observable,
    updateCount: observable,
    totalMoney: observable,
    listReadyFood: observable,
    listNotice: observable,
    currentListNotice: observable,

    getTable: action,
    getFoods: action,
    setCurrentTable: action,
    getListOrder: action,
    getCurrentListOrder: action,
    setCurrentListOrder: action,
    setAmount: action,
    deleteOrder: action,
    confirm: action,
    setUpdateCount: action,
    payment: action,
    getListReadyFood: action,
    update: action,
    solvedNotice: action
})