import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'
import { toJS } from 'mobx'
import ProblemRow from './ProblemRow'

class ProblemTable extends Component {
    render() {
        //console.log(toJS(this.props.tableStore.currentListNotice))
        const element = this.props.tableStore.currentListNotice.map((notice, index) => {
            if(notice.status === "Unsolved")
                return <ProblemRow notice={notice} key={index}/>
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

export default inject("tableStore")(observer(ProblemTable));