import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Body from './componente/Body.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.body = new Body();

    this.body.nome ="Teste";
  }

  render(){
    return (
      <ScrollView style={{marginTop:Constants.statusBarHeight,flex: 1}}>
        {
          this.body.chamarNome()
        }
      </ScrollView>
    );
  }
}