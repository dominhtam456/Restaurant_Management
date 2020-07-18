import React, { Component } from 'react'
import ProblemTable from './ProblemTable'
import { inject , observer } from 'mobx-react'

class ProblemPanel extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header clickable collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h5 className="mb-0">
                        Problem
                    </h5>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        <ProblemTable />                        
                    </div>
                </div>
            </div>
        )
    }
}

export default inject("tableStore")(observer(ProblemPanel));