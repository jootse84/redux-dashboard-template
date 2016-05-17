import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Head from '../components/template/Head'
import Modals from '../components/modals/Modals'

import LoginPage from '../components/pages/LoginPage'
import ListPage from '../components/pages/ListPage'

class App extends Component {
    constructor(props) {
        super(props)
        this.handleLogoClick = this.handleLogoClick.bind(this)
    }

    componentDidMount() {
        const { dispatch } = this.props
        // dispatch initial actions
        return
    }

    handleLogoClick() {
        const { dispatch } = this.props
        // dispatch some action
    }

    renderMain() {
        const { page, dispatch, modal } = this.props

        switch (page) {
            case 'main':
                return (
                    <div>
                        <i>Your main content here</i>
                    </div>
                )
            default:
                return (
                    <ListPage
                      dispatch={ dispatch } />
                )
        }
    }

    render() {
        const { user = { name: "Jane Doe" },
                dispatch,
                modal,
                page } = this.props 

        if (['login', 'register'].indexOf(page) >= 0) {
            return (
                <div>
                    <LoginPage
                      isLogin={ page === 'login' }
                      dispatch={ dispatch } />
                    <Modals
                      modal={ modal }
                      user={ user }
                      page={ page }
                      dispatch={ dispatch } />
                </div>
            )
        } else {
            return (
                <div>
                    <Head
                      onLogoClick={this.handleLogoClick}
                      user={user} />
                    <main
                      className="row"
                      style={{'margin': '0 40px 0 40px'}}>
                        <div className="col s12">
                            { this.renderMain() }
                            <div className="footer-main">
                                here your footer.
                            </div>
                        </div>
                    </main>
                    <Modals
                      modal={ modal }
                      user={ user }
                      page={ page }
                      dispatch={ dispatch } />
                </div>
            )
        }
    }
}

App.propTypes = {
    page: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    const { page } = state.changePage,
          user = state.updateUser,
          modal = state.displayModal

    return {
        page,
        user,
        modal
    }
}

export default connect(mapStateToProps)(App)
