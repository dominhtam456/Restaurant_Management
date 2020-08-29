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

    check(val) {
        for (let i = 0; i < this.listTable.length; i++) {
          //console.log(this.listFoods[i].name);
          if (val.normalize('NFC') === (this.listTable[i].name).normalize('NFC')) return false; 
        }
        return true;
      }

    setcurrenttable = async (table) => {
        this.currentTable=table;
    }

    pushTable = async (name) => {
        let table = {
                "name": name.trim(),
                "status": "Trong",
                "isActive": 1,
                "color": "white"
            }
        await TableService.addTables(table);
        //console.log(name);
    }

    updateTable = async (name, isActive) => {
        let table = {
                "id": this.currentTable.id,
                "name": name.trim(),
                "status": this.currentTable.status,
                "isActive": isActive,
                "color": this.currentTable.color,
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

    filterTables = async (act, deact) =>{
        let list = [act,deact];
        if(act === "-1" && deact ==="-1") list = ["1", "0"]
        
        // console.log("aaaaa",list)
        this.listTable = await TableService.filterTable(list);
        // console.log("bbbbbbbbbbbb",toJS(this.listTable))
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
    check: action,
    filterTables: action,
})