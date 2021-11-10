import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const windowHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#001d3d" />
        <View style={{marginVertical: 50}}>
          <Text style={styles.title}>Quran App</Text>
          <Text style={styles.subtitle}>
            Learn Quran and {'\n'} Recite once everyday
          </Text>
          <View style={styles.wrapImage}>
            <Image
              source={require('../../assets/images/home.jpg')}
              style={{width: 300, height: windowHeight * 0.6, borderRadius: 20}}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Surah')}>
              <Text style={styles.textButton}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#001d3d',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  wrapImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    position: 'relative',
    elevation: 5,
  },
  button: {
    backgroundColor: '#f2cc8f',
    elevation: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: -20,
  },
  textButton: {
    color: '#001d3d',
    fontWeight: 'bold',
  },
});

export default Home;
