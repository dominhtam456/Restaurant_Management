import React, { Component } from 'react'
import ReadyFoodTable from './ReadyFoodTable'
import { inject , observer } from 'mobx-react'

class ReadyFoodPanel extends Component {
    render() {
        return (
            <div className="card">
            <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h5 className="mb-0">
                  Ready Food
              </h5>
            </div>
        
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <ReadyFoodTable />
              </div>
            </div>
          </div>
        )
    }
}

export default inject("tableStore")(observer(ReadyFoodPanel));