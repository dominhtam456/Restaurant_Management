import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'

class Info extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.unit = React.createRef();
        this.state={
          isAlertName: false,
          isAlertUnit: false,
        }
    }

    async onCreate(){
      if((this.name.current.value).trim() === ""){
        alert("Tên loại nguyên liệu không được để trống!")
      }
      else if(!this.props.resourceTypeStore.check(this.name.current.value)){
        alert("Tên loại nguyên liệu bị trùng!")
      }
      else if((this.unit.current.value).trim() === ""){
        alert("Đơn vị nguyên liệu không được để trống!")
      }
      else{
        await this.props.resourceTypeStore.pushTypeResource(
            this.name.current.value, this.unit.current.value);
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
        await this.props.resourceTypeStore.getTypeResource();
      }

      onBlurRSName() {
        if (this.name.current.value === "") this.setState({ isAlertName: true });
        else this.setState({ isAlertName: false });
      }
      onBlurRSUnit() {
        if (this.unit.current.value === "") this.setState({ isAlertUnit: true });
        else this.setState({ isAlertUnit: false });
      }

    render() {
      const alertTypeRName = (
        <span style={{ fontSize: "10px", color: "red" }}>
          Không được để trống tên loại nguyên liệu
        </span>
      );
      const alertTypeRUnit = (
        <span style={{ fontSize: "10px", color: "red" }}>
          Không được để trống đơn vị nguyên liệu
        </span>
      );
        return (
            <div class="col-12">
        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Tên loại nguyên liệu:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="tablename"
              required
              ref={this.name}
              onBlur={() => this.onBlurRSName()}
            />
              {this.state.isAlertName ? alertTypeRName: ""}
          </div>
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Đơn vị tính:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="tablename"
              required
              ref={this.unit} 
              onBlur={() => this.onBlurRSUnit()}
              />
              {this.state.isAlertUnit ? alertTypeRUnit: ""}
          </div>
        </div>
        <div class="float-right mt-3">
          <button type="button" class="btn btn-danger"  id="modal-button-save" onClick={() => this.onCreate()}>Lưu & thêm mới</button>
          <button type="button" class="btn btn-secondary"
            data-dismiss="modal">Đóng</button>
        </div>
      </div>
        );
    }
}

export default inject("resourceTypeStore")(observer(Info));