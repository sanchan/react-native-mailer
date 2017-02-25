import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
} from 'react-native-macos';

import Icon from 'react-native-vector-icons/Ionicons';
import MailList from './MailList';

const Header = (props) => {
  const { text } = props

  return (
    <View style={{
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      padding: 10,
    }}>
      <View style={{
        backgroundColor: '#f4f4f4',
        borderRadius: 3,
        padding: 5,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Icon name="ios-search" size={20} color="#666" style={{width: 30, textAlign: 'center'}} />
        <TextInput
          style={{
            flex: 1,
            height: 18,
            alignSelf: 'center',
            backgroundColor: '#f4f4f4',
            paddingTop: 10
          }}
          bezeled={false}
          multiline={false}
          placeholder="Search"
          placeholderTextColor="#666" />
      </View>
    </View>
  )
}

export default class MailsColumn extends Component {
  render() {
    const { emails, currentEmail, actions } = this.props

    return(
      <View style={styles.container}>
        <Header />
        <MailList
          currentEmail={currentEmail}
          emails={emails}
          actions={actions}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
    flexDirection: 'column',
    width: 320
  }
})
