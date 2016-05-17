import React, { Component, PropTypes } from 'react'
import { loginUser, changePage } from '../../actions'

class Login extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleRegisterClick = this.handleRegisterClick.bind(this)
    }

    handleClick () {
        const { dispatch } = this.props
        dispatch(loginUser())
    }

    handleRegisterClick () {
        const { dispatch } = this.props
        dispatch(changePage('register'))
    }

    render () {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div
                          className="input-field col s12 center-align"
                          style={{'marginBottom': '5px'}}>
                            <small>Login with your username and password below</small>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">User</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s6">
                            <a
                              onClick={ this.handleClick }
                              className="waves-effect waves-teal btn-flat">
                                Sign in 
                            </a>
                        </div>
                        <div className="input-field col s6">
                            <a
                              onClick={ this.handleRegisterClick }
                              className="waves-effect waves-teal btn-flat">
                                Register
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

class Registration extends Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        const { dispatch } = this.props
        dispatch(loginUser())
    }

    render () {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div
                          className="input-field col s12 center-align"
                          style={{'marginBottom': '5px'}}>
                            <small>Create your account with your email address</small>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password-conf" type="password" className="validate"/>
                            <label htmlFor="password-conf">Confirm Password</label>
                        </div>
                        <div className="input-field col s6">
                            <a
                              onClick={ this.handleClick }
                              className="waves-effect waves-teal btn-flat">
                                Register
                            </a>
                        </div>
                        <div className="input-field col s6">
                            <a className="waves-effect waves-teal btn-flat">
                                Sign in
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default class LoginPage extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { dispatch, isLogin } = this.props
        const loginStyle = {
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'bottom': '0',
            'right': '0',
            'width': '100%',
            'height': '85%',
            'backgroundImage': 'url(img/login-2.jpg)',
            'backgroundSize': 'cover'
        }

        let formBody
        if (isLogin) {
            formBody = (
                <Login
                  dispatch={ dispatch } />
            )
        } else {
            formBody = (
                <Registration
                  dispatch={ dispatch } />
            )
        }

        return (
            <div
              style={ loginStyle }>
                <div
                  className="valign-wrapper center-align"
                  style={{'height': '80%'}}>
                    <div className="valign" style={{'width': '100%'}}>
                        <div
                          style={{'left': '50%', 'marginTop': '50px', 'width': '350px', 'textAlign': 'justify', 'marginLeft': '-175px', 'padding': '20px 15px 0 15px'}}
                          className="card">
                            <div className="row">
                                <i
                                  className="material-icons large deep-orange-text"
                                  style={{'position': 'absolute', 'top': '-50px', 'left': '130px'}}>
                                    polymer
                                </i>
                            </div>
                            { formBody }
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
