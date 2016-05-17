import React, { Component, PropTypes } from 'react'

class TagList extends Component {
    render () {
        const { tags } = this.props

        let tagList = tags.map((tag, k) => {
            return (
                <span
                  className="deep-orange-text text-darken-2"
                  style={{'fontSize': '90%', 'paddingLeft': '5px'}}
                  key={ `tag-${k}` }>
                    #{ tag }
                </span>
            )
        })

        return (
            <div>
                { tagList }
            </div>
        )
    }
}

export default class Card extends Component {
    render () {
        const { key } = this.props
        const { uid, name, type, description, tags, href } = this.props.card

        return (
            <div
              style={{'padding': '20px'}}
              key={ `card-key-${key}` }
              className="col s12 m6 l4">
                <div
                  style={{'cursor': 'pointer', 'height': '105px'}}
                  className="card grey lighten-5 z-depth-1">
                    <div className="row">
                        <div className="col s7">
                            <img
                              style={{'margin': '10px 0 10px 0', 'maxHeight': '85px', 'position': 'absolute'}}
                              className="circle responsive-img"
                              src={href} />
                            <div style={{'position': 'relative', 'left': '100px', 'margin': '10px','whiteSpace': 'nowrap', 'overflow': 'hidden' }}>
                                <div
                                  className="pink-text text-darken-4"
                                  style={{'marginBottom': '-5px', 'fontSize': '25px'}}>
                                    { name }
                                </div>
                                <div style={{'marginBottom': '5px'}}>
                                    <small>{ description }</small>
                                </div>
                                <TagList tags={ tags } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
