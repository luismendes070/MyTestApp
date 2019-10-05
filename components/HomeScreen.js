import React from 'react';
import {YellowBox, Text, View, ScrollView} from 'react-native';
import {RenderNaves} from "./RenderNaves";

export class HomeScreen extends React.Component {

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

                        return (
                            <View key={key}>
                                <Text key={key}>Personagem {val.name}</Text>
                                <View><RenderNaves starships={val.starships}/></View>
                            </View>
                        );
                    }
                );

                return (<ScrollView>{results}</ScrollView>);

        }
    }
}


