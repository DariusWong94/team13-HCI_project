import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Modal, TouchableHighlight, TextInput, Text, KeyboardAvoidingView, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Container, Button, Content, Thumbnail } from "native-base";
import DismissKeyboard from 'dismissKeyboard';
import { Dropdown } from 'react-native-material-dropdown';

export default class getStarted extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: '#bae1ff'
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      modalTextState: "",
      modalVisible: false,
      age: 0,
      Target: {
        Age: 0,
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
      this.state.Target.Age = text;
    }
    else if (field == "Gender") {
      this.state.Target.Gender = text;
    }
    else if (field == "Height") {
      this.state.Target.Height = text;
    }
    else if (field == "Weight") {
      this.state.Target.Weight = text;
    }

    if (this.state.Target.Height != 0 && this.state.Target.Weight != 0) {
      this.curBMICal();
    }

    AsyncStorage.removeItem("TargetValues");
    AsyncStorage.setItem('TargetValues', JSON.stringify(this.state.Target), () => { });
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
        BMIcolor: "#baffc9"
      })
    }
    else if (this.state.Target.BMI < 20) {
      //Normal
      this.setState({
        BMIstate: "Normal",
        BMIcolor: "#ffffba"
      })
    }
    this.forceUpdate();
  }


  render() {

    return (
      <Container>
        <View style={{ height: "100%", backgroundColor: "#bae1ff" }}>
          <View style={{ flexDirection: "column", height: "100%", alignItems: "center" }}>
            <Image style={{ flex: 1, width: '50%' }} resizeMode="contain" source={require("../images/logo.png")} />
            <View>
              <Button onPress={() => this.props.navigation.navigate("Front")}
                style={{ marginTop: -100, width: "80%", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                <Text style={{ color: "white", fontSize: 20, marginLeft: "auto", marginRight: "auto" }}>Get Started</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
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