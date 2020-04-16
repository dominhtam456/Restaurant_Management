import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {  


  w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }

  // componentDidMount() {
  //   const s = document.createElement('script');
  //   s.type = 'text/javascript';
  //   s.async = true;
  //   s.src = process.env.PUBLIC_URL + '/js/sidebar.js';
  //   document.body.appendChild(s);
  // }

  render() {

    const closeNavStyle = {
      color: 'white'
    }

    let date = new Date();
    let year = date.getFullYear();

    return (
            <div>
              <nav id="mySidebar" style={{width: "15%"}} className=" w3-bar-block  w3-animate-left navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white nav-custom">
                <div className="container-fluid">
                  <button className="w3-bar-item w3-button w3-large" onClick={this.w3_close} style={closeNavStyle}>Close Sidebar</button>
                  {/* Toggler */}
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  {/* Brand */}
                  <a className="navbar-brand pt-0" href="#!">
                  </a>
                  {/* Collapse */}
                  <div className="collapse navbar-collapse" id="sidenav-collapse-main">
                    {/* Collapse header */}
                    {/* Form */}
                    <form className="mt-4 mb-3 d-md-none">
                      <div className="input-group input-group-rounded input-group-merge">
                        <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <span className="fa fa-search" />
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* Navigation */}
                    <ul className="navbar-nav nav-sidebar-custom ">
                      <li className="nav-item">
                        <Link to='/table' className="nav-link text-white" >
                          <i className="fas fa-vector-square text-danger " /> Đặt bàn
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/food' className="nav-link text-white" >
                          <i className="fab fa-elementor text-success" /> Món ăn
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="#!resources" >
                          <i className="ni ni-bullet-list-67 text-red" /> Nguyên Liệu
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="#!statistical" >
                          <i className="fas fa-table text-success" />Thống Kê
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="#!kitchen" >
                          <i className="fas fa-table text-success" />Nhà bếp 
                        </a>
                      </li>
                    </ul>
                    {/* Divider */}
                    <hr className="my-3" />
                    {/* Heading */}
                      <h6 className="navbar-heading text-secondary" >© {year} PWD team</h6>
                    {/* Navigation */}
                  </div>
                </div>
              </nav>
          </div>
    )
  }
}
