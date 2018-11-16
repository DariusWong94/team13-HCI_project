import React from 'react';
import { ScrollView, StyleSheet ,Alert} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Container, Content, Left, Body, Text, CardItem, Card, Thumbnail } from "native-base";
import { createStackNavigator } from 'react-navigation';
import AppNavigator from "../navigation/AppNavigator"


export default class MealScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal',
  };
  
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={{ flex: 0 }}>
            <CardItem button onPress={()=>this.props.navigation.navigate('Meal1')}>
              <Left>
                <Thumbnail square source={require('../images/meals/Smoked_Brisket_with_Zesty_Barbecue_Sauce.jpg')} />
                <Body>
                  <Text>Smoked Brisket with Zesty Barbecue Sauce</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem button onPress={()=>this.props.navigation.navigate('Meal2')}>
              <Left>
                <Thumbnail square source={require('../images/meals/carrot_soup.jpg')} />
                <Body>
                  <Text>Carrot Soup</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail square source={require('../images/meals/chocolate_banana_protein_smoothie.jpg')} />
                <Body>
                  <Text>Chocolate Banana Protein Smoothie</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail square source={require('../images/meals/Roast_with_Spicy_Potatoes.jpg')} />
                <Body>
                  <Text>Roast with Spicy Potatoes</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail square source={require('../images/meals/Black_Bean_Chili.jpg')} />
                <Body>
                  <Text>Black Bean Chili</Text>
                  <Text note>Summary: Tasty Chicken rice with curry</Text>
                  <Text note>Calories: 190kcal</Text>
                  <Text note>Protein: 200</Text>
                  <Text note>Carbs: </Text>
                  <Text note>Fats: 200</Text>
                  <Text note>Sodium: 200</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
