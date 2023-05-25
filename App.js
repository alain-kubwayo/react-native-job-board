import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('alain');
  const [person,setPerson] = useState({ name: 'tom', age: 40 })

  const pressHandler = () => {
    setName("james");
    setPerson({ name: 'clementine', age: 23 })
  } 

  return (
    <View style={styles.container}>
      <Text>My name: {name}</Text>
      <Text>His name is {person.name} and he is {person.age} years old.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="update state" 
          onPress={pressHandler}
        />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
