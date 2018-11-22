import MealScreen from '../screens/MealScreen';

const User = {
  Users: [
    {
      id: "1",
      mealLink:"Meal1",
      uri: require('../images/meals/Smoked_Brisket_with_Zesty_Barbecue_Sauce.jpg'),
      text1: "Smoked Brisket with Zesty Barbecue Sauce",
      text2: "Summary: Tasty Chicken rice with curry",
      text3: "Calories: 190kcal",
      text4: "Protein: 200",
      text5: "Carbs: 200",
      text6: "Fats: 200",
      text7: "Sodium: 200"
    },
    {
      id: "2",
      mealLink:"Meal2",
      uri: require('../images/meals/carrot_soup.jpg'),
      text1: "Carrot Soup",
      text2: "Summary: Tasty Chicken rice with curry",
      text3: "Calories: 190kcal",
      text4: "Protein: 200",
      text5: "Carbs: 200",
      text6: "Fats: 200",
      text7: "Sodium: 200"
    },
    {
      id: "3",
      mealLink:"Meal3",
      uri: require('../images/meals/chocolate_banana_protein_smoothie.jpg'),
      text1: "Chocolate Banana Protein Smoothie",
      text2: "Summary: Tasty Chicken rice with curry",
      text3: "Calories: 190kcal",
      text4: "Protein: 200",
      text5: "Carbs: 200",
      text6: "Fats: 200",
      text7: "Sodium: 200"
    },
    {
      id: "4",
      mealLink:"Meal4",
      uri: require('../images/meals/Roast_with_Spicy_Potatoes.jpg'),
      text1: "Roast with Spicy Potatoes",
      text2: "Summary: Tasty Chicken rice with curry",
      text3: "Calories: 190kcal",
      text4: "Protein: 200",
      text5: "Carbs: 200",
      text6: "Fats: 200",
      text7: "Sodium: 200"
    },
    {
      id: "5",
      mealLink:"Meal5",
      uri: require('../images/meals/Black_Bean_Chili.jpg'),
      text1: "Black Bean Chili",
      text2: "Summary: Tasty Chicken rice with curry",
      text3: "Calories: 190kcal",
      text4: "Protein: 200",
      text5: "Carbs: 200",
      text6: "Fats: 200",
      text7: "Sodium: 200"
    },
  ],
  MedicineRoute : function(e){
    MealScreen({meallist:e})
    //console.log(e)
  }
} 

export default {
  User
};
