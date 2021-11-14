import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Surah = ({navigation}) => {
  const [allData, setAllData] = useState([]);

  const getData = () => {
    fetch(
      'https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json',
    )
      .then(response => response.json())
      .then(json => {
        setAllData(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <View style={{backgroundColor: '#001d3d', flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.title}>Quran App</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.salam}>Assalamu'alaikum</Text>
        <Text style={styles.name}>Martunis</Text>
        <View style={styles.wrapImage}>
          <ImageBackground
            source={require('../../assets/images/surah.jpg')}
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
        data={allData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Ayat', {
                id: item.number_of_surah,
              })
            }>
            <View style={styles.cardItem}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.wrapNumber}>
                  <Text style={styles.number}>{item.number_of_surah}</Text>
                </View>
                <View style={styles.wrapText}>
                  <Text style={styles.nameItem}>{item.name}</Text>
                  <Text style={styles.info}>
                    {item.type} | {item.number_of_ayah} Ayat
                  </Text>
                </View>
              </View>
              <Text style={styles.arabic}>{item.name_translations.ar}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.number_of_surah}
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
  salam: {
    fontSize: 15,
  },
  name: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  wrapImage: {
    marginTop: 20,
    height: 130,
    borderRadius: 20,
    elevation: 5,
  },
  cardItem: {
    marginBottom: 15,
    height: 100,
    borderBottomWidth: 0.2,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapNumber: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  number: {
    color: '#001d3d',
    fontSize: 15,
    fontWeight: 'bold',
  },
  wrapText: {
    flexDirection: 'column',
  },
  nameItem: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 12,
  },
  arabic: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Surah;
