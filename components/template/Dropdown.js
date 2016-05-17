import React, { Component, PropTypes } from 'react'

export default class Dropdown extends Component {
    
    componentDidMount () {
        const {
            id,
            inDuration = 300,
            outDuration = 225,
            constrain_width = false,
            hover = false,
            gutter = 0,
            belowOrigin = true,
            alignment = 'left'
        } = this.props

        $(`#dropdown-button-${id}`).dropdown({
            inDuration,
            outDuration,
            constrain_width,
            hover,
            gutter,
            belowOrigin,
            alignment
        })
    }

    renderHeader () {
        const { id, header } = this.props
        let header_tag = []

        if (header) {
            header_tag.push(
                <li className="header">
                    { header }
                </li>
            )
            header_tag.push(
                <li className="divider"></li>
            )
        }
        return header_tag
    }

    renderFooter () {
        const { id, footer, handleClick } = this.props
        let footer_tag = []

        if (footer) {
            footer_tag.push(
                <li className="divider"></li>
            )
            footer_tag.push(
                <li className="footer">
                    <a
                      style={{'textDecoration': 'none'}}
                      onClick={ handleClick }
                      className="grey-text text-darken-4">
                        { footer }
                    </a>
                </li>
            )
        }
        return footer_tag
    }

    render () {
        const { id, button, list } = this.props

        const linkStyle = {
            'textDecoration': 'none',
            'color': 'white'
        }

        return (
            <li>
                <a
                  id={`dropdown-button-${id}`}
                  className='dropdown-button'
                  key={`dropdown-button-${id}`}
                  data-activates={ `dropdown-${id}` }
                  style={ linkStyle }>
                    { button }
                </a>
                <ul
                  id={`dropdown-${id}`}
                  key={`dropdown-${id}`}
                  className='dropdown-content'>
                    { this.renderHeader.call(this) }
                    { list }
                    { this.renderFooter.call(this) }
                </ul>
            </li>
        )
    }
}
