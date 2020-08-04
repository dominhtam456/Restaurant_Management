import { observable, computed, action, decorate, toJS } from "mobx"
import * as StatisticalService from './../services/StatisticalService';
import CommonUtil from './../util';
import { isValid } from './../services/LoginService'

export default class Login {

    isValid = false;

    setIsValid = async() => {
        if(!localStorage.getItem('token')) return false;
        const data = await isValid();
        if(data.status === 200) return true;
        else return false;
    }

    checkValid = async () => {
        this.isValid = await this.setIsValid();
    }
}
decorate(Login, {
    isValid: observable,

    checkValid: action,
    setIsValid: action
})