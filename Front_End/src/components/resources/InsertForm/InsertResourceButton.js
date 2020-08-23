import React, { Component } from "react";
import InsertForm from "./InsertForm";
import Info from "./Info";
import { inject , observer } from 'mobx-react'

class InsertResourceButton extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.unit = React.createRef();
    }
  onclick(){
    this.props.resourceStore.pushTypeResource(this.name.current.value, this.unit.current.value);
    this.props.resourceStore.getTypeResource();
  }
  render() {
    return (
      <div className="float-md-right mb-3 mr-3">
        <button
          type="button"
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modalAddMaterials"
        >
          <i className="fas fa-plus-circle"></i> Thêm Mới 
        </button>
        <div
          className="modal fade"
          id="modalAddMaterials"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalAddMaterials"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content ">
              <div className="modal-header bg-primary">
                <h2
                  className="modal-title"
                  id="modalAddMaterials"
                  style={{ color: "white" }}
                >
                  Thêm Nguyên Liệu
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Thông Tin
                    </a>
                  </li>
                </ul>
                <div className="card-body border">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <InsertForm />
                      <div
                        className="modal fade"
                        id="addType"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="addTypeLabel"
                        aria-hidden="true"
                        style={{ zIndex: 1600 }}
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header bg-primary">
                              <h5
                                className="modal-title text-white"
                                id="addTypeLabel"
                              >
                                Thêm Loại nguyên liệu
                              </h5>
                            </div>
                            <div className="modal-body">
                              <form className="mt-2">
                                <div className="container">
                                  <div className="row">
                                    <div className="col-12">
                                      <div className="form-group row">
                                        <label
                                          htmlFor="inputName"
                                          className="col-sm-4 col-form-label form-control-sm"
                                        >
                                          Loại nguyên liệu:
                                        </label>
                                        <div className="col-sm-7">
                                          <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="inputName"
                                            placeholder="eg. Món chiên"
                                            ref={this.name}
                                          />
                                          <p className="text-danger">
                                            {"{"}
                                            {"{"}alertLNL{"}"}
                                            {"}"}
                                          </p>
                                        </div>
                                        <div className="col-sm-1">
                                          <i className="fas fa-exclamation-circle" />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label
                                          htmlFor="inputName"
                                          className="col-sm-4 col-form-label form-control-sm"
                                        >
                                          Đơn vị:
                                        </label>
                                        <div className="col-sm-7">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="inputName"
                                            ref={this.unit}
                                          />
                                          <p className="text-danger">
                                            {"{"}
                                            {"{"}alertLNL{"}"}
                                            {"}"}
                                          </p>
                                        </div>
                                        <div className="col-sm-1">
                                          <i className="fas fa-exclamation-circle" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                    onClick={() => this.onclick()}
                                  >
                                    Lưu
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="detail"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    ></div>
                    <div
                      className="tab-pane fade"
                      id="detailDescription"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="moreDishs"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      ...
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

export default inject("resourceStore")(observer(InsertResourceButton));
