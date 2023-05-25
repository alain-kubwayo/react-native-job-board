import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Alain', key: '1' },
    { name: 'Tomas', key: '2' },
    { name: 'Carine', key: '3' },
    { name: 'Genevieve', key: '4' },
    { name: 'Genevieve', key: '5' },
    { name: 'Genevieve', key: '6' },
    { name: 'Genevieve', key: '7' },
    { name: 'Henriette', key: '8' },
  ]);

  return (
    <View style={styles.container}>
      {/* <ScrollView>
        { people.map( item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )) }
      </ScrollView> */}

      <FlatList
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
