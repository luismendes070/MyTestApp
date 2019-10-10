import React from 'react';
export class ListaPersonagens extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;//function
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
