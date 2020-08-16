import { observable, computed, action, decorate, toJS } from "mobx";
import * as FoodTypeService from './../services/FoodTypeService';

export default class FoodTypeStore {
    listTypeFood = [];
    currentTypeFood={};

    setcurrenttypefood = async (food) => {
        this.currentTypeFood=food;
    }

    getTypeFood = async () => {
        const data = await FoodTypeService.getTypeFood();
        this.listTypeFood = data;
    }

    pushTypeFood = async (name, desc) => {
        let type = {
            "name": name,
            "description": desc,
            "isActive": 1
        }
        await FoodTypeService.addTypeFood(type);
        // console.log(type)
    }

    updateTypeFoods = async (name, desc, isactive) => {
        let type = {
            "id": this.currentTypeFood.id,
            "name": name,
            "description": desc,
            "isActive": isactive
        }
        await FoodTypeService.updateTypeFood(type);
        //  console.log(toJS(type))
    }
    
}

decorate(FoodTypeStore, {
    listTypeFood: observable,
    currentTypeFood: observable,

    setcurrenttypefood: action,
    getTypeFood: action,
    pushTypeFood: action,
    updateTypeFoods: action,
})