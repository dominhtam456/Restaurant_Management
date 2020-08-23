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
      img:"",
      isAlertNo: false,
      isAlertName: false,
      isAlertMail: false,
    });
    }

    getFiles(files) {
      switch (files[0].type) {
        case "image/png":
        case "image/gif":
        case "image/jpeg":
        case "image/pjpeg":
          if (files[0].size.split(" ",1) > 1024) {
            alert("Vui lòng upload các file có dung lượng < 1MB");
          } else {
            this.image = files.base64;
            this.setState({
              img: files[0].base64,
            });
          }
          break;
        default:
          alert("File không hỗ trợ!");
      }
    }

    async onupdate(){
      if(this.state.num === "") await this.setState({num:this.props.staffStore.currentStaff.loai});
      if(this.state.act === "") await this.setState({act:this.props.staffStore.currentStaff.isactive});
      if(this.state.img === "") await this.setState({img:this.props.staffStore.currentStaff.img});
  
      if ((this.no.current.value).trim() === "") {
        alert("Mã nhân viên không được để trống!");
      } else if (!this.props.staffStore.check(this.no.current.value) && this.props.staffStore.currentStaff.no !== this.no.current.value) {
        alert("Mã nhân viên bị trùng");
      } else if ((this.name.current.value).trim() === "") {
        alert("Tên nhân viên không được để trống!");
      } 
      else if ((this.email.current.value).trim() === "") {
        alert("Email không được để trống!");
      } else if (!this.props.staffStore.check(this.email.current.value)&& this.props.staffStore.currentStaff.username !== this.email.current.value) {
        alert("Email bị trùng!");
      }else{
      await this.props.staffStore.updateStaff(
        this.no.current.value,
        this.name.current.value, 
        this.phone.current.value, 
        this.email.current.value,
        this.state.num,
        this.state.img,
        this.state.act
        );
        const modals = document.getElementsByClassName('modal');

        // on every modal change state like in hidden modal
        for(let i=0; i<modals.length; i++) {
          modals[i].classList.remove('show');
          modals[i].setAttribute('aria-hidden', 'true');
          modals[i].setAttribute('style', 'display: none');
        }
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
    
         // remove opened modal backdrop
          document.body.removeChild(modalBackdrops[0]);
        }
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

  onBlurRSid() {
    if (this.no.current.value === "") this.setState({ isAlertNo: true });
    else this.setState({ isAlertNo: false });
  }
  onBlurRName() {
    if (this.name.current.value === "") this.setState({ isAlertName: true });
    else this.setState({ isAlertName: false });
  }
  onBlurRPri() {
    if (this.email.current.value === "") this.setState({ isAlertMail: true });
    else this.setState({ isAlertMail: false });
  }

  render() {
    const alertStaffId = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống mã nhân viên
      </span>
    );
    const alertStaffName = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Không được để trống tên nhân viên
      </span>
    );
    const alertStaffMail = (
      <span style={{ fontSize: "10px", color: "red" }}>
        Email không được để trống
      </span>
    );
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
                          onBlur={() => this.onBlurRSid()}
                          required
                        />
                        {this.state.isAlertNo ? alertStaffId : ""}
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
                          onBlur={() => this.onBlurRName()}
                          required
                        />
                        {this.state.isAlertName ? alertStaffName : ""}
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
                          onBlur={() => this.onBlurRPri()}
                          required
                        />
                        {this.state.isAlertMail ? alertStaffMail : ""}
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
                        className="col-sm-4 col-form-label form-control-sm"
                      >
                        Hình Ảnh:
                      </label>
                      <div className="container">
                        <div className="row">
                          <div className="card-body border">
                          <div className="card-img-top p-4">
                              <img
                                width={250}
                                height={250}
                                src={this.state.img === "" ? this.props.staffStore.currentStaff.img : this.state.img}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className="file-field">
                            <div className="btn form-control-file btn-sm btn-success ml-2">
                            <FileBase64
                                multiple={true}
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
                <button type="button" className="btn btn-danger" id="modal-button-save" onClick={() => this.onupdate()}>
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