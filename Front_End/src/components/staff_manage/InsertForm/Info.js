import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import FileBase64 from 'react-file-base64';

class Info extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.phone = React.createRef();
    this.email = React.createRef();
    this.pass = React.createRef();
    this.typeId = React.createRef();
    this.image = React.createRef();

    this.state = {
      num: "",
      img: "",
      isAlertNo: false,
      isAlertName: false,
      isAlertMail: false,
      isAlertPass: false,
    };
  }

  getFiles(files){
    this.image = files.base64;
    this.setState({
      img: files.base64
    })
  }

  componentDidMount() {
    this.props.staffStore.getRole();
  }
  async onCreate() {
    if ((this.no.current.value).trim() === "") {
      alert("Mã nhân viên không được để trống!");
    } else if (!this.props.staffStore.check(this.no.current.value)) {
      alert("Mã nhân viên bị trùng");
    } else if ((this.name.current.value).trim() === "") {
      alert("Tên nhân viên không được để trống!");
    } 
    else if ((this.email.current.value).trim() === "") {
      alert("Email không được để trống!");
    } else if (!this.props.staffStore.check(this.email.current.value)) {
      alert("Email bị trùng!");
    } else if ((this.pass.current.value).trim() === "") {
      alert("Mật khẩu không được để trống!");
    } else {
    await this.props.staffStore.pushStaff(
      this.no.current.value,
      this.name.current.value,
      this.phone.current.value,
      this.email.current.value,
      this.pass.current.value,
      this.state.num,
      this.state.img
    );
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
  onChangeSelect(e) {
    this.typeId = e.target.value;
    this.setState({
      num: e.target.value,
    });
  }

  onBlurRSid() {
    if (this.no.current.value === "") this.setState({ isAlertNo: true });
    else this.setState({ isAlertNo: false });
  }
  onBlurRName() {
    if (this.name.current.value === "") this.setState({ isAlertName: true });
    else this.setState({ isAlertName: false });
  }
  onBlurRPri() {
    if (this.email.current.value === "") this.setState({ isAlertMail: true });
    else this.setState({ isAlertMail: false });
  }
  onBlurRUni() {
    if (this.pass.current.value === "") this.setState({ isAlertPass: true });
    else this.setState({ isAlertPass: false });
  }

  render() {
    const alertStaffId = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống mã nhân viên
      </span>
    );
    const alertStaffName = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống tên nhân viên
      </span>
    );
    const alertStaffMail = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Email không được để trống
      </span>
    );
    const alertStaffPass = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Mật khẩu không được để trống
      </span>
    );
    const element = this.props.staffStore.listRole.map(
      (user, index) => {
        return (<option key={index} value={user.id}>{user.name}</option>);
      }
    );
    return (
      <div className="container">
        <div className="row">
          <div class="col-6">
            <div class="form-group row">
              <label
                for="input1"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Mã nhân viên:
              </label>
              <div class="col-sm-7">
                <input
                  name="resourcesNo"
                  type="text"
                  class="form-control form-control-sm"
                  id="input1"
                  ref={this.no}
                  onBlur={() => this.onBlurRSid()}
                  required
                />
                {this.state.isAlertNo ? alertStaffId : ""}
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputName"
                className="col-sm-4 col-form-label form-control-sm"
              >
                Tên nhân viên:
              </label>
              <div className="col-sm-7">
                <input
                  name="inputName"
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  ref={this.name}
                  onBlur={() => this.onBlurRName()}
                  required
                />
                {this.state.isAlertName ? alertStaffName : ""}
              </div>
            </div>

            <div class="form-group row">
              <label
                for="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Số điện thoại:
              </label>
              <div class="col-sm-7">
                <input
                  ng-model="inputPrice"
                  type="phone"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder="098"
                  ref={this.phone}
                />
              </div>
            </div>

            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Email:
              </label>
              <div class="col-sm-7">
                <input
                  type="email"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder="abc@gmail.com"
                  ref={this.email}
                  onBlur={() => this.onBlurRPri()}
                  required
                />
                {this.state.isAlertMail ? alertStaffMail : ""}
              </div>
            </div>

            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Mật khẩu:
              </label>
              <div class="col-sm-7">
                <input
                  type="password"
                  class="form-control form-control-sm "
                  id="inputNum"
                  ref={this.pass}
                  onBlur={() => this.onBlurRUni()}
                  required
                />
                {this.state.isAlertPass ? alertStaffPass : ""}
              </div>
            </div>

            <div class="form-group row">
              <label
                for="inputType"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Chức vụ:
              </label>
              <div className="col-sm-7">
                <select
                  name="TypeId"
                  className="form-control-sm"
                  id="inputType"
                  required
                  onChange={(e) => this.onChangeSelect(e)}
                >
                  {element}
                </select>
              </div>
            </div>
            
           
          </div>
          <div className="form-group row">
            <label
              htmlFor="inputType"
              className="col-sm-4 col-form-label form-control-sm"
            />
          </div>
          <div class="col-6">
            <label
              htmlFor="inputNum"
              class="col-sm-4 col-form-label form-control-sm"
            >
              Hình Ảnh:
            </label>
            <div class="container">
              <div class="row">
                <div class="card-body border">
                <div  className="card-img-top p-4">
                    <img width={250} height={250} id="imgTest" src={this.state.img}/>
                  </div>
                </div>
              </div>
              <div class="row mt-1">
                <div class="file-field">
                  <div class="btn form-control-file btn-sm btn-success ml-2">
                  <FileBase64
                      multiple={ false }
                      onDone={ this.getFiles.bind(this) } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right mt-3">
          <button
            type="button"
            class="btn btn-danger"
            id="modal-button-save"
            onClick={() => this.onCreate()}
          >
            Lưu & thêm mới
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Đóng
          </button>
        </div>
      </div>
    );
  }
}
export default inject("staffStore")(observer(Info));
