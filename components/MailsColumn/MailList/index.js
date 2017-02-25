import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  TouchableWithoutFeedback,
  Cursor,
} from 'react-native-macos';

import Icon from 'react-native-vector-icons/Ionicons';

export default class MailList extends Component {
  constructor(props) {
    super(props);

    this.row = this.row.bind(this)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      dataSource: ds.cloneWithRows(props.emails),
    };
  }

  componentWillReceiveProps(props) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.setState({
      dataSource: ds.cloneWithRows(props.emails)
    })
  }

  row(row) {
    const { actions: { setCurrentEmail }, currentEmail } = this.props

    return (
      <TouchableWithoutFeedback
        onPress={setCurrentEmail.bind(null, row)}
        onMouseEnter={Cursor.set.bind(this, 'pointing')}
        onMouseLeave={Cursor.set.bind(this, 'arrow')}
      >
        <View
          style={[styles.row, (row.id == currentEmail.id) ? styles.rowActive : null]}
        >
          {row.unseen &&
          <View style={styles.unseenIcon} />
          }
          <View style={styles.contact}>
            <Icon style={styles.icon} name={'ios-contact'} size={16} color="#666" />
            <Text style={styles.contactName}>{row.contact}</Text>
            <Text style={styles.date}>{row.date}</Text>
          </View>
          <Text style={styles.title}>{row.title}</Text>
          <Text style={styles.body}>{row.bodyBrief}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  render() {
    const { currentEmail } = this.props

    return(
      <View style={styles.container}>
        <View style={styles.listView}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.row}
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
    alignSelf: 'stretch',
    overflow: 'hidden'
  },
  listView: {
    // NOTE For some reason, I need to set some backgroundColor to get shadows :/
    backgroundColor: 'transparent',
    shadowColor: '#eaeaea',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 2,
    shadowOpacity: 0.3
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  rowActive: {
    backgroundColor: '#def0ff'
  },
  unseenIcon: {
    backgroundColor: '#4F8EF7',
    height: 8,
    width: 8,
    position: 'absolute',
    top: 18,
    left: 6,
    borderRadius: 8
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  icon: {
    alignSelf: 'stretch',
    marginRight: 7
  },
  contactName: {
    fontWeight: 'bold',
    lineHeight: 14,
    flex: 1,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#aaa'
  },
  title: {
    marginBottom: 3
  },
  body: {
    color: '#aaa'
  }

});
