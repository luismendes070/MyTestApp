import React from 'react';
import {YellowBox, Text, View, ScrollView, StyleSheet, Button} from 'react-native';
//import {RenderNaves} from "./RenderNaves";

//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

export class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: null,
            isLoading: true
        }
    }

    static navigationOptions = {
        title: 'Início Personagens',
    };

    componentDidMount() {

        //let n = "https://swapi.co/api/starships/";

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

        const {navigate} = this.props.navigation;

        if (this.state.isLoading) {
            return (
                <Text>Carregando Personagens Star Wars...</Text>
            );
        } else {


            /*const people = {
                "count": 87,
                "next": "https://swapi.co/api/people/?page=2",
                "previous": null,
                "results": [
                    {
                        "name": "Luke Skywalker",
                        "height": "172",
                        "mass": "77",
                        "hair_color": "blond",
                        "skin_color": "fair",
                        "eye_color": "blue",
                        "birth_year": "19BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/",
                            "https://swapi.co/api/films/7/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [
                            "https://swapi.co/api/vehicles/14/",
                            "https://swapi.co/api/vehicles/30/"
                        ],
                        "starships": [
                            "https://swapi.co/api/starships/12/",
                            "https://swapi.co/api/starships/22/"
                        ],
                        "created": "2014-12-09T13:50:51.644000Z",
                        "edited": "2014-12-20T21:17:56.891000Z",
                        "url": "https://swapi.co/api/people/1/"
                    },
                    {
                        "name": "C-3PO",
                        "height": "167",
                        "mass": "75",
                        "hair_color": "n/a",
                        "skin_color": "gold",
                        "eye_color": "yellow",
                        "birth_year": "112BBY",
                        "gender": "n/a",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/4/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/2/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:10:51.357000Z",
                        "edited": "2014-12-20T21:17:50.309000Z",
                        "url": "https://swapi.co/api/people/2/"
                    },
                    {
                        "name": "R2-D2",
                        "height": "96",
                        "mass": "32",
                        "hair_color": "n/a",
                        "skin_color": "white, blue",
                        "eye_color": "red",
                        "birth_year": "33BBY",
                        "gender": "n/a",
                        "homeworld": "https://swapi.co/api/planets/8/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/4/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/",
                            "https://swapi.co/api/films/7/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/2/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:11:50.376000Z",
                        "edited": "2014-12-20T21:17:50.311000Z",
                        "url": "https://swapi.co/api/people/3/"
                    },
                    {
                        "name": "Darth Vader",
                        "height": "202",
                        "mass": "136",
                        "hair_color": "none",
                        "skin_color": "white",
                        "eye_color": "yellow",
                        "birth_year": "41.9BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [],
                        "starships": [
                            "https://swapi.co/api/starships/13/"
                        ],
                        "created": "2014-12-10T15:18:20.704000Z",
                        "edited": "2014-12-20T21:17:50.313000Z",
                        "url": "https://swapi.co/api/people/4/"
                    },
                    {
                        "name": "Leia Organa",
                        "height": "150",
                        "mass": "49",
                        "hair_color": "brown",
                        "skin_color": "light",
                        "eye_color": "brown",
                        "birth_year": "19BBY",
                        "gender": "female",
                        "homeworld": "https://swapi.co/api/planets/2/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/",
                            "https://swapi.co/api/films/7/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [
                            "https://swapi.co/api/vehicles/30/"
                        ],
                        "starships": [],
                        "created": "2014-12-10T15:20:09.791000Z",
                        "edited": "2014-12-20T21:17:50.315000Z",
                        "url": "https://swapi.co/api/people/5/"
                    },
                    {
                        "name": "Owen Lars",
                        "height": "178",
                        "mass": "120",
                        "hair_color": "brown, grey",
                        "skin_color": "light",
                        "eye_color": "blue",
                        "birth_year": "52BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:52:14.024000Z",
                        "edited": "2014-12-20T21:17:50.317000Z",
                        "url": "https://swapi.co/api/people/6/"
                    },
                    {
                        "name": "Beru Whitesun lars",
                        "height": "165",
                        "mass": "75",
                        "hair_color": "brown",
                        "skin_color": "light",
                        "eye_color": "blue",
                        "birth_year": "47BBY",
                        "gender": "female",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:53:41.121000Z",
                        "edited": "2014-12-20T21:17:50.319000Z",
                        "url": "https://swapi.co/api/people/7/"
                    },
                    {
                        "name": "R5-D4",
                        "height": "97",
                        "mass": "32",
                        "hair_color": "n/a",
                        "skin_color": "white, red",
                        "eye_color": "red",
                        "birth_year": "unknown",
                        "gender": "n/a",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/2/"
                        ],
                        "vehicles": [],
                        "starships": [],
                        "created": "2014-12-10T15:57:50.959000Z",
                        "edited": "2014-12-20T21:17:50.321000Z",
                        "url": "https://swapi.co/api/people/8/"
                    },
                    {
                        "name": "Biggs Darklighter",
                        "height": "183",
                        "mass": "84",
                        "hair_color": "black",
                        "skin_color": "light",
                        "eye_color": "brown",
                        "birth_year": "24BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.co/api/planets/1/",
                        "films": [
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [],
                        "starships": [
                            "https://swapi.co/api/starships/12/"
                        ],
                        "created": "2014-12-10T15:59:50.509000Z",
                        "edited": "2014-12-20T21:17:50.323000Z",
                        "url": "https://swapi.co/api/people/9/"
                    },
                    {
                        "name": "Obi-Wan Kenobi",
                        "height": "182",
                        "mass": "77",
                        "hair_color": "auburn, white",
                        "skin_color": "fair",
                        "eye_color": "blue-gray",
                        "birth_year": "57BBY",
                        "gender": "male",
                        "homeworld": "https://swapi.co/api/planets/20/",
                        "films": [
                            "https://swapi.co/api/films/2/",
                            "https://swapi.co/api/films/5/",
                            "https://swapi.co/api/films/4/",
                            "https://swapi.co/api/films/6/",
                            "https://swapi.co/api/films/3/",
                            "https://swapi.co/api/films/1/"
                        ],
                        "species": [
                            "https://swapi.co/api/species/1/"
                        ],
                        "vehicles": [
                            "https://swapi.co/api/vehicles/38/"
                        ],
                        "starships": [
                            "https://swapi.co/api/starships/48/",
                            "https://swapi.co/api/starships/59/",
                            "https://swapi.co/api/starships/64/",
                            "https://swapi.co/api/starships/65/",
                            "https://swapi.co/api/starships/74/"
                        ],
                        "created": "2014-12-10T16:16:29.192000Z",
                        "edited": "2014-12-20T21:17:50.325000Z",
                        "url": "https://swapi.co/api/people/10/"
                    }
                ]
            };*/


            let results = this.state.dataSource.map((val, key) => {

                    let n = <Text>Personagem não possui nenhuma nave.</Text>;

                    if (val.starships.length > 0) {
                        console.log('HomeScreenjs chamando results starships length');
                        console.log(val.starships.length);
                        n = <View>
                            <Text>{val.starships.length}</Text>
                            <Text>Pressione Ir até Naves para ver naves.</Text>
                            <Button title="Ir até Naves" onPress={
                                () => navigate('Nome', {url: val.starships})
                            }/>
                        </View>;
                        //n = <RenderNaves starships={val.starships} personagem={key}/>;
                    }

                    return (
                        <View key={key}>
                            <Text style={styles.yellowTitle}>Personagem</Text>
                            <Text style={styles.yellowTitle}>{val.name}</Text>
                            <Text style={styles.blackSubTitle}>Número de Naves</Text>
                            {n}
                        </View>
                    );
                }
            );

            return (<ScrollView>{results}</ScrollView>);

        }
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    yellowTitle: {
        //color: 'yellow',
        fontWeight: 'bold',
        fontSize: 30,
    },
    blackSubTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    }
});



