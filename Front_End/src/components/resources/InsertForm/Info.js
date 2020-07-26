import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.typename = React.createRef();
    this.date = React.createRef();
    this.isactive = React.createRef();
    //this.image = React.createRef();
  }

  onCreate() {
    this.props.resourceStore.pushResource(
      this.no.current.value,
      this.name.current.value,
      this.price.current.value,
      this.typename.value,
      this.date.current.value,
      this.isactive.value
    );
  }

  render() {
    const element = this.props.resourceStore.listTypeResource.map(
      (resource, index) => {
        return <option value={resource.id}>{resource.name}</option>;
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
                Mã nguyên liệu:
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
                Tên món ăn:
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
                for="inputType"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Loại nguyên liệu:
              </label>
              <div className="col-sm-7">
                <select
                  name="TypeId"
                  className="form-control-sm"
                  id="inputType"
                  required
                  ref={this.typename}
                >
                  {element}
                </select>
                <div>
                  <span style={{ fontSize: 10, color: "red" }}>
                    Không được để trống loại món ăn
                  </span>
                  <span className="fas fa-plus-square mt-0 ">
                    <a data-toggle="modal" data-target="#addType">
                      Thêm loại
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Giá nhập:
              </label>
              <div class="col-sm-7">
                <input
                  ng-model="inputPrice"
                  type="text"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder={0}
                  ref={this.price}
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Hạn Sử Dụng:
              </label>
              <div class="col-sm-7">
                <input
                  ng-model="inputDate"
                  type="date"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder="dd/MM/yyyy"
                  ref={this.date}
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Hiện trạng:
              </label>
              <div class="col-sm-7">
                <select ref={this.isactive}>
                  <option value="1">Active</option>
                  <option value="0">Deactive</option>
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
                  <div class="col-6">
                    <img width={150} height={150} alt="" />
                  </div>
                </div>
                <div class="col-6"></div>
              </div>
              <div class="row mt-1">
                <div class="file-field">
                  <div class="btn form-control-file btn-sm btn-success ml-2">
                    <input type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right mt-3">
          <button
            type="submit"
            class="btn btn-danger"
            onClick={() => this.onCreate()}
            data-dismiss="modal"
          >
            Lưu & thêm mới
          </button>
          <button
            type="button"
            ng-click="test()"
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
export default inject("resourceStore")(observer(Info));
