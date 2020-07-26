import React, { Component } from "react";
import { inject , observer } from 'mobx-react'

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.typename = React.createRef();  
    this.date = React.createRef();
    this.isactive = React.createRef();
    //this.image = React.createRef();
    }

  onupdate(){
    this.props.resourceStore.pushResource(this.no.current.value,
                                          this.name.current.value, 
                                          this.price.current.value, 
                                          this.typename.value,
                                          this.date.current.value, 
                                          this.isactive.value)
}
  render() {
    const listType= this.props.resourceStore.listTypeResource.map((resource, index)=>{
      return <option value={resource.id}>
                {resource.name}
              </option>
    })
    
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Món Ăn
            </h2>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form ng-submit="updateFood()">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group row">
                      <label
                        htmlFor="input1"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Mã nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="input1"
                          ref={this.no}
                        />
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
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Loại nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <select className="form-control-sm" id="inputType" ref={this.typename}>
                          {listType}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputNum"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Giá nhập:
                      </label>
                      <div className="col-sm-7">
                        <input
                          ng-model="inputPrice"
                          type="text"
                          class="form-control form-control-sm "
                          id="inputNum"
                          placeholder={0}
                          ref={this.price}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Hạn sử dụng:
                      </label>
                      <div className="col-sm-7">
                        <input
                          ng-model="inputDate"
                          type="date"
                          class="form-control form-control-sm "
                          id="inputNum"
                          placeholder={0}
                          ref={this.date}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Hiện trạng:
                      </label>
                      <div className="col-sm-7">
                        <select ref={this.isactive}>
                          <option value="1">Active</option>
                          <option value="0">Deactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="col-6">
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
                              <img width={150} height={150} alt="" />
                            </div>
                          </div>
                          <div class="col-6"></div>
                        </div>
                        <div class="row mt-1">
                          <div class="file-field">
                            <div class="btn form-control-file btn-sm btn-success ml-2">
                              <input type="file" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="submit" className="btn btn-danger" onClick={() => this.onupdate()}>
                  Lưu
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default inject("resourceStore")(observer(UpdateForm))