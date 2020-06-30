import React, { Component } from 'react'
import TableElement from './TableElement'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class TableList extends Component {
    componentDidMount(){
        this.props.tableStore.getTable();
        
    }

    componentDidUpdate(prevProps) {
    if(prevProps.update != this.props.update)
        this.props.tableStore.getTable();
    }

    render() {
        const element= this.props.tableStore.listTable.map((table, index)=>{
            return <TableElement table={table} key={table.id}/>
        })
        console.log(toJS(this.props.tableStore.listTable))
        return (
            
                <div className="tab-pane fade show active" id="ban" role="tabpanel" aria-labelledby="home-tab">
                    <div className="card-deck bg-white border" style={{justifyContent: "center"}}>
                        {element}
                    </div>
                </div>
            
        )
    }
}

export default inject("tableStore")(observer(TableList));
