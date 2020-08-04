import React, { Component } from "react";

class StaffPosList extends Component {
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
        </tr>
    );
  }
}

export default StaffPosList;
