import { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
      <View style={styles.screen}>

        <Image
          source={{ uri: 'https://i1-c.pinimg.com/1200x/cc/52/e6/cc52e67593f815b1ca4d174e40ac83ef.jpg' }}
          style={styles.photo}
        />

        <TextInput
          placeholder="Type your name...."
          onChangeText={setName}
          style={{
            height:40, margin:12, borderWidth:1, padding:10, width:200,
          }}/>

        <Text style={styles.name}>
          Hello, {name}!
        </Text>
      </View>
  );
}

//On 6:56PM on May 14, I changed the whole screen into a simple interactive profile screen.
const styles = StyleSheet.create({
  screen: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  photo: {width:120, height:120, borderRadius:60,},
  name: {fontSize: 22, fontWeight: 'bold', marginTop:12,},
});
