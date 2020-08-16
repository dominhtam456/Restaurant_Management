import React, { Component } from 'react';
import { inject , observer} from 'mobx-react'

class UpdateForm extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.unit = React.createRef();
        this.isActive = React.createRef();

        this.state={
            ht: ""
        }
    }

    onChangeSelect(e){
        let ht = e.target.isActive;
        this.setState({
          ht:ht
        })}

    async onUpdate(){
        await this.props.resourceTypeStore.updateTypeResources(
          this.name.current.value, this.unit.current.value, this.isActive.value);
        await this.props.resourceTypeStore.getTypeResource();
      }
    render() {
        let act = this.props.resourceTypeStore.currentTypeResource.isActive;
        return (
            <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Loại Nguyên Liệu
            </h2>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form ng-submit="updateFood()">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Tên loại nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.name}
                          defaultValue={this.props.resourceTypeStore.currentTypeResource.name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Đơn vị:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.unit}
                          defaultValue={this.props.resourceTypeStore.currentTypeResource.unit}
                        />
                      </div>
                    </div>
                    <div className="form-group row sm-7">
                      <label
                        className="col-sm-5 col-form-label form-control-sm"
                      >
                        Hiện trạng:
                      </label>
                      <select name="isActive" id="ht" ref={select => this.isActive = select}
                       >
                        <option value="1" selected={act === 1 ? true: false} >Active</option>
                        <option value="0" selected={act === 0 ? true: false} >Deactive</option>
                      </select>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="button" className="btn btn-danger" onClick={() => this.onUpdate()} data-dismiss="modal">
                  Lưu
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        );
    }
}

export default inject("resourceTypeStore")(observer(UpdateForm));