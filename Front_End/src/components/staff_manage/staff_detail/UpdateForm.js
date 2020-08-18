import React, { Component } from "react";
import { inject , observer} from 'mobx-react';
import FileBase64 from "react-file-base64";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.phone = React.createRef();
    this.email = React.createRef();
    this.typeId = React.createRef();
    this.image = React.createRef();
    this.isactive = React.createRef();
    this.state=({
      num:"",
      act:"",
      img:""
    });
    }

    getFiles(files) {
      this.image = files.base64;
      this.setState({
        img: files.base64,
      });
    }

    async onupdate(){
      if(this.state.num === "") await this.setState({num:this.props.staffStore.currentStaff.loai});
      if(this.state.act === "") await this.setState({act:this.props.staffStore.currentStaff.isactive});
      if(this.state.img === "") await this.setState({img:this.props.staffStore.currentStaff.img});
  
      await this.props.staffStore.updateStaff(
        this.no.current.value,
        this.name.current.value, 
        this.phone.current.value, 
        this.email.current.value,
        this.state.num,
        this.state.img,
        this.state.act
        );
      await this.props.staffStore.getStaffs();
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
      // console.log(e.target.value)
    }

  componentDidMount() {
    this.props.staffStore.getRole();
  }

  render() {
    let act = this.props.staffStore.currentStaff.isactive;
    let type = this.props.staffStore.currentStaff.loai;
    //  console.log(act);
    const element = this.props.staffStore.listRole.map(
      (user, index) => {
        return (<option key={index} value={user.id} selected={type === user.id ? true :false}>{user.name}</option>);
      }
    );
    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="modifyFoodsTitle"
              style={{ color: "white" }}
            >
              Cập Nhật Thông Tin Nhân Viên
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
                        htmlFor="input1"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Mã nhân viên:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="input1"
                          ref={this.no}
                          defaultValue={this.props.staffStore.currentStaff.no}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Tên nhân viên:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.name}
                          defaultValue={this.props.staffStore.currentStaff.fullname}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Số điện thoại:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="phone"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.phone}
                          defaultValue={this.props.staffStore.currentStaff.phone}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputName"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Email:
                      </label>
                      <div className="col-sm-7">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="inputName"
                          ref={this.email}
                          defaultValue={this.props.staffStore.currentStaff.username}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Chức vụ:
                      </label>
                      <div className="col-sm-7">
                        <select className="form-control-sm" id="inputType" ref={this.state.num} onChange={(e) => this.onChangeSelect(e)}>
                            {element}
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputType"
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
                          <div className="card-img-top p-4">
                              <img
                                width={250}
                                height={250}
                                src={this.state.img === "" ? this.props.staffStore.currentStaff.img : this.state.img}
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
export default inject("staffStore")(observer(UpdateForm))