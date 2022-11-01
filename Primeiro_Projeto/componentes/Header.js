import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return(
        <View style={styles.view}>
            <Text style={styles.text}>App de Musica</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    view: {
        backgroundColor:'rgb(84,50,168)',
        paddind:20,
        width:'100%'
    },

    text: {
        textAlign: 'center',
        fontSize:40,
        color: 'white'
    }
  });

export default Header;