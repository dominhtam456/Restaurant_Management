import React, { Component } from 'react'
import TableElement from './TableElement'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class TableList extends Component {
    componentDidMount(){
        this.props.tableStore.getTable();
        
    }
    render() {
        console.log(toJS(this.props.tableStore.listTable))
        return (
            
                <div className="tab-pane fade show active" id="ban" role="tabpanel" aria-labelledby="home-tab">
                    <div className="card-deck bg-white border" style={{justifyContent: "center"}}>
                    <TableElement />
                    <TableElement />
                    <TableElement />
                    <TableElement />
                    <TableElement />
                    <TableElement />
                    </div>
                </div>
            

        )
    }
}

export default inject("tableStore")(observer(TableList));
