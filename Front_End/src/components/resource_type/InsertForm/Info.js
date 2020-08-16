import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'

class Info extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.unit = React.createRef();
    }

    async onCreate(){
        await this.props.resourceTypeStore.pushTypeResource(
            this.name.current.value, this.unit.current.value);
        await this.props.resourceTypeStore.getTypeResource();
      }
    render() {
        return (
            <div class="col-12">
        <div className="form-group row">
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Tên loại nguyên liệu:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="tablename"
              required
              ref={this.name}
              onfocusout=""
            />
            {/* {this.state.check ? '' : this.showAlert()} */}
          </div>
          <label
            htmlFor="inputName"
            className="col-sm-4 col-form-label form-control-sm"
          >
            Đơn vị tính:
          </label>
          <div className="col-sm-7">
            <input
              name="inputName"
              type="text"
              className="form-control form-control-sm"
              id="tablename"
              required
              ref={this.unit}
              onfocusout=""
            />
            {/* {this.state.check ? '' : this.showAlert()} */}
          </div>
        </div>
        <div class="float-right mt-3">
          <button type="button" class="btn btn-danger" onClick={() => this.onCreate()} data-dismiss="modal">Lưu & thêm mới</button>
          <button type="button" class="btn btn-secondary"
            data-dismiss="modal">Đóng</button>
        </div>
      </div>
        );
    }
}

export default inject("resourceTypeStore")(observer(Info));