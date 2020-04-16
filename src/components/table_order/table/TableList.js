import React, { Component } from 'react'
import TableElement from './TableElement'

export default class TableList extends Component {
    render() {
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
