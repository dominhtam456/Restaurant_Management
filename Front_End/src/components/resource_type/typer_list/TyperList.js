import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'
import TyperRow from './TyperRow'

class TyperList extends Component {
  componentDidMount() {
    this.props.resourceTypeStore.getTypeResource();
  }
    render() {
        const element= this.props.resourceTypeStore.listTypeResource.map((resource, index)=>{
            return <TyperRow resource={resource} key={resource.id} index={index}/>
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
                  <th scope="col">Tên loại nguyên liệu</th>
                  <th scope="col">Đơn vị</th>
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

export default inject("resourceTypeStore")(observer(TyperList));