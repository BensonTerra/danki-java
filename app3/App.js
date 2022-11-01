import { StatusBar } from 'expo-status-bar';
import react,{ useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View, ScrollView , Button } from 'react-native';
//
import moment from 'moment';
import Constants from 'expo-constants';


import Body from './componente/Body.js';

export default class App extends React.Component {

  constructor(props){
    super(props);
    console.disableYellowBox = true;

    this.state = {
      
      contador : 0,
      pagina: 'home'
    }

    /*setTimeout(() =>{
      this.setState({pagina: 'contatos'});
    },1000)*/
    
    setInterval(() =>{
      this.setState({contador: this.state.contador+1}); 
    },1000)
  }

  alterarAbaHome(){
    //alert('teste');
    this.setState({pagina: 'home'})
    this.setState({contador : 0})
  }

  alterarAbaContato(){
    //alert('teste');
    this.setState({pagina: 'contato'})
    this.setState({contador : 0})
  }

  componentDidMount(){
    console.log('depois de renderizar');
  }
  
  render(){
    if(this.state.pagina == "home"){
      return (
        <ScrollView style={{marginTop:Constants.statusBarHeight,flex: 1}}>
          <View><Text style={{textAlign:'center'}}>Home</Text></View>
          <View><Text style={{textAlign:'center'}}>{this.state.contador}</Text></View>
          <Button onPress={()=>this.alterarAbaContato()} title="Clique para ir ao contato" ></Button>
        </ScrollView>
       );
    }
    else if(this.state.pagina == "contato"){
      return (
        <ScrollView style={{marginTop:Constants.statusBarHeight,flex: 1}}>
          <View><Text style={{textAlign:'center'}}>contatos</Text></View>
          <View><Text style={{textAlign:'center'}}>{this.state.contador}</Text></View>
          <Button onPress={()=>this.alterarAbaHome()} title="Clique para ir ao contato" ></Button>
        </ScrollView>
      );
    }
  }
}

