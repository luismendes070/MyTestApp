import React, {Component} from 'react';
import {Alert,Button, YellowBox, Text, View, ScrollView, ListView} from 'react-native';

//Details Screen
//import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Início Personagens',
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            isLoading: true
        }
    }

    componentDidMount() {

        return fetch("https://swapi.co/api/people")
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    dataSource: responseJson.results,
                    isLoading: false
                })

            }).catch((error) => {
                console.log(error)
            });

    }

    render() {

        const {navigate} = this.props.navigation;

        YellowBox.ignoreWarnings(['Warning: ...']);

        if (this.state.isLoading) {
            return (
                <Text>Carregando Personagens Star Wars...</Text>
            );
        } else {

            function Naves(props){
                return <ListView>Naves2({props.starships})</ListView>;
            }

            function Naves2(props){
                return <View>{props.return}</View>;
            }

            let results = this.state.dataSource.map((val, key) => {
                    return <Text key={key}>
                        {val.name}
                        Naves({val.starships})

                    </Text>
                }
            );

            return (
                    <ScrollView>
                        {results}
                        <Button title="VER NAVES" onPress={() => this.props.navigation.navigate('Details')}/>
                    </ScrollView>
            );




        }
    }
}

class DetailsScreen extends React.Component {

    constructor(props){
        super(props);
        //this.state = props;
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button title="Inicio" onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);
