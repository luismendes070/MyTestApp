import React, {Component} from 'react';
import {Alert,Button, YellowBox, Text, View} from 'react-native';

//Details Screen
//import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
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

        YellowBox.ignoreWarnings(['Warning: ...']);

        if (this.state.isLoading) {
            return (
                <Text>Carregando Personagens Star Wars...</Text>
            );
        } else {

            let results = this.state.dataSource.map((val, key) => {
                    return <Text key={key}>
                        {val.name}
                    </Text>
                }
            );

            return (
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Personagens Star Wars</Text>
                    <View>{results}</View>
                    <Button title="Ver naves" onPress={() => Alert.alert('Button pressed')}/>
                </View>
            );

        }

        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Ir para naves do personagem"
                onPress={
                //    () => navigate('Profile', {name: 'Jane'})
                    () => this.props.navigation.navigate('Details')
                }
            />
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
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
