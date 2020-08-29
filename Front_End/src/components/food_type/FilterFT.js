import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class FilterFT extends Component {
  constructor(props) {
    super(props);
    this.act = React.createRef();
    this.deact = React.createRef();
  }
  onclick() {
    let act1 = "";
    let deact1 = "";
    this.act.current.checked ? (act1 = "1") : (act1 = "-1");
    //console.log(act1);
    this.deact.current.checked ? (deact1 = "0") : (deact1 = "-1");
    //console.log(deact1);
    this.props.foodTypeStore.filterTypeFoods(act1, deact1);
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Hiện trạng:</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="checkbox"
                id="1"
                name="Active"
                value="1"
                ref={this.act}
                className="check"
              />
              Active
            </td>
            <td>
              <input
                type="checkbox"
                id="0"
                name="Deactive"
                value="0"
                ref={this.deact}
                className="check"
              />
              Deactive
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>
              <input type="button" value="Lọc" onClick={() => this.onclick()} />
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default inject("foodTypeStore")(observer(FilterFT));
