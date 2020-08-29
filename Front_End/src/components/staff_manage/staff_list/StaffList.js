import React, { Component } from "react";
import StaffRow from "./StaffRow";
import StaffDetail from "../staff_detail/StaffDetail"
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import StaffFilter from '../StaffFilter'

class StaffList extends Component {
  componentDidMount() {
    this.props.staffStore.getStaffs();
  }
  merge(element, element1) {
    let element3 = [];
      for(let i=0; i<element.length; i++){
        element3.push(element[i]);
        element3.push(element1[i]);
      }
      
      return element3;
  }
  render() {
    const element= this.props.staffStore.listStaff.map((user, index)=>{
      return <StaffRow user={user} key={user.id} index={index}/>
    })
    const element1= this.props.staffStore.listStaff.map((user, index)=>{
      return <StaffDetail user={user} key={user.id} index={index}/>
    })
    const element2 = this.merge(element,element1);
    return (
      <div>
        <div className="float-left">
          <i
            className="fas fa-filter"
            aria-hidden="true"
            data-toggle="collapse"
            data-target="#ffilter"
          ></i>
          <div id="ffilter" className="collapse">
            < StaffFilter/>
          </div>
        </div>
      <div className="table-responsive">
        <table className="table  align-items-center table-flush accordion table-hover" id="accordionRow">
          <thead className="thead-light">
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Mã nhân viên</th>
              <th scope="col">Tên nhân viên</th>
              <th scope="col">Chức vụ</th>
              <th scope="col">Hiện trạng</th>
            </tr>
          </thead>
          <tbody>
                {element2}
              </tbody>
              </table>
              </div>
              </div>
    );
  }
}

export default inject("staffStore")(observer(StaffList));
