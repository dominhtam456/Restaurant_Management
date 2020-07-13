import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div class="col-6">
        <label htmlFor="inputNum" class="col-sm-4 col-form-label form-control-sm">
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
                <input
                  type="file"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
