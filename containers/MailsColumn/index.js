import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { mailsActions } from '../../actions';

import MailsColumn from '../../components/MailsColumn';

class MailsColumnContainer extends Component {
  componentWillMount() {
    const { emails, actions } = this.props
    actions.setCurrentEmail(emails[0])
  }

  render() {
    const { emails, currentEmail, actions } = this.props

    return (
      <MailsColumn
        currentEmail={currentEmail}
        emails={emails}
        actions={actions} />
    )
  }
}

export default connect(state => ({
    currentEmail: state.mailsReducer.currentEmail,
    emails: state.mailsReducer.emails
  }),
  (dispatch) => ({
    actions: bindActionCreators(mailsActions, dispatch)
  })
)(MailsColumnContainer);
