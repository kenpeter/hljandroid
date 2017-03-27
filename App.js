import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import ListComponent from "./components/ListComponent";
import ProductComponent from './components/ProductComponent';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="listComponent" component={ListComponent} title="ListComponent" initial={true} />
          <Scene key="productComponent" component={ProductComponent} title="ProductComponent" />
        </Scene>
      </Router>
    );
  }
}
