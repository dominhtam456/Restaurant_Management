import React, { Component } from 'react'

export default class Navbar extends Component {

    w3_open() {
        document.getElementById("main").style.marginLeft = "15%";
        document.getElementById("mySidebar").style.width = "15%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }
    
    render() {
        const openNavStyle = {
            color: 'black', 
            backgroundColor: 'white', 
            display: 'none'
          }
        return (
            <div>
                {/* Navbar */}
                <nav className="navbar navbar-top navbar-expand-md navbar-dark bg-white sha" id="navbar-main">
                    <div className="container-fluid">
                        {/* Brand */}
                        <div>
                        <button id="openNav"  className="w3-button  w3-large " style={openNavStyle} onClick={this.w3_open}>☰</button>
                        </div>
                        {/* Form */}
                        {/* User */}
                        <ul className="navbar-nav align-items-center d-none d-md-flex">
                        <li className="nav-item dropdown">
                            
                            <a className="nav-link pr-0" target="true" _self="true" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="media align-items-center">
                                <div className=" dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome!</h6>
                                </div>
                                <span className="avatar avatar-sm rounded-circle">
                                    <img alt="Image placeholder" src={process.env.PUBLIC_URL + "/img/icons/avatar.png"} />
                                </span>
                                <div className="media-body ml-2 d-none d-lg-block">
                                    <span className="mb-0 text-sm  font-weight-bold text-dark">Tâm </span>
                                </div>
                            </div>
                            </a>
                            
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                            <div className="dropdown-divider" />
                            <a href="#!login" className="dropdown-item">
                                <i className="ni ni-user-run" />
                                <span>Logout</span>
                            </a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
                {/* End Navbar */}
                {/* Header */}
                    
                    
            </div>
        )
    }
}
