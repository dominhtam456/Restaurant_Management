import React, { Component } from "react";
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.isActive = React.createRef();
    this.state={
      tn: "",
      ht: ""
    }
  }

  async onUpdate(){
    await this.props.tableManageStore.updateTable(this.name.current.value, this.isActive.value);
    await this.props.tableManageStore.getTable();
  }

  onChangeSelect(e){
    let tn= this.props.table.name;
    console.log("tn",tn);
    let ht = e.target.isActive;
    this.setState({
      tn:tn,
      ht:ht
    })}
  
  render() {
    let act = this.props.tableManageStore.currentTable.isActive;
    console.log(toJS(this.props.tableManageStore.currentTable))
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Bàn
            </h2>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form ng-submit="updateFood()">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Tên bàn:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.name}
                          defaultValue={this.props.tableManageStore.currentTable.name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        className="col-sm-5 col-form-label form-control-sm"
                      >
                        Hiện trạng:
                      </label>
                      <select name="isActive" id="ht" ref={select => this.isActive = select}
                       >
                        <option value="1" selected={act === 1 ? true: false}>Active</option>
                        <option value="0" selected={act === 0 ? true: false}>Deactive</option>
                      </select>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="submit" className="btn btn-danger" onClick={() => this.onUpdate()} data-dismiss="modal">
                  Lưu
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default inject("tableManageStore","tableStore")(observer(UpdateForm));