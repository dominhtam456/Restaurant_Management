import React, { Component } from "react";
import InsertStatis from "./InsertStatis";
import TrendFood from "./showstatis/TrendFood";
import ListBill from "./showstatis/ListBill";
import TotalBill from "./showstatis/TotalBill";
import { inject , observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

class Statistical extends Component {

  async componentDidMount(){
    await this.props.loginStore.checkValid();
    if(!this.props.loginStore.isValid) this.props.history.push('/login')
    else{
      this.props.statisticStore.getListTrendingFood();
      this.props.statisticStore.getListInvoiceByDate();
      this.props.statisticStore.getSum();
    }
  }

  showContent() {
    if(this.props.statisticStore.currentContent === 'topFoods') return <TrendFood />;
    if(this.props.statisticStore.currentContent === 'listBill') return <ListBill />;
  }
  render() {
    if(!this.props.loginStore.isValid) return null;
    return (
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col">
            <div className="card shadow card-with-satistical">
              <div className="card-header bg-primary">
                <h3 className="mb-0" style={{ color: "white" }}>
                  Báo Cáo Thống Kê
                </h3>
              </div>
              <div className="card-body">
                <InsertStatis />
                <div className="row">
                  <div className="table-responsive">
                    {this.showContent()}
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

export default withRouter(inject("statisticStore","loginStore")(observer(Statistical)));
