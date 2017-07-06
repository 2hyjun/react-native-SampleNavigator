import React from 'react';

import { StackNavigator } from 'react-navigation';
import FirstScreen from './screens/first_screen/index.js';
import SecondScreen from './screens/second_screen/index.js';

const App = StackNavigator({
    first: {
        screen: FirstScreen,
        navigationOptions: {
            title: 'Fucking First Screen',
        },
    },
    second: {
        screen: SecondScreen,
        navigationOptions: {
            title: 'Fucking Second Screen',
        },
    },
});

export default App;


