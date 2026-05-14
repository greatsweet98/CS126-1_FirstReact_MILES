import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function App() {
  return (
      <View style={styles.screen}>
        <Image
          source={{ uri: 'https://i1-c.pinimg.com/1200x/cc/52/e6/cc52e67593f815b1ca4d174e40ac83ef.jpg' }}
          style={styles.photo}
        />
        <Text style={styles.name}>Jacob Matthew D. Miles</Text>
        <Text style={styles.bio}>3Y MMA Student - CS126-1</Text>
        <Text style={styles.description}>Cosplayer, artist, writer, & advocate</Text>
      </View>
  );
}

//On 11:32AM on May 14, I changed the name, bio, pfp, and added a short desc
const styles = StyleSheet.create({
  screen: {flex:1, alignItems:'center', justifyContent:'center'},
  photo: {width:120, height:120, borderRadius:60},
  name: {fontSize:30, fontWeight:'bold', marginTop:12, color:'#d7c903'},
  bio: {fontSize:18, color:'#ff8400'},
  description: {fontSize:13, color: '#9f9f9f'}
});
