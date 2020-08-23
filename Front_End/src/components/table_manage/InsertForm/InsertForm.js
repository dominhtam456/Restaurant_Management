import React, { Component } from "react";
import Info from "./Info";

class InsertForm extends Component {
  render() {
    return (
      <form className="formAddMaterial">
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
