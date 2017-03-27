import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Linking } from 'react-native';
import { Card, ListItem, Button, Tile } from 'react-native-elements'
import Image from 'react-native-scalable-image';
import axios from 'axios';

export default class ProductComponent extends Component {

  constructor(props) {
    // parent props
    super(props);

    this.state = {
      list: [],
      visible: false
    };
  }

  componentDidMount() {
    let url = 'http://hljback.shopshop.space/product/' + this.props.id;


    axios
      .get(url)
      .then(res => {
        //console.log('-- comp did mount --');
        //console.log(url);

        // It uses data
        //console.log('-- res --');
        //console.log(res.data.imgs);
        this.setState({ list: res.data });
      });
  }

  buyNow(url) {
    //console.log('empty?');
    //console.log(url);

    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });

  }


  render() {
    //console.log('-- render --');
    //console.log(this.state.list);

    let returnContent = '';
    if(this.state.list.length === 0) {

      //console.log('loading...');

      returnContent =
        <View style={{ backgroundColor: 'red'}}>
          <Text>Loading....</Text>
        </View>;
    }
    else {

      //console.log('something...');
      //console.log(this.state.list.imgs);

      returnContent = this.state.list.imgs.map((u, i) => {
        let imgUrl = 'http://hljback.shopshop.space/imgs/' + this.props.productId + '/' + u;
        //console.log(imgUrl);
        return (
          <Card key={i}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{ uri: imgUrl }}
              width={Dimensions.get('window').width}
            />
            </View>
          </Card>
        );
      });
    }

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

        { returnContent }

        <Card>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='BUY NOW'
            onPress={ () => this.buyNow(this.state.list.productUrl) }
          />
        </Card>
      </ScrollView>
    );
  }
}
