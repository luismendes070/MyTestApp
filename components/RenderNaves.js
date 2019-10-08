import React from 'react';
import {ScrollView, View} from 'react-native';
import {NomeNave} from "./NomeNave";

export class RenderNaves extends React.Component {

    constructor(props) {
        super(props);

        console.log('constructor RenderNaves');
        console.log(this.props.starships);

    }

    render() {

        let Naves;

        if(this.props.starships !== undefined){
            Naves = this.props.starships.map(
                (key, val) => {

                    if(val === undefined){
                        console.log('val undefined');
                        return (
                            <View key={key}>
                            </View>
                        );
                    }else{
                        console.log('val url 1 personagem');
                        console.log(val);
                        return (
                            <View key={key}>
                                <NomeNave urlNaves={val}/>
                            </View>
                        );
                    }
                }
            );
        }

        return (
            <ScrollView>
                {Naves}
            </ScrollView>
        );
    }
}
