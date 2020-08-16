import { observable, computed, action, decorate, toJS } from "mobx";
import * as ResourceService from "./../services/ResourceService";
import CommonUtil from "./../util";

export default class ResourceStore {
  listResources = [];
  //currentListResource = [];
  listTypeResources = [];
  currentResource = {};

  getResource = async () => {
    const data = await ResourceService.getResources();
    this.listResources = data;
  };

  getResourceByName = async (name) => {
    if (name.trim() === "") {
      this.getResource();
    }
    else {
      this.listResources = [];
      this.listResources = await ResourceService.searchResource(name.trim());
    }
  };

  checkSearch(name){
    for(let i=0;i<this.listResources.length;i++){
        if(this.listResources[i] === "")
        return this.listResources = "Ten Nguyen Lieu Khong ton tai !"
    }
    return this.getResourceByName(name);
  }

  // getCurrentListResource = async (resource) => {
  //     for(let i = 0; i < this.listResource.length; i++){
  //         for(let j = 0; j < this.listResource[i].ban.length; j++){
  //             if(resource != undefined){
  //                 if(this.listResource[i].resource.no == resource.no){
  //                     const data = await ResourceService.getEachResourcesDetail(this.listResource[i].no);
  //                     this.currentListResource = data;
  //                     //console.log(toJS(this.currentListResource));
  //                     return;
  //                 }
  //              }
  //         }
  //     }
  // }

  getTypeResource = async () => {
    const data = await ResourceService.getTypeResources(1);
    this.listTypeResources = data;
  };

  setcurrentresource = async (resource) => {
    this.currentResource = resource;
    //console.log(toJS(this.currentResource))
  };

  pushResource = async (no, name, price, date, img, typeid) => {
    let currentTimestamp = Math.floor(Date.now() / 1000);
    date = CommonUtil.epochToDateTime(currentTimestamp, "yyyy-MM-dd");
    let resource = {
      no: no,
      name: name,
      price: price,
      date: date,
      image: img,
      loainguyenlieu_id: typeid,
      isActive: 1,
      tenloainguyenlieu: null,
    };
    await ResourceService.addResources(resource);
    // console.log(resource);
  };

  pushTypeResource = async (name, unit) => {
    let type = {
      name: name,
      unit: unit,
    };
    await ResourceService.addTypeResources(type);
    //console.log(type)
  };

  updateResource = async (no, name, price, date, img, typeid, isactive) => {
    //let currentTimestamp = Math.floor(Date.now() / 1000);
    //console.log('a',typeid)
    //date = CommonUtil.epochToDateTime(currentTimestamp, 'yyyy-MM-dd');
    let resource = {
      id: this.currentResource.id,
      no: no,
      name: name,
      price: price,
      date: date,
      image: img,
      loainguyenlieu_id: typeid,
      isActive: isactive,
      tenloainguyenlieu: null,
    };
    await ResourceService.updateResources(resource);
    // console.log(resource);
  };

  // deleteTable = async (isActive) => {
  //     let table = {
  //             "id": this.currentTable.id,
  //             "name": this.currentTable.name,
  //             "status": "Trong",
  //             "isActive": isActive,
  //             "color": null
  //         }
  //     await TableService.deleteTables(table);
  // }
}

decorate(ResourceStore, {
  listResources: observable,
  listTypeResources: observable,
  //currentListResource: observable,
  currentResource: observable,

  pushResource: action,
  updateResource: action,
  getResource: action,
  getTypeResource: action,
  getCurrentListResource: action,
  checkSearch: action,
});
