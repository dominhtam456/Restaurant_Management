import React, { Component } from "react";
import InsertStatis from "./InsertStatis";
import TrendFood from "./showstatis/TrendFood";
import ListBill from "./showstatis/ListBill";
import TotalBill from "./showstatis/TotalBill";

class Statistical extends Component {
  render() {
    return (
      <div className="container-fluid mt--7">
        <div class="row">
          <div class="col">
            <div class="card shadow card-with-satistical">
              <div class="card-header bg-primary">
                <h3 class="mb-0" style={{ color: "white" }}>
                  Báo Cáo Thống Kê
                </h3>
              </div>
              <div class="card-body">
                <InsertStatis />
                <div class="row">
                  <div class="table-responsive">
                    <TrendFood />
                    <ListBill />
                    <TotalBill />
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

export default Statistical;
