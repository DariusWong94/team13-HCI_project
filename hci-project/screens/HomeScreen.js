import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Thumbnail } from "native-base";
import DialogInput from 'react-native-dialog-input';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
  state = {
    isDialogVisible: false,
    current: {
      BMI: "",
      Height: "",
      Weight: "",
    },
    Target: {
      BMI: "",
      Height: "",
      Weight: "",
    }
  };

  showDialog(isShow) {
    this.setState({ isDialogVisible: isShow });
  }
  sendInput(inputText) {
    console.log("sendInput (DialogInput#1): " + inputText);
  }


  render() {
    return (
      <Container>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          title={"Height"}
          message={"Enter Current Height"}
          hintInput={"Height"}
          submitInput={(inputText) => { this.sendInput(inputText) }}
          closeDialog={() => { this.showDialog(false) }}>
        </DialogInput>
        <Content padder>
          <Image source={require('../images/fat.png')} style={{ height: 400, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto" }}>Age: 15</Text>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>Current</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly',}}>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => { this.showDialog(true) }} style={{ padding: 10 }}>
                <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
                <Text style={{ marginLeft: 13 }}>29.1</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
              <Text >155cm</Text>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
              <Text style={{ marginLeft: 13 }}>70kg</Text>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>Target</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text style={{ marginLeft: 13 }}>29.1</Text>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
              <Text >155cm</Text>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
              <Text style={{ marginLeft: 13 }}>70kg</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

}
