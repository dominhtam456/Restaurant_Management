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

    async onMergeTable() {
        this.props.tableStore.mergeTable();
    }

    async onChangeTable() {
        const crTable = this.props.tableStore.currentTable;
        if(crTable.length != 2) {alert("Phải chọn 2 bàn để đổi"); return;}
        if((crTable[0].status === 'Có' && crTable[1].status === 'Có') || (crTable[0].status === 'Trong' && crTable[1].status === 'Trong')) {alert("Phải có 1 bàn trống và 1 bàn có người"); return;}
        await this.props.tableStore.changeTable();
        await this.props.tableStore.getTable();
    }

    render() {
        const element= this.props.tableStore.listTable.map((table, index)=>{
            return <TableElement table={table} key={table.id}/>
        })
        //console.log(toJS(this.props.tableStore.listTable))
        return (
            
                <div className="tab-pane fade show active" id="ban" role="tabpanel" aria-labelledby="home-tab">
                    <div className='row '>
                        <div className="ml-auto mr-4">
                            <button onClick={() => this.onMergeTable()} type="button" className="btn btn-success ">Ghép bàn</button>
                            <button onClick={() => this.onChangeTable()} type="button" className="btn btn-success ">Đổi bàn</button>
                        </div>
                        
                    </div>
                    <div className="card-deck bg-white border" style={{justifyContent: "center"}}>
                        {element}
                    </div>
                </div>
            
        )
    }
}

export default inject("tableStore")(observer(TableList));
