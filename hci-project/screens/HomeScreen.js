import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Modal, TouchableHighlight, TextInput, Text, KeyboardAvoidingView } from 'react-native';
import { Container, Button, Content, Thumbnail } from "native-base";

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
        BMI: 0,
        Height: 0,
        Weight:0,
      },
      Target: {
        BMI: 0,
        Height: 0,
        Weight: 0,
      },
      displayHeightWeight: "Enter new Height (CM)",
    };
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
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  curBMICal(){
    var curHeight = this.state.Current.Height/100;
    var curWeight= this.state.Current.Weight;
   
    // bmi = kg / height(m)* height(m)
    var curBMI = (curWeight) / (curHeight * curHeight);
    this.state.Current.BMI = curBMI.toFixed(2);
  }

  tarBMICal(){
    var tarHeight = this.state.Target.Height/100;
    var tarWeight= this.state.Target.Weight;

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
    else if (this.state.displayHeightWeight =="Enter new Target Weight (KG)") { 
      this.state.Target.Weight = text;
    }   
    
    if(this.state.Current.Height != 0 && this.state.Current.Weight !=0){
      this.curBMICal();
    }

    if(this.state.Target.Height != 0 && this.state.Target.Weight !=0){
      this.tarBMICal();
    }

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
          <Image source={require('../images/fat.png')} style={{ height: 400, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto" }}>Age: 15</Text>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>Current</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', }}>
            <View style={{ marginLeft: "auto", marginRight: "auto" ,  flexDirection: 'column',  alignItems: 'center'}}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text >{this.state.Current.BMI}</Text>
            </View>

            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => this.openModal("CurrentHeight")} style={{ flexDirection: 'column',  alignItems: 'center'}}>
                <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
                <Text >{this.state.Current.Height} cm</Text>
              </TouchableOpacity>

            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => this.openModal("CurrentWeight")} style={{ flexDirection: 'column',  alignItems: 'center'}}>
                <Thumbnail medium source={require('../images/weight.png')} resizeMode="contain" />
                <Text >{this.state.Current.Weight} kg</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontWeight: 'bold', marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>Target</Text>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>

            <View style={{ marginLeft: "auto", marginRight: "auto",  flexDirection: 'column',  alignItems: 'center'}}>
              <Thumbnail medium source={require('../images/bmi.png')} resizeMode="contain" />
              <Text >{this.state.Target.BMI}</Text>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }} >
              <TouchableOpacity onPress={() => this.openModal("TargetHeight")} style={{ flexDirection: 'column',  alignItems: 'center'}}>
                <Thumbnail medium source={require('../images/height.png')} resizeMode="contain" />
                <Text >{this.state.Target.Height} cm</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginLeft: "auto", marginRight: "auto" }}>
              <TouchableOpacity onPress={() => this.openModal("TargetWeight")} style={{ flexDirection: 'column',  alignItems: 'center'}}>
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