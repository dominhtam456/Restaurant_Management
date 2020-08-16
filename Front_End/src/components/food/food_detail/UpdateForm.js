import React, { Component } from "react";
import { inject , observer} from 'mobx-react'
import { toJS } from 'mobx';
import FileBase64 from 'react-file-base64';

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.typeid = React.createRef();  
    this.unit = React.createRef();
    this.image = React.createRef();
    this.state=({
      num:"",
      act:"",
      sta:"",
      img:""
    });
    this.isactive = React.createRef();
    this.desc = React.createRef();
    }

    getFiles(files) {
      this.image = files.base64;
      this.setState({
        img: files.base64,
      });
    }

    async componentDidMount(){
      await this.props.foodStore.getTypeFood();
    }

    async onupdate(){
      if(this.state.num === "") await this.setState({num:this.props.foodStore.currentFood.loaimonan_id});
      if(this.state.act === "") await this.setState({act:this.props.foodStore.currentFood.isActive});

      await this.props.foodStore.updateFood(this.no.current.value, 
                                      this.name.current.value,
                                      this.price.current.value,
                                      this.unit.current.value,
                                      this.state.img,
                                      this.state.num,
                                      this.state.act,
                                      this.desc.current.value);
      await this.props.foodStore.getFood();
    }

    onChangeSelect(e) {
      this.typeid=e.target.value;
      this.setState({
        num:e.target.value
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

  render() {
    let act = this.props.foodStore.currentFood.isActive;
    let type = this.props.foodStore.currentFood.loaimonan_id;
    const listType= this.props.foodStore.listTypeFoods.map((food, index)=>{
      return <option key={index} value={food.id} selected={type === food.id ? true: false} >{food.name}</option>
    })
    // console.log("aaa",toJS(this.props.foodStore.currentFood.id));
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Món Ăn
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
                        Mã món ăn:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="input1"
                          ref={this.no}
                          defaultValue={this.props.foodStore.currentFood.no}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Tên món ăn:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.name}
                          defaultValue={this.props.foodStore.currentFood.name}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Loại món ăn:
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
                        Giá bán:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm "
                          id="inputNum"
                          ref={this.price}
                          defaultValue={this.props.foodStore.currentFood.price}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Đơn vị tính:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm "
                          id="inputUnit"
                          ref={this.unit}
                          defaultValue={this.props.foodStore.currentFood.unit}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputUnit"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Thành phần:
                      </label>
                      <div className="col-sm-7">
                        <textarea
                          type="text"
                          className="form-control form-control-sm "
                          id="inputUnit"
                          ref={this.desc}
                          defaultValue={this.props.foodStore.currentFood.description}
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
                          <div className="card-img-top p-4">
                              <img
                                width={250}
                                height={250}
                                src={this.state.img === "" ? this.props.foodStore.currentFood.image : this.state.img}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="file-field">
                            <div class="btn form-control-file btn-sm btn-success ml-2">
                            <FileBase64
                                multiple={false}
                                onDone={this.getFiles.bind(this)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right mt-3">
                <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => this.onupdate()}>
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
export default inject("foodStore","tableStore")(observer(UpdateForm))