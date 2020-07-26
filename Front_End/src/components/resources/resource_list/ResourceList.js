import React, { Component } from 'react';
import ResourceRow from './ResourceRow'
import ResourceDetail from'../resource_detail/ResourceDetail'
import { inject, observer } from "mobx-react";

class ResourceList extends Component {
  componentDidMount() {
    this.props.resourceStore.getResource();
  }
    render() {
      const element= this.props.resourceStore.listResource.map((resource, index)=>{
        return <ResourceRow resource={resource} key={resource.id} index={index}/>
      })
      
    const element1= this.props.resourceStore.listResource.map((resource, index)=>{
      return <ResourceDetail resource={resource} key={resource.id} index={index}/>
    })
        return (
            <div class="table-responsive">
        <table class="table  align-items-center table-flush accordion table-hover" id="accordionRow">
          <thead class="thead-light">
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Mã Nguyên Liệu</th>
              <th scope="col">Nguyên Liệu</th>
              <th scope="col">Hạn Sử Dụng</th>
              <th scope="col">Hiện trạng</th>
            </tr>
          </thead>
          <tbody>
                {element}
        {element1}
              </tbody>
              </table>
              </div>
        );
    }
}

export default inject("resourceStore")(observer(ResourceList));