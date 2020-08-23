import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      color: "white",
    };

    let date = new Date();
    let year = date.getFullYear();

    const role = JSON.parse(atob(localStorage.getItem("token").split(".")[1]))
      .role;

    return (
      <div>
        <nav
          id="mySidebar"
          style={{ width: "15%" }}
          className=" w3-bar-block  w3-animate-left navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white nav-custom"
        >
          <div className="container-fluid">
            <button
              className="w3-bar-item w3-button w3-large"
              onClick={this.w3_close}
              style={closeNavStyle}
            >
              Close Sidebar
            </button>
            {/* Toggler */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#sidenav-collapse-main"
              aria-controls="sidenav-main"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Brand */}
            <a className="navbar-brand pt-0" href="#!"></a>
            {/* Collapse */}
            <li className="collapse navbar-collapse" id="sidenav-collapse-main">
              {/* Collapse header */}
              {/* Form */}
              <form className="mt-4 mb-3 d-md-none">
                <div className="input-group input-group-rounded input-group-merge">
                  <input
                    type="search"
                    className="form-control form-control-rounded form-control-prepended"
                    placeholder="Search"
                    aria-label="Search"
                  />
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
                  {role == 1 || role == 4 || role == 2 ? (
                    <Link to="/table" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Đặt
                      bàn
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                {role == 4 ? (
                <button data-toggle="collapse" data-target="#ma" className="w3-animate-left navbar-light text-white">Món ăn</button>) : (
                  ""
                )}
                <div id="ma" className="collapse">
                  <li className="nav-item">
                  {role == 4 ? (
                    <Link to="/food" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Danh sách món ăn
                    </Link>
                    ) : (
                  ""
                )}
                  </li>
                
                <li className="nav-item">
                {role == 4 ? (
                    <Link to="/food_type" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Loại món ăn
                    </Link>
                    ) : (
                  ""
                )}
                </li>
                </div>

                {role == 4 ? (
                <button data-toggle="collapse" data-target="#nl" className="w3-animate-left navbar-light text-white">Nguyên liệu</button>) : ("")}
                <div id="nl" className="collapse">
                <li className="nav-item">
                {role == 4 ? (
                    <Link to="/resources" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Danh sách nguyên
                      liệu
                    </Link>
                    ) : (
                      ""
                    )}
                </li>

                <li className="nav-item">
                  {role == 4 ? (
                    <Link to="/resource_type" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Loại
                      Nguyên liệu
                    </Link>
                    ) : (
                      ""
                    )}
                </li>
                </div>

                <li className="nav-item">
                  {role == 4 ? (
                    <Link to="/staff_manage" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Danh sách nhân
                      viên
                    </Link>
                  ) : (
                    ""
                  )}
                </li>

                <li className="nav-item">
                  {role == 4 ? (
                    <Link to="/table_manage" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Bàn
                    </Link>
                  ) : (
                    ""
                  )}
                </li>

                <li className="nav-item">
                  {role == 4 ? (
                    <Link to="/statistical" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Thống
                      kê
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                <li className="nav-item">
                  {role == 3 || role == 4 ? (
                    <Link to="/kitchen" className="nav-link text-white">
                      <i className="fas fa-vector-square text-danger " /> Bếp
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
              {/* Divider */}
              <hr className="my-3" />
              {/* Heading */}
              <h6 className="navbar-heading text-secondary">
                © {year} PWD team
              </h6>
              {/* Navigation */}
            </li>
          </div>
        </nav>
      </div>
    );
  }
}