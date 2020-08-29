import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'
import TyperRow from './TyperRow'
import FilterTypeRes from '../FilterTypeRes'

class TyperList extends Component {
  componentDidMount() {
    this.props.resourceTypeStore.getTypeResource();
  }
    render() {
        const element= this.props.resourceTypeStore.listTypeResource.map((resource, index)=>{
            return <TyperRow resource={resource} key={resource.id} index={index}/>
        })
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
            < FilterTypeRes/>
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
          </div>
        );
    }
}

export default inject("resourceTypeStore")(observer(TyperList));