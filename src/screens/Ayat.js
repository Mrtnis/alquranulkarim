import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, FlatList} from 'react-native';

export class Ayat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberSurah: this.props.route.params.id,
      data: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(
      `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${this.state.numberSurah}.json`,
    )
      .then(response => response.json())
      .then(json => {
        this.setState({data: json});
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{backgroundColor: '#001d3d', flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>{this.state.data.name}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.wrapImage}>
            <ImageBackground
              source={require('../../assets/images/surah2.jpg')}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              style={{flex: 1}}
            />
          </View>
        </View>
        <FlatList
          style={{marginHorizontal: 20, marginTop: 20, marginBottom: 20}}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={this.state.data.verses}
          renderItem={({item, index}) => (
            <View style={styles.wrapItem}>
              <View style={styles.wrapNumber}>
                <Text style={styles.number}>{item.number}</Text>
              </View>
              <Text style={styles.arabic}>{item.text}</Text>
              <Text style={styles.translation}>{item.translation_id}</Text>
            </View>
          )}
          keyExtractor={item => item.number}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
  },
  container: {
    marginHorizontal: 20,
  },
  wrapImage: {
    marginTop: 20,
    height: 270,
    borderRadius: 20,
    elevation: 5,
  },
  wrapItem: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#fff',
  },
  wrapNumber: {
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
    marginTop: 15,
  },
  number: {
    color: '#001d3d',
    fontSize: 12,
    fontWeight: 'bold',
  },
  arabic: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
    marginBottom: 10,
  },
  translation: {
    fontSize: 15,
    marginBottom: 15,
  },
});

export default Ayat;
