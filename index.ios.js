'use strict'

require('./shim')
let React = require('react-native')
let {
  Text,
  View,
  StyleSheet
} = React

let styles = React.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

let levelup = require('levelup')
let leveldown = require('asyncstorage-down')
let db = levelup('blah', { db: leveldown })
db.put('hey', 'ho')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    let key = 'hey'
    db.get(key, (err, value) => {
      this.setState({ key, value })
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('adexample', () => App)
