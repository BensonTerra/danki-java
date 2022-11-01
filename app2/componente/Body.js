import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class Body extends React.Component {

  constructor(props) {
    super(props);
    this.nome = "Benson";
  }

  chamarNome() {
    return(<Text style = {{textAlign: 'center'}}>{this.nome}</Text>);
  }

  render(){
    return (
      <View>
        <Text style = {{textAlign: 'center'}}>Body</Text>
      </View>
    );
  }
}