import React, { Component } from "react";
import StaffRow from "./StaffRow";
import StaffDetail from "../staff_detail/StaffDetail"

class StaffList extends Component {
  render() {
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
                <StaffRow id={"#a1"}/>
                <StaffDetail id={"a1"}/>
              </tbody>
              </table>
              </div>
    );
  }
}

export default StaffList;
