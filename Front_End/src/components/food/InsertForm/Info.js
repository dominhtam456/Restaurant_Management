import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

class Info extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.unit = React.createRef();
    this.typeId = React.createRef();
    this.desc= React.createRef();
    this.state=({
      num:""
    })
  }

  async onCreate(){
    await this.props.foodStore.pushFood(
      this.no.current.value,
      this.name.current.value, 
      this.price.current.value, 
      this.unit.current.value,
      this.state.num,
      this.desc.current.value
    );
    await this.props.tableStore.getFoods();
  }

  onChangeSelect(e) {
    this.typeId=e.target.value;
    this.setState({
      num:e.target.value
    })
  }

  componentDidMount() {
    this.props.foodStore.getTypeFood();
    this.props.tableStore.getFoods();
  }
  render() {
    const typeFood = this.props.foodStore.listTypeFoods.map((food, index) => {
      return (
        <option key={index} value={food.id}>
          {food.name}
        </option>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div class="col-6">
            <div class="form-group row">
              <label
                for="input1"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Mã món ăn:
              </label>
              <div class="col-sm-7">
                <input
                  name="resourcesNo"
                  type="text"
                  class="form-control form-control-sm"
                  id="input1"
                  ref={this.no}
                  required
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  Không được để trống mã nguyên liệu
                </span>
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputName"
                className="col-sm-4 col-form-label form-control-sm"
              >
                Tên món ăn:
              </label>
              <div className="col-sm-7">
                <input
                  name="inputName"
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  ref={this.name}
                  required
                />
                <span style={{ fontSize: 10, color: "red" }}>
                  Không được để trống tên món ăn
                </span>
              </div>
            </div>

            <div class="form-group row">
              <label
                for="inputType"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Loại món ăn:
              </label>
              <div className="col-sm-7">
                <select
                  name="TypeId"
                  className="form-control-sm"
                  id="inputType"
                  required
                  onChange={(e) => this.onChangeSelect(e)}
                >
                  {typeFood}
                </select>
                <div>
                  <span style={{ fontSize: 10, color: "red" }}>
                    Không được để trống loại món ăn
                  </span>
                  <span className="fas fa-plus-square mt-0 ">
                    <a data-toggle="modal" data-target="#addType">
                      Thêm loại
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Giá bán:
              </label>
              <div class="col-sm-7">
                <input
                  ng-model="inputPrice"
                  type="num"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder={0}
                  ref={this.price}
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Đơn vị tính:
              </label>
              <div class="col-sm-7">
                <input
                  type="text"
                  class="form-control form-control-sm "
                  id="inputNum"
                  ref={this.unit}
                />
              </div>
            </div>
            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Thành phần:
              </label>
              <div class="col-sm-7">
                <textarea
                  type="text"
                  class="form-control form-control-sm "
                  id="inputNum"
                  ref={this.desc}
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label
              htmlFor="inputType"
              className="col-sm-4 col-form-label form-control-sm"
            />
          </div>
          <div class="col-6">
            <label
              htmlFor="inputNum"
              class="col-sm-4 col-form-label form-control-sm"
            >
              Hình Ảnh:
            </label>
            <div class="container">
              <div class="row">
                <div class="card-body border">
                  <div class="col-6">
                    <img width={150} height={150} id="imgTest" />
                  </div>
                </div>
                <div class="col-6"></div>
              </div>
              <div class="row mt-1">
                <div class="file-field">
                  <div class="btn form-control-file btn-sm btn-success ml-2">
                    <input
                      id="inputFileToLoad"
                      type="file"
                      onChange={() => this.encodeImageFileAsURL}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right mt-3">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => this.onCreate()}
            data-dismiss="modal"
          >
            Lưu & thêm mới
          </button>
          <button
            type="button"
            ng-click="test()"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Đóng
          </button>
        </div>
      </div>
    );
  }
}
export default inject("foodStore","tableStore")(observer(Info));
