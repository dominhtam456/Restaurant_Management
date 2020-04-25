import React, { Component } from 'react'
import FormBill from './FormBill'
import printJS from 'print-js'

export default class PaymentForm extends Component {
    print(){
        printJS('form-bill', 'html')
    }
    render() {
        return (
            <div  className="modal fade modal-custom" style={{paddingRight: "0px"}} id="btnPayment" tabIndex={-1} role="dialog" aria-labelledby="btnPaymentTitle" aria-hidden="true">
                    <div  className="modal-dialog modal-xl" role="document ">
                        <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title" id="btnPayment">
                            </h5><h1 style={{color: 'white'}}>Thanh Toán Bàn {'{'}{'{'}tableIndex{'}'}{'}'}</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="table-responsive">
                                    <table className="table  align-items-center table-flush accordion  " id="accordionRow">
                                    <thead className="thead-light">
                                        <tr>
                                        <th scope="col">Stt</th>
                                        <th scope="col">Tên Món Ăn</th>
                                        <th scope="col">Số Lượng</th>
                                        <th scope="col">Đơn Giá</th>
                                        <th scope="col">Thành Tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                        <td>{'{'}{'{'}$index+1{'}'}{'}'}</td>
                                        <td>{'{'}{'{'}y.monan_NAME{'}'}{'}'}</td>
                                        <td>
                                            <input disabled={true} type="number" style={{width: '4em'}} />
                                        </td>
                                        <td>{'{'}{'{'}y.hoadonchitiet_PRICE | number{'}'}{'}'}</td>
                                        <td>{'{'}{'{'}y.hoadonchitiet_PRICE*y.hoadonchitiet_SOLUONG{'}'}{'}'}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                                <div className="col-md-6 border-left">
                                <table className="table  align-items-center table-flush accordion border-0 ">
                                    <tbody>
                                    <tr>
                                        <td>Tổng Tiền Hàng</td>
                                        <td>{'{'}{'{'}total | number{'}'}{'}'}</td>
                                    </tr>
                                    <tr>
                                        <td>Giảm Giá</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><b>Khách Cần Trả</b></td>
                                        <td><b style={{color: '#F5365C'}}>{'{'}{'{'}total | number{'}'}{'}'}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Khách Thanh Toán</td>
                                        <td><input type="number" /></td>
                                    </tr>
                                    <tr>
                                        <td>Tiền Thừa Trả Khách </td>
                                        <td>{'{'}{'{'}excesscash - total | number{'}'}{'}'}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={ this.print } >Thanh Toán</button>
                            
                        </div>
                        
                        </div>
                    </div>
                    <FormBill />
                    </div>
        )
    }
}
