import React, { Component } from 'react';
import ResourceRow from './ResourceRow'
import ResourceDetail from'../resource_detail/ResourceDetail'

class ResourceList extends Component {
    render() {
        return (
            <div class="table-responsive">
        <table class="table  align-items-center table-flush accordion table-hover" id="accordionRow">
          <thead class="thead-light">
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">Mã Nguyên Liệu</th>
              <th scope="col">Nguyên Liệu</th>
              <th scope="col">Loại nguyên liệu</th>
              <th scope="col">Giá nhập</th>
              <th scope="col">Hạn Sử Dụng</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
                <ResourceRow id={"#a1"}/>
                <ResourceDetail id={"a1"}/>
              </tbody>
              </table>
              </div>
        );
    }
}

export default ResourceList;