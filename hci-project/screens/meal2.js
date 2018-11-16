import React, { Component } from 'react';
import { Platform, StyleSheet, Image, View } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { Container, Content, Button, Body, Text, Badge, Thumbnail, Card , CardItem } from "native-base";

export default class meal2Screen extends React.Component {
    static navigationOptions = {
      title: 'Carrot Soup',
    };
    render() {
        return (
        <Container>
            <Content padder>
            <Card transparent>
            <CardItem>
                <Image source={require('../images/plate.png')} style={{ height: 300, marginLeft: "auto", marginRight: "auto" }} resizeMode="contain" />
            </CardItem>
            </Card>
            </Content>
        </Container>
        )
    }
}