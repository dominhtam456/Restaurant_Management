import React, { Component } from "react";
import FoodRow from "./FoodRow";
import FoodDetail from "../food_detail/FoodDetail";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import ReactPaginate from "react-paginate";
import FilterFood from "../FilterFood";

class FoodList extends Component {
  componentDidMount() {
    // this.props.tableStore.getFoods();
    this.props.foodStore.getFood();
  }

  merge(element, element1) {
    let element3 = [];
    for (let i = 0; i < element.length; i++) {
      element3.push(element[i]);
      element3.push(element1[i]);
    }

    return element3;
  }

  render() {
    //console.log('render', toJS(this.props.foodStore.listFoods))
    const element = this.props.foodStore.listFoods.map((food, index) => {
      return <FoodRow food={food} key={index} index={index} />;
    });

    const element1 = this.props.foodStore.listFoods.map((food, index) => {
      return <FoodDetail food={food} key={index} index={index} />;
    });

    const element2 = this.merge(element, element1);
    // console.log(element2);

    return (
      <div>
        <div className="float-left">
          <i
            className="fas fa-filter"
            aria-hidden="true"
            data-toggle="collapse"
            data-target="#ffilter"
          ></i>
          <div id="ffilter" className="collapse">
            <FilterFood />
          </div>
        </div>

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
            <tbody>{element2}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default inject("foodStore")(observer(FoodList));
