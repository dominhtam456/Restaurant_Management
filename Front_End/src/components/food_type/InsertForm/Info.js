import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'

class Info extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.desc = React.createRef();

    this.state = {
      isAlertname: false,
    };
  }

  async onCreate(){
    if ((this.name.current.value).trim() === "") {
      alert("Tên loại món ăn không được để trống!");
    }
    else if (!this.props.foodTypeStore.check(this.name.current.value)) {
      alert("Tên loại món ăn bị trùng");
    } 
    else {
    await this.props.foodTypeStore.pushTypeFood(this.name.current.value, this.desc.current.value);
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
    await this.props.foodTypeStore.getTypeFood();
  }

  onBlurRSName() {
    if (this.name.current.value === "") this.setState({ isAlertname: true });
    else this.setState({ isAlertname: false });
  }

    render() {
      const alertFoodName = (
        <span style={{ fontSize: "10px", color: "red" }}>
          Không được để trống tên loại món ăn
        </span>
      );
        return (
            <div class="col-12">
        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Tên loại món ăn:
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
              <p className="text-danger">
                {this.state.isAlertname
                  ? alertFoodName
                  : ""}
              </p>
          </div>
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Mô tả:
          </label>
          <div className="col-sm-7">
            <textarea
            cols="5" rows="10"
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="tablename"
              required
              ref={this.desc}
            />
          </div>
        </div>
        <div class="float-right mt-3">
          <button type="button" class="btn btn-danger" id="modal-button-save" onClick={() => this.onCreate()}>Lưu & thêm mới</button>
          <button type="button" class="btn btn-secondary"
            data-dismiss="modal">Đóng</button>
        </div>
      </div>
        );
    }
}

export default inject("foodTypeStore")(observer(Info));