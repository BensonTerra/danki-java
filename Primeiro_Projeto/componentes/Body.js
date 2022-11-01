import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';
import styleExterno from '../styles';

const Body = () => {
    return(
        <View>
            <View style={styles.view}>
                <Image style={{width:90, height:90}}source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
                <Text style={styleExterno.fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia quis ligula eu condimentum. Curabitur vestibulum lectus id metus eleifend ornare. Mauris sit amet ligula eget neque fringilla viverra sed et ante. Nullam id augue dictum, faucibus tortor et, molestie quam. Nullam ligula odio, pretium eu tortor vulputate, tincidunt interdum ligula. Aliquam felis odio, efficitur sed risus eu, luctus dictum magna. Vestibulum sodales sit amet felis non pulvinar. Pellentesque quis sollicitudin purus, eu venenatis eros. Nullam vitae malesuada augue. Mauris iaculis est ac felis ullamcorper, sed interdum urna consectetur. Etiam suscipit eros eu dictum egestas. Aliquam sem enim, hendrerit sed tincidunt eget, semper aliquet massa. In hac habitasse platea dictumst. Etiam in mauris nec sem bibendum faucibus. Aenean accumsan nunc a ex varius, et finibus ipsum ultrices. Vivamus quis est in eros auctor aliquet a ac mauris.</Text>
            </View>

            <View style={styles.view}>
                <Image style={{width:90, height:90}}source={{ uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia quis ligula eu condimentum. Curabitur vestibulum lectus id metus eleifend ornare. Mauris sit amet ligula eget neque fringilla viverra sed et ante. Nullam id augue dictum, faucibus tortor et, molestie quam. Nullam ligula odio, pretium eu tortor vulputate, tincidunt interdum ligula. Aliquam felis odio, efficitur sed risus eu, luctus dictum magna. Vestibulum sodales sit amet felis non pulvinar. Pellentesque quis sollicitudin purus, eu venenatis eros. Nullam vitae malesuada augue. Mauris iaculis est ac felis ullamcorper, sed interdum urna consectetur. Etiam suscipit eros eu dictum egestas. Aliquam sem enim, hendrerit sed tincidunt eget, semper aliquet massa. In hac habitasse platea dictumst. Etiam in mauris nec sem bibendum faucibus. Aenean accumsan nunc a ex varius, et finibus ipsum ultrices. Vivamus quis est in eros auctor aliquet a ac mauris.</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({

    view:{flex: 1, flexDirection:'row', flexWrap:'wrap',padding: 30},
    text:{width:'70%',paddingLeft:20,paddingRight:20}

});

export default Body;