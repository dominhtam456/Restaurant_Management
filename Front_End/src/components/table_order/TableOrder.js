import React, { Component } from 'react'
import TableList from './table/TableList'
import TableDetail from './table_detail/TableDetail'
import MenuList from './menu/MenuList'
import TableDetailFooter from './TableDetailFooter'
import { inject , observer } from 'mobx-react'
import CommonUtil from './../../util'
import ReadyFoodPanel from './ready_food_panel/ReadyFoodPanel'
import ProblemPanel from './problem/ProblemPanel'
import { toJS } from 'mobx'
import { withRouter } from 'react-router-dom'



class TableOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            update: 1
        }
    }

    listTableName() {
        let str = '';
        //console.log(toJS(this.props.tableStore.currentTable))
        this.props.tableStore.currentTable.forEach(table => {
            str += table.name + ' '
        });
        return str;
    }
    async componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = process.env.PUBLIC_URL + '/js/plugins/choose.js';
        document.body.appendChild(s);
        
        setInterval(() => {
            this.props.tableStore.setUpdateCount();
        }, 10000);

        await this.props.loginStore.checkValid();
        if(!this.props.loginStore.isValid) this.props.history.push('/login')
        const role = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).role;
        if(role == 3) {
            alert("Forbidden");
            this.props.history.push('/kitchen');
        }
      }

    render() {
        if(!this.props.loginStore.isValid) return null;
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
                                    <TableList update={this.props.tableStore.updateCount}/>
                                    <MenuList update={this.props.tableStore.updateCount}/>
                                    
                                </div> 
                            </div>
                            <div className="col-sm-6">
                                <div className="card border">
                                    <div className="card-header bg-secondary">
                                        <h1>{this.listTableName()}</h1>
                                    </div>
                                    <div className="card-body" style={{height:"40em", overflowY: "scroll"}}>
                                    <div className="table-responsive">
                                    <TableDetail />
                                    </div>
                                    <h3 className="text-danger float-md-right ">Tổng tiền: {CommonUtil.formatVND(this.props.tableStore.totalMoney)}</h3>
                                    
                                    <div id="accordion" className="col-12 float-md-right">
                                        <ReadyFoodPanel update={this.props.tableStore.updateCount}/>
                                        <ProblemPanel update={this.props.tableStore.updateCount}/>
                                    </div>
                                </div>
                                
                                <TableDetailFooter/>
                                
                            </div>
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

export default withRouter(inject("tableStore","loginStore")(observer(TableOrder)));