import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
      <View style={styles.screen}>
        <Image
          source={{ uri: '' }}
          style={styles.photo}
        />
        <Text style={styles.name}>JMDM</Text>
        <Text style={styles.bio}>MMA Student - CS126-1</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex:1, alignItems:'center', justifyContent:'center'},
  photo: {width:120, height:120, borderRadius:60},
  name: {fontSize:22. fontWeight:'bold', marginTop:12},
  bio: {fontSize:14, color:'#888'}
});
