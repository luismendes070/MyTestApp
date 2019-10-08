/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {HomeScreen} from './components/HomeScreen';
import {ProfileScreen} from './components/ProfileScreen';

import {RenderNaves} from './components/RenderNaves';
import {NomeNave} from './components/NomeNave';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Naves: {screen: RenderNaves},
  Nome: {screen: NomeNave},
});

const App = createAppContainer(MainNavigator);

export default App;
