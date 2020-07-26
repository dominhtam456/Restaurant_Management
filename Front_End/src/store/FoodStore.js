import { observable, computed, action, decorate, toJS } from "mobx";
import * as FoodService from './../services/FoodService';

export default class FoodStore {
    currentFood={};

    setcurrentfood = async (food) => {
        this.currentFood=food;
    }

    
    
}

decorate(FoodStore, {
    currentFood: observable,

    setcurrentfood: action,
})