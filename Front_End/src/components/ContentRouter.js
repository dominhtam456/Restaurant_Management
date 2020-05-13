import React, { Component } from 'react'
import TableOrder from './table_order/TableOrder'
import Food from './food/Food'

import {
    Switch,
    Route
  } from "react-router-dom";

export default class ContentRouter extends Component {
    render() {
        return (
            <div>
                
                    <Switch>
                        <Route exact path="/table" render={() => <TableOrder/>}/>
                        <Route exact path="/food" render={() => <Food/>}/>
                    </Switch>
                
            </div>
        )
    }
}

