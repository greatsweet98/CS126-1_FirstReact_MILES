import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const message =
    count > 0
      ? `${name}, you tapped ${count} times!`
      : "Tap the + button to start";

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={{ uri: 'https://i1-c.pinimg.com/1200x/cc/52/e6/cc52e67593f815b1ca4d174e40ac83ef.jpg' }}
          style={styles.photo}
        />
        <TextInput placeholder="Enter your name" onChangeText={setName} style={styles.input}/>
        <Text style={styles.text}>{name === '' ? "Please enter your name" : `Hello, ${name}!`}</Text>
        <Text style={styles.text}>{message}</Text>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={() => setCount(count + 1)} />
          <Button title="-" onPress={() => setCount(count - 1)} />
          <Button title="Reset" onPress={() => setCount(0)} />
        </View>
      </ScrollView>
  );
}

//On 11:32AM on May 14, I changed the name, bio, pfp, and added a short desc
const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20
  },
  photo: {width:120, height:120, borderRadius:60, marginBottom:20},
  text: {fontSize: 16, marginVertical: 5},
  buttonContainer: {marginTop: 10, width: '60%'},
  input: {
    borderWidth: 1,
    width: '80%',
    padding: 10,
    marginBottom: 10,
  }
});
