import React, { Component, PropTypes } from 'react'
import MessagesMenu from './MessagesMenu'
import SettingsMenu from './SettingsMenu'
import Aside from './Aside'

export default class Head extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        $('.button-collapse').sideNav()
    }

    handleClick () {
    }

    render() {
        const {user, items, onLogoClick} = this.props
        const messages = [{
                img: "img/26115.jpg",
                subject: "Support Team",
                content: "Welcome to this awesome app",
                time: "5 mins"
            }, {
                img: "img/26115.jpg",
                subject: "Get Started",
                content: "Some useful tips to get started",
                time: "2 hours"
            }, {
                img: "img/26115.jpg",
                subject: "Developers",
                content: "Want to edit the code?",
                time: "Today"
            }, {
                img: "img/26115.jpg",
                subject: "Sales Department",
                content: "This app is for free",
                time: "Yesterday"
            }]
        const settings = [{
                title: 'profile',
                icon: 'perm_identity'
            }, {
                title: 'settings',
                icon: 'settings'
            }, {
                title: 'logout',
                icon: 'input'
            }]

        const sideButtonStyle = {
            'textDecoration': 'none',
            'color': 'white',
            'cursor': 'pointer',
            'marginLeft': '20px'
        }

        return (
            <header>
                <nav className="top-nav pink darken-4">
                    <div className="nav-wrapper">
                        <ul
                          id="nav-mobile"
                          className="right hide-on-med-and-down"
                          style={{'marginRight': '20px'}}>
                            <MessagesMenu
                              messages={ messages } />
                            <SettingsMenu
                              settings={ settings } />
                        </ul>
                        <a
                          style={ sideButtonStyle }
                          data-activates="mobile-demo"
                          className="button-collapse">
                            <i className="material-icons">menu</i>
                        </a>
                        <Aside
                          id="mobile-demo"
                          fixed={false}/>
                    </div>
                </nav>
                <Aside
                  user={user} />
            </header>
        );
    }
}
