import React, { Component } from 'react';
// import UpdateForm from './UpdateForm';
// import DeletePanel from './DeletePanel';

class StaffDetailFooter extends Component {
    render() {
        return (
            <div class="float-md-right mt-3">
            <button
              type="button"
              className="btn btn-success "
              data-toggle="modal"
              data-target={`#b${this.props.id}`}
            >
              <i className="fas fa-plus-circle" /> Cập Nhật
            </button>
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
    
            <button
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
              tabIndex="-1"
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

export default StaffDetailFooter;