import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div className="col-6">
                    <label htmlFor="inputNum" className="col-sm-4 col-form-label form-control-sm">Hình
                    Ảnh:</label>
                    <div className="container">
                    <div className="row">
                        <div className="card-body border">
                        <div className="col-6">
                            <img width={150} height={150} alt='hello' />
                        </div>
                        </div>
                        <div className="col-6" />
                    </div>
                    <div className="row mt-1">
                        <div className="file-field">
                        <div className="btn form-control-file btn-sm btn-success ml-2">
                            <input type="file" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}
