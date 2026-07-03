import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

import Logo from './assets/Productos/a.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Producto1</Text>

      <Image
        source={Logo}
        style={styles.ImgProducto}
      ></Image>

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
    elevation:10,
  },
  ImgProducto:{
    width:250,
    height:250,
    resizeMode:'contain',
  },
  Titulo:{
    textAlign:'center',
    fontSize:30,
    margin:10,
    color:'#304080',
  },
});
