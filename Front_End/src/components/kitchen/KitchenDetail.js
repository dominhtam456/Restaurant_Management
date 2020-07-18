import React, { Component } from "react";
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx';

class KitchenDetail extends Component {
  
  changeStatus(status, invoiceId, foodId) {
    this.props.kitchenStore.updateStatusFood(status, invoiceId, foodId);
  }

  onClickCancel(food) {
    this.props.kitchenStore.setCurrentFoodModal(food);
  }
  
  cancelButton = () => {
    return (
    <button onClick={()=>{this.onClickCancel(this.props.food)}} type="button" className="btn btn-danger" data-toggle="modal" data-target="#problemDescModal">
      Cancel
    </button>)
  }

  showButton() {
    if(this.props.food.status === "queue")
      return (
        <button type="button" className="btn btn-primary text-center" 
          onClick={() => this.changeStatus(this.props.food.status,this.props.food.hoadon_id,this.props.food.monan_id)}>
          Pending
      </button>)

    if(this.props.food.status === "processing")
    return (
      <button type="button" className="btn btn-warning text-center" 
        onClick={() => this.changeStatus(this.props.food.status,this.props.food.hoadon_id,this.props.food.monan_id)}>
        Processing
    </button>)

    if(this.props.food.status === "ready")
    return (
      <button type="button" className="btn btn-success text-center" >
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
            <div className="col-2 text-center"> {this.props.food.soluong}</div>

            <div className="float-md-right mb-3 mr-3">
              {this.showButton()}
              {this.props.food.status === "ready" ? '' : this.cancelButton()}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default inject("kitchenStore")(observer(KitchenDetail));
