import React, { Component } from "react";
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.typeid = React.createRef();  
    this.date = React.createRef();
    //this.image = React.createRef();
    this.state=({
      num:"", 
      dat:"",
      act:""
    });
    this.isactive = React.createRef();
    }

    async componentDidMount(){
      await this.props.resourceStore.getTypeResource();
    }

    // encodeImageFileAsURL = (element) => {
    //   var file = element.files[0];
    //   var reader = new FileReader();
    //   reader.onloadend = function() {
    //     console.log('RESULT', reader.result)
    //   }
    //   reader.readAsDataURL(file);
    // }

  async onupdate(){
    //console.log(this.state.num)
  
    if(this.state.num === "") await this.setState({num:this.props.resourceStore.currentResource.loainguyenlieu_id});
    if(this.state.act === "") await this.setState({act:this.props.resourceStore.currentResource.isActive});
    if(this.state.dat === "") await this.setState({dat:this.props.resourceStore.currentResource.date.substr(0,10)});

    await this.props.resourceStore.updateResource(this.no.current.value,
                                          this.name.current.value, 
                                          this.price.current.value, 
                                          this.state.dat, 
                                          this.state.num,
                                          this.state.act);
    await this.props.resourceStore.getResource();
}
  onChangeSelect(e) {
    this.typeid=e.target.value;
    this.setState({
      num:e.target.value
    })
    //console.log(e.target.value)
  }
  onChangeDate(e) {
    this.date=e.target.value;
    this.setState({
      dat:e.target.value
    })
    //console.log(e.target.value)
  }

  onChangeActive(e){
    this.isactive=e.target.value;
    this.setState({
      act:e.target.value
    })
    //console.log(e.target.value)
  }

  // initState(){
    
  // }

  render() {
    if(!this.props.resourceStore.currentResource.id) return null;
    //console.log("date",toJS(this.props.resourceStore.currentResource.date));
    let act = this.props.resourceStore.currentResource.isActive;
    //console.log(act);
    let type = this.props.resourceStore.currentResource.loainguyenlieu_id;

    const listType= this.props.resourceStore.listTypeResources.map((resource, index)=>{
      return <option key={index} value={resource.id} selected={type === resource.id ? true: false} >{resource.name}</option>
    })

    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Nguyên Liệu
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
            <form >
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="form-group row">
                      <label
                        htmlFor="input1"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Mã nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="input1"
                          ref={this.no}
                          defaultValue={this.props.resourceStore.currentResource.no}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Tên nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.name}
                          defaultValue={this.props.resourceStore.currentResource.name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Loại nguyên liệu:
                      </label>
                      <div className="col-sm-7">
                        <select className="form-control-sm" id="inputType" onChange={(e) => this.onChangeSelect(e)}>
                          {listType}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputNum"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Giá nhập:
                      </label>
                      <div className="col-sm-7">
                        <input
                          ng-model="inputPrice"
                          type="text"
                          class="form-control form-control-sm "
                          id="inputNum"
                          placeholder={0}
                          ref={this.price}
                          defaultValue={this.props.resourceStore.currentResource.price}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Hạn sử dụng:
                      </label>
                      <div className="col-sm-7">
                        <input
                          ng-model="inputDate"
                          type="date"
                          class="form-control form-control-sm "
                          id="inputNum"
                          placeholder="dd/MM/yyyy"
                          defaultValue={this.props.resourceStore.currentResource.date.substr(0,10)}
                          onChange={(e)=> this.onChangeDate(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Hiện trạng:
                      </label>
                      <div className="col-sm-7">
                        <select ref={this.state.act} className="form-control-sm" onChange={(e) => this.onChangeActive(e)}>
                          <option value="1" selected={act === 1 ? true: false}>Active</option>
                          <option value="0" selected={act === 0 ? true: false}>Deactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="col-6">
                      <label
                        htmlFor="inputNum"
                        class="col-sm-4 col-form-label form-control-sm"
                      >
                        Hình Ảnh:
                      </label>
                      <div class="container">
                        <div class="row">
                          <div class="card-body border">
                            <div class="col-6">
                              <img width={150} height={150}  />
                            </div>
                          </div>
                          <div class="col-6"></div>
                        </div>
                        <div class="row mt-1">
                          <div class="file-field">
                            <div class="btn form-control-file btn-sm btn-success ml-2">
                              <input type="file" onChange={()=> this.encodeImageFileAsURL} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right mt-3" >
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.onupdate()}>
                  Lưu
                </button>
                <button
                  //type="button"
                  type="cancel"
                  className="btn btn-secondary"
                  //data-dismiss="modal"
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
export default inject("resourceStore")(observer(UpdateForm))