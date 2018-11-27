import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Modal, TouchableHighlight, TextInput, Text, KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Container, Button, Content, Thumbnail } from "native-base";
import DismissKeyboard from 'dismissKeyboard';
import { Dropdown } from 'react-native-material-dropdown';

export default class TargetScreen extends Component {
  static navigationOptions = {
    title: 'Set Target Status',
  };

  constructor(props) {
    super(props);
    this.state = {
      modalTextState: "",
      modalVisible: false,
      Target: {
        BMI: 0,
        Height: 0,
        Weight: 0,
      },
      displayHeightWeight: "Enter new Height (CM)",
      image: require("../images/graph-new.jpg"),
      BMIstate: "Normal Weight",
      BMIcolor: "#cfcfc4",
    };
  }

  handleOnChange = (text, field) => {
    if (field == "Height") {
      this.state.Target.Height = text;
    }
    else if (field == "Weight") {
      this.state.Target.Weight = text;
    }

    if (this.state.Target.Height != 0 && this.state.Target.Weight != 0) {
      this.curBMICal();
    }

    AsyncStorage.removeItem("targetValues");
    AsyncStorage.setItem('targetValues', JSON.stringify(this.state.Target), () => { });
  }

  curBMICal() {
    var curHeight = this.state.Target.Height / 100;
    var curWeight = this.state.Target.Weight;

    // bmi = kg / height(m)* height(m)
    var curBMI = (curWeight) / (curHeight * curHeight);
    this.state.Target.BMI = curBMI.toFixed(2);
    //console.log(this.state.Target.BMI)

    if (this.state.Target.BMI >= 25) {
      //fat fuck obese
      this.setState({
        BMIstate: "Obese",
        BMIcolor: "#ffb3ba"
      })
    }
    else if (this.state.Target.BMI < 25 && this.state.Target.BMI > 20) {
      //overweight
      this.setState({
        BMIstate: "Overweight",
        BMIcolor: "#ffffba"
      })
    }
    else if (this.state.Target.BMI < 20 && this.state.Target.BMI > 14) {
      //Normal
      this.setState({
        BMIstate: "Normal",
        BMIcolor: "#baffc9"
      })
    }
    else  {
      //Normal
      this.setState({
        BMIstate: "Underweight",
        BMIcolor: "#ffb3ba"
      })
    }
    this.forceUpdate();
  }


  render() {

    return (
      <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "white" }}>
          <View style={{ width: "100%", height: "50%", marginBottom: "auto", alignItems: "center", flex: 1, flexDirection: "column", justifyContent: 'space-between', backgroundColor: this.state.BMIcolor, }}>
            <Text style={{ fontSize: 30, paddingTop: 10 }}>Target BMI</Text>
            <Text style={{ fontSize: 60 }}>{this.state.Target.BMI}</Text>
            <Text style={{ fontSize: 30, paddingBottom: 10 }}>{this.state.BMIstate}</Text>
          </View>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.viewbottomcontainer}>
              
              <TouchableOpacity onPress={() => this.heightInput.focus()} style={styles.textcontainer}>
                <Text style={{ fontSize: 20, width: "100%", padding: 10, textAlign: "left" }}>Target Height(Cm): </Text>
                <TextInput
                  ref={(input) => { this.heightInput = input }}
                  onChangeText={(textH) => this.handleOnChange(textH, "Height")}
                  keyboardType="numeric"
                  style={styles.inputContainer}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.weightInput.focus()} style={styles.textcontainer}>
                <Text style={{ fontSize: 20, width: "100%", padding: 10, textAlign: "left" }}>Target Weight(Kg): </Text>
                <TextInput
                  ref={(input) => { this.weightInput = input }}
                  onChangeText={(textW) => this.handleOnChange(textW, "Weight")}
                  keyboardType="numeric"
                  style={styles.inputContainer}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={{ flexDirection: "column" }}>
            <Button onPress={() => this.props.navigation.navigate("Main")}
              style={{ marginTop: -100, width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}><Text style={{ color: "white", fontSize: 20,  marginLeft: "auto", marginRight: "auto" }}>Finish</Text></Button>
          </View>
        </View>
      </TouchableWithoutFeedback >
    );
  }

}
const styles = StyleSheet.create({
  viewbottomcontainer: {
    width: "100%",
    height: "70%",
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: 10,
  },  
  textcontainer: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: 'space-between',
    borderRadius: 10,
    margin: 5,
    fontSize: 20,    
  },
  inputContainer: {
    backgroundColor: "white",
    height: "50%",
    width: "100%",
    borderRadius: 4,
    fontSize: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10
  },
  Dropdown: {
    borderWidth: 1,
    borderRadius: 4,
    height: "50%",
    width: "100%",
    borderColor: '#ccc',
  }

});