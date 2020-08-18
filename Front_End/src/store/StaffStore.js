import { observable, computed, action, decorate, toJS } from "mobx";
import * as UserService from "./../services/UserService";

export default class StaffStore {
  listStaff = [];
  currentStaff = [];
  listRole = [];
  logedStaff = {};

  getLogedStaff = async () => {
    let email = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).sub;
    this.logedStaff = await UserService.getUserByEmail(email);
  }

  getStaffs = async () => {
    const data = await UserService.getAllStaff();
    this.listStaff = data.result;
    // console.log(data)
  };

  getStaffByName = async (name) => {
    if (name.trim() === "") {
      this.getStaffs();
    } else {
      this.listStaff = [];
      const data = await UserService.searchStaff(name.trim());
      this.listStaff = data.result;
      if(this.listStaff.length === 0){this.listStaff = []; alert('Không tồn tại nhân viên !')}
      //console.log(data);
    }
  };

  getRole = async () => {
    const data = await UserService.getRole();
    this.listRole = data;
  };

  setcurrentstaff = async (staff) => {
    this.currentStaff = staff;
  };

  pushStaff = async (no, name, phone, mail, pass, typeid, img) => {
    let staff = {
      "no": no.trim(),
      "fullname": name.trim(),
      "phone": phone.trim(),
      "username": mail.trim(),
      "password": pass.trim(),
      "loai": typeid,
      "img": img,
      "chucvu": null,
      "isActive": 1,
    };
    await UserService.addStaff(staff);
    // console.log(staff);
  };

  updateStaff = async (no, name, phone, mail, typeid, img, isactive) => {
    //let currentTimestamp = Math.floor(Date.now() / 1000);
    //console.log('a',typeid)
    //date = CommonUtil.epochToDateTime(currentTimestamp, 'yyyy-MM-dd');
    // console.log("active", isactive);
    let staff = {
      "id": this.currentStaff.id,
      "no": no.trim(),
      "fullname": name.trim(),
      "phone": phone.trim(),
      "username": mail.trim(),
      "loai": typeid,
      "img": img,
      "isActive": isactive,
    };
    await UserService.updateStaff(staff);
    // console.log(staff);
  };

  check(val) {
    for (let i = 0; i < this.listStaff.length; i++) {
      //console.log(this.listFoods[i].name);
      if (val === this.listStaff[i].no) return false;
      if (val === this.listStaff[i].username) return false;
    }
    return true;
  }
}

decorate(StaffStore, {
  listStaff: observable,
  currentStaff: observable,
  listRole: observable,
  logedStaff: observable,

  getStaffs: action,
  pushStaff: action,
  getRole: action,
  updateStaff: action,
  getStaffByName: action,
  getLogedStaff:action
});
