import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div className="col-6">
                    <div className="form-group row">
                    <label htmlFor="input1" className="col-sm-4 col-form-label form-control-sm">Mã món
                        ăn:</label>
                    <div className="col-sm-7">
                        <input name="foodNo" type="text" className="form-control form-control-sm" id="input1" required />
                        <span style={{fontSize: 10, color: 'red'}} >Không được để trống mã món ăn</span>
                    </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="inputName" className="col-sm-4 col-form-label form-control-sm">Tên món
                        ăn:</label>
                    <div className="col-sm-7">
                        <input name="inputName" type="text" className="form-control form-control-sm" id="inputName" placeholder=" " required />
                        <span style={{fontSize: 10, color: 'red'}} >Không được để trống tên món ăn</span>
                    </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="inputType" className="col-sm-4 col-form-label form-control-sm">Loại món
                        ăn:</label>
                    <div className="col-sm-7">
                        <select name="TypeId" className="form-control-sm" id="inputType" required>
                        <option value="{{x.id}}">{'{'}{'{'}x.loaimonan_NAME{'}'}{'}'}
                        </option>
                        </select>
                        <div>
                        <span style={{fontSize: 10, color: 'red'}}>Không được để trống loại món ăn</span>
                        <a data-toggle="modal" data-target="#addType"><i className="fas fa-plus-square mt-0 " />Thêm loại</a>
                        </div>
                    </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="inputNum" className="col-sm-4 col-form-label form-control-sm">Giá
                        bán:</label>
                    <div className="col-sm-7">
                        <input type="text" className="form-control form-control-sm " id="inputNum" placeholder={0} />
                    </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="inputNum" className="col-sm-4 col-form-label form-control-sm">Đơn Vị
                        Tính:</label>
                    <div className="col-sm-7">
                        <input type="text" className="form-control form-control-sm " id="inputNum" placeholder={0} />
                    </div>
                    </div>
                    <div className="float-right mt-3">
                        <button type="submit" className="btn btn-danger">Lưu &amp; thêm mới</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
        )
    }
}
