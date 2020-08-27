import React, { Component } from 'react';

class ConfirmEmail extends Component {
    render() {
        return (
            <div>
                <input  className="form-control" placeholder="Email" type="email" required />
            </div>
        );
    }
}

export default ConfirmEmail;