import React, { Component } from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { Container, Content, Card, CardItem, Accordion } from "native-base";
import { Video } from 'expo';

const dataArray = [
    { title: "Summary", content: "This easy carrot soup is a great way to use up a bag of carrots that were forgotten in your produce drawer." },
    { title: "Nutrition Details", content: "176 calories; 8 g fat(3 g sat); 5 g fiber; 22 g carbohydrates; 7 g protein; 39 mcg folate; 8 mg cholesterol; 9 g sugars; 26,874 IU vitamin A; 13 mg vitamin C; 81 mg calcium; 1 mg iron; 486 mg sodium; 795 mg potassium" },
    {
        title: "Recipe", content: "1 tablespoon butter, 1 tablespoon extra-virgin olive oil, 1 medium onion, chopped, 2 cloves garlic, chopped, 1 teaspoon chopped fresh thyme or parsley, " +
            "5 cups chopped carrots, 2 cups water, 4 cups reduced-sodium chicken broth, “no-chicken” broth (see Note) or vegetable broth, ½ cup half-and-half (optional), ½ teaspoon salt, Freshly ground pepper to taste"
    },
    {
        title: "Preparation", content: "1)Heat butter and oil in a Dutch oven over medium heat until the butter melts. Add onion and celery; cook, stirring occasionally, until softened, 4 to 6 minutes. Add garlic and thyme (or parsley); cook, stirring, until fragrant, about 10 seconds.\n\n" +
            "2)Stir in carrots. Add water and broth; bring to a lively simmer over high heat. Reduce heat to maintain a lively simmer and cook until very tender, about 25 minutes.\n\n" +
            "3)Puree the soup in batches in a blender until smooth. (Use caution when pureeing hot liquids.) Stir in half-and-half (if using), salt and pepper.\n\n"
    }
];


const { width } = Dimensions.get('window');
const height = width * 0.8

export default class workout1Screen extends React.Component {
    static navigationOptions = {
        title: 'Abs Workout',
    };
    render() {
        return (
            <Container>
                <Content padder>
                    <Card style={{ flex: 0 }}>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: -40 }}>
                            <Video
                                source={require('../../videos/v1.mp4')}
                                resizeMode="contain"
                                style={{ width: "100%", height: 300 }}
                                shouldPlay
                            />
                        </View>
                        <CardItem>
                            <Accordion
                                style = {{width:"100%"}}
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
