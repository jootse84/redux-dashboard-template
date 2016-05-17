import React, { Component, PropTypes } from 'react'
import Dropdown from './Dropdown'

export default class SettingsMenu extends Component {
    render () {
        const { settings } = this.props
            
        const button = (
            <div className="chip pink darken-4 white-text" style={{'fontSize': '14px'}}>
                <i className="material-icons">arrow_drop_down</i>
                <img src="img/26115.jpg" alt="Contact Person" />
                Jose
            </div>
        )

        const items = settings.map((el, j) => {
            return (
                <li key={ `li-dropdown-settings-${j}` }>
                    <a
                      style={{'textDecoration': 'none', 'fontSize': '16px'}}
                      key={ `a-dropdown-settings-${j}` }
                      className="row valign-wrapper grey-text text-darken-4">
                        <div className="col s8">
                            { el.title }
                        </div>
                        <i
                          style={{'fontSize': '140%'}}
                          className="material-icons col s4">
                            { el.icon }
                        </i>
                    </a>
                </li>
            )
        })

        return (
            <Dropdown 
              id="settings"
              key="dropdown-settings"
              button={ button }
              list={ items } />
        )
    }
}
