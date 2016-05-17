import React, { Component, PropTypes } from 'react'
import { changeModal } from '../../actions'
import Card from '../cards/Card'

export default class ListPage extends Component {
    constructor (props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch () {
        const { dispatch } = this.props
        dispatch(changeModal({ type: 'test' }))
    }

    render () {
        const cards = {
            "items": [
            {
                "description": "A simple card for nothing useful",
                "name": "Katie",
                "type": "test",
                "uid": "12345678901234567891",
                "tags": [
                    "sweet",
                    "taipei"
                ],
                "href": "img/test.jpg"
            }, {
                "description": "card added using async functions",
                "name": "martha",
                "type": "test",
                "uid": "12345678901234567892",
                "tags": [
                    "sweet",
                    "taipei"
                ],
                "href": "img/video.jpg"
            }, {
                "description": "card added using async functions",
                "name": "martha",
                "type": "video",
                "uid": "12345678901234567894",
                "tags": [
                    "sweet",
                    "barcelona"
                ],
                "href": "img/test.jpg"
            }, {
                "type": "test",
                "uid": "12345678901234567895",
                "name": "luis",
                "description": "card added using async functions",
                "tags": [
                    "sweet",
                    "taipei"
                ],
                "href": "img/test.jpg"
            }, {
                "type": "test",
                "uid": "12345678901234567896",
                "name": "martha",
                "description": "card added using async functions",
                "tags": [
                    "sweet",
                    "taipei",
                    "absent",
                    "taipei"
                ],
                "href": "img/video.jpg"
            }, {
                "type": "test",
                "uid": "12345678901234567899",
                "name": "lorin",
                "description": "card added using async functions",
                "tags": [
                "corn",
                "syrup"
                ],
                "href": "img/test.jpg"
            }, {
                "type": "video",
                "uid": "12345678901234567900",
                "name": "lorin",
                "description": "card added using async functions",
                "tags": [
                    "corn",
                    "syrup"
                ],
                "href": "img/video.jpg"
            }],
            "prev": null,
            "next": null
        }

        let cardList = cards['items'].map((el, j) => {
            return (
                <Card
                  key={ `item-${el.uid}` }
                  card={ el } />
            )
        })
        return (
            <div style={{'margin': '60px 10% 0 10%'}}>
                <div className="row">
                    <div
                      className="fixed-action-btn horizontal"
                      style={{'top': '80px', 'right': '50px'}}>
                        <a className="btn-floating btn-large pink darken-3">
                            <i className="large material-icons">mode_edit</i>
                        </a>
                        <ul>
                            <li>
                                <a className="btn-floating pink darken-2">
                                    <i className="material-icons">delete</i>
                                </a>
                            </li>
                            <li>
                                <a
                                  onClick={ this.handleSearch }
                                  className="btn-floating pink darken-2">
                                    <i className="material-icons">search</i>
                                </a>
                            </li>
                            <li>
                                <a className="btn-floating pink darken-2">
                                    <i className="material-icons">add</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    { cardList }
                </div>
            </div>
        )
    }
}
