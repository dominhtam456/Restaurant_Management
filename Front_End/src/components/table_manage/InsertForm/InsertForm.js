import React, { Component } from "react";
import Info from "./Info";
import Footer from "./Footer";
import Image from "./Image";

class InsertForm extends Component {
  render() {
    return (
      <form name="formAddMaterial">
        <div class="container">
          <div class="row">
            <Info />
            <Image />
          </div>
        </div>
        <Footer />
      </form>
    );
  }
}

export default InsertForm;