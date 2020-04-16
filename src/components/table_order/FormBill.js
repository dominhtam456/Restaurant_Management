import React, { Component } from 'react'

export default class FormBill extends Component {

    render() {
        return (
            <div style={{display: "none"}}>
            <form id="form-bill" >
            {/* print */}
            <div className="container " style={{fontSize: 18, lineHeight: 5}}>
                <div className="container mt-3">
                <div>
                    <p>Tên cửa càng: ABC</p>
                    <p>Địa chỉ: ABC</p>
                    <p>Điện Thoại: 0909888555</p>
                </div>
                <div style={{border: '0.5px dashed'}} />
                {/* <h5 style={{textAlign: 'center'}}>HÓA ĐƠN CHI TIẾT</h5> */}
                <p style={{textAlign: 'center', fontSize: 16}}><b>Mã Hóa Đơn: {'{'}{'{'}hdno{'}'}{'}'} </b></p>
                {/* <p style={{textAlign: 'center', fontSize: 12}}><b>Ngày Lập: {'{'}{'{'}day{'}'}{'}'}</b></p> */}
                <div className="row">
                    <div className="col-sm-6">
                    <div style={{lineHeight: 10}}>
                        <p>Tổng Tiền Hàng: {'{'}{'{'}total| number{'}'}{'}'} đ</p>
                        <p>Giảm Giá: 0 đ</p>
                        <p style={{fontSize: 20}}><b>Khách Cần Trả: {'{'}{'{'}total| number{'}'}{'}'} đ</b></p>
                        <p>Khách Thanh Toán:{'{'}{'{'}excesscash| number{'}'}{'}'} đ</p>
                        <p>Tiền thừa trả khách: {'{'}{'{'}excesscash - total| number{'}'}{'}'} đ</p>
                        <p>Thuế: 0%</p>
                        <hr />
                        <p>Thu Ngân: Nguyen Van A</p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    </div>
                </div>
                </div>
                <div className="mb-3" style={{border: '0.5px dashed'}} />
                <br />
                <br />
                <div>
                <br /><br /><br /><table className="table  align-items-center table-flush accordion  " id="accordionRow">
                    <thead className="boder">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">TenM/A</th>
                        <th scope="col">SL</th>
                        <th scope="col">ĐG</th>
                        <th scope="col">TT</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={{lineHeight: '1em'}}>
                        <td>{'{'}{'{'}$index+1{'}'}{'}'}</td>
                        <td>{'{'}{'{'}y.monan_NAME{'}'}{'}'}</td>
                        <td>
                        {'{'}{'{'}y.hoadonchitiet_SOLUONG{'}'}{'}'}
                        </td>
                        <td>{'{'}{'{'}y.hoadonchitiet_PRICE| number{'}'}{'}'}</td>
                        <td>{'{'}{'{'}y.hoadonchitiet_PRICE*y.hoadonchitiet_SOLUONG| number{'}'}{'}'}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            {/* end print */}
            </form>
            </div>

        )
    }
}
