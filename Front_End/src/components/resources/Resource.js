import React, { Component } from "react";

class Resource extends Component {
  render() {
    return (
      <div className="container-fluid mt--7">
      <div class="row">
  <div class="col">
    <div class="card shadow">
      <div class="card-header border-0 bg-primary">
        <div>
          <div class="float-left">
            <h3 class="mb-0 modal-title" style={{color: "white"}}>Nguyên Liệu</h3>
          </div>
          <div class="float-md-right d-inline-block">
            <form>
              <div class="input-group md-form form-sm form-2 pl-0">
                <input class="form-control " ng-model="searchInput" type="text" placeholder="Search"
                  aria-label="Search"/>
              </div>
            </form>
          </div>
        </div>
        <div class="float-md-right mb-3 mr-3">
          <button type="button" class="btn btn-danger " data-toggle="modal" data-target="#modalAddMaterials"><i
              class="fas fa-plus-circle"></i> Thêm Mới</button>
          <div class="modal fade" id="modalAddMaterials" tabindex="-1" role="dialog" aria-labelledby="modalAddMaterials"
            aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content ">
                <div class="modal-header bg-primary">
                  <h2 class="modal-title" id="modalAddMaterials" style={{color: "white"}}>Thêm Nguyên Liệu
                  </h2>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                        aria-controls="home" aria-selected="true">Thông Tin</a>
                    </li>

                  </ul>
                  <div class="card-body border">
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="home-tab">
                        <form ng-submit="addResources()" name="formAddMaterial">
                          <div class="container">
                            <div class="row">
                              <div class="col-6">
                                <div class="form-group row">
                                  <label for="input1" class="col-sm-4 col-form-label form-control-sm">Mã nguyên
                                    liệu:</label>
                                  <div class="col-sm-7">
                                    <input name="resourcesNo" ng-model="resourcesNo" type="text"
                                      class="form-control form-control-sm" id="input1" required/>
                                    <span style={{fontSize:"10px", color:"red"}}
                                      ng-if="formAddMaterial.resourcesNo.$invalid && formAddMaterial.resourcesNo.$touched">Không
                                      được để trống mã nguyên liệu</span>
                                      </div>
                                  </div>
                                </div>

                                <div class="form-group row">
                                  <label for="inputName" class="col-sm-4 col-form-label form-control-sm">Tên nguyên
                                    liệu:</label>
                                  <div class="col-sm-7">
                                    <input name="inputName" ng-model="inputName" type="text"
                                      class="form-control form-control-sm" id="inputName" placeholder=" " required/>
                                    <span style={{fontSize:"10px", color:"red"}}
                                      ng-if="formAddMaterial.inputName.$invalid && formAddMaterial.inputName.$touched">Không
                                      được để trống tên nguyên liệu</span>
                                  </div>
                                </div>

                                <div class="form-group row">
                                  <label for="inputType" class="col-sm-4 col-form-label form-control-sm">Loại nguyên
                                    liệu:</label>
                                  <div class="col-sm-7">
                                    <select name="TypeId" class="form-control-sm" id="inputType" ng-model="TypeId"
                                      required>
                                      <option >
                                      </option>
                                    </select>
                                    <p style={{fontSize:"10px", color:"red"}}
                                      ng-if="formAddMaterial.TypeId.$invalid && formAddMaterial.TypeId.$touched">Không
                                      được để trống loại nguyên liệu</p>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label for="inputNum" class="col-sm-4 col-form-label form-control-sm">Giá
                                    nhập:</label>
                                  <div class="col-sm-7">
                                    <input ng-model="inputPrice" type="text" class="form-control form-control-sm "
                                      id="inputNum" placeholder="0"/>
                                  </div>
                                </div>
                                <div class="form-group row">
                                  <label for="inputNum" class="col-sm-4 col-form-label form-control-sm">Hạn Sử
                                    Dụng:</label>
                                  <div class="col-sm-7">
                                    <input ng-model="inputDate" type="date" class="form-control form-control-sm "
                                      id="inputNum" placeholder="0"/>

                                  </div>
                                </div>
                              </div>
                              <div class="col-6">
                                <label for="inputNum" class="col-sm-4 col-form-label form-control-sm">Hình Ảnh:</label>
                                <div class="container" ng-controller="UploadController">
                                  <div class="row">
                                    <div class="card-body border">
                                      <div class="col-6">
                                        <img ng-src="{{imageSrc}}" width="150" height="150" alt=""/>
                                      </div>
                                    </div>
                                    <div class="col-6"></div>
                                  </div>
                                  <div class="row mt-1">
                                    <div class="file-field">
                                      <div class="btn form-control-file btn-sm btn-success ml-2">
                                        <input type="file" ng-file-select="onFileSelect($files)"
                                          onchange="angular.element(this).scope().setFile(this)"/>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                        
                          <div class="text-right mt-3">
                            <button type="submit" class="btn btn-danger">Lưu & thêm mới</button>
                            <button type="button" ng-click="test()" class="btn btn-secondary"
                              data-dismiss="modal">Đóng</button>
                          </div>
                        </form>
                      </div>
                      <div class="tab-pane fade" id="detail" role="tabpanel" aria-labelledby="profile-tab">

                      </div>
                      <div class="tab-pane fade" id="detailDescription" role="tabpanel" aria-labelledby="contact-tab">
                        ...
                      </div>
                      <div class="tab-pane fade" id="moreDishs" role="tabpanel" aria-labelledby="contact-tab">...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <tbody dir-paginate="x in searched | itemsPerPage:10 | filter: searchInput">

            <tr data-toggle="collapse" class="clickable table-striped"
              aria-expanded="true">
              <td>
               
              </td>
              <td>
                
              </td>
              <td>
               
              </td>
              <td>
                <span class="badge badge-dot">
                  
                </span>
              </td>
              <td>
                <span class="mr-2"> </span>
              </td>
              <td>
                <span class="mr-2"></span>
              </td>
              <td class="text-right">
                <div class="dropdown">
                  <a class="btn btn-sm btn-icon-only text-light" href="#!tables" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-ellipsis-v"></i>
                  </a>
                  {/* <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item">Action</a>
                    <a class="dropdown-item">Another action</a>
                    <a class="dropdown-item">Something else here</a>
                  </div> */}
                </div>
              </td>
            </tr>
            <tr class="collapse " data-parent="#accordionRow">
              <td colspan="8" class="hiddenRow">
                <div class="container">
                  <div class="row">
                    <div class="card-body border">
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="true">Thông Tin</a>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div class="container border">
                            <h1 mt-1>Nguyên Liệu:</h1>
                            <hr/>
                            <div class="row">
                              <div class="col-9">

                              </div>
                            </div>
                            <div class="row p-2 mt-3 ">
                              <div class="col-4">
                                <div class="card">
                                  <img class="img-fluid" width="250" height="300"
                                    src="assets/img/resources/{{x.nguyenlieu_IMG}}" alt="" />
                                </div>
                              </div>
                              <div class="col-4">
                                <table>
                                  <tr class="p-2">
                                    <td>
                                      <b>Mã Nguyên Liệu:</b>
                                    </td>
                                    <td>
                                      <h4><b></b></h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Loại Nguyên Liệu:</b>
                                    </td>
                                    <td>
                                      
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Giá Nhập:</b>
                                    </td>
                                    <td>
                                     
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <b>Hạn sử dụng:</b>
                                    </td>
                                    <td>
                                      
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div class="float-md-right mt-3">
                              <button type="button" class="btn btn-success" data-toggle="modal"
                                ><i class="fas fa-plus-circle"></i> Cập
                                Nhật</button>
                              {/* <!-- Modal --> */}
                              <div class="modal fade" tabindex="-1" role="dialog"
                                aria-labelledby="modifyMaterialTitle" aria-hidden="true">
                                <div class="modal-dialog modal-lg" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header bg-primary">
                                      <h2 class="modal-title" id="modifyMaterialTitle" style={{color: "white"}}>Cập Nhật Thông Tin Nguyên Liệu
                                      </h2>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <form ng-submit="updateResources()">
                                        <div class="container">
                                          <div class="row">
                                            <div class="col-6">
                                              <div class="form-group row">
                                                <label for="input1" class="col-sm-4 col-form-label form-control-sm">Mã
                                                  nguyên liệu:</label>
                                                <div class="col-sm-7">
                                                  <input  type="text"
                                                    class="form-control form-control-sm" id="input1"
                                                  />
                                                </div>
                                              </div>

                                              <div class="form-group row">
                                                <label for="inputName"
                                                  class="col-sm-4 col-form-label form-control-sm">Tên nguyên
                                                  liệu:</label>
                                                <div class="col-sm-7">
                                                  <input type="text"
                                                    class="form-control form-control-sm" id="inputName"
                                                    />
                                                </div>
                                              </div>

                                              <div class="form-group row">
                                                <label for="inputType"
                                                  class="col-sm-4 col-form-label form-control-sm">Loại nguyên
                                                  liệu:</label>
                                                <div class="col-sm-7">
                                                  <select class="form-control-sm" id="inputType">
                                                    <option >
                                                      </option>
                                                  </select>
                                                </div>
                                              </div>
                                              <div class="form-group row">
                                                <label for="inputNum"
                                                  class="col-sm-4 col-form-label form-control-sm">Giá nhập:</label>
                                                <div class="col-sm-7">
                                                  <input  type="text"
                                                    class="form-control form-control-sm " id="inputNum"
                                                    />
                                                </div>
                                              </div>
                                              <div class="form-group row">
                                                <label for="inputNum"
                                                  class="col-sm-4 col-form-label form-control-sm">Hạn Sử Dụng:</label>
                                                <div class="col-sm-7">
                                                  <input type="date" 
                                                    class="form-control form-control-sm "/>

                                                </div>
                                              </div>
                                            </div>
                                            <div class="col-6">
                                              <div class="col-6">
                                                <label for="inputNum"
                                                  class="col-sm-4 col-form-label form-control-sm">Hình Ảnh:</label>
                                                <div class="container" ng-controller="UploadController">
                                                  <div class="row">
                                                    <div class="card-body border">
                                                      <div class="col-6">
                                                        <img 
                                                          width="150"
                                                          height="150" alt=""/>
                                                      </div>
                                                    </div>
                                                    <div class="col-6"></div>
                                                  </div>
                                                  <div class="row mt-1">
                                                    <div class="file-field">
                                                      <div class="btn form-control-file btn-sm btn-success ml-2">
                                                        <input type="file" ng-file-select="onFileSelect($files)"
                                                          
                                                          onchange="angular.element(this).scope().setFile(this)"/>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="text-right mt-3">
                                          <button type="submit" class="btn btn-danger ">Lưu</button>
                                          <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Đóng</button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button type="button" class="btn btn-danger " data-toggle="modal"
                                data-target="#c{{x.nguyenlieu_ID}}"><i class="far fa-trash-alt"></i> Xóa</button>
                              <div class="modal fade" id="c{{x.nguyenlieu_ID}}" tabindex="-1" role="dialog"
                                aria-labelledby="modalDeleteMaterials" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable" role="document">
                                  <div class="modal-content ">
                                    <div class="modal-header bg-primary">
                                      <h2 class="modal-title" id="modalDeleteMaterials">Xác Nhận Xóa</h2>
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="modal-body">
                                      <p style={{whitespace: "normal"}}>Bạn sẽ xóa sản phẩm có mã là
                                        <b></b> có tên là
                                        <b></b></p>
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" ng-click="deleteResources(x)" class="btn btn-secondary"
                                        data-dismiss="modal">Đồng ý</button>
                                      <button type="button" class="btn btn-danger" data-dismiss="modal">Hủy</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <dir-pagination-controls boundary-links="true" direction-links="true">
        </dir-pagination-controls>
      </div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Resource;
