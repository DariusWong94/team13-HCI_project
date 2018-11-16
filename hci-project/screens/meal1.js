import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Container, Content, Button, Body, Text, Badge, Thumbnail, Card, CardItem, Accordion } from "native-base";
import Carousel from 'react-native-carousel-view';

const dataArray = [
    { title: "Summary", content: "Lorem ipsum dolor sit amet" },
    { title: "Nutrition Details", content: "Lorem ipsum dolor sit amet" },
    { title: "Recipe", content: "Lorem ipsum dolor sit amet \n asdahksjdahsdkjahs ajskdh asjkd \n haskjdh asdjh asjdh askj \n haskjd haksd haskjd h" }
];


export default class meal1Screen extends React.Component {
    static navigationOptions = {
        title: 'Smoked Brisket with Zesty Barbecue Sauce',
    };

    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }
    onValueChange2() {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Card transparent>
                        <CardItem>
                            <Carousel
                                width={375}
                                height={300}
                                delay={2000}
                                indicatorAtBottom={false}
                                indicatorSize={20}
                                indicatorText="✽"
                                indicatorColor="red"
                            >
                                <View style={styles.contentContainer}>
                                    <Image source={require('../images/plate.png')} style={{ height: 300, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />
                                </View>
                                <View style={styles.contentContainer}>
                                <Image source={require('../images/meals/Smoked_Brisket_with_Zesty_Barbecue_Sauce.jpg')} style={{ height: 300, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />
                                </View>
                            </Carousel>
                            
                        </CardItem>
                        <CardItem>
                            <Accordion
                                dataArray={dataArray}
                                iconStyle={{ color: "green" }}
                                expandedIconStyle={{ color: "red" }}
                            />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}