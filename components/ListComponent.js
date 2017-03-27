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
  Linking,
  Image as NativeImg
} from 'react-native';

//
import Image from 'react-native-scalable-image';

// card, list and button from react native element
import { Card, ListItem, Button, Tile } from 'react-native-elements'

import axios from 'axios';

//
import FullWidthImage from './FullWidthImage';

// export my component
class ListComponent extends Component {
  // constructor with props
  constructor(props) {
    // parent props
    super(props);

    this.state = {
      lists: [],
      visible: false
    };
  }

  componentDidMount() {
    let url = 'http://hljback.shopshop.space/product/list?limit=10';
    axios
      .get(url)
      .then(res => {
        // It uses data
        this.setState({ lists: res.data});
      });
  }

  buyNow() {
    console.log('buy now');
  }

  viewProduct() {
    console.log('view product');
  }

  render() {

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            width={Dimensions.get('window').width}
            source={ {uri: 'https://s-media-cache-ak0.pinimg.com/originals/73/cf/14/73cf142f26657abe09d9d42761f39ab2.jpg'} }
          />
        </View>

        <View style={{ margin: 15 }}>
          {
            this.state.lists.map((u, i) => {
              let theUrl = 'http://hljback.shopshop.space/imgs/' + u.productId + '/' + u.imgs[0];
              if(u.productId == null) {
                theUrl = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=Coming&w=350&h=150';
              }
              //console.log(theUrl);

              return (
                <Card
                  key={i}
                >
                  <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{fontWeight: 'bold'}}>{u.title}</Text>

                    <TouchableHighlight onPress={this.viewProduct}>
                      <View style={{ width: Dimensions.get('window').width }}>
                        <FullWidthImage source={{uri: theUrl}} />
                      </View>
                    </TouchableHighlight>

                    <Text style={{marginBottom: 10}}>
                      {u.price}
                      {u.productUrl}
                    </Text>
                  </View>

                  <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='BUY NOW'
                    onPress={this.buyNow}
                  />
                </Card>
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}


export default ListComponent;
