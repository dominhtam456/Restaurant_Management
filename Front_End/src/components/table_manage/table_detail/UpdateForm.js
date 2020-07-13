import React, { Component } from "react";

export default class UpdateForm extends Component {
  render() {
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Món Ăn
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
                        Mã nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="input1"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Tên nguyên liệuliệu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Loại nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <select className="form-control-sm" id="inputType">
                          <option value="{{x.id}}">
                            {"{"}
                            {"{"}x.loaimonan_NAME{"}"}
                            {"}"}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputNum"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Giá nhập:
                      </label>
                      <div className="col-sm-7">
                        <input
                          ng-model="inputPrice"
                          type="text"
                          class="form-control form-control-sm "
                          id="inputNum"
                          placeholder={0}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Hạn sử dụng:
                      </label>
                      <div className="col-sm-7">
                        <input
                          ng-model="inputDate"
                          type="date"
                          class="form-control form-control-sm "
                          id="inputNum"
                          placeholder={0}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="col-6">
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
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="submit" className="btn btn-danger">
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
