import React, { Component, PropTypes } from 'react'
import { closeModal } from '../../actions'

class Modal extends Component {

    componentDidMount () {
        const { dispatch } = this.props
        $('#modal-trigger').leanModal({
            complete: () => {
                dispatch(closeModal())
            }
        })
        $('#modal-trigger').click()
    }

    render () {
        const { button, header, content, confirm, close } = this.props
        return (
            <span>
                <div
                  id="modal-trigger"
                  href="#modal" />

                <div
                  id="modal"
                  className="modal">
                    <div className="modal-content">
                        <h4>{ header }</h4>
                        { content }
                    </div>
                    <div className="modal-footer">
                        <a className="modal-action waves-effect waves-green btn-flat ">
                            { confirm }
                        </a>
                        <a className="modal-action modal-close waves-effect waves-red btn-flat ">
                            { close }
                        </a>
                    </div>
                </div>
            </span>
        )
    }
}

class Spinner extends Component {

    componentDidMount () {
        $('#modal-trigger').leanModal({
            dismissible: false
        })
        $('#modal-trigger').click()
    }

    renderSpinner () {
        return (
            <div className="preloader-wrapper active big">
                <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        )
    }

    render () {
        const { button, header, content, confirm, close } = this.props
        return (
            <span>
                <div
                  id="modal-trigger"
                  href="#modal" />
                <div
                  id="modal"
                  className="modal-spinner">
                    { this.renderSpinner() }
                </div>
            </span>
        )
    }
}

export default class Modals extends Component {
    render () {
        const { modal, user, dispatch } = this.props

        switch (modal.type) {
            case 'test':
                return (
                    <Modal
                      header='this is a test'
                      content="what a content!!!"
                      confirm='confirm'
                      close='this is a close button'
                      user={ user }
                      dispatch={ dispatch } />
                )
            case 'spinner':
                return (
                    <Spinner />
                )
            default:
                if (document.getElementById('modal')) {
                    $('#modal').closeModal()
                }
                return (
                    <span />
                )
        }
    }
}
