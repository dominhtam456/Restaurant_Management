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
    currentTable = [];
    currentListOrder = [];
    updateCount = 0;
    totalMoney = 0;
    listReadyFood = [];
    listNotice = [];
    currentListNotice = [];
    flag = false;
    currentInvoice = {};

    getAlertTable = async(id, color) => {
        try{
            let rs = {
                isReady: false,
                isWarning: false
            }

            if(color === "white") {
                document.getElementById("n"+id).style.backgroundColor = "white";
                document.getElementById("m"+id).style.backgroundColor = "white";
                return;
            }

            const data = await InvoiceService.getInvoiceDetailByStatus("ready");
            const data1 = await InvoiceService.getInvoiceDetailByStatus("cancel");
            const list = await InvoiceService.getInvoiceByStatus(0);
            let hd = -1;
            let flag = false;
            for(let i=0; i<list.length; i++){
                for(let j=0; j< list[i].ban.length; j++){
                    
                    if(id === list[i].ban[j].id.banId){
                        hd = list[i].id;
                        flag = true;
                        break;
                    }
                }
                if(flag) break;
            }
            if(hd === -1) {
                document.getElementById("n"+id).style.backgroundColor = "white";
                document.getElementById("m"+id).style.backgroundColor = "white";
                return rs;
            }
            for(let i=0; i<data.length; i++){
                if(data[i].hoadon_id === hd) {
                    rs.isReady = true;
                    document.getElementById("n"+id).style.backgroundColor = "green";
                    break;    
                }
            }
            if(!rs.isReady) document.getElementById("n"+id).style.backgroundColor = "white";
            for(let i=0; i<data1.length; i++){
                if(data1[i].hoadon_id === hd) {
                    rs.isWarning = true;
                    document.getElementById("m"+id).style.backgroundColor = "red";
                    break;    
                }
            }
            if(!rs.isWarning) document.getElementById("m"+id).style.backgroundColor = "white";
            return rs;
        }catch(err) {
            return null;
        }

    }

    mergeTable = async() => {
        let list = [];
        if(this.currentTable.length < 2) return false;
        
        for(let i=0; i< this.currentTable.length; i++){
            if(this.currentTable[i].color === 'white') return false;
        }

        this.currentListOrder.forEach(order => {
            if(list.length === 0) list.push(order[0].hoadonchitiet_id.hoadon_id)
            else{
                let flag = true;
                for(let i= 0; i<this.currentListOrder.length; i++){
                    if(list[i] === order[0].hoadonchitiet_id.hoadon_id){
                        flag = false;
                        break;
                    }
                }
                if(flag) list.push(order[0].hoadonchitiet_id.hoadon_id)
            }
        });

        if(list.length === 1) return false;
        await InvoiceService.mergeTable(list);
        await this.getTable();
        return true;
        
        //console.log(toJS(this.currentListOrder))
    }

    updateComment = async(text, id) => {
        this.currentListOrder[0].forEach(order => {
            if(order.hoadonchitiet_id.id === id){
                order.comment = text;
            }
        });
        //console.log(toJS(this.currentListOrder));
    }

    changeTable = async() => {
        let fromTable, toTable, hoadon_id;
        if(this.currentTable[0].color != "white"){
            fromTable = this.currentTable[0].id
            toTable = this.currentTable[1].id
            hoadon_id = this.currentListOrder[0][0].hoadonchitiet_id.hoadon_id;
        }
        else {
            fromTable = this.currentTable[1].id
            toTable = this.currentTable[0].id
            hoadon_id = this.currentListOrder[0][0].hoadonchitiet_id.hoadon_id;
        }
        let list = document.getElementsByClassName('check');
        for(let i=0; i<list.length; i++)
            list[i].checked = false;

        this.currentListOrder = [];
        this.currentTable = [];
        await TableService.updateHDB(fromTable, toTable, hoadon_id);

    }

    checkTable = async (check, table) => {
        console.log('list',toJS(this.listOrder));
        if(this.flag) {
            this.currentTable = [];
            this.flag = false;
        }
        if(check) {
            this.currentTable.push(table);
        }
        else {
            this.currentTable.forEach(t => {
                if(t.id === table.id) {
                    this.currentTable.splice(this.currentTable.indexOf(t), 1);
                    return;
                }
            });
        }
        console.log(toJS(this.currentListOrder))
    }

    solvedNotice = async(notice) => {
        console.log('notice', toJS(notice))
        await InvoiceService.updateInvoiceDetailStatus("queue", notice.id);
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
        this.getListOrder();
    }

    getCurrentListNotice = async() => {
        let data = await NoticeService.getNoticeByStatus("Unsolved");
        const list = []
        await this.getListOrder();
        if(this.currentListOrder.length !=0 ){
            for(let i=0;i<data.length; i++){
                if(data[i].hoadon_id === this.currentListOrder[0][0].hoadonchitiet_id.hoadon_id){
                    for(let j=0; j<this.currentListOrder[0].length; j++){
                        if(data[i].monan_id === this.currentListOrder[0][j].hoadonchitiet_id.monan_id){
                            data[i].tenMonAn = this.currentListOrder[0][j].tenMonAn;
                            break;
                        }
                    }
                    list.push(data[i])
                }
            }
        }
        this.currentListNotice = list;   
    }

    getListReadyFood = async () => {
        const data = await InvoiceService.getInvoiceDetailByStatus("ready");
        const list = []
        await this.getListOrder();
        if(this.currentListOrder.length !=0 ){
            for(let i=0;i<data.length; i++){
                if(data[i].hoadon_id === this.currentListOrder[0][0].hoadonchitiet_id.hoadon_id)
                    list.push(data[i])
            }
        }
        this.listReadyFood = list;
    }

    payment = async () => {
        this.currentInvoice = await InvoiceService.getInvoiceById(this.currentListOrder[0][0].hoadonchitiet_id.hoadon_id)
        if(this.currentListOrder.length == 1){
            await InvoiceService.updateInvoiceStatus(1, this.currentListOrder[0][0].hoadonchitiet_id.hoadon_id);
            let lst = [];
            for(let i=0; i<this.listTable.length; i++ ){
                if(this.listTable[i].color === this.currentTable[0].color){
                    lst.push(this.listTable[i]);
                }
            }

            lst.forEach(tb => {
                tb.color = 'white'
            });

            await TableService.updateTableStatus("Trong", lst);
            await this.refactorListOrder();
            await this.update();
            await this.getTable();
            await this.getListOrder();
            return true;
        }
        return false;
        //console.log(toJS(this.currentListOrder))
    }

    refactorListOrder = async() => {
        for(let i = 0; i< this.currentListOrder[0].length - 1; i++){
            for(let j = i+1; j< this.currentListOrder[0].length; j++){
                if(this.currentListOrder[0][i].hoadonchitiet_id.monan_id === this.currentListOrder[0][j].hoadonchitiet_id.monan_id){
                    this.currentListOrder[0][i].soluong += this.currentListOrder[0][j].soluong;
                    this.currentListOrder[0][i].thanhTien = this.currentListOrder[0][i].soluong * this.currentListOrder[0][i].price
                    this.currentListOrder[0].splice(j, 1);
                }
            }
        }
    }

    calTotalMoney = () => {
        let totalMoney = 0;
        if(this.currentListOrder.length >0){
            for(let i=0; i<this.currentListOrder[0].length; i++){
                totalMoney+= (this.currentListOrder[0][i].price * this.currentListOrder[0][i].soluong);
            }
        }
        return totalMoney;
    }

    setUpdateCount = () => {
        this.updateCount++;
    }

    deleteOrder = (order) => {
        if(this.currentListOrder.length > 0){
            for(let i=0; i<this.currentListOrder[0].length; i++){
                if(order.hoadonchitiet_id.id == this.currentListOrder[0][i].hoadonchitiet_id.id){
                    this.currentListOrder[0].splice(i, 1);
                    this.totalMoney = this.calTotalMoney();
                    return;
                }
            }
        }
    }

    getListOrder = async () => {
        //console.log("wtf")
        let flag = false;
        const data = await InvoiceService.getInvoiceByStatus(0);
        this.listOrder = data;
        let lst = [];
        if(this.currentTable.length > 0){
            for(let i = 0; i < this.listOrder.length; i++){
                for(let j = 0; j < this.listOrder[i].ban.length; j++){
                    for(let y = 0; y < this.currentTable.length; y++){
                        if(this.listOrder[i].ban[j].ban.id == this.currentTable[y].id){
                            const data = await InvoiceService.getInvoiceDetailByInvoiceId(this.listOrder[i].id);
                            lst.push(data); 
                            
                            //console.log(toJS(this.currentListOrder));
                            flag=true;
                        }
                    }
                }
            }
        }
        
        if(!flag){
            this.totalMoney = 0;
            this.currentListOrder = [];
        }
        else{
            this.totalMoney = this.calTotalMoney();
            this.currentListOrder = lst;
            //console.log(toJS(this.currentListOrder))
        }
    }

    // getCurrentListOrder = async (table) => {
    //     this.getListOrder();
    //     for(let i = 0; i < this.listOrder.length; i++){
    //         for(let j = 0; j < this.listOrder[i].ban.length; j++){
    //             if(table != undefined){
    //                 if(this.listOrder[i].ban[j].ban.id == table.id){
    //                     const data = await InvoiceService.getInvoiceDetailByInvoiceId(this.listOrder[i].id);
    //                     this.currentListOrder = data; 
    //                     //console.log(toJS(this.currentListOrder));
    //                     return;
    //                 }
    //              }
    //         }
    //     }
    //     this.currentListOrder = [];
    // }

    setCurrentListOrder = (food) => {
        if(!this.currentTable[0]) return;
        if(this.currentListOrder.length === 0) this.currentListOrder[0] = [];
        for(let i=0; i<this.currentListOrder[0].length; i++){
            let order = this.currentListOrder[0][i];
            if(food.id == order.hoadonchitiet_id.monan_id && (order.status === "queue" || order.status === "cancel")){
                this.currentListOrder[0][i].soluong++;
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
        this.currentListOrder[0].push(order);
        this.totalMoney = this.calTotalMoney();
    }

    setAmount = (order, amount) => {
        if(amount < 1) amount = 1;
        for(let i=0; i<this.currentListOrder[0].length; i++){
            if(order.hoadonchitiet_id.id == this.currentListOrder[0][i].hoadonchitiet_id.id){
                this.currentListOrder[0][i].soluong = amount;
                this.totalMoney = this.calTotalMoney();
                return;
            }
        }
    }
    

    setCurrentTable = (table) => {
        this.currentTable = [];
        this.currentTable[0] = table;
        let list = document.getElementsByClassName('check');
        for(let i=0; i<list.length; i++)
            list[i].checked = false;
        this.flag = true;
    }

    getTable = async () => {
        const data = await TableService.getTableByActive(1);
        this.listTable = data;
    }

    getFoods = async () => {
        const data = await FoodService.getFoodByActive(1);
        this.listFood = data;
    }

    update = async () => {
        console.log(toJS(this.currentListOrder[0]))
        await InvoiceService.updateHDCT(this.currentListOrder[0]);
        
    }

    confirm = async () => {
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let invoiceNo = "HD" + currentTimestamp;
        let date = CommonUtil.epochToDateTime(currentTimestamp, 'yyyy-MM-dd');

        //console.log(date);
        let invoice =  {
            "no": invoiceNo,
            "date": date,
            "status": false,
            "tax": null
        }
        const InvoiceData = await InvoiceService.addinvoice(invoice);
        let listOrder = this.currentListOrder[0];

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

        let listTable = []
        this.currentTable.forEach(table => {
            let invoiceTable = {
                "id":{
                    "hoadonId": InvoiceData.id,
                    "banId": table.id
                }
            }
            listTable.push(invoiceTable);
        });
        let color = CommonUtil.getRandomColor();
        await InvoiceService.addinvoiceTable(listTable);
        this.currentTable.forEach(table => {
            table.color = color;
        })
        await TableService.updateTableStatus("Có", this.currentTable);
        this.getTable();

        let list = document.getElementsByClassName('check');
        for(let i=0; i<list.length; i++)
            list[i].checked = false;
        
        
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
    currentInvoice: observable,

    getTable: action,
    getFoods: action,
    setCurrentTable: action,
    getListOrder: action,
    //getCurrentListOrder: action,
    setCurrentListOrder: action,
    setAmount: action,
    deleteOrder: action,
    confirm: action,
    setUpdateCount: action,
    payment: action,
    getListReadyFood: action,
    update: action,
    solvedNotice: action,
    mergeTable: action,
    refactorListOrder: action
})