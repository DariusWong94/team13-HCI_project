import React from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Body, Container, Text, View, CardItem } from "native-base";
import User from '../constants/User';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { Video } from 'expo';
const { width } = Dimensions.get('window');
const height = width * 0.8

export default class WorkoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Workout',
  };
  constructor(props) {
    super(props);
    //console.log(this.props.meallist)
    this.state = {
      WOFavList: [],
    }

  }
  onSwipedLeft(item) {
    var name = User.User.workout[item].text1;
    //Remove from list if meal exist
    if (this.state.WOFavList.length != 0) {
      for (var i = 0; i < this.state.WOFavList.length; i++) {
        if (this.state.WOFavList[i].text1 == name) {
          this.state.WOFavList.splice(i, 1);
          break;
        }
      }
    }

    console.log("--------Remove meal----------")
    console.log(this.state.WOFavList)
    AsyncStorage.removeItem('FavWork');
    AsyncStorage.setItem('FavWork', JSON.stringify(this.state.WOFavList), () => {
    });

  }
  onSwipedRight(item) {
    var name = User.User.workout[item].text1;
    var MealObj = User.User.workout[item]
    //add into list if meal does not exist
    if (this.state.WOFavList.length != 0) {
      for (var i = 0; i < this.state.WOFavList.length; i++) {
        if (this.state.WOFavList[i].text1 == name) {
          break;
        }
        else if (i + 1 == this.state.WOFavList.length) {
          this.state.WOFavList = this.state.WOFavList.concat(MealObj);
        }
      }
    }
    else {
      this.state.WOFavList = this.state.WOFavList.concat(MealObj);
    }
    console.log("--------new meal----------")
    //console.log(this.state.WOFavList)
       
    AsyncStorage.removeItem('FavWork');
    AsyncStorage.setItem('FavWork', JSON.stringify(this.state.WOFavList), () => {
    });

  }
  componentDidMount() {
    
    AsyncStorage.removeItem('FavWork');
  }
  render() {
    return (
      <Container>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <CardStack ref={swiper => { this.swiper = swiper }}
            renderNoMoreCards={() => <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray', marginLeft: 130 }}>No more Workout :(</Text>}
            onSwipedLeft={(item) => this.onSwipedLeft(item)}
            onSwipedRight={(item) => this.onSwipedRight(item)}
            verticalSwipe={false}

          >
            {
              User.User.workout.map((item, i) => {
                return (
                  <Card key={i}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: -34 }}>
                      <Video
                        source={item.uri}
                        resizeMode="contain"
                        style={{ width, height: 300 }}
                      />
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
            this.swiper.swipeLeft();
            this.onSwipedLeft;
          }}>
            <Entypo
              name="thumbs-down"
              size={35}
              style={{ marginBottom: -3 }}
              color="red"

            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
            this.swiper.goBackFromLeft();
            this.onRevert;
          }}>
            <MaterialCommunityIcons
              name="reload"
              size={26}
              color="blue"

            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
            this.swiper.swipeRight();
            this.onSwipedRight;
          }}>
            <Entypo
              name="thumbs-up"
              size={35}
              color="green"

            />
          </TouchableOpacity>
        </View>

      </Container>
    );
  }
}
const styles = StyleSheet.create({

  buttonContainer: {
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  }
});