import { observable, computed, action, decorate, toJS } from "mobx";
import * as ResourceService from './../services/ResourceService';
import CommonUtil from './../util'

export default class ResourceStore {
    listResource = [];
    currentListResource = [];
    listTypeResource = [];
    currentResource={};

    getResource = async () => {
        const data = await ResourceService.getResources();
        this.listResource = data;
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
        const data = await ResourceService.getTypeResources();
        this.listTypeResource = data;
        //console.log(data)
    }

    setcurrentresource = async (resource) => {
        this.currentResource=resource;
    }

    pushResource = async (no, name, price,  date, image, typeid, typename) => {
        let currentTimestamp = Math.floor(Date.now() / 1000);
        date = CommonUtil.epochToDateTime(currentTimestamp, 'yyyy-MM-dd');
        let resource = {
            "no": no,
            "name": name,
            "price": price,
            "date": date,
            "image": image,
            "loainguyenlieu_id": typeid,
            "isActive": 1,
            "tenloainguyenlieu": typename
        }
        // await ResourceService.addResources(resource);
        console.log(resource);
    }

    pushTypeResource = async (name, unit) => {
        let type = {
            "name": name,
            "unit": unit
        }
        await ResourceService.addTypeResources(type);
        //console.log(type)
    }

    updateResource = async (no, name, typename, price, date, image, isactive) => {
        let resource = {
            "id": this.currentResource.id,
            "no": no,
            "name": name,
            "price": price,
            "date": date,
            "image": image,
            "loainguyenlieu_id": 1,
            "isActive": isactive,
            "tenloainguyenlieu": typename
        }
        //await ResourceService.updateResources(resource);
        console.log(resource);
    }

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
    listResource: observable,
    listTypeResource: observable,
    currentListResource: observable,
    currentResource: observable,

    pushResource: action,
    updateResource: action,
    getResource: action,
    getTypeResource: action,
    getCurrentListResource: action,
})