import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity, AsyncStorage, Vibration, Animated } from 'react-native';
import { Body, Container, Text, View, CardItem } from "native-base";
import User from '../constants/User';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import CardStack, { Card } from 'react-native-card-stack-swiper';

const { width } = Dimensions.get('window');
const height = width * 0.8;

export default class MealScreen extends Component {
  static navigationOptions = {
    title: 'Meals',
  };

  constructor(props) {
    super(props);
    //console.log(this.props.meallist)
    this.state = {
      mealFavList: [],
      like: 0,
      dislike: 0,
    }
  }
  onSwipedLeft(item) {
    var name = User.User.meals[item].text1;
    //Remove from list if meal exist
    if (this.state.mealFavList.length != 0) {
      for (var i = 0; i < this.state.mealFavList.length; i++) {
        if (this.state.mealFavList[i].text1 == name) {
          this.state.mealFavList.splice(i, 1);
          break;
        }
      }
    }

    console.log("--------Remove meal----------")
    //console.log(this.state.mealFavList)
    this.dislikeTimeout();
    AsyncStorage.removeItem("FavMeals");
    AsyncStorage.setItem('FavMeals', JSON.stringify(this.state.mealFavList), () => {
    });

  }
  onSwipedRight(item) {
    var name = User.User.meals[item].text1;
    var MealObj = User.User.meals[item]
    //add into list if meal does not exist
    if (this.state.mealFavList.length != 0) {
      for (var i = 0; i < this.state.mealFavList.length; i++) {
        if (this.state.mealFavList[i].text1 == name) {
          break;
        }
        else if (i + 1 == this.state.mealFavList.length) {
          this.state.mealFavList = this.state.mealFavList.concat(MealObj);
        }
      }
    }
    else {
      this.state.mealFavList = this.state.mealFavList.concat(MealObj);
    }
    console.log("--------new meal----------")
    //console.log(this.state.mealFavList)
    Vibration.vibrate(200);
    this.likeTimeout();
    AsyncStorage.removeItem("FavMeals");
    AsyncStorage.setItem('FavMeals', JSON.stringify(this.state.mealFavList), () => {
    });
  }

  likeTimeout(){
    this.state.like = 1;
    console.log(this.state.like)
    setTimeout(() => {this.setState({like: 0})}, 500);
    this.forceUpdate();
  }

  dislikeTimeout(){
    this.state.dislike = 1;
    setTimeout(() => {this.setState({dislike: 0})}, 500);
    this.forceUpdate();
  }

  componentDidMount() {
    AsyncStorage.removeItem("FavMeals");
    AsyncStorage.removeItem("FavWork");
  }
  render() {
    return (
      <Container style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
        <View>
          <Animated.View style={{ opacity: this.state.like, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
            <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text>
          </Animated.View>
          <Animated.View style={{ opacity: this.state.dislike, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
            <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text>
          </Animated.View>
          <CardStack ref={swiper => { this.swiper = swiper }}
            renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray', marginLeft: 130, marginTop: "auto", marginBottom: "auto" }}>No more Meals :(</Text>}
            onSwipedLeft={(item) => this.onSwipedLeft(item)}
            onSwipedRight={(item) => this.onSwipedRight(item)}
            verticalSwipe={false} >
            {
              User.User.meals.map((item, i) => {
                return (
                  <Card key={i} style={styles.card}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                      <Image style={{ height: "100%", width: "100%" }} source={item.uri} />
                    </View>
                    <CardItem>
                      <Body>
                        <Text>{String(item.text1)}</Text>
                        <Text note>{item.text2}</Text>
                        <Text note>{item.text3}</Text>
                        <Text note>{item.text4}</Text>
                        <Text note>{item.text5}</Text>
                        <Text note>{item.text6}</Text>
                        <Text note>{item.text7}</Text>
                      </Body>
                    </CardItem>
                  </Card>
                )
              })
            }
          </CardStack>
        </View>
        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.red]} onPress={() => { this.swiper.swipeLeft(); this.onSwipedLeft; }}>
              <Entypo name="thumbs-down" size={35} style={{ marginBottom: -3 }} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => { this.swiper.goBackFromLeft(); this.onRevert; }}>
              <MaterialCommunityIcons name="reload" size={26} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.green]} onPress={() => { this.swiper.swipeRight(); this.onSwipedRight; }}>
              <Entypo name="thumbs-up" size={35} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: width,
    height: width * 1.25,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: -50,
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderWidth: 4,
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
    marginBottom: 20
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
    marginBottom: 20
  }
});