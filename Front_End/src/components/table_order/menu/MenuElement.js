import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class MenuElement extends Component {
    onClickFood() {
        this.props.tableStore.setCurrentListOrder(this.props.food)
    }

    render() {
        return (
            <a style={{cursor: "pointer"}} onClick={() => this.onClickFood()}>
                <div className="card-block mb-2 mt-2">
                    <div className="card" style={{width: '10rem'}}>
                        <img className="card-img-top p-4" 
                            src={this.props.food.image} 
                            alt="Card image cap" width="150px" height="150px" />
                        <div className="card-footer borde">
                            <p className="card-text" style={{textAlign: 'center'}}>{this.props.food.name}</p>
                        </div>
                    </div>
                 </div>
            </a>
        )
    }
}

export default inject("tableStore")(observer(MenuElement));
