import React, { Component } from 'react'
import InsertForm from './InsertForm'

export default class InsertFoodButton extends Component {
    render() {
        return (
            <div className="float-md-right mb-3 mr-3">
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalAddFoods"><i className="fas fa-plus-circle" /> Thêm Mới</button>
                <div className="modal fade" id="modalAddFoods" tabIndex={-1} role="dialog" aria-labelledby="modalAddFoods" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content ">
                        <div className="modal-header bg-primary">
                        <h2 className="modal-title" style={{color: 'white'}}>Thêm Món Ăn
                        </h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                            <a className="nav-link active" id="info-tab" data-toggle="tab" href="#info" target="_self" role="tab" aria-controls="info" aria-selected="true">Thông tin</a>
                            </li>
                        </ul>
                        <div className="card-body border">
                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="home-tab">
                                <InsertForm />
                                <div className="modal fade" id="addType" tabIndex={-1} role="dialog" aria-labelledby="addTypeLabel" aria-hidden="true" style={{zIndex: 1600}}>
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                    <div className="modal-header bg-primary">
                                        <h5 className="modal-title text-white" id="addTypeLabel">Thêm Loại Món Ăn</h5>
                                    </div>
                                    <div className="modal-body">
                                        <form className="mt-2">
                                        <div className="container">
                                            <div className="row">
                                            <div className="col-12">
                                                <div className="form-group row">
                                                <label htmlFor="inputName" className="col-sm-4 col-form-label form-control-sm">Loại
                                                    món
                                                    ăn:</label>
                                                <div className="col-sm-7">
                                                    <input type="text" className="form-control form-control-sm" id="inputName" placeholder="eg. Món chiên" />
                                                    <p className="text-danger">{'{'}{'{'}alertLNL{'}'}{'}'}</p>
                                                </div>
                                                <div className="col-sm-1">
                                                    <i className="fas fa-exclamation-circle" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-danger">Lưu</button>
                                        </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="detail" role="tabpanel" aria-labelledby="profile-tab">
                            </div>
                            <div className="tab-pane fade" id="detailDescription" role="tabpanel" aria-labelledby="contact-tab">
                                ...
                            </div>
                            <div className="tab-pane fade" id="moreDishs" role="tabpanel" aria-labelledby="contact-tab">...
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
