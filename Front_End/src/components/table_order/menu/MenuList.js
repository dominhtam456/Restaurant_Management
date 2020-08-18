import React, { Component } from 'react'
import MenuElement from './MenuElement'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'

class MenuList extends Component {
    componentDidMount() {
        this.props.tableStore.getFoods();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.update != this.props.update)
            this.props.tableStore.getFoods();
    }
    render() {
        // console.log(toJS(this.props.tableStore.listFood))
        const element = this.props.tableStore.listFood.map((food, index) => {
            return <MenuElement key={food.id} food={food}/>
        })
        return (
            
                <div className="tab-pane fade show " id="menu" role="tabpanel" aria-labelledby="home-tab">
                    <div className="card-deck bg-white border" style={{justifyContent: "center"}}>
                        {element}
                    </div>
                </div>
            

        )
    }
}

export default inject("tableStore")(observer(MenuList));
