import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Container, Content, Card, CardItem, Accordion } from "native-base";

const dataArray = [
    { title: "Summary", content: "Moist and tender, this beef brisket recipe gets a triple dose of flavor from a wine mop sauce, a black pepper rub and a tomatoey barbecue sauce." },
    { title: "Nutrition Details", content: "232 calories; 10 g fat(3 g sat); 1 g fiber; 8 g carbohydrates; 25 g protein; 73 mg cholesterol; 535 mg sodium;" },
    { title: "Recipe", content: "8 to 10 mesquite or hickory wood chunks, 1 (3 to 3½ pound) fresh beef brisket, ¼ cup dry red wine or reduced-sodium beef broth, 4 teaspoons Worcestershire sauce, 1 tablespoon cooking oil, 1 tablespoon red wine vinegar or cider vinegar, 1 clove garlic, minced ( ½ teaspoon minced), ½ teaspoon coriander seeds, crushed, ½ teaspoon hot-style mustard" },
    {
        title: "Preparation", content: "1)Prepare Smoked Briskey: At least 1 hour before smoke cooking, soak wood chunks in enough water to cover. Drain before using.\n\n" +
            "2)Trim most of the visible fat from meat. For mop sauce: In a small bowl, combine wine, Worcestershire sauce, oil, vinegar, garlic, coriander seeds, mustard and cayenne pepper. Set aside.\n\n" +
            "3)In a small bowl, combine seasoned salt, paprika and black pepper. Sprinkle mixture evenly over meat; rub in with your fingers. \n\n" +
            "4)In a smoker, arrange preheated coals, wood chunks and water pan according to manufacturers directions. Pour water into pan. Place meat on grill rack over water pan. Cover and smoke for 5 to 6 hours or until meat is tender, brushing once or twice with mop sauce during last 1 hour of smoking. Add additional coals, wood chunks and water as needed to maintain temperature and smoke. Discard any remaining mop sauce.\n\n" +
            "5)Prepare Zesty Barbecue Sauce: Coat an unheated small saucepan with nonstick cooking spray. Preheat over medium heat. Add green sweet pepper, onion and garlic; cook and stir about 5 minutes or until tender. Stir in ketchup, tomato, steak sauce, Worcestershire sauce, brown sugar, cinnamon, nutmeg, cloves, ginger and black pepper. Bring to boiling; reduce heat. Cover and simmer for 5 minutes. Serve warm or cooled to room temperature.\n\n" +
            "6)To serve, thinly slice meat across the grain. Serve meat with barbecue sauce."
    }
];


const { width } = Dimensions.get('window');
const height = width * 0.8


class Carousel extends Component {
    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        style={{ width: width }}
                    >
                        {images.map(image => (
                            <Image key={image.source} style={styles.image} source={image.source} />
                        ))}
                    </ScrollView>
                </View>
            );
        }
        console.log('Please provide images');
        return null;
    }
}

export default class meal1Screen extends React.Component {
    static navigationOptions = {
        title: 'Smoked Brisket with Zesty Barbecue Sauce.jpg',
    };
    render() {
        const images = [
            {
                source: require('../images/meals/Smoked_Brisket_with_Zesty_Barbecue_Sauce.jpg'),
            },
            {
                source: require('../images/plate.png'),
            }


        ];
        return (
            <Container>
                <Content>
                    <Card transparent>
                        <View style={styles.container}>
                            <Carousel images={images} />
                        </View>
                        <CardItem>
                            <Accordion
                                dataArray={dataArray}
                            />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
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
