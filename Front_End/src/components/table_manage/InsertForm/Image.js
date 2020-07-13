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
              <img className="card-img-top p-4" 
                            src={ process.env.PUBLIC_URL + "/img/icons/dinner-table.png" } 
                            alt="Card image cap" width="120px" height="150px" />
              </div>
            </div>
            <div class="col-6"></div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Image;
