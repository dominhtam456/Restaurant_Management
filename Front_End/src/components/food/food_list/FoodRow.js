import React, { Component } from "react";
import { inject , observer } from 'mobx-react';

class FoodRow extends Component {
  componentDidMount() {
    this.props.foodStore.getFood();
  }
  render() {
    return (
      <tr
        data-toggle="collapse"
        data-target={`#id${this.props.food.id}`}
        className="clickable"
        aria-expanded="false"
      >
        <th>
          <span>{this.props.index+1}</span>
        </th>
        <th scope="row">
          <div className="media align-items-center">
            <div className="media-body">
              <span className="mb-0 text-sm">
                {this.props.food.no}
              </span>
            </div>
          </div>
        </th>
        <td>
          {this.props.food.name}
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.food.price}đ
          </span>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">
              {this.props.food.isActive === 1 ? "Active" : "Deactive"}
            </span>
          </div>
        </td>
      </tr>
    );
  }
}
export default inject("foodStore","tableStore")(observer(FoodRow))