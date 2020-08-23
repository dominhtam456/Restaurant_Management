import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'

class UpdatePass extends Component {
    constructor(props) {
        super(props);
        this.pass1 = React.createRef();
        this.pass2 = React.createRef();
        this.state=({
            isAlertPass1: false,
            isAlertPass2: false,
          });
    }

    async onupdate(){
        if(this.pass1.current.value === "" || this.pass2.current.value === "" ){
            alert ("Mật khẩu chưa được nhập!")
        }
        else if (this.pass1.current.value !== this.pass2.current.value){
            alert ("Mật khẩu xác nhận không khớp")
        }else{
        await this.props.staffStore.updatePassStaff(
            this.pass2.current.value);
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
      await this.props.staffStore.getStaffs();
    }

    onBlurRSid() {
        if (this.pass1.current.value === "") this.setState({ isAlertPass1: true });
        else this.setState({ isAlertPass1: false });
      }
      onBlurRName() {
        if (this.pass2.current.value === "") this.setState({ isAlertPass2: true });
        else this.setState({ isAlertPass2: false });
      }

    render() {
        const alertStaffId = (
            <span style={{ fontSize: "10px", color: "red" }}>
              Mật khẩu không được để trống
            </span>
          );
        return (
            <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Mật Khẩu Nhân Viên
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
                        htmlFor="input1"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Mật khẩu mới:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="password"
                          className="form-control form-control-sm"
                          id="input1"
                          ref={this.pass1}
                          onBlur={() => this.onBlurRSid()}
                          required
                        />
                        {this.state.isAlertPass1 ? alertStaffId : ""}
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Xác nhận mật khẩu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="password"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.pass2}
                          onBlur={() => this.onBlurRName()}
                          required
                        />
                        {this.state.isAlertPass2 ? alertStaffId : ""}
                      </div>
                    </div>
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="button" className="btn btn-danger" id="modal-button-save" onClick={() => this.onupdate()}>
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
              </div>
            </form>
          </div>
        </div>
      </div>
        );
    }
}

export default inject("staffStore")(observer(UpdatePass));