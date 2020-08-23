import React, { Component } from "react";
import TableRow from "./TableRow";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";

class TableList extends Component {
  componentDidMount() {
    this.props.tableManageStore.getTable();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.update != this.props.update) this.props.tableManageStore.getTable();
  }

  render() {
    const element= this.props.tableManageStore.listTable.map((table, index)=>{
      return <TableRow table={table} key={table.id} index={index}/>
    })
    return (
      <div className="table-responsive">
        <table
          className="table  align-items-center table-flush accordion table-hover"
          id="accordionRow"
        >
          <thead className="thead-light">
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

export default inject("tableManageStore")(observer(TableList));
