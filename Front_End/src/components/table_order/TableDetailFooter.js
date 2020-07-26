import React, { Component } from 'react'
import printJS from 'print-js';
import FormBill from './payment/FormBill';
import PaymentForm from './payment/PaymentForm';
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'


class TableDetailFooter extends Component {
    print(){
        printJS('form-bill', 'html')
        console.log(printJS.params);
    }

    async onConfirm() {
        await this.props.tableStore.confirm();
        document.getElementById("table-tab").click();
    }

    async onUpdate() {
        await this.props.tableStore.update();
        document.getElementById("table-tab").click();
    }

    showButton() {
        if(this.props.tableStore.currentTable.length > 0){
            const listTable = this.props.tableStore.currentTable
            let flag = true;
            for(let i=0; i< listTable.length; i++){
                if(listTable[i].status === "Có"){
                    flag = false;
                    break;
                }
            }
            if(flag) {
                return (
                    <button type="button" className="btn btn-primary" onClick={() => this.onConfirm()}>
                        Xác nhận gọi món
                    </button>
                )
            }
            if(this.props.tableStore.currentTable.length == 1){ 
                return (
                    <button type="button" className="btn btn-primary" onClick={() => this.onUpdate()}>
                        Cập nhật
                    </button>
                )   
            }
        }
    }

    showPaymentButton() {
        if(this.props.tableStore.currentTable.length == 1 && this.props.tableStore.currentListOrder.length == 1){
            return (<button type="button" className="btn btn-danger" data-toggle="modal" data-target="#btnPayment" >
                Thanh Toán
            </button>)
        }
    }

    render() {
        return (
            <div className="card-footer ">
                <div className="float-right">
                    {/* Button trigger modal */}
                    {this.showPaymentButton()}
                    {this.showButton()}
                    {/* Modal */}
                   <PaymentForm />
                </div>
                
                </div>

        )
    }
}

export default inject("tableStore")(observer(TableDetailFooter));