/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Guess from './Guess';
import End from './End';
import BadEnd from './BadEnd';


const MyApp = createStackNavigator({
    Guess: {
        screen: Guess,
        navigationOptions: {
            title: 'GuessNumber',
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { color: 'white', textAlign: 'center' },
        }
    },
    End: {
        screen: End,
        navigationOptions: {
            header: null,
            title: 'GuessNumber',
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { color: 'white', textAlign: 'center' },
        }
    },
    BadEnd: {
        screen: BadEnd,
        navigationOptions: {
            header: null,
            title: 'GuessNumber',
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { color: 'white', textAlign: 'center' }
        }
    }
})
//#7d87f1

export default createAppContainer(MyApp);