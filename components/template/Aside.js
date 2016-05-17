import React, { Component, PropTypes } from 'react'

class SectionAsideMenu extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hover: false 
        }
    }
    handleMouseOver () {
        this.setState({
            hover: !this.props.isActive
        })
    }
    handleMouseOut () {
        this.setState({
            hover: this.props.isActive
        })
    }
    render () {
        const { name, icon, isActive = false, total = 0 } = this.props
        const linkStyle = {
            'fontSize': '13px',
            'color': 'rgba(255, 255, 255, 0.5)',
            'width': '100%',
            'padding': '0 4% 0 4%',
            'lineHeight': '55px',
            'textDecoration': 'none',
            'height': '55px'
        }
        const linkClass = (isActive || this.state.hover) ?
          'grey white-text darken-2 waves-effect waves-grey' : 'grey darken-3 waves-effect waves-grey'
        const iconStyle = {
            'float': 'right',
            'top': '15px',
            'position': 'relative',
            'lineHeight': '1'
        }
        const iconClass = isActive ? 'material-icons deep-orange-text' : 'material-icons'

        let badge

        if (total > 0) {
            const classBadge = (isActive || this.state.hover) ? '' : 'text-darken-2'
            const badgeStyle = {
                'marginRight': '25px',
                'height': '19px',
                'lineHeight': '18px',
                'marginTop': '18px',
                'borderRadius': '3px',
                'width': 'auto',
                'minWidth': 'auto',
                'fontSize': '11.5px',
                'textAlign': 'center',
                'padding': '1px 5px 0 4px',
                'position': 'absolute',
                'right': '15px',
                'boxSizing': 'border-box'
            }
            badge = (
                <span
                  className={ `badge deep-orange darken-2 white-text ${classBadge}` }
                  style={ badgeStyle }>
                    3
                </span>
            )
        }

        return (
            <li
              onMouseOver={ this.handleMouseOver.bind(this) }
              onMouseOut={ this.handleMouseOut.bind(this) }
              className={ (isActive ? 'bold active': 'bold') }
              style={{'padding': '0'}}>
                <a
                  className={ linkClass }
                  style={ linkStyle }>
                    <i
                      className={ iconClass }
                      style={ iconStyle }>
                        { icon }
                    </i>
                    { badge }
                    <span>
                        { name }
                    </span>
                </a>
            </li>
        )
    }
}

export default class Aside extends Component {
    constructor (props) {
        super(props)
    }

    renderAsideItems () {
        return (
            <span>
                <SectionAsideMenu
                  name="Dashboard"
                  icon="airplay"/>
                <SectionAsideMenu
                  isActive={true}
                  name="Devices"
                  icon="settings_input_composite"/>
                <SectionAsideMenu
                  total={3}
                  name="Groups"
                  icon="perm_identity"/>
                <SectionAsideMenu
                  name="Analytics"
                  icon="trending_up"/>
            </span>
        )
    }

    render () {
        const { user, id = "nav-mobile", fixed = true } = this.props
        const asideClass = fixed ? "side-nav fixed grey darken-4" : "side-nav grey darken-4"
        return (
            <ul
              id={ id }
              key={ id }
              className={ asideClass }>
                <li style={{'textAlign': 'center', 'marginTop': '20px'}}>
                    <div
                      style={{'lineHeight': '30px'}}
                      className="user">
                        <img
                          src="img/26115.jpg"
                          className="circle responsive-img"
                          alt="Contact Person"
                          style={{'maxWidth': '40%'}}/>
                        <p className="bold white-text">Jose El Pistolero</p>
                    </div>
                </li>
                { this.renderAsideItems() }
            </ul>
        )
    }
}
