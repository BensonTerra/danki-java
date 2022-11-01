import { StatusBar } from 'expo-status-bar';
import react,{ useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';
//
import moment from 'moment';
import Constants from 'expo-constants';


import Body from './componente/Body.js';

export default function App() {

  const [Count, setCount] = useState(0);

  const [Nome, setNome] = useState("Benson Terra");

  const [Lista, setLista] = useState(['feijão','arroz','pão']);


  return (
    <ScrollView style={{marginTop:Constants.statusBarHeight,flex: 1}}>
      <View>
        <Text style={{textAlign:'center'}}>{Count}</Text>
        <Button onPress={() => setCount(Count => Count + 1)} title = "botao Count => Count + 1"></Button>
      </View>
      <View>
        <Text style={{textAlign:'center'}}>{Count}</Text>
        <Button onPress={() => setCount(Count + 1)} title = "botao Count + 1"></Button>
      </View>
      <View>
        <Text style={{textAlign:'center'}}>{Nome}</Text>
        <Button onPress={() => setNome("Danki Code")} title = "botao Nome"></Button>
        <Button onPress={() => setLista([...Lista, 'salada'])} title = "botao Lista" color = "red"></Button>
        {
          Lista.map((val) => 
          {
            return(<Text style={{textAlign:'center'}}>{val}</Text>)
          })
        }
      </View>
    </ScrollView>
  )
}

