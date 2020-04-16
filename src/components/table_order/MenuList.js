import React, { Component } from 'react'
import MenuElement from './MenuElement'


export default class MenuList extends Component {
    render() {
        return (
            
                <div className="tab-pane fade show " id="menu" role="tabpanel" aria-labelledby="home-tab">
                    <div className="card-deck bg-white border" style={{justifyContent: "center"}}>
                        <MenuElement />
                        <MenuElement />
                        <MenuElement />
                        <MenuElement />
                        <MenuElement />
                        <MenuElement />
                    </div>
                </div>
            

        )
    }
}
