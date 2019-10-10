//import React from 'react';
//import {ScrollView, View} from 'react-native';
import * as React from 'react';
import {YellowBox, ScrollView, Button, View, Text} from 'react-native';
import {NomeNave} from "./NomeNave";

//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

export class RenderNaves extends React.Component {

    constructor(props) {
        super(props);

        console.log('deletar constructor RenderNaves');
        console.log(this.props.starships);

    }

    static navigationOptions = {
        title: 'Naves',
    };

    render() {

        YellowBox.ignoreWarnings(['Warning: ...']);

        const {navigate} = this.props.navigation;//function

        let Naves;

        if(this.props.starships !== undefined && this.props.starships.length > 0){
            Naves = this.props.starships.map(
                (val, key) => {
                        console.log('val url 1 personagem');
                        console.log(val);
                        return (
                            <View key={key}>
                                <NomeNave urlNaves={val}/>
                            </View>
                        );
                }
            );
        }

        return (
            <ScrollView>
                <Text>Lista de Naves do personagem </Text>
                <View>{Naves}</View>
                <Button title="Go to Nome" onPress={
                    () => navigate('Nome', {props: Naves})
                }/>
            </ScrollView>
        );
    }
}
