import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Cursor,
} from 'react-native-macos';

import Icon from 'react-native-vector-icons/Ionicons';

const Action = (props) => {
  const { icon } = props
  Cursor.set('openHand')

  return (
    <View
      style={styles.action}
      onMouseEnter={Cursor.set.bind(this, 'pointing')}
      onMouseLeave={Cursor.set.bind(this, 'arrow')}
    >
      <Icon name={icon} size={22} color="#666" />
    </View>
  )
}

export default class Header extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Action icon={'ios-close-outline'} />
        <Action icon={'ios-eye-off-outline'} />
        <Action icon={'ios-time-outline'} />
        <Action icon={'ios-archive-outline'} />
        <Action icon={'ios-trash-outline'} />
        <Action icon={'ios-folder-outline'} />
        <Action icon={'ios-more-outline'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginBottom: 15
  },
  action: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    marginRight: 12
  }
})
