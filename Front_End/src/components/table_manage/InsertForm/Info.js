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
    if((this.name.current.value).trim() === ""){
      alert ("Tên bàn không được để trống!")
      
    }
    else if(!this.props.tableManageStore.check(this.name.current.value)){ 
      alert ("Tên bàn bị trùng")
    }
    else{
    await this.props.tableManageStore.pushTable(this.name.current.value);
    // document.getElementById("modalAddMaterials").classList.remove("show");
    // document.getElementById("modalAddMaterials").style.display='none';
    const modals = document.getElementsByClassName('modal');

    // on every modal change state like in hidden modal
    for(let i=0; i<modals.length; i++) {
      modals[i].classList.remove('show');
      modals[i].setAttribute('aria-hidden', 'true');
      modals[i].setAttribute('style', 'display: none');
    }
    const modalBackdrops = document.getElementsByClassName('modal-backdrop');

     // remove opened modal backdrop
      document.body.removeChild(modalBackdrops[0]);
  }
    await this.props.tableManageStore.getTable();
    
  }

  showAlert() {
    if (this.name.current.value === "") this.setState({ check: false});
    else this.setState({ check: true });
  }



  render() {
    const alertName = (
    <span style={{ fontSize: 10, color: "red" }}>
    Tên bàn không được để trống 
  </span>);
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
              onBlur={() => this.showAlert()}
            />
            {this.state.check ? "" : alertName}
          </div>
        </div>
        <div class="float-right mt-3">
          <button type="button" class="btn btn-danger" id="modal-button-save" onClick={() => this.onCreate()}>Lưu & thêm mới</button>
          <button type="button" class="btn btn-secondary"
            data-dismiss="modal">Đóng</button>
        </div>
      </div>
    )
  }
}
export default inject("tableManageStore","tableStore")(observer(Info));