import React, { Component } from "react";
import Info from "./Info";
//import Footer from "./Footer";
//import Image from "./Image";

class InsertForm extends Component {
  render() {
    return (
      <form name="formAddMaterial">
        <div className="container">
          <div className="row">
            <Info />
          </div>
        </div>
      </form>
    );
  }
}

export default InsertForm;
