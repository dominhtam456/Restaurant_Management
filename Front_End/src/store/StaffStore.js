import { observable, computed, action, decorate, toJS } from "mobx";
import * as UserService from './../services/UserService';

export default class StaffStore{
    listStaff= [];

    getStaffs = async () => {
        const data = await UserService.getAllStaff();
        this.listStaff= data.result;
        console.log(data)
    }
}

decorate (StaffStore, {
    listStaff: observable,

    getStaffs: action,
})