import React, { Component } from "react";
import KitchenDetail from "./KitchenDetail";
import DescriptionModal from './DescriptionModal'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class Kitchen extends Component {
  componentDidMount() {
    this.props.kitchenStore.getListUncompledFood();
  }
  render() {
    const element = this.props.kitchenStore.listUncompledFood.map((food, index) => {
      return <KitchenDetail food={food} key={index} index={index}/>
    })
    console.log(toJS(this.props.kitchenStore.listUncompledFood))
    return (
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col">
            <div className="card shadow card-with-satistical ">
              <div className="card-header bg-primary">
                <h3 className="mb-0 modal-title" style={{ color: "white" }}>
                  Nhà bếp
                </h3>
              </div>

              <div className="card border-top-0 border-right-0 border-left-0">
                <div className="card-body ">
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action list-group-item-info">
                      <div className="row">
                        <div className="col-1 text-center" > STT </div>
                        <div className="col-1 text-center" > Bàn </div>
                        <div className="col-5 text-center" > Tên món ăn </div>
                        <div className="col-3 text-center" > Số lượng </div>
                        <div className="float-md-right mb-3 mr-3 text-center" > Trạng thái </div>
                      </div>
                      <div>
                        {element}
                        <DescriptionModal />
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

export default inject("kitchenStore")(observer(Kitchen));
