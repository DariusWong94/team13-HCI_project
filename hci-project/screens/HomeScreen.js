import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, View, TouchableOpacity, Modal, TouchableHighlight, TextInput, Text, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { Container, Button, Content, Thumbnail } from "native-base";
import { Permissions, Notifications } from 'expo';

const { width } = Dimensions.get('window');
const height =  Dimensions.get('window').height * 0.40;

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
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
      Target: {
        BMI: 0,
        Height: 0,
        Weight: 0,
      },
      displayHeightWeight: "Enter new Height (CM)",
      image: require("../images/slimmer.png"),
    };
  }

  checkSize() {
    if (this.state.Current.BMI >= 25) {
      //fat fuck obese
      this.setState({
        image: require("../images/fat.png")
      })
    }
    else if (this.state.Current.BMI < 25 && this.state.Current.BMI > 20) {
      //overweight
      this.setState({
        image: require("../images/slim.png")
      })
    }
    else if (this.state.Current.BMI < 20) {
      //normal
      this.setState({
        image: require("../images/slimmer.png")
      })
    }

    this.forceUpdate();
  }

  openModal(data) {
    //console.log(data)
    if (data == "CurrentHeight") {
      this.setState({
        displayHeightWeight: "Enter new Current Height (CM)"
      })
    }
    else if (data == "CurrentWeight") {
      this.setState({
        displayHeightWeight: "Enter new Current Weight (KG)"
      })
    }
    else if (data == "TargetHeight") {
      this.setState({
        displayHeightWeight: "Enter new Target Height (CM)"
      })
    }
    else if (data == "TargetWeight") {
      this.setState({
        displayHeightWeight: "Enter new Target Weight (KG)"
      })
    }
    else if (data == "Age") {
      this.setState({
        displayHeightWeight: "Enter new Age"
      })
    }
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  curBMICal() {
    var curHeight = this.state.Current.Height / 100;
    var curWeight = this.state.Current.Weight;

    // bmi = kg / height(m)* height(m)
    var curBMI = (curWeight) / (curHeight * curHeight);
    this.state.Current.BMI = curBMI.toFixed(2);
    this.checkSize();
  }

  tarBMICal() {
    var tarHeight = this.state.Target.Height / 100;
    var tarWeight = this.state.Target.Weight;

    var tarBMI = (tarWeight) / (tarHeight * tarHeight);
    this.state.Target.BMI = tarBMI.toFixed(2);
  }

  submitModal() {
    console.log(this.state.Current.Height)
    this.setState({ modalVisible: false });
  }

  handleOnChange = (text) => {

    if (this.state.displayHeightWeight == "Enter new Current Height (CM)") {
      this.state.Current.Height = text;
    }
    else if (this.state.displayHeightWeight == "Enter new Current Weight (KG)") {
      this.state.Current.Weight = text;
    }
    else if (this.state.displayHeightWeight == "Enter new Target Height (CM)") {
      this.state.Target.Height = text;
    }
    else if (this.state.displayHeightWeight == "Enter new Target Weight (KG)") {
      this.state.Target.Weight = text;
    }
    else if (this.state.displayHeightWeight == "Enter new Age") {
      this.state.Current.age = text;
    }


    if (this.state.Current.Height != 0 && this.state.Current.Weight != 0) {
      this.curBMICal();
    }

    if (this.state.Target.Height != 0 && this.state.Target.Weight != 0) {
      this.tarBMICal();
    }

  }
  componentWillUnmount() {
    this.didFocusListener.remove();
    this.didFocusListener1.remove();
  }


  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {

        AsyncStorage.getItem('currentValues').then((result) => {
          if (result != null) {
            this.setState({
              Current: JSON.parse(result)
            })
            console.log(this.state.Current.Age)
            
            this.checkSize();
            this.forceUpdate();
          }
          AsyncStorage.removeItem("currentValues");
        }).catch((response) => {
          console.log(response)
        })
      }
    )
    this.didFocusListener1 = this.props.navigation.addListener(
      'didFocus',
      () => {

        AsyncStorage.getItem('targetValues').then((result) => {
          if (result != null) {
            this.setState({
              Target: JSON.parse(result)
            })
            console.log(result)
          }
          AsyncStorage.removeItem("targetValues");
        }).catch((response) => {
          console.log(response)
        })
      }
    )
  }

  render() {

    return (
      <Container>
        <Content padder>
          <KeyboardAvoidingView behavior="padding">
            <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
              transparent={true}
            >
              <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: "auto", marginBottom: "auto" }} >{this.state.displayHeightWeight}</Text>
                  <View
                    style={{
                      borderBottomColor: '#A9A9A9',
                      borderBottomWidth: 1,
                      width: "100%",
                      marginBottom: "auto",
                    }}
                  />
                  <TextInput
                    onChangeText={this.handleOnChange}
                    keyboardType="numeric"
                    style={{ borderRadius: 5, borderWidth: 1, height: "20%", width: "95%", borderColor: '#A9A9A9', }}
                  />
                  <View style={{ borderRadius: 20, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', }}>
                    <Button
                      style={{ borderColor: "white", backgroundColor: "white", width: "50%", justifyContent: 'center' }}
                      onPress={() => this.closeModal()}
                    >
                      <Text style={{ color: "#0080FF" }}>Cancel</Text>
                    </Button>
                    <Button
                      style={{ borderColor: "white", backgroundColor: "white", width: "50%", justifyContent: 'center' }}
                      onPress={() => this.submitModal()}
                    >
                      <Text style={{ color: "#0080FF" }}>Submit</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Modal>

          </KeyboardAvoidingView>
          <Image source={this.state.image} style={{ height: height, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />

          <TouchableOpacity onPress={() => this.openModal("Age")} style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto" }}>Age: {this.state.Current.Age}</Text>
          </TouchableOpacity>

          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>Current Status</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', }}>

            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => this.openModal("CurrentHeight")} style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
                <Text >{this.state.Current.Height} cm</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: "auto", marginRight: "auto", flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text >{this.state.Current.BMI}</Text>
            </View>

            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => this.openModal("CurrentWeight")} style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
                <Text >{this.state.Current.Weight} kg</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>Target Status</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>

            <View style={{ marginLeft: "auto", marginRight: "auto" }} >
              <TouchableOpacity onPress={() => this.openModal("TargetHeight")} style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
                <Text >{this.state.Target.Height} cm</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginLeft: "auto", marginRight: "auto", flexDirection: 'column', alignItems: 'center' }}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text >{this.state.Target.BMI}</Text>
            </View>

            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => this.openModal("TargetWeight")} style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
                <Text>{this.state.Target.Weight} kg</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    height: "20%",
    borderRadius: 10,
  },
});