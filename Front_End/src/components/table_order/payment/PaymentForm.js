import React, { Component } from 'react'
import FormBill from './FormBill'
import printJS from 'print-js'
import TableDetail from './../table_detail/TableDetail'
import { inject , observer } from 'mobx-react'
import CommonUtil from './../../../util'

class PaymentForm extends Component {
    constructor(props) {
        super(props);
        this.payCash = React.createRef();
        this.state = {
            excessCash: 0
        }
      }
    print(){
        this.props.tableStore.payment();
        //printJS('form-bill', 'html');     
    }

    onLoseFocus() {
        let excessCash = this.payCash.current.value - this.props.tableStore.totalMoney;
        if(excessCash >= 0)
            this.setState({
                excessCash: this.payCash.current.value - this.props.tableStore.totalMoney 
            })
        else
            this.setState({
                excessCash: 0 
            })
        //console.log(this.state.excessCash)
    }
    render() {
        return (
            <div  className="modal fade modal-custom" style={{paddingRight: "0px"}} id="btnPayment" tabIndex={-1} role="dialog" aria-labelledby="btnPaymentTitle" aria-hidden="true">
                    <div  className="modal-dialog modal-xl" role="document ">
                        <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h5 className="modal-title" id="btnPayment">
                                </h5><h1 style={{color: 'white'}}>
                                    Thanh Toán {this.props.tableStore.currentTable.name}</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="table-responsive">
                                    <TableDetail />
                                </div>
                                </div>
                                <div className="col-md-6 border-left">
                                <table className="table  align-items-center table-flush accordion border-0 ">
                                    <tbody>
                                    <tr>
                                        <td>Tổng Tiền Hàng</td>
                                        <td>{CommonUtil.formatVND(this.props.tableStore.totalMoney)}</td>
                                    </tr>
                                    <tr>
                                        <td>Giảm Giá</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td><b>Khách Cần Trả</b></td>
                                        <td><b style={{color: '#F5365C'}}>{CommonUtil.formatVND(this.props.tableStore.totalMoney)}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Khách Thanh Toán</td>
                                        <td><input type="number" ref={this.payCash} onChange={() => this.onLoseFocus()} /></td>
                                    </tr>
                                    <tr>
                                        <td>Tiền Thừa Trả Khách </td>
                                        <td>{CommonUtil.formatVND(this.state.excessCash)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => this.print() } >Thanh Toán</button>
                            
                        </div>
                        
                        </div>
                    </div>
                    <FormBill />
                    </div>
        )
    }
}

export default inject("tableStore")(observer(PaymentForm));