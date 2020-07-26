import React, { Component } from "react";
import Info from "./Info";

class InsertForm extends Component {
  render() {
    return (
      <form name="formAddMaterial">
        <div class="container">
          <div class="row">
            <Info />
          </div>
        </div>
      </form>
    );
  }
}

export default InsertForm;
