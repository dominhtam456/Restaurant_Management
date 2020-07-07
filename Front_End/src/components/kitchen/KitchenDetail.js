import React, { Component } from "react";

class KitchenDetail extends Component {
  showButton() {
    if(this.props.food.status === "queue")
      return (
        <button type="button" className="btn btn-primary text-center">
          Pending
      </button>)

    if(this.props.food.status === "processing")
    return (
      <button type="button" className="btn btn-warning text-center">
        Processing
    </button>)

    if(this.props.food.status === "ready")
    return (
      <button type="button" className="btn btn-success text-center">
        Ready
    </button>)
  }
  render() {
    return (
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          <div className="row">
            <div className="col-1 "> {this.props.index + 1} </div>
            <div className="col-1 "> {this.props.food.ban[0].ban.name}</div>
            <div className="col-5 text-center"> {this.props.food.tenMonAn}</div>
            <div className="col-3 text-center"> {this.props.food.soluong}</div>

            <div className="float-md-right mb-3 mr-3">
              {this.showButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default KitchenDetail;
