import React, { Component } from 'react';

class StaffRow extends Component {
    render() {
        return (
            <tr
        data-toggle="collapse"
        data-target={this.props.id}
        className="clickable"
        aria-expanded="false"
      >
        <th>
          <span>{this.props.id}</span>
        </th>
        <th scope="row">
          <div className="media align-items-center">
            <div className="media-body">
              <span className="mb-0 text-sm">
                {"{"}
                {"{"}x.monan_NO{"}"}
                {"}"}
              </span>
            </div>
          </div>
        </th>
        <td>
          {"{"}
          {"{"}x.monan_NAME{"}"}
          {"}"}
        </td>
        <td>
          <span className="badge badge-dot">
            {"{"}
            {"{"}x.tenloai_LOAIMONAN{"}"}
            {"}"}
          </span>
        </td>
      </tr>
        );
    }
}

export default StaffRow;