import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Alain', id: '1' },
    { name: 'Tomas', id: '2' },
    { name: 'Carine', id: '3' },
    { name: 'Genevieve', id: '4' },
    { name: 'Genevieve', id: '5' },
    { name: 'Genevieve', id: '6' },
    { name: 'Genevieve', id: '7' },
    { name: 'Henriette', id: '8' },
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
        keyExtractor={item => item.id}
        numColumns={2}
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
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});
