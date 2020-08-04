import React, { Component } from 'react'
import TableOrder from './table_order/TableOrder'
import Food from './food/Food'
import Resource from './resources/Resource'
import TableManage from './table_manage/TableManage'
import StaffManage from './staff_manage/StaffManage'
import Statistical from './statistical/Statistical'
import Kitchen from './kitchen/Kitchen'

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
                    <Route exact path="/resources" render={() => <Resource/>}/>
                    <Route exact path="/table_manage" render={() => <TableManage/>}/>
                    <Route exact path="/staff_manage" render={() => <StaffManage/>}/>
                    <Route exact path="/statistical" render={() => <Statistical/>}/>
                    <Route exact path="/kitchen" render={() => <Kitchen/>}/>
                </Switch>
                
            </div>
        )
    }
}

