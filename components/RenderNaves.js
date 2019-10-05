import React from 'react';
import {Text, View} from 'react-native';

export class RenderNaves extends React.Component{

    constructor(props){
        super(props);

        console.log('constructor RenderNaves');
        console.log(props.starships);

        console.log('rendering array ');
        console.log(props.starships.indexOf());

        for (let i = 0; i < props.starships.length; i++) {
            try{
                console.log(props.starships[i].name);
            }catch (e) {
                console.log('personagem sem naves');
            }
        }
    }


    render(){

        let aux;

        try{
            for (let i = 0; i < this.props.starships.length; i++) {
                aux = this.props.starships[i].name;
            }
        }catch(e){

        }

        /*let a = this.props.starships.shift((key, val) => {
                return(
                    <View key={key}>{val.name}</View>
                );
            }
        );*/

        return(
            <View>
                <Text>Naves</Text>
            </View>
        );
    }

}
