import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Modal, TouchableHighlight, TextInput, Text, KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Container, Button, Content, Thumbnail } from "native-base";
import DismissKeyboard from 'dismissKeyboard';
import { Dropdown } from 'react-native-material-dropdown';

export default class FrontScreen extends Component {
  static navigationOptions = {
    title: 'Set Current Status',
  };

  constructor(props) {
    super(props);
    this.state = {
      modalTextState: "",
      modalVisible: false,
      Current: {
        Age: 0,
        Gender: "",
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
    if (field == "Age") {
      this.state.Current.Age = text;
    }
    else if (field == "Gender") {
      this.state.Current.Gender = text;
    }
    else if (field == "Height") {
      this.state.Current.Height = text;
    }
    else if (field == "Weight") {
      this.state.Current.Weight = text;
    }

    if (this.state.Current.Height != 0 && this.state.Current.Weight != 0) {
      this.curBMICal();
    }

    AsyncStorage.removeItem("currentValues");
    AsyncStorage.setItem('currentValues', JSON.stringify(this.state.Current), () => { });
  }

  curBMICal() {
    var curHeight = this.state.Current.Height / 100;
    var curWeight = this.state.Current.Weight;

    // bmi = kg / height(m)* height(m)
    var curBMI = (curWeight) / (curHeight * curHeight);
    this.state.Current.BMI = curBMI.toFixed(2);
    //console.log(this.state.Current.BMI)

    if (this.state.Current.BMI >= 25) {
      //fat fuck obese
      this.setState({
        BMIstate: "Obese",
        BMIcolor: "#ffb3ba"
      })
    }
    else if (this.state.Current.BMI < 25 && this.state.Current.BMI > 20) {
      //overweight
      this.setState({
        BMIstate: "Overweight",
        BMIcolor: "#ffffba"
      })
    }
    else if (this.state.Current.BMI < 20 && this.state.Current.BMI > 14) {
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
    let gender = [{
      value: 'Male',
    }, {
      value: 'Female',
    },];

    return (
      <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: "white" }}>
          <View style={{ width: "100%", height: "50%", marginBottom: "auto", alignItems: "center", flex: 1, flexDirection: "column", justifyContent: 'space-between', backgroundColor: this.state.BMIcolor, }}>
            <Text style={{ fontSize: 30, paddingTop: 10 }}>Current BMI</Text>
            <Text style={{ fontSize: 60 }}>{this.state.Current.BMI}</Text>
            <Text style={{ fontSize: 30, paddingBottom: 10 }}>{this.state.BMIstate}</Text>
          </View>
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.viewbottomcontainer}>
              <View style={styles.textcontainer}>
                <Text style={{ fontSize: 20, width: "100%", padding: 10, textAlign: "left" }}>Current Age: </Text>
                <TextInput
                  ref={(input) => { this.ageInput = input }}
                  onChangeText={(text) => this.handleOnChange(text, "Age")}
                  keyboardType="numeric"
                  style={styles.inputContainer}
                />
              </View>
              <View style={styles.textcontainer}>
                <Text style={{ fontSize: 20, width: "100%", padding: 10, textAlign: "left" }}>Current Gender: </Text>
                <Dropdown
                  ref={(input) => { this.genderInput = input }}
                  data={gender}
                  fontSize={20}
                  containerStyle={styles.Dropdown}
                  inputContainerStyle={{ paddingLeft: 10, borderBottomColor: 'transparent', marginTop: "-8%" }}
                  rippleCentered={true}

                />
              </View>
              <View style={styles.textcontainer}>
                <Text style={{ fontSize: 20, width: "100%", padding: 10, textAlign: "left" }}>Current Height(Cm): </Text>
                <TextInput
                  ref={(input) => { this.heightInput = input }}
                  onChangeText={(textH) => this.handleOnChange(textH, "Height")}
                  keyboardType="numeric"
                  style={styles.inputContainer}
                />
              </View>
              <View style={styles.textcontainer}>
                <Text style={{ fontSize: 20, width: "100%", padding: 10, textAlign: "left" }}>Current Weight(Kg): </Text>
                <TextInput
                  ref={(input) => { this.weightInput = input }}
                  onChangeText={(textW) => this.handleOnChange(textW, "Weight")}
                  keyboardType="numeric"
                  style={styles.inputContainer}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={{ flexDirection: "column" }}>
            <Button onPress={() => this.props.navigation.navigate("Target")}
              style={{ marginTop: -100, width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}><Text style={{ color: "white", fontSize: 20,  marginLeft: "auto", marginRight: "auto" }}>Next</Text></Button>
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