import React, { Component } from "react";
import TableDetailFooter from "./TableDetailFooter";

export default class TableDetail extends Component {
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
            id={`id${this.props.table.id}`}
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
                      <h2 className="mt-1">{`id`}</h2>
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
                                <td>Mã bàn:</td>
                                <td>
                                  {this.props.table.id}
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td>Tên bàn:</td>
                                <td>
                                  {this.props.table.name}
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td>Trạng thái:</td>
                                <td>
                                  {this.props.table.status}
                                </td>
                              </tr>
                              <tr className="p-2">
                                <td>Hiện trạng:</td>
                                <td>
                                  {this.props.table.isActive}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div>
                      <TableDetailFooter id={`a${this.props.id}`} />
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
