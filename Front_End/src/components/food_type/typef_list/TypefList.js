import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'
import TypefRow from './TypefRow'

class TypefList extends Component {
  componentDidMount() {
    this.props.foodTypeStore.getTypeFood();
  }
    // async onclick(){
    //     await this.props.foodTypeStore.setcurrenttypefood(this.props.table)
    //   }
    render() {
      const element= this.props.foodTypeStore.listTypeFood.map((type, index) =>{
        return <TypefRow type={type} key={type.id} index={index}/>
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
              <th scope="col">Tên loại món ăn</th>
              <th scope="col">Mô tả</th>
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

export default inject("foodTypeStore")(observer(TypefList));