import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div class="col-6">
        <div class="form-group row">
          <label for="input1" class="col-sm-4 col-form-label form-control-sm">
            Mã nguyên liệu:
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
              placeholder={0}
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
              Không được để trống loại nguyên liệu
            </p>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputNum" class="col-sm-4 col-form-label form-control-sm">
            Giá nhập:
          </label>
          <div class="col-sm-7">
            <input
              ng-model="inputPrice"
              type="text"
              class="form-control form-control-sm "
              id="inputNum"
              placeholder={0}
            />
          </div>
        </div>
        <div class="form-group row">
          <label htmlFor="inputNum" class="col-sm-4 col-form-label form-control-sm">
            Hạn Sử Dụng:
          </label>
          <div class="col-sm-7">
            <input
              ng-model="inputDate"
              type="date"
              class="form-control form-control-sm "
              id="inputNum"
              placeholder={0}
            />
          </div>
        </div>
      </div>
    )
  }
}
