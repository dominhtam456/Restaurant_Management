import { observable, computed, action, decorate, toJS } from "mobx";
import * as FoodService from "./../services/FoodService";

export default class FoodStore {
  listFoods = [];
  listTypeFoods = [];
  currentFood = {};

  setcurrentfood = async (food) => {
    this.currentFood = food;
  };

  getFood = async () => {
    const data = await FoodService.getFoods();
    this.listFoods = data;
  };

  getFoodByName = async (name) => {
    if (name.trim() === "") {
      this.getFood();
    } else {
      this.listFoods = [];
      this.listFoods = await FoodService.searchFood(name.trim());
      //console.log(toJS(this.listFoods))
    }
  };

  getTypeFood = async () => {
    const data = await FoodService.getTypeFoods(1);
    this.listTypeFoods = data;
  };

  check(name) {
    for (let i = 0; i < this.listFoods.length; i++) {
      //console.log(this.listFoods[i].name);
      if (name === this.listFoods[i].no) return false;
      if (name === this.listFoods[i].name) return false;
    }
    return true;
  }

  pushFood = async (no, name, price, unit, img, typeid, desc) => {
    let food = {
      no: no,
      name: name,
      price: price.replace(/\./g,""),
      unit: unit,
      image: img,
      loaimonan_id: typeid,
      nguyenlieus: [null],
      tenloaimonan: null,
      isActive: 1,
      description: desc,
      status: "Còn",
    };
    await FoodService.addFoods(food);
    //  console.log(toJS(food))
  };

  pushTypeFood = async (name, desc) => {
    let type = {
      name: name,
      description: desc,
    };
    await FoodService.addTypeFoods(type);
    // console.log(type)
  };

  updateFood = async (no, name, price, unit, img, typeid, isactive, desc) => {
    let food = {
      id: this.currentFood.id,
      no: no,
      name: name,
      price: price.replace(/\./g,""),
      unit: unit,
      image: img,
      loaimonan_id: typeid,
      nguyenlieus: [null],
      tenloaimonan: null,
      isActive: isactive,
      description: desc,
      status: "",
    };
    await FoodService.updateFoods(food);
    //  console.log(toJS(food))
  };
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
  updateFood: action,
  getFoodByName: action,
  check: action,
});
