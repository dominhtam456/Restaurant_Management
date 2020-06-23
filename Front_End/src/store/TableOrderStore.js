import { observable, computed, action, decorate, toJS } from "mobx"
import * as api from './../services/TableService';
import { URL_API } from './../constants'

export default class Table {
    listTable = [];
    status = true;

    getTable = async () => {
            this.status = "loading";
            const data = await api.getTables();
            this.listTable = data;
            if(data.error) this.status = true;
            else this.status = false;
            //console.log(toJS(this.listTable));
    }
}
decorate(Table, {
    listTable: observable,
    status: observable,
    getTable: action
})