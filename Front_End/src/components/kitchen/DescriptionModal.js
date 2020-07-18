import React, { Component } from 'react'
import { inject , observer } from 'mobx-react'

class DescriptionModal extends Component {
    constructor(props) {
        super(props);
        this.description = React.createRef();
    }

    onClickSubmit(){
        this.props.kitchenStore.pushNotice(this.description.current.value)
    }

    render() {
        return (
            <div className="modal fade" id="problemDescModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Description</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <textarea className="form-control" rows="5" ref={this.description}></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={() => {this.onClickSubmit()}} type="button" className="btn btn-danger" data-dismiss="modal">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default inject("kitchenStore")(observer(DescriptionModal));
