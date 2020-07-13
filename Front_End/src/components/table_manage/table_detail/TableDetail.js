import React, { Component } from "react";
import ResourceDetailFooter from "./ResourceDetailFooter";

export default class ResourceDetail extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
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
            id={this.props.id}
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
                      <h2 className="mt-1">{this.props.id}</h2>
                      <div className="row p-2 mt-3 ">
                        <div className="col-4">
                          <div className="card">
                            <img width={250} height={300} alt="" />
                          </div>
                        </div>
                        <div className="col-4">
                          <table>
                            <tbody>
                              <tr className="p-2">
                                <td>Mã nguyên liệu:</td>
                                <td>
                                  {"{"}
                                  {"{"}foodDetails.monan_NO{"}"}
                                  {"}"}
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td>Loại nguyên liệu:</td>
                                <td>
                                  {"{"}
                                  {"{"}foodDetails.tenloai_LOAIMONAN{"}"}
                                  {"}"}
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td>Giá nhập:</td>
                                <td>
                                  {"{"}
                                  {"{"}foodDetails.monan_PRICE{"}"}
                                  {"}"}đ
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ResourceDetailFooter id={this.props.id} />
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
