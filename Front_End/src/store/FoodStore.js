import { observable, computed, action, decorate, toJS } from "mobx";
import * as FoodService from './../services/FoodService';

export default class FoodStore {
    listFoods = [];
    listTypeFoods = [];
    currentFood={};

    setcurrentfood = async (food) => {
        this.currentFood=food;
    }

    getFood = async () => {
        const data = await FoodService.getFoods();
        this.listFoods = data;
    }

    getTypeFood = async () => {
        const data = await FoodService.getTypeFoods();
        this.listTypeFoods = data;
    }

    pushFood = async (no, name, price, unit, typeid, desc) => {
        let food = {
            "no": no,
            "name": name,
            "price": price,
            "unit": unit,
            "image": null,
            "loaimonan_id": typeid,
            "nguyenlieus": [null],
            "tenloaimonan": null,
            "isActive": 1,
            "description": desc
        }
        await FoodService.addFoods(food);
        //  console.log(toJS(food))
    }

    pushTypeFood = async (name, desc) => {
        let type = {
            "name": name,
            "description": desc 
        }
        await FoodService.addTypeFoods(type);
        // console.log(type)
    }
    
}

decorate(FoodStore, {
    listFoods: observable,
    listTypeFoods: observable,
    currentFood: observable,

    setcurrentfood: action,
    getFood: action,
    getTypeFood: action,
    pushFood: action,
    pushTypeFood: action,
})