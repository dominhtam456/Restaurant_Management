import React, { Component } from "react";
import UpdateForm from "./UpdateForm";
import DeletePanel from "./DeletePanel";

export default class FootDetailFooter extends Component {
  render() {
    return (
      <div className="float-md-right mt-3">
        <button
          type="button"
          className="btn btn-success "
          data-toggle="modal"
          data-target={`#b${this.props.id}`}
        >
          <i className="fas fa-plus-circle" /> Cập Nhật
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id={`b${this.props.id}`}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modifyFoodsTitle"
          aria-hidden="true"
        >
          <UpdateForm />
        </div>
        {/* <button type="button" class="btn btn-danger "><i class="fas fa-lock"></i> Ngừng Kinh Doanh</button> */}
        <button
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
        </div>
      </div>
    );
  }
}
