import React, { Component } from 'react';
import InsertForm from './InsertForm'

class InsertStaffButton extends Component {
    render() {
        return (
            <div class="float-md-right mb-3 mr-3">
        <button
          type="button"
          class="btn btn-danger "
          data-toggle="modal"
          data-target="#modalAddMaterials"
        >
          <i class="fas fa-plus-circle"></i> Thêm Mới
        </button>
        <div
          class="modal fade"
          id="modalAddMaterials"
          tabindex={-1}
          role="dialog"
          aria-labelledby="modalAddMaterials"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content ">
              <div class="modal-header bg-primary">
                <h2
                  class="modal-title"
                  id="modalAddMaterials"
                  style={{ color: "white" }}
                >
                  Thêm Nhân Viên
                </h2>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
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
                <div class="card-body border">
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="info"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <InsertForm />
                    </div>
                    <div
                      class="tab-pane fade"
                      id="detail"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    ></div>
                    <div
                      class="tab-pane fade"
                      id="detailDescription"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
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

export default InsertStaffButton;