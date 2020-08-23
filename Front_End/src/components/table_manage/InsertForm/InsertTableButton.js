import React, { Component } from "react";
import InsertForm from "./InsertForm";

class InsertTableButton extends Component {
  
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
                  Thêm Bàn
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
                      id="infoTable"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <InsertForm />
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
                    </div>
                    <div
                      className="tab-pane fade"
                      id="moreDishs"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
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

export default InsertTableButton;
