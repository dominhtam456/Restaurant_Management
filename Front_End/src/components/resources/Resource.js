import React, { Component } from "react";
import InsertResourceButton from "./InsertForm/InsertResourceButton";
import ResourceList from "./resource_list/ResourceList";
import { inject , observer} from "mobx-react"

class Resource extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
  }
  async onclick(){
    // console.log(this.name.current.value)
    await this.props.resourceStore.checkSearch(this.name.current.value);
  }
  render() {
    return (
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              <div className="card-header border-0 bg-primary">
                <div>
                  <div className="float-left">
                    <h3 className="mb-0 modal-title" style={{ color: "white" }}>
                      Nguyên liệu
                    </h3>
                  </div>
                  <div className="float-md-right d-inline-block">
                    <form>
                      <div className="input-group md-form form-sm form-2 pl-0">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                          id="search"
                          ref={this.name}
                        />
                        <button type="button" className="fas fa-search" onClick={() => this.onclick()}></button>
                      </div>
                    </form>
                  </div>
                </div>
                <InsertResourceButton />
              </div>
              <ResourceList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default inject("resourceStore")(observer(Resource))