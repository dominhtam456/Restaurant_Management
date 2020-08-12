import React, { Component } from "react";
import UpdateForm from "./UpdateForm";
//import DeletePanel from "./DeletePanel";
import { inject , observer } from 'mobx-react';

class ResourceDetail extends Component {
  onclick(){
    this.props.resourceStore.setcurrentresource(this.props.resource)
  }

  componentDidMount() {
    // console.log(this.myRef.current.childNodes[0].childNodes[0].className)
    // if(this.myRef.current.childNodes[0].childNodes[0].className="collapse"){
    //     this.myRef.current.style="display: none;"
    // }
    // else this.myRef.current.style="display: content;"
  }
  

  render() {
    return (
      <tr className="detail">
        <td colSpan={8} className="hiddenRow">
          <div
            id={`id${this.props.resource.id}`}
            className="collapse"
            data-parent="#accordionRow"
          >
            <div className="row">
              <div className="card-body border">
                {/* <ul className="nav nav-tabs border-bottom-lighblue" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông Tin</a>
                        </li>
                        </ul> */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="container border-lightblue">
                      <h2 className="mt-1">{this.props.resource.name}</h2>
                      <div className="row p-2 mt-3 ">
                        <div className="col-4">
                          <div className="card">
                            <img
                              width={250}
                              height={250}
                              src={this.props.resource.image}
                            />
                          </div>
                        </div>
                        <div className="col-4">
                          <table>
                            <tbody>
                              <tr className="p-2">
                                <td>Mã nguyên liệu:</td>
                                <td>{this.props.resource.no}</td>
                              </tr>
                              <tr className="p-2">
                                <td>Giá nhập:</td>
                                <td>{this.props.resource.price}đ</td>
                              </tr>
                              <tr className="p-2">
                                <td>Hạn sử dụng:</td>
                                <td>{this.props.resource.date.substr(0,10)}</td>
                              </tr>
                              <tr className="p-2">
                                <td>Loại nguyên liệu:</td>
                                <td>{this.props.resource.tenloainguyenlieu}</td>
                              </tr>
                              <tr className="p-2">
                                <td>Hiện trạng:</td>
                                <td>{this.props.resource.isActive === 1 ? "Active" : "Deactive"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="float-md-right mt-3">
                      <button
                        type="button"
                        className="btn btn-success "
                        data-toggle="modal"
                        data-target={`#b${this.props.resource.id}`}
                        onClick ={() => this.onclick()}
                      >
                        <i className="fas fa-plus-circle" /> Cập Nhật
                      </button>
                      <div
                        className="modal fade"
                        id={`b${this.props.resource.id}`}
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="resourceTile"
                        aria-hidden="true"
                      >
                        <UpdateForm />
                      </div>

                      {/* <button
                        type="button"
                        class="btn btn-danger "
                        data-toggle="modal"
                        data-target={`#c${this.props.id}`}
                      >
                        <i class="far fa-trash-alt"></i> Xóa
                      </button>
                      <div
                        class="modal fade"
                        id={`c${this.props.id}`}
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="modalDeleteMaterials"
                        aria-hidden="true"
                      >
                        <div
                          class="modal-dialog modal-dialog-scrollable"
                          role="document"
                        >
                          <DeletePanel />
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    ...
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}
export default inject("resourceStore")(observer(ResourceDetail))