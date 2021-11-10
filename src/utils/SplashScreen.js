import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {StackActions} from '@react-navigation/routers';

export class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Home'));
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/splash_screen.png')}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});

export default SplashScreen;
