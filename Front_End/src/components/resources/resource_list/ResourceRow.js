import React, { Component } from "react";
import { inject , observer } from 'mobx-react';
//import ResourceDetail from'../resource_detail/ResourceDetail'

class ResourceRow extends Component {
  render() {
    return (
      <tr
        data-toggle="collapse"
        data-target={`#id${this.props.resource.id}`}
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
                {this.props.resource.no}
              </span>
            </div>
          </div>
        </th>
        <td>
          {this.props.resource.name}
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.resource.date}
          </span>
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.resource.isActive}
          </span>
        </td>
      </tr>
    );
  }
}
export default inject("resourceStore")(observer(ResourceRow))