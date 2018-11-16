import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import { Container, Content, Left, Body, Text, CardItem, Card, Thumbnail, View } from "native-base";

const { width } = Dimensions.get('window');
const height = width * 0.8

export default class MealScreen extends React.Component {
  static navigationOptions = {
    title: 'Meals',
  };

  render() {

    return (
      <Container>
        <Content padder>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Meal1')}>
            <Card style={{ flex: 0 }}>
              <View style={styles.container}>
                <Image style={{ flex: 1, width: '100%', height: 200 }} source={require('../images/meals/Smoked_Brisket_with_Zesty_Barbecue_Sauce.jpg')} />
              </View>
              <CardItem>
                <Body>
                  <Text>Smoked Brisket with Zesty Barbecue Sauce</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Meal2')}>
            <Card style={{ flex: 0 }}>

              <View style={styles.container}>
                <Image style={{ flex: 1, width: '100%', height: 200 }} source={require('../images/meals/carrot_soup.jpg')} />
              </View>
              <CardItem>
                <Body>
                  <Text>Carrot Soup</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Meal2')}>
          <Card style={{ flex: 0 }}>
            <View style={styles.container}>
              <Image style={{ flex: 1, width: '100%', height: 200 }} source={require('../images/meals/chocolate_banana_protein_smoothie.jpg')} />
            </View>
            <CardItem>
              <Body>
                <Text>Chocolate Banana Protein Smoothie</Text>
                <Text note>Summary: Tasty Chicken rice with curry</Text>
                <Text note>Calories: 190kcal</Text>
                <Text note>Protein: 200</Text>
                <Text note>Carbs: </Text>
                <Text note>Fats: 200</Text>
                <Text note>Sodium: 200</Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableHighlight>

          
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Meal2')}>
          <Card style={{ flex: 0 }}>
            <View style={styles.container}>
              <Image style={{ flex: 1, width: '100%', height: 200 }} source={require('../images/meals/Roast_with_Spicy_Potatoes.jpg')} />
            </View>
            <CardItem>
              <Body>
                <Text>Roast with Spicy Potatoes</Text>
                <Text note>Summary: Tasty Chicken rice with curry</Text>
                <Text note>Calories: 190kcal</Text>
                <Text note>Protein: 200</Text>
                <Text note>Carbs: </Text>
                <Text note>Fats: 200</Text>
                <Text note>Sodium: 200</Text>
              </Body>
            </CardItem>
          </Card>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.navigate('Meal2')}>
          <Card style={{ flex: 0 }}>
            <View style={styles.container}>
              <Image style={{ flex: 1, width: '100%', height: 200 }} source={require('../images/meals/Black_Bean_Chili.jpg')} />
            </View>
            <CardItem>
            <Body>
              <Text>Black Bean Chili</Text>
              <Text note>Summary: Tasty Chicken rice with curry</Text>
              <Text note>Calories: 190kcal</Text>
              <Text note>Protein: 200</Text>
              <Text note>Carbs: </Text>
              <Text note>Fats: 200</Text>
              <Text note>Sodium: 200</Text>
            </Body>
            </CardItem>
          </Card>
          </TouchableHighlight>
        </Content>
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
