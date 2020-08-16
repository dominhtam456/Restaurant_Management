import React, { Component } from "react";
import { inject , observer } from 'mobx-react'

class Info extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();

    this.state = {
      check: true
    }
  }

  async onCreate(){
    await this.props.tableManageStore.pushTable(this.name.current.value);
    await this.props.tableStore.getTable();
  }

  showAlert() {
    return (<span style={{ fontSize: 10, color: "red" }}>
    Không được để trống tên món ăn
  </span>)
  }



  render() {
    return (
      <div class="col-12">
        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Tên bàn:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="tablename"
              required
              ref={this.name}
              onfocusout=""
            />
            {this.state.check ? '' : this.showAlert()}
          </div>
        </div>
        <div class="float-right mt-3">
          <button type="button" class="btn btn-danger" onClick={() => this.onCreate()} data-dismiss="modal">Lưu & thêm mới</button>
          <button type="button" class="btn btn-secondary"
            data-dismiss="modal">Đóng</button>
        </div>
      </div>
    )
  }
}
export default inject("tableManageStore","tableStore")(observer(Info));