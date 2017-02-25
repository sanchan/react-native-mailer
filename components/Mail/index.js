import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native-macos';

import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header'

const Actions = (props) => {
  return (
    <View style={styles.actions}>
      <View>
        <Icon style={styles.actionIcon} name={'ios-undo-outline'} size={20} color="#4F8EF7" />
        <Text>Reply</Text>
      </View>
    </View>
  )
}


export default class Mail extends Component {
  render() {
    const { email: { title, body } } = this.props

    return(
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>{title || 'Title of email'}</Text>
        <View style={styles.mail}>
          <WebView
            source={{html: body}}
            // scalesPageToFit={true}
            style={{
              borderRadius: 5,
              backgroundColor: 'transparent',
              shadowColor: '#333',
              shadowOffset: {
                width: 0,
                height: 4
              },
              shadowRadius: 4,
              shadowOpacity: 0.3,
            }}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderLeftWidth: 1,
    borderLeftColor: '#ccc',
    flexDirection: 'column',
    padding: 15,
  },
  title: {
    fontSize: 32,
    color: '#333',
    marginBottom: 15
  },
  mail: {
    flex: 1,
    // alignSelf: 'stretch',


    // marginBottom: 20
  },
  actions: {
    position: 'absolute',
    bottom: 0,

  },
  actionIcon: {

  }
})
