import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'
import TypefRow from './TypefRow'
import FilterFT from "../FilterFT"

class TypefList extends Component {
  componentDidMount() {
    this.props.foodTypeStore.getTypeFood();
  }
    render() {
      const element= this.props.foodTypeStore.listTypeFood.map((type, index) =>{
        return <TypefRow type={type} key={type.id} index={index}/>
      })
        return (
          <div>
          <div className="float-left">
                      <i className="fas fa-filter" aria-hidden="true" data-toggle="collapse"
                      data-target="#ffilter"></i>
                    <div id="ffilter" className="collapse">
                      <FilterFT/>
                    </div>
                    </div>
            <div className="table-responsive">
        <table className="table  align-items-center table-flush accordion table-hover"
          id="accordionRow"
        >
          <thead className="thead-light">
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Tên loại món ăn</th>
              <th scope="col">Mô tả</th>
              <th scope="col">Hiện trạng</th>
              <th scope="col"></th>
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

export default inject("foodTypeStore")(observer(TypefList));