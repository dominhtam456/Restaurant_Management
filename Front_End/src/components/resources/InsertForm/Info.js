import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import FileBase64 from 'react-file-base64';

class Info extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.typeId = React.createRef();
    this.date = React.createRef();
    this.image = React.createRef();
    
    this.state=({
      num: 1,
      img: "",
      isAlertNo: false,
      isAlertName: false,
      isAlertPrice: false
    })
  }

  getFiles(files){
    this.image = files.base64;
    this.setState({
      img: files.base64
    })

    //console.log(this.image);
  }

  async onCreate() {
    await this.props.resourceStore.pushResource(
      this.no.current.value,
      this.name.current.value,
      this.price.current.value,
      this.date.current.value,
      this.state.img,
      this.state.num,
      '',
    );
    await this.props.resourceStore.getResource();
  }

  componentDidMount() {
    this.props.resourceStore.getTypeResource();
  }

  onChangeSelect(e) {
    this.typeId=e.target.value;
    this.setState({
      num:e.target.value
    })
  }

  onBlurRSid() {
    if (this.no.current.value === "") this.setState({ isAlertNo: true });
    else this.setState({ isAlertNo: false });
  }
  onBlurRName(){
    if (this.name.current.value === "") this.setState({ isAlertName: true});
    else this.setState({ isAlertName: false});
  }
  onBlurRPri(){
    if (this.price.current.value === "") this.setState({isAlertPrice: true});
    else this.setState({ isAlertPrice: false });
  }
  onBlurRDate(){
    if (this.unit.current.value === "") this.setState({ isAlertUnit: true});
    else this.setState({ isAlertUnit: false });
  }

  render() {
    const alertResoucreId = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống mã nguyên liệu
      </span>
    );
    const alertResoucreName = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống tên nguyên liệu
      </span>
    );
    const alertResoucrePrice = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Giá tiền không được để trống
      </span>
    )
    const element = this.props.resourceStore.listTypeResources.map(
      (resource, index) => {
        return (<option key={index} value={resource.id} selected={index === 0? true : false}>{resource.name}</option>);
      }
    );
    return (
      <div className="container">
        <div className="row">
          <div class="col-6">
            <div class="form-group row">
              <label
                for="input1"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Mã nguyên liệu:
              </label>
              <div class="col-sm-7">
                <input
                  name="resourcesNo"
                  type="text"
                  class="form-control form-control-sm"
                  id="input1"
                  ref={this.no}
                  onBlur={() => this.onBlurRSid()}
                  required
                />
                {this.state.isAlertNo ? alertResoucreId : ""}
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="inputName"
                className="col-sm-4 col-form-label form-control-sm"
              >
                Tên nguyên liệu:
              </label>
              <div className="col-sm-7">
                <input
                  name="inputName"
                  type="text"
                  className="form-control form-control-sm"
                  id="inputName"
                  ref={this.name}
                  onBlur={() => this.onBlurRName()}
                  required
                />
                {this.state.isAlertName ? alertResoucreName : ""}
              </div>
            </div>

            <div class="form-group row">
              <label
                for="inputType"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Loại nguyên liệu:
              </label>
              <div className="col-sm-7">
                <select
                  name="TypeId"
                  className="form-control-sm"
                  id="inputType"
                  required
                  onChange={(e) => this.onChangeSelect(e)}
                >
                  {element}
                </select>
                <div>
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
                Giá nhập:
              </label>
              <div class="col-sm-7">
                <input
                  ng-model="inputPrice"
                  type="text"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder={0}
                  ref={this.price}
                  onBlur={() => this.onBlurRPri()}
                />
                {this.state.isAlertPrice ? alertResoucrePrice : ""}
              </div>
            </div>
            <div class="form-group row">
              <label
                htmlFor="inputNum"
                class="col-sm-4 col-form-label form-control-sm"
              >
                Hạn Sử Dụng:
              </label>
              <div class="col-sm-7">
                <input
                  ng-model="inputDate"
                  type="date"
                  class="form-control form-control-sm "
                  id="inputNum"
                  placeholder="dd/MM/yyyy"
                  ref={this.date}
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
                  <div  className="card-img-top p-4">
                    <img width={250} height={250} id="imgTest" src={this.state.img}/>
                  </div>
                </div>
              </div>
              <div class="row mt-1">
                <div class="file-field">
                  <div class="btn form-control-file btn-sm btn-success ml-2">
                    {/* <input
                      id="inputFileToLoad"
                      type="file"
                      onChange={() => this.encodeImageFileAsURL}
                    /> */}
                    <FileBase64
                      multiple={ false }
                      onDone={ this.getFiles.bind(this) } />
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
export default inject("resourceStore")(observer(Info));
