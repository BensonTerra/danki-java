import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';

export default class Body extends React.Component {

  constructor(props) {
    super(props);
  }
 
  render(){
    return (
      <View>
        <Text style = {{textAlign: 'center'}}></Text>

      </View>
    );
  }
}


/* 
const Body = (props) =>{    <------ outra possibilidade de sintaxe
  return (
    <View>
      <Text style = {{textAlign: 'center'}}>{props.texto}</Text>
      <Button title = {props.titulo}></Button>
    </View>
  );
}

export default Body;*/ /*<------ outra possibilidade de sintaxe*/