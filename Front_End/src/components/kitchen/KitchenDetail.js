import React, { Component } from "react";

class KitchenDetail extends Component {
  render() {
    return (
      <div class="list-group">
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col-1"> </div>
            <div class="col-1"> </div>
            <div class="col-5"> </div>
            <div class="col-3"> </div>

            <div class="float-md-right mb-3 mr-3">
              <button type="button" class="btn btn-primary">
                {" "}
                Hoàn Tất{" "}
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default KitchenDetail;
