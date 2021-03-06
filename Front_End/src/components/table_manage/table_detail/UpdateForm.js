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
      ht: "",
      isAlertName: false,
    }
  }

  onBlurRSName() {
    if (this.name.current.value === "") this.setState({ isAlertName: true });
    else this.setState({ isAlertName: false });
  }

  async onUpdate(){
    if(this.name.current.value === ""){
      alert ("Tên bàn không được để trống!")
    }
    else if(this.props.tableManageStore.currentTable.status === "Có"){
      alert ("Bàn đang có người. Không được cập nhật!")
    }
    else if(!this.props.tableManageStore.check(this.name.current.value) && this.props.tableManageStore.currentTable.name !== this.name.current.value){ 
      alert ("Tên bàn bị trùng")
    }
    else{
    await this.props.tableManageStore.updateTable(this.name.current.value, this.isActive.value);
    const modals = document.getElementsByClassName('modal');

    // on every modal change state like in hidden modal
    for(let i=0; i<modals.length; i++) {
      modals[i].classList.remove('show');
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }
    const modalBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove opened modal backdrop
      document.body.removeChild(modalBackdrops[0]);}
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
    const alertTableName = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống tên bàn
      </span>
    );
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
                          onBlur={() => this.onBlurRSName()}
                        />
                        {this.state.isAlertName ? alertTableName: ""}
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
                <button type="button" className="btn btn-danger" id="modal-button-save" onClick={() => this.onUpdate()}>
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