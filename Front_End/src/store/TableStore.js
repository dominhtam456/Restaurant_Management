import { observable, computed, action, decorate, toJS } from "mobx";
import * as TableService from './../services/TableService';

export default class TableStore {
    currentTable={};
    listTable = [];

    getTable = async () => {
        const data = await TableService.getTables();
        this.listTable= data;
        // console.log(data)
    }

    setcurrenttable = async (table) => {
        this.currentTable=table;
    }

    pushTable = async (name) => {
        let table = {
                "name": name,
                "status": "Trong",
                "isActive": 1,
                "color": null
            }
        await TableService.addTables(table);
        //console.log(name);
    }

    updateTable = async (name, isActive) => {
        let table = {
                "id": this.currentTable.id,
                "name": name,
                "status": "Trong",
                "isActive": isActive,
                "color": null,
            }
        await TableService.updateTables(table);
        //console.log(toJS(this.currentTable), name, isActive);
    }

    deleteTable = async (isActive) => {
        let table = {
                "id": this.currentTable.id,
                "name": this.currentTable.name,
                "status": "Trong",
                "isActive": isActive,
                "color": null
            }
        await TableService.deleteTables(table);
    }
}

decorate(TableStore, {
    currentTableModal: observable,
    currentTable: observable,
    listTable: observable,

    pushTable: action,
    updateTable: action,
    setcurrenttable: action,
    getTable: action,
})