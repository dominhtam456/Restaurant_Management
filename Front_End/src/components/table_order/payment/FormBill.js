import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import { observable, computed, action, decorate, toJS } from "mobx"
import CommonUtil from './../../../util'

 class FormBill extends Component {
    getListStaff() {
        
        if(!this.props.tableStore.currentInvoice.nhanvien) return;
        let list = "";
        this.props.tableStore.currentInvoice.nhanvien.forEach(nv => {
            list += nv.nhanvien.fullname;
        });
        return list;
    }

    render() {
        if(!this.props.tableStore.currentListOrder[0]) return null;
        const invoice = this.props.tableStore.currentInvoice;
        const totalMoney = this.props.tableStore.totalMoney;

        const element = this.props.tableStore.currentListOrder[0].map((od, index) => {
            console.log(toJS(od));
            return(
                <tr style={{lineHeight: '1em'}} key={index}>
                    <td>{index + 1}</td>
                    <td>{od.tenMonAn}</td>
                    <td>{od.soluong}</td>
                    <td>{CommonUtil.formatVND(od.price)}</td>
                    <td>{CommonUtil.formatVND(od.thanhTien)}</td>
                </tr>
            )
        })
        
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
                <p style={{textAlign: 'center', fontSize: 16}}><b>Mã Hóa Đơn: {invoice.no} </b></p>
                <p style={{textAlign: 'center', fontSize: 12}}><b>Ngày Lập: {invoice.date}</b></p>
                <div className="row">
                    <div className="col-sm-6">
                    <div style={{lineHeight: 10}}>
                        <p>Tổng Tiền Hàng: {totalMoney}đ</p>
                        <p style={{fontSize: 20}}><b>Khách Cần Trả: {CommonUtil.formatVND(totalMoney)}</b></p>
                        {/* <p>Khách Thanh Toán:{'{'}{'{'}excesscash| number{'}'}{'}'} đ</p>
                        <p>Tiền thừa trả khách: {'{'}{'{'}excesscash - total| number{'}'}{'}'} đ</p> */}
                        <hr />
                        <p>Phục vụ : {this.getListStaff()}</p>
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
                    {element}
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
export default inject("tableStore")(observer(FormBill));
