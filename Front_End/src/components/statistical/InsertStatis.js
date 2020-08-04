import React, { Component } from "react";
import { inject , observer } from 'mobx-react'

class InsertStatis extends Component {
  
  onChangeRadio(e){
    this.props.statisticStore.setCurrentContent(e.target.value);
  }

  onChangeFromDate(e){
    let toDate = Date.parse(this.props.statisticStore.toDate);
    let fromDate = Date.parse(e.target.value);

    if(fromDate > toDate) {
      alert('Ngày không hợp lệ');
      e.target.value = this.props.statisticStore.fromDate;
    }
    else this.props.statisticStore.setFromDate(e.target.value);
  }

  onChangeToDate(e){
    let toDate = Date.parse(e.target.value);
    let fromDate = Date.parse(this.props.statisticStore.fromDate);

    if(fromDate > toDate) {
      alert('Ngày không hợp lệ');
      e.target.value = this.props.statisticStore.toDate;
    }
    else this.props.statisticStore.setToDate(e.target.value);
  }

  onSearch(){
    this.props.statisticStore.getListTrendingFood();
    this.props.statisticStore.getListInvoiceByDate();
    this.props.statisticStore.getSum();
  }

  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-12">
              <div className="form-group row">
                <label  className="col-form-label form-control-sm">
                  Ngày Bắt Đầu
                </label>
                <div className="col-sm-2">
                  <input
                    type="date"
                    className="form-control form-control-sm "
                    id="inputNum"
                    onChange={(e) => this.onChangeFromDate(e)}
                    defaultValue={(new Date()).toISOString().slice(0,10)}
                  />
                </div>
                <label className="col-form-label form-control-sm">
                  Ngày Kết Thúc
                </label>
                <div className="col-sm-2">
                  <input
                    type="date"
                    className="form-control form-control-sm "
                    id="inputNum"
                    onChange={(e) => this.onChangeToDate(e)}
                    defaultValue={(new Date()).toISOString().slice(0,10)}
                  />
                </div>

                <div className="form-check col-2">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                      value="topFoods"
                      onChange={(e) => this.onChangeRadio(e)}
                    />
                    Món ăn bán chạy
                  </label>
                </div>
                <div className="form-check  col-2">
                  <label className="form-check-label">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="optradio"
                      value="listBill"
                      onChange={(e) => this.onChangeRadio(e)}
                      defaultChecked={true}
                    />
                    Liệt kê hóa đơn
                  </label>
                </div>
                
              </div>
            </div>
            <button
              type="button"
              className=" btn btn-danger mb-3"
              onClick={() => this.onSearch()}
            >
              Hiển thị
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default inject("statisticStore")(observer(InsertStatis));
