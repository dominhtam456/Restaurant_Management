import React, { Component } from "react";
import ResourceRow from "./ResourceRow";
import ResourceDetail from "../resource_detail/ResourceDetail";
import { inject, observer } from "mobx-react";
import ResourceFilter from "../ResourceFilter";

class ResourceList extends Component {
  componentDidMount() {
    this.props.resourceStore.getResource();
  }
  merge(element, element1) {
    let element3 = [];
    for (let i = 0; i < element.length; i++) {
      element3.push(element[i]);
      element3.push(element1[i]);
    }

    return element3;
  }
  render() {
    const element = this.props.resourceStore.listResources.map(
      (resource, index) => {
        return (
          <ResourceRow resource={resource} key={resource.id} index={index} />
        );
      }
    );

    const element1 = this.props.resourceStore.listResources.map(
      (resource, index) => {
        return (
          <ResourceDetail resource={resource} key={resource.id} index={index} />
        );
      }
    );
    const element2 = this.merge(element, element1);
    return (
      <div>
        <div className="float-left">
          <i
            className="fas fa-filter"
            aria-hidden="true"
            data-toggle="collapse"
            data-target="#ffilter"
          ></i>
          <div id="ffilter" className="collapse">
            <ResourceFilter />
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table  align-items-center table-flush accordion table-hover"
            id="accordionRow"
          >
            <thead className="thead-light">
              <tr>
                <th scope="col">Stt</th>
                <th scope="col">Mã Nguyên Liệu</th>
                <th scope="col">Nguyên Liệu</th>
                <th scope="col">Hiện trạng</th>
              </tr>
            </thead>
            <tbody>{element2}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default inject("resourceStore")(observer(ResourceList));
