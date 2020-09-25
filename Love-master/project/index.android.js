/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createStackNavigator} from 'react-navigation'
import LoginComponent from './app/components/login'
import MainComponent from './app/components/main'
import ProductListComponent from './app/components/productList'
import DetailComponent from './app/components/detail'

//设置路由词典
var myNavigator=createStackNavigator({
  ProductList:{
    screen:ProductListComponent,
    navigationOptions:()=>{
      return {
        headerTitle:"商品列表",
        headerTitleStyle:{
          color:"red"
        }
      }
    }
  },
  Main:{
    screen:MainComponent
  },
  login:{
    screen:LoginComponent
  },
  detail:{
    screen:DetailComponent
  },
})

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myNavigator);
