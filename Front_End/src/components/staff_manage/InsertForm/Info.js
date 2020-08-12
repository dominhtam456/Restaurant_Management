import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

class Info extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.phone = React.createRef();
    this.email = React.createRef();
    this.pass = React.createRef();
    this.typeId = React.createRef();
    //this.image = React.createRef();

    this.state = {
      num: "",
    };
  }
  componentDidMount() {
    this.props.staffStore.getRole();
  }
  async onCreate() {
    await this.props.staffStore.pushStaff(
      this.no.current.value,
      this.name.current.value,
      this.phone.current.value,
      this.email.current.value,
      this.pass.current.value,
      this.state.num,
      //this.image.current.value
    );
    await this.props.staffStore.getStaffs();
  }
  onChangeSelect(e) {
    this.typeId = e.target.value;
    this.setState({
      num: e.target.value,
    });
  }
  render() {
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
                  required
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  Không được để trống mã nguyên liệu
                </span>
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
                  required
                />
                <span style={{ fontSize: 10, color: "red" }}>
                  Không được để trống tên món ăn
                </span>
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
                />
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
                />
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
                <div>
                  <span style={{ fontSize: 10, color: "red" }}>
                    Không được để trống loại món ăn
                  </span>
                  
                </div>
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
                  <div class="col-6">
                    <img width={250} height={250} id="imgTest" />
                  </div>
                </div>
                <div class="col-6"></div>
              </div>
              <div class="row mt-1">
                <div class="file-field">
                  <div class="btn form-control-file btn-sm btn-success ml-2">
                    <input
                      id="inputFileToLoad"
                      type="file"
                      onChange={() => this.encodeImageFileAsURL}
                    />
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
            onClick={() => this.onCreate()}
            data-dismiss="modal"
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
