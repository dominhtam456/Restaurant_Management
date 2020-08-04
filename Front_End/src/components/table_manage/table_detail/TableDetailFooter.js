import React, { Component } from "react";
import UpdateForm from "./UpdateForm";
import DeletePanel from "./DeletePanel";import { inject , observer } from 'mobx-react';

class TableDetailFooter extends Component {

  render() {
    return (
      <div class="float-md-right mt-3" >
        <button
          type="button"
          className="btn btn-success "
          data-toggle="modal"
          data-target={`#btnupdate`} onClick={()=> this.onclick()}
        >
          <i className="fas fa-plus-circle" /> Cập Nhật
        </button>
        <div
          className="modal fade"
          id={`btnupdate`}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modifyFoodsTitle"
          aria-hidden="true"
        >
          <UpdateForm />
        </div>

        <button
          type="button"
          class="btn btn-danger "
          data-toggle="modal"
          data-target={`#btnDelete`}
        >
          <i class="far fa-trash-alt"></i> Xóa
        </button>
        <div
          class="modal fade"
          id={`btnDelete`}
          tabindex="-1"
          role="dialog"
          aria-labelledby="modalDeleteMaterials"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <DeletePanel />
          </div>
        </div>
      </div>
    );
  }
}
export default inject("tableManageStore")(observer(TableDetailFooter));

