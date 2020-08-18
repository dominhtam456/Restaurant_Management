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

    check(name) {
        for (let i = 0; i < this.listTypeFood.length; i++) {
          if (name === this.listTypeFood[i].name) return false;
        }
        return true;
      }

    pushTypeFood = async (name, desc) => {
        let type = {
            "name": name.trim(),
            "description": desc.trim(),
            "isActive": 1
        }
        await FoodTypeService.addTypeFood(type);
        // console.log(type)
    }

    updateTypeFoods = async (name, desc, isactive) => {
        let type = {
            "id": this.currentTypeFood.id,
            "name": name.trim(),
            "description": desc.trim(),
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