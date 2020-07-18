import React, { Component } from 'react'
import ReadyFoodRow from './ReadyFoodRow'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class ReadyFoodTable extends Component {
    componentDidMount(){

    }
    render() {
        //console.log(toJS(this.props.tableStore.listReadyFood));
        if(this.props.tableStore.listReadyFood.length == 0) 
            return <p className="text-center">Empty</p>
        const element = this.props.tableStore.listReadyFood.map((food,index) => {
            return <ReadyFoodRow key={index} food={food} />
        })


        return (
            <table  className="table borderless content-wrap table-responsive">
                <tbody>
                    {element}
                </tbody>
           </table>
        )
    }
}

export default inject("tableStore")(observer(ReadyFoodTable));