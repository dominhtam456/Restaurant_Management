import React, { Component } from "react";
import FoodRow from "./FoodRow";
import FoodDetail from "../food_detail/FoodDetail";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";


class FoodList extends Component {
  componentDidMount() {
    // this.props.tableStore.getFoods();
    this.props.foodStore.getFood();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.update != this.props.update) this.props.foodStore.getFood();
  }

  render() {
    const element = this.props.foodStore.listFoods.map((food, index) => {
      return <FoodRow food={food} key={food.no} index={index} />;
    });

    const element1 = this.props.foodStore.listFoods.map((food, index) => {
      return <FoodDetail food={food} key={food.no} index={index} />;
    });
    return (
      <div className="table-responsive">
        <table
          className="table align-items-center table-flush accordion menu-table"
          id="accordionRow"
        >
          <thead className="thead-light">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Mã Món Ăn</th>
              <th scope="col">Tên Món Ăn</th>
              <th scope="col">Giá bán </th>
              <th scope="col">Hiện trạng</th>
            </tr>
          </thead>
          <tbody>
            {element}
            {element1}
          </tbody>
        </table>
      </div>
    );
  }
}
export default inject("foodStore")(observer(FoodList));
