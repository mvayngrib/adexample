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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
  }
  componentDidMount() {
    let self = this
    console.log = (msg) => {
      self.setState({ messages: [...self.state.messages, msg] })
    }

    require('asyncstorage-down/test/test')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.messages.join('\n')}</Text>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('adexample', () => App)
