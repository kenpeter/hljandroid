// need react and component
import React, { Component } from 'react';
// text from native
import {
  Text,
  ScrollView,
  View,
  StyleSheet,

  TouchableHighlight,
  Dimensions,
  Linking
} from 'react-native';

//
import Image from 'react-native-scalable-image';

// card, list and button from react native element
import { Card, ListItem, Button, Tile } from 'react-native-elements'

import colors from 'HSColors';

import Icon from 'react-native-vector-icons/MaterialIcons';

import axios from 'axios';

import OpenURLButton from './OpenURLButton';

// empty style
let styles = {};

// export my component
class ListComponent extends Component {
  // constructor with props
  constructor(props) {
    // parent props
    super(props);

    this.state = {
      lists: []
    };
  }

  componentDidMount() {
    let url = 'http://hljback.shopshop.space/product/list?limit=500';
    axios
      .get(url)
      .then(res => {
        // It uses data
        this.setState({ lists: res.data });
      });
  }

  render() {
    //const myCard

    return (
      <ScrollView style={{backgroundColor: 'white'}}>

        <View style={styles.headingContainer}>
          <Image
            width={Dimensions.get('window').width}
            source={ {uri: 'https://s-media-cache-ak0.pinimg.com/originals/73/cf/14/73cf142f26657abe09d9d42761f39ab2.jpg'} }
          />
        </View>

        <View style={styles.container}>
          {
            this.state.lists.map((u, i) => {
              const myText = u.title + '\n' +
                u.price;
              const theUrl = 'http://hljback.shopshop.space/imgs/' + u.productId + '/' + u.imgs[0];

              return (
                <Card
                  key={i}
                  title={u.title}
                  image={{uri: theUrl}}
                >

                  <Text style={{marginBottom: 10}}>
                    u.price
                    u.productUrl
                  </Text>
                  <Button
                      icon={{name: 'code'}}
                      backgroundColor='#03A9F4'
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='VIEW NOW' />
                </Card>
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  container: {
    margin: 15
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey2
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})

export default ListComponent;
