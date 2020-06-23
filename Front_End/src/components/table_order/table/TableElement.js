import React, { Component } from 'react'

export default class TableElement extends Component {
    render() {
        return (
            
                <a style={{cursor: "pointer"}}>
                    <div className="card-block mb-2 mt-2">
                    <div className="card" style={{width: '10.2rem'}}>
                        <img className="card-img-top p-4" 
                            src={ process.env.PUBLIC_URL + "/img/icons/dinner-table.png" } 
                            alt="Card image cap" width="120px" height="150px" />
                        <div className="card-footer border" >
                        <p className="card-text" style={{textAlign: 'center', fontWeight: 'bold'}}> 
                            {this.props.table.name}</p>
                        </div>
                    </div>
                    </div>
                </a>
        )
    }
}

