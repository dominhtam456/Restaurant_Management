import React, { Component } from "react";
import KitchenDetail from "./KitchenDetail";

export default class Kitchen extends Component {
  render() {
    return (
      <div className="container-fluid mt--7">
        <div class="row">
          <div class="col">
            <div class="card shadow card-with-satistical ">
              <div class="card-header bg-primary">
                <h3 class="mb-0 modal-title" style={{ color: "white" }}>
                  {" "}
                  Nhà bếp{" "}
                </h3>{" "}
              </div>

              <div class="card border-top-0 border-right-0 border-left-0">
                <div class="card-body ">
                  <div class="list-group">
                    <div class="list-group-item list-group-item-action list-group-item-info">
                      <div class="row">
                        <div class="col-1" style={{textAlign:"center"}}> STT </div>
                        <div class="col-1" style={{textAlign:"center"}}> Bàn </div>
                        <div class="col-5" style={{textAlign:"center"}}> Tên món ăn </div>
                        <div class="col-3" style={{textAlign:"center"}}> Số lượng </div>
                        <div class="float-md-right mb-3 mr-3" style={{textAlign:"center"}}> Trạng thái </div>
                      </div>
                      <div>
                        <KitchenDetail />
                        <KitchenDetail />
                        <KitchenDetail />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
