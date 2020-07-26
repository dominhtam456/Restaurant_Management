import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div class="col-6">
        <div class="form-group row">
          <label for="input1" class="col-sm-4 col-form-label form-control-sm">
            Mã nhân viên:
          </label>
          <div class="col-sm-7">
            <input
              name="resourcesNo"
              type="text"
              class="form-control form-control-sm"
              id="input1"
              required
            />
            <span
              style={{ fontSize: "10px", color: "red" }}
            >
              Không được để trống mã 
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
              placeholder={0}
              required
            />
            <span style={{ fontSize: 10, color: "red" }}>
              Không được để trống
            </span>
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Số điện thoại:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="inputName"
              placeholder={0}
              required
            />
            <span style={{ fontSize: 10, color: "red" }}>
              Không được để trống 
            </span>
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Email:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="inputName"
              placeholder={0}
              required
            />
            <span style={{ fontSize: 10, color: "red" }}>
              Không được để trống 
            </span>
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Mật khẩu:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="inputName"
              placeholder={0}
              required
            />
            <span style={{ fontSize: 10, color: "red" }}>
              Không được để trống 
            </span>
          </div>
        </div>

        <div class="form-group row">
          <label
            for="inputType"
            class="col-sm-4 col-form-label form-control-sm"
          >
            Chức vụ:
          </label>
          <div class="col-sm-7">
            <select
              name="TypeId"
              class="form-control-sm"
              id="inputType"
              ng-model="TypeId"
              required
            >
              <option></option>
            </select>
            <p
              style={{ fontSize: "10px", color: "red" }}
            >
              Không được để trống 
            </p>
          </div>
        </div>
      </div>
    )
  }
}
