import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProductComponent extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>{this.props.id}</Text>
        <Text>{this.props.productId}</Text>
      </View>
    )
  }
}
