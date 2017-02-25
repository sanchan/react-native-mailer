import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mailsActions } from '../../actions';
import Mail from '../../components/Mail';

class MailContainer extends Component {
  render() {
    const { currentEmail, actions } = this.props
    return (
      <Mail
        email={currentEmail}
        actions={actions} />
    )
  }
}

export default connect(state => ({
    currentEmail: state.mailsReducer.currentEmail
  }),
  (dispatch) => ({
    actions: bindActionCreators(mailsActions, dispatch)
  })
)(MailContainer);
