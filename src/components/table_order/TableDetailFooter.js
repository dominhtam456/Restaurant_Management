import React, { Component } from 'react'
import printJS from 'print-js';
import FormBill from './payment/FormBill';
import PaymentForm from './payment/PaymentForm';

export default class TableDetailFooter extends Component {
    print(){
        printJS('form-bill', 'html')
        console.log(printJS.params);
    }
    render() {
        return (
            <div className="card-footer ">
                <div className="float-right">
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#btnPayment">
                    Thanh Toán
                    </button>
                    <button type="button" className="btn btn-primary">
                    Xác nhận gọi món
                    </button>
                    {/* Modal */}
                    <PaymentForm />
                </div>
                
                </div>

        )
    }
}
