import { StatusBar } from 'expo-status-bar';
import react,{ useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button, TouchableOpacity } from 'react-native';
//
import moment from 'moment';
import Constants from 'expo-constants';


import Body from './componente/Body.js';

export default function App() {

  const [estado,setEstado] = useState('Leitura');
  const [anotação,setAnotação] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices leo mauris, cursus eleifend sapien consequat quis. Sed eget ultricies leo, ac maximus metus. Cras et nunc scelerisque, dapibus magna eget, ornare eros. Nulla venenatis neque nec risus bibendum lacinia. Donec quis ligula vitae ipsum semper vulputate non vitae nibh. Duis vulputate arcu sapien, id tempor eros tempus id. Vivamus pellentesque, nibh id congue congue, risus ante dictum lacus, vitae commodo velit neque vel ipsum.');

  /*setInterval(() =>{
    console.log("estado:", estado);
  },5000)*/

  if(estado == 'Leitura') 
  {
    return (
      <View style={{marginTop:Constants.statusBarHeight,flex: 1}}>
        <StatusBar style = "dark" />
        <View style={styles.Header}>
          <Text style={styles.Text}>Aplicativo de anotação pag1</Text>
        </View>

        <View style={{padding: 20}}>
          <Text style={styles.Anotacao}>{anotação}</Text>
        </View>

        <TouchableOpacity style = {styles.btnAnotacao}>
          <Text onPress={() => setEstado('atualizando')} style={styles.btnAnotacaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else if(estado == 'atualizando')
  {
    return (
      <View style={{marginTop:Constants.statusBarHeight,flex: 1}}>
        <StatusBar style = "dark" />
        <View style={styles.Header}>
          <Text style={styles.Text}>Aplicativo de anotação pag 2</Text>
        </View>

        <View style={{padding: 20}}>
          <Text style={styles.Anotacao}>nova anotação</Text>
        </View>

        <TouchableOpacity style = {styles.btnAnotacao}>
          <Text onPress={() => setEstado('atualizando')} style={styles.btnAnotacaoTexto}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Header: {
    width:'100%',
    padding: 20,
    backgroundColor: 'black'
  },
  Anotacao: {
    fontSize:13,
  },
  btnAnotacao: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width:50,
    height:50,
    backgroundColor:'blue',
    borderRadius:25,
  },
  btnAnotacaoTexto: {
    color:'white',
    position:'relative',
    textAlign:'center',
    bottom: 10,
    fontSize:50,
  },
  Text: {
    textAlign:'center',
    fontSize: 25,
    color: 'white',
  },
});