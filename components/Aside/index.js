import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Cursor,
} from 'react-native-macos';
import Icon from 'react-native-vector-icons/Ionicons';

const items = [{
  title: 'Inbox',
  icon: 'ios-mail-outline',
  total: 1,
  active: true
},{
  title: 'Snoozed',
  total: 0,
  icon: 'ios-time-outline'
},{
  title: 'Sent',
  total: 0,
  icon: 'ios-send-outline'
},{
  title: 'Drafts',
  total: 0,
  icon: 'ios-document-outline'
},{
  title: 'Pins',
  total: 0,
  icon: 'ios-pin-outline'
},{
  title: 'Archive',
  total: 0,
  icon: 'ios-archive-outline'
},{
  title: 'Spam',
  total: 0,
  icon: 'ios-sad-outline'
},{
  title: 'Trash',
  total: 0,
  icon: 'ios-trash-outline'
}]

const Badge = (props) => {
  const { text } = props

  return (
    <View style={{
      backgroundColor: '#4a90e2',
      paddingLeft: 5,
      paddingRight: 5,
      borderRadius: 10,
    }}>
      <Text style={{fontSize: 11, color: '#EBEBEB'}}>{text}</Text>
    </View>
  )
}

export default class Aside extends Component {
  static displayName = 'Aside'

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.text !== r2.text});
    this.state = {
      dataSource: ds.cloneWithRows(items),
    };
  }

  row(row) {
    return (
      <View
        style={[styles.row, (row.active) ? styles.rowActive : null]}
        onMouseEnter={Cursor.set.bind(this, 'pointing')}
        onMouseLeave={Cursor.set.bind(this, 'arrow')}
      >
        <Icon style={styles.rowIcon} name={row.icon} size={20} color="#4F8EF7" />
        <Text style={styles.rowText}>{row.title}</Text>
        {row.total > 0 &&
        <Badge text={row.total} />
        }
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.row}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#212a3b',
    alignSelf: 'stretch',
    paddingTop: 45,
    width: 200
  },
  listView: {

  },
  row: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    // justifyContent: 'space-between',
  },
  rowActive: {
    backgroundColor: '#474f5f',
  },
  rowIcon: {
    // marginRight: 10,
    textAlign: 'center',
    width: 30
  },
  rowText: {
    flex: 1,
    color: '#EBEBEB'
  },
  text: {
    color: 'white'
  }
});
