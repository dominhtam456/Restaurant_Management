import React, { Component } from 'react'

export default class MenuElement extends Component {
    render() {
        return (
            <a style={{cursor: "pointer"}}>
                <div className="card-block mb-2 mt-2">
                    <div className="card" style={{width: '10rem'}}>
                        <img className="card-img-top p-4" src={ process.env.PUBLIC_URL + "/img/resources/Mon_an_va_nuoc/Cơm_chiên_hải_sản.jpg" } alt="Card image cap" width="150px" height="150px" />
                        <div className="card-footer borde">
                            <p className="card-text" style={{textAlign: 'center'}}>x.monan_NAME</p>
                        </div>
                    </div>
                 </div>
            </a>
        )
    }
}
