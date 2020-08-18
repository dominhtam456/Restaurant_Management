import React, { Component } from "react";
// import FootDetailFooter from "./FootDetailFooter";
import UpdateForm from "./UpdateForm";
import { inject , observer} from 'mobx-react'

class FoodDetail extends Component {
  onclick(){
    this.props.foodStore.setcurrentfood(this.props.food);
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
        <td colSpan={5} className="hiddenRow">
          <div
            id={`id${this.props.food.id}`}
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
                      <h2 className="mt-1">{this.props.food.name}</h2>
                      <div className="row p-2 mt-3 ">
                        <div className="col-4">
                          <div className="card-img-top p-4">
                            <img
                              width={250}
                              height={250}
                              src={this.props.food.image}
                            />
                          </div>
                        </div>
                        <div className="col-4">
                          <table>
                            <tbody>
                              <tr className="p-2">
                                <td>Mã món ăn:</td>
                                <td>{this.props.food.no}</td>
                              </tr>
                              <tr className="p-2">
                                <td>Giá Bán:</td>
                                <td>{this.props.food.price}đ</td>
                              </tr>
                              <tr className="p-2">
                                <td>Đơn vị tính:</td>
                                <td>{this.props.food.unit}</td>
                              </tr>
                              <tr className="p-2">
                                <td>Tên loại món ăn:</td>
                                <td>{this.props.food.tenloaimonan}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-4">
                          <table>
                            <tbody>
                              <tr className="p-2">
                                <td style={{ verticalAlign: "top" }}>
                                  Thành Phần:
                                </td>
                                <td>
                                  <span>
                                    - {this.props.food.description}
                                    <br />
                                    <br />
                                  </span>
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td>Hiện trạng:</td>
                                <td>{this.props.food.isActive === 1 ? "Active" : "Deactive"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="float-md-right mt-3">
                      <button
                        type="button"
                        className="btn btn-success "
                        data-toggle="modal"
                        data-target={`#b${this.props.food.id}`}
                        onClick ={() => this.onclick()}
                      >
                        <i className="fas fa-plus-circle" /> Cập Nhật
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id={`b${this.props.food.id}`}
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modifyFoodsTitle"
                        aria-hidden="true"
                      >
                        <UpdateForm />
                      </div>
                      {/* <button type="button" class="btn btn-danger "><i class="fas fa-lock"></i> Ngừng Kinh Doanh</button> */}
                      {/* <button
          type="button"
          className="btn btn-danger "
          data-toggle="modal"
          data-target={`#c${this.props.id}`}
        >
          <i className="far fa-trash-alt" /> Xóa
        </button>
        <div
          className="modal fade"
          id={`c${this.props.id}`}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modalDeleteMaterials"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable" role="document">
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
export default inject("foodStore")(observer(FoodDetail))