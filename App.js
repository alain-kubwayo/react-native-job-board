import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem <Text>test</Text> ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse dolores provident maiores inventore et dicta saepe perferendis tempora libero odit voluptas suscipit hic laborum earum soluta iure, dolore temporibus!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse dolores provident maiores inventore et dicta saepe perferendis tempora libero odit voluptas suscipit hic laborum earum soluta iure, dolore temporibus!</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse dolores provident maiores inventore et dicta saepe perferendis tempora libero odit voluptas suscipit hic laborum earum soluta iure, dolore temporibus!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  }
});
