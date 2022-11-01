import { StatusBar } from 'expo-status-bar';//        <StatusBar hidden /> esconder statusbar pos <View> do <Return>
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet,Text, View, Image, Button, ScrollView, Platform} from 'react-native';
//arquivo externo start
import Header from './componentes/Header';
import Body from './componentes/Body';
//arquivo externo end

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Layouyt PrimeiroProjeto</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

/* tipos de variaveis: string(texto)/ int(inteiros)/ double(numeros com virgula)/ bolean(true ou false)*/

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  mostrarConteudo() {

    var conteudo = "";

    if(Platform.OS=='android')
    {
      conteudo = "Android";
    }
    else
    {
      conteudo = "IOS";
    }

    var nome = "Benson";

    console.log(nome);

    return(
      <View>
        <Text>{nome}</Text>
        <Header></Header>
        <Body></Body>
      </View>
    );
  }

  render(){
    return (
      <ScrollView style={{marginTop:Constants.statusBarHeight,flex: 1}}>
        {
          this.mostrarConteudo()
        }
      </ScrollView>
    );
  }
}

/*const Botao = () => {
  return (
    <Button title="Clique"></Button>
  );
}*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
