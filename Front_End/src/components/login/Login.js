import React, { Component } from 'react'
import * as api from './../../services/LoginService'
import { withRouter   } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.usernameRef = React.createRef()
        this.passwordRef = React.createRef()
        this.state={
            alert: false,
            idLogged: false
        }
    }

    login(e) {
        const { history } = this.props;
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        const response = api.login(username, password);
        response.then(data => {
            if(data.error) {
                this.setState({
                    alert: true
                })
            }
            else {
                this.setState({
                    alert: false,
                    isLogged: true
                })
                localStorage.setItem('token', data.result.token)
                localStorage.setItem('username', data.result.username)
                localStorage.setItem('role', data.result.role)
                this.props.history.push('/table')
            }
        })

    }



    render() {

        const errorMessage = () => {
            return <div className="alert alert-danger">Username or password not correct</div>
        }

        return (
            <div className="login">
            <div className="background-login">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-md-7 p-5">
                <div className="card bg-secondary shadow border-0">
                    <div className="card-body px-lg-5 py-lg-5">
                    <form role="form">
                        <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ni ni-email-83" /></span>
                            </div>
                            <input ref={this.usernameRef} className="form-control" placeholder="Email" type="email" required />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ni ni-lock-circle-open" /></span>
                            </div>
                            <input ref={this.passwordRef} className="form-control" placeholder="Password" type="password" required />
                        </div>
                        </div>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                        <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                        <label className="custom-control-label" htmlFor=" customCheckLogin">
                            <span className="text-muted">Remember me</span>
                        </label>
                        </div>
                        <div className="text-center">
                        <button to='/table' type="button" onClick={e => this.login(e)} className="btn btn-primary my-4">Sign in</button>
                        </div>
                        {this.state.alert ? errorMessage() : ''}
                    </form>
                    </div>
                </div>
                {/* <div className="row mt-3">
                    <div className="col-6">
                    <a href="#" className="text-light"><small>Forgot password?</small></a>
                    </div>
                    <div className="col-6 text-right">
                    <a href="#" className="text-light"><small>Create new account</small></a>
                    </div>
                </div> */}
                </div>
            </div>
            </div>
            </div>

        )
    }
}

export default withRouter(Login)