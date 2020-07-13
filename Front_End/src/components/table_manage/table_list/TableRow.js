import React, { Component } from "react";

export default class ResourceRow extends Component {
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
        <td>
          <span className="mr-2">
            {"{"}
            {"{"}x.monan_PRICE{"}"}
            {"}"}đ
          </span>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <span className="mr-2">
              {"{"}
              {"{"}x.monan_UNIT{"}"}
              {"}"}
            </span>
          </div>
        </td>
      </tr>
    );
  }
}
