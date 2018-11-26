import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableHighlight, AsyncStorage, Vibration, Alert } from 'react-native';
import { Container, Content, Body, Text, CardItem, Card, View, Tab, Tabs, TabHeading } from "native-base";
import { Video } from 'expo';
const { width } = Dimensions.get('window');
const height = width * 0.8

export default class FavouritesScreen extends React.Component {
  static navigationOptions = {
    title: 'Favourites',
  };
  constructor(props) {
    super(props);
    this.state = {
      favouriteml: [],
      favouritem2: []
    }
  }

  componentWillUnmount() {
    this.didFocusListener.remove();
    this.didFocusListener2.remove();
  }
  handleLongPress(item , mw) {
    Vibration.vibrate(200)
    console.log(mw)
    if(mw == "meal"){
    Alert.alert(
      'Remove from favourites',
      'Are you sure you want to remove: \n\n' + item.text1 ,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.onRemoveMealFav(item) },
      ]
    )
 
  }else{
    Alert.alert(
      'Remove from favourites',
      'Are you sure you want to remove: \n\n' + item.text1 ,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.onRemoveWorkoutFav(item) },
      ]
    )
  }
}

onRemoveWorkoutFav(item) {
    for (var i = 0; i < this.state.favouritem2.length; i++) {
      if (this.state.favouritem2[i].text1 == item.text1) {
        this.state.favouritem2.splice(i, 1);
        break;
      }
    }
    this.forceUpdate();
    console.log(this.state.favouritem2);
  }
  onRemoveMealFav(item) {
    for (var i = 0; i < this.state.favouriteml.length; i++) {
      if (this.state.favouriteml[i].text1 == item.text1) {
        this.state.favouriteml.splice(i, 1);
        break;
      }
    }
    this.forceUpdate();
    console.log(this.state.favouriteml);
  }

  componentDidMount() {
    this.didFocusListener = this.props.navigation.addListener(
      'didFocus',
      () => {

        AsyncStorage.getItem('FavMeals').then((result) => {
          if (result != null) {
            this.setState({
              favouriteml: JSON.parse(result)
            })
          }
          AsyncStorage.removeItem("FavMeals");
        }).catch((response) => {
          //console.log(response)
        })
      }
    )
    this.didFocusListener2 = this.props.navigation.addListener(
      'didFocus',
      () => {
        AsyncStorage.getItem('FavWork').then((result) => {
          if (result != null) {
            this.setState({
              favouritem2: JSON.parse(result)
            })
          }
          AsyncStorage.removeItem("FavWork");
        }).catch((response) => {
          //console.log(response)
        })

      },
    )

  }
  render() {
    //console.log(this.state.favouriteml)
    return (
      <Container>
        <Tabs>
          <Tab heading={<TabHeading><Text>Meals</Text></TabHeading>}>
            <Content padder>
              {
                this.state.favouriteml && this.state.favouriteml.length === 0 ? <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray', marginLeft: 130, marginBottom: "auto", marginTop: "auto" }}>No Meals Found</Text> :
                 this.state.favouriteml.map((item, i) => {
                  return (
                    <TouchableHighlight onPress={() => this.props.navigation.navigate(item.mealLink)} key={i} delayLongPress={1000} onLongPress={() => this.handleLongPress(item , "meal")}>
                      <Card style={{ flex: 0 }}>
                        <View style={styles.container}>
                          <Image style={{ flex: 1, width: '100%', height: 200 }} source={item.uri} />
                        </View>
                        <CardItem>
                          <Body>
                            <Text>{item.text1}</Text>
                            <Text note>{item.text2}</Text>
                            <Text note>{item.text3}</Text>
                            <Text note>{item.text4}</Text>
                            <Text note>{item.text5}</Text>
                            <Text note>{item.text6}</Text>
                            <Text note>{item.text7}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableHighlight>
                  )
                })
              }
            </Content>
          </Tab>

          <Tab heading={<TabHeading><Text>Workout</Text></TabHeading>}>
            <Content padder>
              {
                this.state.favouritem2 && this.state.favouritem2.length === 0 ? <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray', marginLeft: 130, marginBottom: "auto", marginTop: "auto" }}>No Workout Found</Text> :
                  this.state.favouritem2.map((item, i) => {
                    return (
                      <TouchableHighlight onPress={() => this.props.navigation.navigate(item.workoutLink)} key={i}  delayLongPress={1000} onLongPress={() => this.handleLongPress(item , "workout")}>
                        <Card style={{ flex: 0 }}>
                          <View style={{ flex: 1, flexDirection: 'row', marginTop: -40 }}>
                            <Video
                              source={item.uri}
                              resizeMode="contain"
                              style={{ width: "100%", height: 300 }}
                            />
                          </View>
                          <CardItem>
                            <Body>
                              <Text>{item.text1}</Text>
                              <Text note>{item.text2}</Text>
                              <Text note>{item.text3}</Text>
                              <Text note>{item.text4}</Text>
                              <Text note>{item.text5}</Text>
                              <Text note>{item.text6}</Text>
                              <Text note>{item.text7}</Text>
                            </Body>
                          </CardItem>
                        </Card>
                      </TouchableHighlight>
                    )
                  })
              }
            </Content>
          </Tab>
        </Tabs>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    width,
    height,
  },
});
