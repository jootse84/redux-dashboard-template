import React, { Component, PropTypes } from 'react'

export default class BadgeIcon extends Component {
    render () {
        const { color = '#00796b', total = 0, icon } = this.props
        const styleBadge = {
            'marginLeft': '-8px',
            'position': 'absolute',
            'lineHeight': '15px',
            'top': '8px',
            'fontSize': '12px',
            'textAlign': 'center',
            'borderRadius': '3px',
            'padding': '1px 5px 1px 4px',
            'background': color
        }
        let badge
        if (total > 0) {
            badge = <span style={styleBadge}>{ total }</span>
        }
        return (
            <span style={{'marginBottom': '0'}}>
                { badge }
                <i className="tiny material-icons" style={{'color': 'white'}}>{ icon }</i>
            </span>
        )
    }
}

