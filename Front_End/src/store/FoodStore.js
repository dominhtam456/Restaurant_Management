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
    this.listFoods = [];
    this.listFoods = await FoodService.getFoods();
  };

  getFoodByName = async (name) => {
    if (name.trim() === "") {
      this.getFood();
    }
    else {
      this.listFoods = [];
      this.listFoods = await FoodService.searchFood(name.trim());
      if(this.listFoods.length === 0){this.listFoods = []; alert('Tên món ăn không tồn tại !')}
      //console.log(toJS(this.listFoods))
    }
  };

  getTypeFood = async () => {
    const data = await FoodService.getTypeFoods(1);
    this.listTypeFoods = data;
  };

  check(val) {
    for (let i = 0; i < this.listFoods.length; i++) {
      //console.log(this.listFoods[i].name);
      if (val === this.listFoods[i].no) return false;
      if (val === this.listFoods[i].name) return false;
    }
    return true;
  }

  checkType(name) {
    for (let i = 0; i < this.listTypeFoods.length; i++) {
      //console.log(this.listFoods[i].name);
      if (name === this.listTypeFoods[i].name) return false;
    }
    return true;
  }

  pushFood = async (no, name, price, unit, img, typeid, desc) => {
    let food = {
      "no": no.trim(),
      "name": name.trim(),
      "price": price.replace(/\./g,"").trim(),
      "unit": unit.trim(),
      "image": img,
      "loaimonan_id": typeid,
      "nguyenlieus": [null],
      "tenloaimonan": null,
      "isActive": 1,
      "description": desc,
      "status": "Còn",
    };
    await FoodService.addFoods(food);
    //  console.log(toJS(food))
  };

  pushTypeFood = async (name, desc) => {
    let type = {
      "name": name.trim(),
      "description": desc,
      "isActive": 1
    };
    // await FoodService.addTypeFoods(type);
    console.log(type)
  };

  updateFood = async (no, name, price, unit, img, typeid, isactive, desc) => {
    let food = {
      "id": this.currentFood.id,
      "no": no.trim(),
      "name": name.trim(),
      "price": price.replace(/\./g,"").trim(),
      "unit": unit.trim(),
      "image": img,
      "loaimonan_id": typeid,
      "nguyenlieus": [null],
      "tenloaimonan": null,
      "isActive": isactive,
      "description": desc,
      "status": "",
    };
    await FoodService.updateFoods(food);
    //  console.log(toJS(food))
  };

  filterFoods = async (act, deact) =>{
    let list = [act,deact];
    if(act === "-1" && deact ==="-1") list = ["1", "0"]
    
    // console.log("aaaaa",list)
    this.listFoods = await FoodService.filterFood(list);
    // console.log("bbbbbbbbbbbb",toJS(this.listTypeFood))
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
  updateFood: action,
  getFoodByName: action,
  check: action,
  filterFoods: action,
});
