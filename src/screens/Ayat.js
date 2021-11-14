import Icon from 'react-native-vector-icons/FontAwesome5';

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Ayat = ({route}) => {
  const [numberSurah] = useState(route.params.id);
  const [data, setData] = useState({});

  const getData = () => {
    fetch(
      `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${numberSurah}.json`,
    )
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const tesFitur = () => {
    Alert.alert(
      'Info penting',
      'Fitur ini sedang dalam tahap pengembangan, sabar yaaa...',
      [
        {
          text: 'OK',
          onPress: () => {},
        },
      ],
    );
  };

  useEffect(() => {
    getData();
  });

  return (
    <View style={{backgroundColor: '#001d3d', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
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
        data={data.verses}
        renderItem={({item, index}) => (
          <View style={styles.wrapItem}>
            <View style={styles.wrapButton}>
              <View style={styles.wrapNumber}>
                <Text style={styles.number}>{item.number}</Text>
              </View>
              <View style={styles.wrapMurottal}>
                <TouchableOpacity onPress={tesFitur}>
                  <Icon name="share-alt" style={styles.play} />
                </TouchableOpacity>
                <TouchableOpacity onPress={tesFitur}>
                  <Icon name="play" style={styles.play} />
                </TouchableOpacity>
                <TouchableOpacity onPress={tesFitur}>
                  <Icon name="bookmark" style={styles.play} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.arabic}>{item.text}</Text>
            <Text style={styles.translation}>{item.translation_id}</Text>
          </View>
        )}
        keyExtractor={item => item.number}
      />
    </View>
  );
};

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
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 13,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center',
  },
  wrapNumber: {
    backgroundColor: '#fff',
    width: 25,
    height: 25,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapMurottal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  play: {
    fontSize: 13,
    color: '#fff',
  },
  number: {
    color: '#001d3d',
    fontSize: 10,
    fontWeight: 'bold',
  },
  arabic: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'right',
    marginVertical: 13,
    fontFamily: 'nefel',
  },
  translation: {
    fontSize: 15,
    marginBottom: 15,
  },
});

export default Ayat;

//   componentDidMount() {
//     this.getData();
//   }
