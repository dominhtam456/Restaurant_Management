import React, { Component } from 'react'
import ContentRouter from './ContentRouter'
import Navbar from './Navbar'
export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="main-content" style={{marginLeft: "15%"}} id="main" >
                    <Navbar />
                    <div className="header  pb-6 pt-5 pt-md-8">
                        <div className="container-fluid">
                            <div className="header-body">
                            {/* Card stats */}
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContentRouter />    
                </div>
            </div>
        )
    }
}
