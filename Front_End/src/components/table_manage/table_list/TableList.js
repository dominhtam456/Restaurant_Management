import React, { Component } from "react";
import TableRow from "./TableRow";
import UpdateForm from "../table_detail/UpdateForm";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

class TableList extends Component {
  componentDidMount() {
    this.props.tableStore.getTable();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.update != this.props.update) this.props.tableStore.getTable();
  }

  render() {
    const element= this.props.tableStore.listTable.map((table, index)=>{
      return <TableRow table={table} key={table.id} index={index}/>
    })

    const element1= this.props.tableStore.listTable.map((table, index)=>{
      return <UpdateForm table={table} key={table.id} index={index}/>
    })

    return (
      <div class="table-responsive">
        <table
          class="table  align-items-center table-flush accordion table-hover"
          id="accordionRow"
        >
          <thead class="thead-light">
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Mã Bàn</th>
              <th scope="col">Tên bàn</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">Hiện trạng</th>
            </tr>
          </thead>
          <tbody>
            {element}
          </tbody>
        </table>
      </div>
    );
  }
}

export default inject("tableStore")(observer(TableList));
