import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { toJS } from "mobx";
import FileBase64 from "react-file-base64";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.no = React.createRef();
    this.name = React.createRef();
    this.price = React.createRef();
    this.typeid = React.createRef();
    this.date = React.createRef();
    this.image = React.createRef();
    this.state = {
      num: "",
      dat: "",
      act: "",
      img: ""
    };
    this.isactive = React.createRef();
  }

  getFiles(files) {
    // console.log(files[1].type)
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

  async componentDidMount() {
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

  async onupdate() {
    //console.log(this.state.num)
    let today = Date.parse((new Date()).toISOString().slice(0,10));
    let hsd = Date.parse(this.state.dat);

    if (this.state.num === "")
      await this.setState({
        num: this.props.resourceStore.currentResource.loainguyenlieu_id,
      });
    if (this.state.act === "")
      await this.setState({
        act: this.props.resourceStore.currentResource.isActive,
      });
    if (this.state.dat === "")
      await this.setState({
        dat: this.props.resourceStore.currentResource.date.substr(0, 10),
      });
    if (this.state.img === "") await this.setState({img:this.props.resourceStore.currentResource.image});

    if((this.no.current.value).trim() === ""){
      alert("Mã nguyên liệu không được để trống!")
    }
    else if(!this.props.resourceStore.check(this.no.current.value) && this.props.resourceStore.currentResource.no !== this.no.current.value){ 
      alert("Mã nguyên liệu bị trùng!")
    }
    else if((this.name.current.value).trim() === ""){
      alert("Tên nguyên liệu không được để trống!")
    }
    else if(!this.props.resourceStore.check(this.name.current.value) && this.props.resourceStore.currentResource.name !== this.name.current.value){ 
      alert("Tên nguyên liệu bị trùng!")
    }
    else if ((this.price.current.value).trim() === ""){
      alert("Giá không được để trống!")
    }
    else if(this.price.current.value < 0){
      alert("Giá tiền không được âm!")
    }
    else if (hsd < today){
      alert("Ngày không hợp lệ!")
    }
    else{
    await this.props.resourceStore.updateResource(
      this.no.current.value,
      this.name.current.value,
      this.price.current.value,
      this.state.dat,
      this.state.img,
      this.state.num,
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
      await this.props.resourceStore.getResource();
    }
    
  }
  onChangeSelect(e) {
    this.typeid = e.target.value;
    this.setState({
      num: e.target.value,
    });
    //console.log(e.target.value)
  }
  onChangeDate(e) {
    this.date = e.target.value;
    this.setState({
      dat: e.target.value,
    });
    //console.log(e.target.value)
  }

  onChangeActive(e) {
    this.isactive = e.target.value;
    this.setState({
      act: e.target.value,
    });
    //console.log(e.target.value)
  }

  // initState(){

  // }

  render() {
    if (!this.props.resourceStore.currentResource.id) return null;
    //console.log("date",toJS(this.props.resourceStore.currentResource.date));
    let act = this.props.resourceStore.currentResource.isActive;
    //console.log(act);
    let type = this.props.resourceStore.currentResource.loainguyenlieu_id;

    const listType = this.props.resourceStore.listTypeResources.map(
      (resource, index) => {
        return (
          <option
            key={index}
            value={resource.id}
            selected={type === resource.id ? true : false}
          >
            {resource.name}
          </option>
        );
      }
    );

    return (
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h2
              className="modal-title"
              id="resourceTile"
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
            <form>
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
                          defaultValue={
                            this.props.resourceStore.currentResource.no
                          }
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
                          defaultValue={
                            this.props.resourceStore.currentResource.name
                          }
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
                        <select
                          className="form-control-sm"
                          id="inputType"
                          onChange={(e) => this.onChangeSelect(e)}
                        >
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
                          type="number"
                          className="form-control form-control-sm "
                          id="inputNum"
                          placeholder={0}
                          ref={this.price}
                          defaultValue={
                            this.props.resourceStore.currentResource.price
                          }
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
                          type="date"
                          className="form-control form-control-sm "
                          id="inputNum"
                          placeholder="dd/MM/yyyy"
                          defaultValue={this.props.resourceStore.currentResource.date.substr(
                            0,
                            10
                          )}
                          onChange={(e) => this.onChangeDate(e)}
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
                        <select
                          ref={this.state.act}
                          className="form-control-sm"
                          onChange={(e) => this.onChangeActive(e)}
                        >
                          <option value="1" selected={act === 1 ? true : false}>
                            Active
                          </option>
                          <option value="0" selected={act === 0 ? true : false}>
                            Deactive
                          </option>
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
                         
                            <div className="card-img-top p-4">
                              <img
                                width={250}
                                height={250}
                                src={this.state.img === "" ? this.props.resourceStore.currentResource.image : this.state.img}
                              />
                            </div>
                         
                          {/* <div class="col-6"></div> */}
                        </div>
                        <div className="row mt-1">
                          <div className="file-field">
                            <div className="btn form-control-file btn-sm btn-success ml-2">
                              {/* <input type="file" onChange={()=> this.encodeImageFileAsURL} /> */}
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
                <button
                  type="button"
                  className="btn btn-danger"
                  id="modal-button-save"
                  onClick={() => this.onupdate()}
                >
                  Lưu
                </button>
                <button
                  type="button"
                  //type="cancel"
                  data-dismiss="modal"
                  className="btn btn-secondary"
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
export default inject("resourceStore")(observer(UpdateForm));
