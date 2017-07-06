import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import styles from './styles.js';

export default class FirstScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            shortPressing: false,
            LongPressing: false,
        }
    }
    _onPressIn() {
        this.setState({
            shortPressing:true,
        })
    }

    _onPressOut() {
        this.setState({
            shortPressing:false,
            LongPressing:false,
        })
    }

    _onLongPressing() {
        this.setState({
            LongPressing: true,
        })
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.container}>
              <TouchableHighlight
                  style={this.state.LongPressing? styles.Bigtouch:styles.touch}
                  onPressIn={() => this._onPressIn()}
                  onPressOut={() => this._onPressOut()}
                  onLongPress={() => navigate('second')}
                  underlayColor={'red'}>
                  <Text style={styles.welcome}>
                      {this.state.shortPressing? 'EEK!' : 'Press Me!!'}
                  </Text>

            </TouchableHighlight>
          </View>

        );
    };

}



