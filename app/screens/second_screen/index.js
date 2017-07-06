import React, { Component, } from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './styles.js';

export default class SecondScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Fucking Second Screen
                </Text>
            </View>

        );
    };

}
