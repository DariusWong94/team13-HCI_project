import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Container, 
         Content, 
         Button,
         Body, 
         Text, 
         Badge, 
         Thumbnail,
         Card} from "native-base";


export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Image source={require('../images/fat.png')} style={{ height: 400, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto" }}>Age: 15</Text>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40}}>Current</Text>
          <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
            <View  style={{marginLeft: "auto",marginRight: "auto"}}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text style={{marginLeft: 13}}>29.1</Text>
            </View>
            <View  style={{marginLeft: "auto",marginRight: "auto"}}>
              <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
              <Text >155cm</Text>
            </View>
            <View  style={{marginLeft: "auto",marginRight: "auto"}}>
              <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
              <Text  style={{marginLeft: 13}}>70kg</Text>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40}}>Target</Text>
          <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
            <View  style={{marginLeft: "auto",marginRight: "auto"}}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text  style={{marginLeft: 13}}>29.1</Text>
            </View>
            <View  style={{marginLeft: "auto",marginRight: "auto"}}>
              <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
              <Text >155cm</Text>
            </View>
            <View  style={{marginLeft: "auto",marginRight: "auto"}}>
              <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
              <Text  style={{marginLeft: 13}}>70kg</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

}