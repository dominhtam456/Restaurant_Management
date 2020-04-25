import React, { Component } from 'react'
import FoodRow from './FoodRow'
import FoodDetail from '../food_detail/FoodDetail'

export default class FoodList extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table align-items-center table-flush accordion menu-table" id="accordionRow">
                    <thead className="thead-light">
                    <tr><th scope="col">STT</th>
                        <th scope="col">Mã Món Ăn</th>
                        <th scope="col">Tên Món Ăn</th>
                        <th scope="col">Loại món ăn</th>
                        <th scope="col">Giá bán </th>
                        <th scope="col">Đơn Vị Tính</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col" />
                    </tr></thead>
                    <tbody>
                    <FoodRow id={"#a1"}/>
                    <FoodDetail id={"a1"}/>
                    <FoodRow id={"#a2"}/>
                    
                    <FoodDetail id={"a2"}/>
                    </tbody>
                </table>
                </div>

        )
    }
}
