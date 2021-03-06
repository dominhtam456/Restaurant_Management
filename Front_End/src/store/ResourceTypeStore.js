import { observable, computed, action, decorate, toJS } from "mobx";
import * as ResourceTypeService from './../services/ResourceTypeService';

export default class ResourceTypeStore {
    listTypeResource = [];
    currentTypeResource={};

    setcurrenttyperesource = async (type) => {
        this.currentTypeResource=type;
    }

    check(val) {
        for (let i = 0; i < this.listTypeResource.length; i++) {
          //console.log(this.listFoods[i].name);
          if (val === this.listTypeResource[i].name) return false;
        }
        return true;
      }

    getTypeResource = async () => {
        const data = await ResourceTypeService.getTypeResource();
        this.listTypeResource = data;
    }

    pushTypeResource = async (name, unit) => {
        let resource = {
            "name": name.trim(),
            "unit": unit.trim(),
            "isActive": 1
        }
        await ResourceTypeService.addTypeResource(resource);
        // console.log(resource)
    }

    updateTypeResources = async (name, unit, isactive) => {
        let resource = {
            "id": this.currentTypeResource.id,
            "name": name.trim(),
            "unit": unit.trim(),
            "isActive": isactive
        }
        await ResourceTypeService.updateTypeResource(resource);
        //  console.log(toJS(resource))
    }

    filterTypeR = async (act, deact) =>{
        let list = [act,deact];
        if(act === "-1" && deact ==="-1") list = ["1", "0"]
        
        // console.log("aaaaa",list)
        this.listTypeResource = await ResourceTypeService.filterTypeRes(list);
        // console.log("bbbbbbbbbbbb",toJS(this.listTypeFood))
    }
    
}

decorate(ResourceTypeStore, {
    listTypeResource: observable,
    currentTypeResource: observable,

    setcurrenttyperesource: action,
    getTypeResource: action,
    pushTypeResource: action,
    updateTypeResources: action,
    filterTypeR: action,
})