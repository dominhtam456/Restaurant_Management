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

    async componentDidMount(){
        await this.props.tableStore.getAlertTable(this.props.table.id);
       
    }

    async componentDidUpdate(prevProps) {
        if(prevProps.update != this.props.update)
            await this.props.tableStore.getAlertTable(this.props.table.id,this.props.table.color);
        }

    render() {
        const style = {
            cursor: "pointer",
            width: '10.2rem',
            backgroundColor: this.props.table.color
        }
        
        //if(this.props.table.status !== "Trong") style.backgroundColor = "lightgray";
        return (
            
                <a className="table-list">
                    <div className="card-block mb-2 mt-2 " onClick = {() => this.onHandelClickTable()}>
                    <div className="card" style={style} >
                        <img className="card-img-top p-4" 
                            src={ process.env.PUBLIC_URL + "/img/icons/dinner-table.png" } 
                            alt="Card image cap" width="120px" height="150px" />
                        <div className="card-footer border" >
                        <p className="card-text" style={{textAlign: 'center', fontWeight: 'bold'}}> 
                            {this.props.table.name}
                            
                        </p>
                        <div className="group-dot">
                            <span className="dot" id={"n"+this.props.table.id}></span>
                            <span className="dot" id={"m"+this.props.table.id}></span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <input ref={this.check} onClick={() => this.onCheck()} type="checkbox" className="form-check-input float-right check check-table"></input>
                </a>
        )
    }
}

export default inject("tableStore")(observer(TableElement));

