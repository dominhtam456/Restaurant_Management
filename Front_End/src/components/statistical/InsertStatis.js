import React, { Component } from "react";

class InsertStatis extends Component {
  render() {
    return (
      <div>
        <form>
          <div class="row">
            <div class="col-12">
              <div class="form-group row">
                <label for="inputNum" class="col-form-label form-control-sm">
                  Ngày Bắt Đầu
                </label>
                <div class="col-sm-2">
                  <input
                    ng-model="inputStartDate"
                    type="date"
                    class="form-control form-control-sm "
                    id="inputNum"
                    placeholder=""
                  />
                </div>
                <label for="inputNum" class="col-form-label form-control-sm">
                  Ngày Kết Thúc
                </label>
                <div class="col-sm-2">
                  <input
                    ng-model="inputEndDate"
                    type="date"
                    class="form-control form-control-sm "
                    id="inputNum"
                    placeholder="0"
                  />
                </div>

                <div class="form-check col-2">
                  <label class="form-check-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="optradio"
                      ng-model="radio"
                      value="topFoods"
                    />
                    Món ăn bán chạy
                  </label>
                </div>
                <div class="form-check  col-2">
                  <label class="form-check-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="optradio"
                      ng-model="radio"
                      value="listBill"
                    />
                    Liệt kê hóa đơn
                  </label>
                </div>
                <div class="form-check  col-1 p-1">
                  <label class="form-check-label">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="optradio"
                      ng-model="radio"
                      value="totalSale"
                    />
                    Tổng tiền
                  </label>
                </div>
              </div>
            </div>
            <button
              type="button"
              ng-click="View()"
              class=" btn btn-danger mb-3"
            >
              Hiển thị
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InsertStatis;
