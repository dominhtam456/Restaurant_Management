import React, { Component } from "react";
import InsertFoodButton from "./InsertForm/InsertFoodButton";
import FoodList from "./food_list/FoodList";

export default class Food extends Component {
  render() {
    return (
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0 bg-primary">
                <div>
                  <div className="float-left">
                    <h3 className="mb-0 modal-title" style={{ color: "white" }}>
                      Thực Đơn
                    </h3>
                  </div>
                  <div className="float-md-right d-inline-block">
                    <form>
                      <div className="input-group md-form form-sm form-2 pl-0">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <InsertFoodButton />
              </div>
              <FoodList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
