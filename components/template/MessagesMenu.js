import React, { Component, PropTypes } from 'react'
import Dropdown from './Dropdown'
import BadgeIcon from '../buttons/BadgeIcon'

class Message extends Component {
    handleClick () {
    }
    render () {
        const { img, subject, content, time } = this.props
        const areaStyle = {
            'textOverflow': 'ellipsis',
            'whiteSpace': 'nowrap',
        }
        const timeStyle = {
            'marginLeft': '10px',
            'display': 'inline-block',
            'paddingRight':'3px',
            'fontSize': '1rem',
            'opacity': '0.4',
            'height': '10px',
            'lineHeight': '10px',
            'verticalAlign': 'middle'
        }

        return (
            <li>
                <a
                  href="#"
                  className="row valign-wrapper grey-text text-darken-4"
                  onClick={this.handleClick}>
                    <div className="col s3">
                        <img
                          src={img}
                          className="circle responsive-img" />
                    </div>
                    <div
                      className="col s9"
                      style={ areaStyle }>
                        <small>
                            <b>{subject}</b> 
                            <i className='tiny material-icons' style={ timeStyle }>av_timer</i><span style={{opacity: '0.4'}}>{time}</span>
                            <br/>
                            {content}
                        </small>
                    </div>
                </a>
            </li>
        )
    }
}

export default class MessagesMenu extends Component {
    handleClick () {
    }
    render () {
        const { messages = [] } = this.props

        const button = (
            <BadgeIcon
              icon="message"
              total={messages.length} />
        )

        const list = messages.map((el, j) => {
            return (
                <Message
                  key={`msg-${j}`}
                  img={el.img}
                  subject={el.subject}
                  content={el.content}
                  time={el.time} />
            )
        })

        const header = (
            <a
              href="#"
              style={{'textDecoration': 'none'}}
              className="grey-text text-darken-4">
                <small>{ `You have ${messages.length} messages` }</small>
            </a>
        )

        const footer = (
            <small className="fa-message">See All Messages</small>
        )

        return (
            <Dropdown 
              id="messages"
              key="dropdown-messages"
              button={ button }
              header={ header }
              list={ list }
              footer={ footer }
              handleClick={ this.handleClick } />
        )
    }
}
