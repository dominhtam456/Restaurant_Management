import React, { Component } from 'react';
import { inject , observer } from 'mobx-react';

class StaffRow extends Component {
    render() {
        return (
            <tr
        data-toggle="collapse"
        data-target={this.props.user.id}
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
                {this.props.user.no}
              </span>
            </div>
          </div>
        </th>
        <td>
          {this.props.user.fullname}
        </td>
        <td>
          <span className="badge badge-dot">
            {this.props.user.chucvu}
          </span>
        </td>
      </tr>
        );
    }
}

export default inject("staffStore")(observer(StaffRow));