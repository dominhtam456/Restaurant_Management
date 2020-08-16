import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'
import UpdateForm from './../typef_detail/UpdateForm'

class TypefRow extends Component {
    async onclick(){
        await this.props.foodTypeStore.setcurrenttypefood(this.props.type)
      }
    render() {
        return (
            <tr
        data-toggle="collapse"
        data-target={`#id${this.props.type.id}`}
        className="clickable"
        aria-expanded="false"
      >
        <th>
          <span>{this.props.index+1}</span>
        </th>
        <th scope="row">
          <div className="media align-items-center">
            <div className="media-body">
              <span className="mb-0 text-sm">
                {this.props.type.name}
              </span>
            </div>
          </div>
        </th>
        <td>
          {this.props.type.description}
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.type.isActive === 1 ? 'Active' : 'Deactive'}
          </span>
        </td>
        <td>
        <div class="float-md-right mt-3" >
        <button
          type="button"
          className="btn btn-success "
          data-toggle="modal"
          data-target={`#btnupdate`} 
          onClick={() => this.onclick()}
          
          //onClick={(e)=> this.onChangeSelect(e)}
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

        {/* <button
          type="button"
          class="btn btn-danger "
          data-toggle="modal"
          data-target={`#btnDelete`} onClick={()=> this. onclick()}
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
        </div> */}
      </div>
        </td>
      </tr>
        );
    }
}

export default inject("foodTypeStore")(observer(TypefRow)) ;