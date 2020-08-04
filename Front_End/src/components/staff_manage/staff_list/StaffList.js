import React, { Component } from "react";
import StaffRow from "./StaffRow";
import StaffDetail from "../staff_detail/StaffDetail"
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

class StaffList extends Component {
  componentDidMount() {
    this.props.staffStore.getStaffs();
  }
  render() {
    const element= this.props.staffStore.listStaff.map((user, index)=>{
      return <StaffRow user={user} key={user.id} index={index}/>
    })
    return (
      <div class="table-responsive">
        <table class="table  align-items-center table-flush accordion table-hover" id="accordionRow">
          <thead class="thead-light">
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Mã nhân viên</th>
              <th scope="col">Tên nhân viên</th>
              <th scope="col">Chức vụ</th>
            </tr>
          </thead>
          <tbody>
                {element}
                <StaffDetail id={"a1"}/>
              </tbody>
              </table>
              </div>
    );
  }
}

export default inject("staffStore")(observer(StaffList));
