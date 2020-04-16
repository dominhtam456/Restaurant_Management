import React, { Component } from 'react'
import TableList from './TableList'
import TableDetail from './TableDetail'
import MenuList from './MenuList'
import TableDetailFooter from './TableDetailFooter'
import FormBill from './FormBill'

export default class TableOrder extends Component {
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = process.env.PUBLIC_URL + '/js/plugins/choose.js';
        document.body.appendChild(s);
      }
    render() {
        return (
            <div className="container-fluid mt--7">
                <div className="row">
                    <div className="col">
                    <div className="card shadow">
                        <div className="card-header bg-primary">
                        <h3 style={{color: 'white'}}>Đặt Bàn</h3>
                        </div>
                        <div className="card-body">
                            <div>
                            <div className="row ">
                                <div className="col-sm-6 border rounded bg-secondary">
                                <ul className="nav nav-tabs mt-2" id="myTab" role="tablist">
                                    <li className="nav-item">
                                    <a className="nav-link active" id="table-tab" data-toggle="tab" href="#ban" target="_self" role="tab"
                                        aria-controls="table" aria-selected="true">BÀN</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" id="menu-tab" data-toggle="tab" href="#menu" target="_self" role="tab"
                                        aria-controls="menu" aria-selected="false">THỰC ĐƠN</a>
                                    </li>

                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <TableList />
                                    <MenuList />
                                    
                                </div> 
                            </div>
                            <div className="col-sm-6">
                                <div className="card border">
                                    <div className="card-header bg-secondary">
                                    <h1>Bàn 1</h1>
                                    </div>
                                    <div className="card-body" style={{height:"40em", overflowY: "scroll"}}>
                                    <div className="table-responsive">
                                    <TableDetail />
                                    </div>
                                    <h3 className="text-danger float-md-right ">Tổng tiền: 1 đ</h3>
                                </div>
                                
                                <TableDetailFooter />
                                
                            </div>
                            </div>
                            </div>
                            
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <FormBill/>
            </div>
  
        )
    }
}
