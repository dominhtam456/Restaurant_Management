import React, { Component } from "react";
import InsertForm from "./InsertForm";
import { inject, observer } from "mobx-react";

class InsertFoodButton extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.desc = React.createRef();
    this.state = {
      isAlertname: false,
    };
  }

  onclick() {
      if ((this.name.current.value).trim() === "") {
        alert("Tên loại món ăn không được để trống!");
      } 
      else if (!this.props.foodTypeStore.check(this.name.current.value)) { alert("Tên loại món ăn bị trùng");
    } 
    else {
      this.props.foodTypeStore.pushTypeFood(
        this.name.current.value,
        this.desc.current.value
      );
    }
    this.props.foodStore.getTypeFood();
    this.props.foodTypeStore.getTypeFood();
  }

  onBlurRSName() {
    if (this.name.current.value === "") this.setState({ isAlertname: true });
    else this.setState({ isAlertname: false });
  }

  render() {
    const alertFoodName = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống tên loại món ăn
      </span>
    );
    return (
      <div className="float-md-right mb-3 mr-3">
        <button
          type="button"
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#modalAddFoods"
        >
          <i className="fas fa-plus-circle" /> Thêm Mới
        </button>
        <div
          className="modal fade"
          id="modalAddFoods"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalAddFoods"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content ">
              <div className="modal-header bg-primary">
                <h2
                  className="modal-title"
                  id="modalAddFoods"
                  style={{ color: "white" }}
                >
                  Thêm Món Ăn
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
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="info-tab"
                      data-toggle="tab"
                      href="#info"
                      target="_self"
                      role="tab"
                      aria-controls="info"
                      aria-selected="true"
                    >
                      Thông tin
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
                                Thêm Loại Món Ăn
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
                                          Loại món ăn:
                                        </label>
                                        <div className="col-sm-7">
                                          <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="inputName"
                                            placeholder="eg. Món chiên"
                                            ref={this.name}
                                            onBlur={() => this.onBlurRSName()}
                                          />
                                          <p className="text-danger">
                                            {this.state.isAlertname
                                              ? alertFoodName
                                              : ""}
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
                                          Mô tả:
                                        </label>
                                        <div className="col-sm-7">
                                          <textarea
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="inputName"
                                            ref={this.desc}
                                          />
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
export default inject("foodStore","foodTypeStore")(observer(InsertFoodButton));
