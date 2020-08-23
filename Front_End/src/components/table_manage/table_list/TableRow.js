import React, { Component } from "react";
import { inject , observer } from 'mobx-react';
// import TableDetailFooter from "../table_detail/TableDetailFooter"
// import { toJS } from 'mobx';
import UpdateForm from "./../table_detail/UpdateForm";
//import DeletePanel from "./../table_detail/DeletePanel";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state={
      tn: "",
      ht: ""
    };
  }
  componentDidMount() {

  }
  async onclick(){
    await this.props.tableManageStore.setcurrenttable(this.props.table)
  }
  // async onChangeSelect(e){
  //   let tn= this.props.table.name;
  //   console.log(tn);
  //   let ht = this.props.table.isActive;
  //   console.log(ht);
  //   await this.props.tableManageStore.setcurrenttable(this.props.table)}
  render() {
    return (
      <tr
        data-toggle="collapse"
        data-target={`#id${this.props.table.id}`}
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
                {this.props.table.id}
              </span>
            </div>
          </div>
        </th>
        <td>
          {this.props.table.name}
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.table.status}
          </span>
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.table.isActive ? 'Active' : 'Deactive'}
          </span>
        </td>
        <td>
        <div className="float-md-right mt-3" >
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
          tabIndex="-1"
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
export default inject("tableManageStore")(observer(TableRow));
