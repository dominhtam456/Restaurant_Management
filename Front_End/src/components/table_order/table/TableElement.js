import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class TableElement extends Component {
    constructor(props) {
        super(props);
        this.check = React.createRef();
    }

    onCheck() {
        this.props.tableStore.checkTable(this.check.current.checked, this.props.table )
        this.props.tableStore.getListOrder(this.props.table);
        this.props.tableStore.getListReadyFood();
        this.props.tableStore.getCurrentListNotice();
    }

    onHandelClickTable() {
        this.props.tableStore.setCurrentTable(this.props.table);
        this.props.tableStore.getListOrder(this.props.table);
        this.props.tableStore.getListReadyFood();
        this.props.tableStore.getCurrentListNotice();
    }

    render() {
        const style = {
            cursor: "pointer",
            width: '10.2rem',
            backgroundColor: this.props.table.color
        }

        //if(this.props.table.status !== "Trong") style.backgroundColor = "lightgray";
        return (
            
                <a >
                    <div className="card-block mb-2 mt-2">
                    <div className="card" style={style}>
                        <img className="card-img-top p-4" onClick = {() => this.onHandelClickTable()}
                            src={ process.env.PUBLIC_URL + "/img/icons/dinner-table.png" } 
                            alt="Card image cap" width="120px" height="150px" />
                        <div className="card-footer border" >
                        <p className="card-text" style={{textAlign: 'center', fontWeight: 'bold'}}> 
                            {this.props.table.name}
                            
                        </p>
                        <input ref={this.check} onClick={() => this.onCheck()} type="checkbox" className="form-check-input float-right check"></input>
                        </div>
                    </div>
                    </div>
                </a>
        )
    }
}

export default inject("tableStore")(observer(TableElement));

