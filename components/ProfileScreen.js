import React, {Component} from 'react';
export class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Naves',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Text>Nave A Nave B Nave C {navigate}</Text>
        );
    }
}
