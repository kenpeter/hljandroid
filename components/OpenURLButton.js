var React = require('react');
var ReactNative = require('react-native');
var {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = ReactNative;

class OpenURLButton extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
        <View style={styles.button}>
          <Text style={styles.text}>Go</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 30,
  },
  button: {
    backgroundColor: '#3B5998',
    marginTop: 5,
    marginBottom: 2,
    marginLeft: 10,
    padding: 5,
    width: 30
  },
  text: {
    color: 'white',
  },
});

module.exports = OpenURLButton;
